import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv(override=True)

print("HOST:", os.getenv("MYSQLHOST"))
print("PORT:", os.getenv("MYSQLPORT"))
print("USER:", os.getenv("MYSQLUSER"))
print("DATABASE:", os.getenv("MYSQLDATABASE"))

connection = mysql.connector.connect(
    host=os.getenv("MYSQLHOST"),
    port=int(os.getenv("MYSQLPORT")) if os.getenv("MYSQLPORT") else 3306,
    user=os.getenv("MYSQLUSER"),
    password=os.getenv("MYSQLPASSWORD"),
    database=os.getenv("MYSQLDATABASE")
)

cursor = connection.cursor(dictionary=True)