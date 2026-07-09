from database import connection

if connection.is_connected():
    print("database connected successfully")
else:
    print("database connection failed")