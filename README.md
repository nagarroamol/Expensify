# Expensify - Expense Manager App
=======

This repository contains an **Expense Manager** application built with a microservices architecture using **ASP.NET Core Web API**, **SQL Server**, and **Redis Cache**. The application provides users with features to manage expenses and categorize them efficiently. It includes a **web app** as the frontend and leverages **Docker Compose** for container orchestration.

## Features
- **Web Application** built with modern UI for managing expenses.
- **ASP.NET Core Web API** backend for handling business logic.
- **SQL Server** for persistent storage of expenses and user data.
- **Redis Cache** for fast retrieval of category information.
- **Docker Compose** configuration for easy setup and deployment.
- Manual build and run instructions for development purposes.
---

## Architecture Overview

### Components
1. **Web Application**
   - A frontend application that provides an intuitive user interface for managing expenses.
   - Communicates with the backend through RESTful APIs.

2. **ASP.NET Core Web API**
   - Provides endpoints for expense management operations such as adding, updating, deleting, and retrieving expenses.
   - Implements caching mechanisms to improve performance.

3. **SQL Server**
   - Stores expense data, user information, and other necessary details.
   - Designed with efficient indexing and relationships for faster querying.

4. **Redis Cache**
   - Caches frequently accessed data like expense categories to reduce database load and improve performance.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

### Setting Up the Environment

#### 1. Clone the Repository
```bash
git clone https://github.com/nagarroamol/Expensify.git
cd expense-manager
```

#### 2. Using Docker Compose
The project comes with a pre-configured `docker-compose.yml` file to set up the entire application stack.

```bash
docker-compose up --build
```
This command will:
- Build the web app and API images.
- Set up the SQL Server and Redis containers.
- Expose the necessary ports.

Once the services are up and running, access the web application at `http://localhost:5000`.

#### 3. Manual Build and Run
If you prefer to run the services manually without Docker, follow these steps:

**Step 1: Set up SQL Server**
- Ensure SQL Server is running on your machine.
- Update the connection string in `appsettings.json` to match your local SQL Server instance.

**Step 2: Run the Web API**
```bash
cd ExpenseManager.Api
dotnet build
```
Then run the API:
```bash
cd bin/Debug/net7.0
./ExpenseManager.Api.exe
```
The API will be available at `http://localhost:5001`.

**Step 3: Run the Web App**
```bash
cd ExpenseManager.Web
npm install
npm start
```
Access the web application at `http://localhost:5000`.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: ASP.NET Core Web API
- **Database**: SQL Server
- **Caching**: Redis Cache
- **Containerization**: Docker, Docker Compose

---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact
For any questions or feedback, feel free to reach out:
- **Email**: amolb52@gmail.com

