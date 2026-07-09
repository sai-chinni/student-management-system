
from pydantic import BaseModel
from fastapi import FastAPI
from database import connection ,cursor
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Students(BaseModel):
    name:str
    email:str
    age:int
    course:str     

@app.get("/")
def home():
    return {
        "message": "Welcome to Student Management API"
    }



@app.get("/students")
def get_students():
    query = "SELECT * FROM students"

    cursor.execute(query)

    data = cursor.fetchall()

    return data



@app.get("/students/{student_id}")
def get_student(student_id: int):

    query = "SELECT * FROM students WHERE id=%s"

    cursor.execute(query, (student_id,))

    student = cursor.fetchone()

    if student:
        return student

    return {"message": "Student not found"}



@app.put("/students/{student_id}")
def update_student(student_id: int, student: Students):

    try:
        query = """
        UPDATE students
        SET name=%s,
            email=%s,
            age=%s,
            course=%s
        WHERE id=%s
        """

        values = (
            student.name,
            student.email,
            student.age,
            student.course,
            student_id
        )

        cursor.execute(query, values)

        connection.commit()

        return {
            "message": "Student updated successfully"
        }

    except Exception as e:
        return {
            "error": str(e)
        }

@app.delete("/students/{student_id}")
def delete_student(student_id: int):

    try:
        query = "DELETE FROM students WHERE id=%s"

        cursor.execute(query, (student_id,))

        connection.commit()

        return {
            "message": "Student deleted successfully"
        }

    except Exception as e:
        return {
            "error": str(e)
        }

@app.post("/students")
def add_student(student: Students):

    try:
        query = """
        INSERT INTO students(name, email, age, course)
        VALUES (%s, %s, %s, %s)
        """

        values = (
            student.name,
            student.email,
            student.age,
            student.course
        )

        cursor.execute(query, values)

        connection.commit()

        return {
            "message": "Student added successfully"
        }

    except Exception as e:
        return {
            "error": str(e)
        }