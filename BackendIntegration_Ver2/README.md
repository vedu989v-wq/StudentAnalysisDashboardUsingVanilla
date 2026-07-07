# 🎓 Student Analytics Dashboard (Version 2)

A full-stack Student Analytics Dashboard built using **Vanilla JavaScript, Node.js, Express, PostgreSQL, and Chart.js**.

Unlike Version 1, which loaded student records from a local JSON file, Version 2 introduces a complete backend architecture with a PostgreSQL database, REST APIs, and deployment on Vercel.

---

## 🚀 Live Demo

**Frontend:** https://student-analysis-dashboard-using-va.vercel.app/

**Backend API:** https://studentanalysisbackend.vercel.app/

---

# 📌 Overview

This project visualizes academic data for thousands of students through an interactive dashboard.

The frontend communicates with an Express backend, which fetches student records from PostgreSQL using SQL queries. The data is then processed on the client side to generate statistics, charts, searching, sorting, and filtering.

This project helped me understand how frontend applications communicate with databases through APIs instead of directly accessing the database.

---

# ✨ Features

- View student records
- Search students by name
- Sort students
- Filter students
- Dashboard statistics
  - Total Students
  - Average CGPA
  - Highest CGPA
  - Lowest CGPA
- Interactive charts using Chart.js
- Responsive UI
- PostgreSQL database integration

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js

## Backend

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- cors

## Data Generation

- Python
- Faker

## Deployment

- Frontend → Vercel
- Backend → Vercel

---

# 🏗 Architecture

```
                Browser
                   │
                   │ Fetch API
                   ▼
              Express API
                   │
                   ▼
             PostgreSQL
                   ▲
                   │
         Seed Script (Node.js)
                   ▲
                   │
     CSV generated using Python Faker
```

---

# 📊 Dashboard Statistics

The dashboard computes statistics dynamically from the fetched data.

Examples include:

- Total Students
- Average CGPA
- Highest CGPA
- Lowest CGPA

---

# 📈 Visualizations

Charts are created using Chart.js.

Examples include:

- Students by Department

---

# 🗄 Database

Student records are stored in PostgreSQL.

The backend exposes endpoints that execute SQL queries and return JSON responses.

Example:

```
GET/
```

Response:

```json
[
  {
    "student_id": 1,
    "name": "John Doe",
    "department": "CSE",
    "cgpa": 8.72
  }
]
```

---

# 🌱 Data Generation

Instead of manually creating records, the dataset was generated using **Python Faker**.

Generated attributes include:

- Student ID
- Name
- Age
- Gender
- Department
- Semester
- Attendance
- CGPA

The generated data was exported to CSV and inserted into PostgreSQL using a Node.js seed script with the **pg** package.

---

# ⚙ Installation

## Clone repository

```bash
git clone https://github.com/yourusername/student-analytics-dashboard.git
```

---

## Backend

```bash
cd backend

npm install

npm start
```

---

## Frontend

Simply open `index.html`

or run using Live Server.

---

# Environment Variables

Create a `.env` file inside backend.

```env
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

---

# 📚 What I Learned

This project helped me understand:

- Building REST APIs with Express
- Connecting Node.js with PostgreSQL
- SQL querying from JavaScript
- Database seeding
- Environment variables using dotenv
- CORS configuration
- Deploying frontend and backend separately on Vercel
- Client-server architecture
- Dynamic dashboard calculations
- Data visualization using Chart.js

---

# 🔄 Evolution

### Version 1

- Static JSON file
- Vanilla JavaScript
- No backend
- Local data

### Version 2

- Express backend
- PostgreSQL database
- REST APIs
- Dynamic data
- Vercel deployment
- Better architecture
- Scalable foundation

---

# 🚀 Future Improvements

###Version 3
-Frontend will be switched to react

###Further Imporvements
- Authentication
- Pagination
- Advanced filters
- Export to CSV
- Role-based access
- Student profile page
- Admin dashboard
- Docker support
- Unit testing

---

# 👨‍💻 Author

**Vedansh Sharma**

If you liked this project, feel free to ⭐ the repository.
