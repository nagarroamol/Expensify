# Expensify - Expense Manager App

This repository contains an **Expense Manager** application built with a microservices architecture using **ASP.NET Core Web API**, **SQL Server**, and **Redis Cache**. The application provides users with features to manage expenses and categorize them efficiently. It includes a **web app** as the frontend and leverages **Docker Compose** for container orchestration.

## Features
- **Web Application** built with modern UI for managing expenses.
- **ASP.NET Core Web API** backend for handling business logic.
- **SQL Server** for persistent storage of expenses and user data.
- **Redis Cache** for fast retrieval of category information.
- **Prometheus** for monitoring and alerting.
- **Grafana** for visualizing metrics.
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

5. **Prometheus**
   - Collects metrics from the application and infrastructure.
   - Provides alerting capabilities based on defined thresholds.

6. **Grafana**
   - Visualizes metrics collected by Prometheus.
   - Offers customizable dashboards for monitoring application performance.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- Docker
- Docker Compose
- .NET 7.0 SDK
- SQL Server Management Studio (SSMS)
  
### Setting Up the Environment

#### 1. Clone the Repository
```bash
git clone https://github.com/nagarroamol/Expensify.git
cd Expensify
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
cd API/Expensify.Api
dotnet build
```
Then run the API:
```bash
cd bin/Debug/net7.0
./Expensify.Api.exe
```
The API will be available at `http://localhost:5001`.

**Step 3: Run the Web App**
```bash
cd Client
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

## Screenshots
![image](https://github.com/user-attachments/assets/652ef864-ce8e-4caf-81c8-6b043dc47faf)
![image](https://github.com/user-attachments/assets/83dbf53b-d858-4946-bcc8-2831fff61ba6)
![image](https://github.com/user-attachments/assets/af4b98cc-7415-4c93-8176-d9a6f221e6e3)
![image](https://github.com/user-attachments/assets/c3b6ff7b-f4c6-4397-b3f4-ae0865b7677b)



## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact
For any questions or feedback, feel free to reach out:
- **Email**: amolb52@gmail.com

