# 📊 Student Analytics Dashboard (Vanilla JavaScript)

A responsive Student Analytics Dashboard built using **HTML**, **CSS**, and **Vanilla JavaScript**. The project demonstrates dynamic data rendering, searching, filtering, sorting, and basic analytics without using any frontend frameworks.

> This project is the first phase of a larger Student Analytics Dashboard that will later be rebuilt using React, Express.js, and PostgreSQL.

---

## ✨ Features

- 📄 Load student data from a local JSON file
- 🔍 Search students by name
- 🏫 Filter students by department
- ↕️ Sort students by CGPA
- 📈 Display analytics cards
  - Total Students
  - Average CGPA
- 📋 Dynamic student table
- 🎨 Responsive UI

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API
- JSON

---

## 📂 Project Structure

```text
student-dashboard/
│
├── index.html
├── style.css
├── app.js
│
├── data/
│   └── students.json
│
└── js/
    ├── loadData.js
    ├── table.js
    ├── search.js
    ├── filter.js
    ├── sort.js
    ├── statistics.js
    └── chart.js
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
```

### Open the project

Run the project using a local development server such as **VS Code Live Server**.

---

## 🧠 Concepts Practiced

- Fetch API
- Async/Await
- DOM Manipulation
- Event Listeners
- JavaScript Modules
- Array Methods
- State Management
- Separation of Data and UI

---

## 🔮 Future Improvements

- React Migration
- Express.js Backend
- PostgreSQL Integration
- Interactive Charts
- Pagination
- Advanced Filters
- Authentication

---

## 📸 Screenshots

_Add screenshots here._

---

## 📜 License

This project is built for learning and portfolio purposes.

---
# 🚀 Student Analytics Dashboard (Version 2)

Version 2 upgrades the project from a frontend-only application to a **full-stack Student Analytics Dashboard** by introducing a backend, database, REST APIs, and deployment.

> Instead of fetching student records from a local JSON file, the frontend now communicates with an Express.js backend, which retrieves data from a PostgreSQL database.

---

## ✨ What's New

- 🚀 Built an **Express.js** backend
- 🗄️ Integrated **PostgreSQL** as the database
- 🔌 Developed Express API to serve student data
- 📡 Replaced local JSON fetching with API calls
- 📊 Added interactive data visualizations using **Chart.js**
- 📈 Expanded dashboard statistics
  - Highest CGPA
  - Lowest CGPA
  - Average CGPA
  - Total Students
- 🐍 Generated a realistic student dataset using **Python Faker**
- 📥 Imported the generated data into PostgreSQL using the **pg** package
- ☁️ Deployed both frontend and backend on **Vercel**
- 🌍 Configured CORS and environment variables for production deployment

---

## 🛠️ Additional Technologies Used

### Backend

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- cors

### Data Generation

- Python
- Faker

### Visualization

- Chart.js

### Deployment

- Vercel

---

## 🏗️ Updated Architecture

```text
Browser
   │
Fetch API
   │
   ▼
Express.js API
   │
SQL Queries
   │
   ▼
PostgreSQL Database
   ▲
   │
Seed Script (Node.js + pg)
   ▲
   │
CSV generated using Python Faker
```

---

## 📡 API

```http
GET /
```

The frontend now fetches student data through the backend instead of directly accessing a local JSON file.

---

## 🧠 New Concepts Learned

- Connecting Node.js with PostgreSQL
- Writing SQL queries from JavaScript
- Database seeding using the `pg` package
- Environment variable management with `dotenv`
- CORS configuration
- Frontend-backend communication
- Deploying a full-stack application on Vercel
- Interactive data visualization with Chart.js

---

## 🔄 Evolution from Version 1

- JSON file → PostgreSQL database
- Frontend-only → Full-stack architecture
- Local data fetching → Express API communication
- Static dataset → Database-driven application
- Basic dashboard → Interactive charts and enhanced analytics
- Local project → Cloud deployment on Vercel
