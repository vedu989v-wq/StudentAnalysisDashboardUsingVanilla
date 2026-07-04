import json
import random
from faker import Faker

fake = Faker("en_IN")

departments = ["CSE", "IT", "ECE", "ME", "CE"]
years = [1, 2, 3, 4]

students = []
for i in range(1, 101):
    
    name=fake.name()
    username=name.lower().replace(" ", ".").replace('.', '')

    student = {
        "studentId": f"ST{i:03d}",
        "name": name,
        "email":f'{username}{random.randint(1,999)}@gmail.com',
        "phone": fake.phone_number(),
        "department": random.choice(departments),
        "year": random.choice(years),
        "cgpa": round(random.uniform(5.0, 10.0), 2),
        "attendance": random.randint(60, 100)
    }

    students.append(student)

with open('students.json', 'w') as f:
    json.dump(students, f, indent=4)