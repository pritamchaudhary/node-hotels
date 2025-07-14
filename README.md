# 🏨 Node Hotel Application

A **Node.js** and **Express.js** REST API for managing hotel staff (**persons**) and **menu items**. Data is stored in **MongoDB** and accessed through clear, intuitive endpoints that support full CRUD operations.

---

## ✨ Features

- **CRUD Endpoints** for both Persons and Menu Items  
- **MongoDB & Mongoose** models with validation  
- **Filtering** by work type (staff) and taste (menu)  
- **Environment-based configuration** (dotenv)  
- Ready for **containerisation / cloud deployment**

---

## 🛠 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Runtime    | Node.js 20+        |
| Framework  | Express.js         |
| Database   | MongoDB / Mongoose |
| Language   | JavaScript (ES2023)|
| Utilities  | nodemon, dotenv    |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥ 18**
- **MongoDB** instance (local or cloud - MongoDB Atlas)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/node-hotel.git
cd node-hotel

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# ➜ Edit the .env file and add your MongoDB URI

# 4. Start the server
npm run dev   # hot-reload using nodemon
# or
npm start     # production

Default server runs on: http://localhost:3000

🗂️ API Endpoints
| Action   | Method | Endpoint            | Description              |
| -------- | ------ | ------------------- | ------------------------ |
| Create   | POST   | `/person`           | Add a new person         |
| Read All | GET    | `/person`           | Get all persons          |
| Read By  | GET    | `/person/:workType` | Get persons by work type |
| Update   | PUT    | `/person/:id`       | Update person by ID      |
| Delete   | DELETE | `/person/:id`       | Delete person by ID      |

Menu Items
| Action   | Method | Endpoint       | Description             |
| -------- | ------ | -------------- | ----------------------- |
| Create   | POST   | `/menu`        | Add a new menu item     |
| Read All | GET    | `/menu`        | Get all menu items      |
| Read By  | GET    | `/menu/:taste` | Get menu items by taste |
| Update   | PUT    | `/menu/:id`    | Update menu item by ID  |
| Delete   | DELETE | `/menu/:id`    | Delete menu item by ID  |

📚 Data Models
Person
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}

MenuItem
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}

🧪 Sample API Requests
# Create a new person
curl -X POST http://localhost:3000/person \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice",
    "age": 28,
    "work": "chef",
    "mobile": "9876543210",
    "email": "alice@hotel.com",
    "address": "45 Garden Road",
    "salary": 50000
  }'

# Get all spicy dishes
curl http://localhost:3000/menu/spicy

📁 Project Structure
├── src
│   ├── models
│   │   ├── person.model.js
│   │   └── menu.model.js
│   ├── routes
│   │   ├── person.routes.js
│   │   └── menu.routes.js
│   ├── controllers
│   ├── app.js
│   └── server.js
├── tests
├── .env.example
└── README.md

🖇️ Contributing
Fork the project

Create your feature branch (git checkout -b feat/your-feature)

Commit your changes (git commit -m 'feat: add something')

Push to the branch (git push origin feat/your-feature)

Open a pull request

📄 License
Distributed under the MIT License. See LICENSE for more info.

🙏 Acknowledgements
Express.js

MongoDB

Mongoose

dotenv


---

Let me know if you’d like a badge section, live demo link, or how to deploy it (e.g., on Render/Vercel)!
