import os
import sqlite3
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

print("HOST:", os.getenv("MYSQLHOST"))
print("PORT:", os.getenv("MYSQLPORT"))
print("USER:", os.getenv("MYSQLUSER"))
print("DATABASE:", os.getenv("MYSQLDATABASE"))

class SQLiteCursorWrapper:
    def __init__(self, conn):
        self.cursor = conn.cursor()
        self.last_result = []
        self.index = 0

    def execute(self, query, params=None):
        # Convert MySQL %s placeholder to SQLite ? placeholder
        query = query.replace("%s", "?")
        if params:
            self.cursor.execute(query, params)
        else:
            self.cursor.execute(query)
        
        description = self.cursor.description
        if description:
            cols = [col[0] for col in description]
            rows = self.cursor.fetchall()
            self.last_result = [dict(zip(cols, row)) for row in rows]
        else:
            self.last_result = []
        self.index = 0

    def fetchall(self):
        return self.last_result

    def fetchone(self):
        if self.index < len(self.last_result):
            res = self.last_result[self.index]
            self.index += 1
            return res
        return None

class SQLiteConnectionWrapper:
    def __init__(self, db_path="local_database.db"):
        self.conn = sqlite3.connect(db_path, check_same_thread=False)
        self.conn.row_factory = sqlite3.Row
        self._create_table_if_not_exists()

    def _create_table_if_not_exists(self):
        cursor = self.conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                age INTEGER NOT NULL,
                course TEXT NOT NULL
            )
        """)
        self.conn.commit()

    def cursor(self, dictionary=True):
        return SQLiteCursorWrapper(self.conn)

    def commit(self):
        self.conn.commit()

    def is_connected(self):
        return True

# Attempt to connect to MySQL; fallback to SQLite on failure
try:
    connection = mysql.connector.connect(
        host=os.getenv("MYSQLHOST"),
        port=int(os.getenv("MYSQLPORT")) if os.getenv("MYSQLPORT") else 3306,
        user=os.getenv("MYSQLUSER"),
        password=os.getenv("MYSQLPASSWORD"),
        database=os.getenv("MYSQLDATABASE")
    )
    cursor = connection.cursor(dictionary=True)
    print("Database: Connected to MySQL database successfully.")
except Exception as e:
    print(f"Warning: MySQL connection failed ({e}). Falling back to local SQLite database.")
    connection = SQLiteConnectionWrapper()
    cursor = connection.cursor(dictionary=True)