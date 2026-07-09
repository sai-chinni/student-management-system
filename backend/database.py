import mysql.connector
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Saikrishna#31",
    database=" students"
)
cursor = connection.cursor(dictionary=True)
