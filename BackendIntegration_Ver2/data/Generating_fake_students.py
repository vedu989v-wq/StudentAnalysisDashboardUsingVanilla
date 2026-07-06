from faker import Faker
import csv
import random

fake=Faker('en-IN')

departments=[
    "CSE",
    "IT",
    "ME",
    "ECE",
    "CE",
]

years=[1,2,3,4]

with open("BackendIntegration_Ver2/data/students.csv", "w", newline="") as file:
    writer=csv.writer(file)

    #main header
    writer.writerow([
        "studentID",
        "name",
        "email",
        "phone",
        "department",
        "year", 
        "cgpa", 
        "attendance"
    ])

    #writing a file of 100 entries

    for i in range(1, 101):
        name=fake.name()
        username=name.lower().replace(" ", ".").replace('.', '')
        
        writer.writerow([
            f"ST{i:03d}",
            name,
            f'{username}{random.randint(1,999)}@gmail.com',
            fake.phone_number(),
            random.choice(departments),
            random.choice(years),
            round(random.uniform(5.0, 10.0), 2),
            random.randint(60, 100)
     ])

  
   