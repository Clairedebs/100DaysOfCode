# Task Manager API

A Spring Boot REST API for managing tasks with full CRUD operations. This project demonstrates the implementation of a task management system using modern Spring Boot features and best practices.

## 🛠️ Technologies Used

- **Spring Boot 3.5.5** - Main framework
- **Spring Data JPA** - Data persistence
- **PostgreSQL** - Database
- **Lombok** - Reduce boilerplate code
- **Spring Web** - REST API support
- **Java 21** - Programming language

## 📋 Features

- **Task Management**
  - Create new tasks
  - Retrieve tasks (all or by ID)
  - Update existing tasks
  - Delete tasks

- **Task Properties**
  - Title
  - Description
  - Due Date
  - Status (TODO, ONGOING, DONE, CANCELLED)

- **Error Handling**
  - Global exception handling
  - Custom error responses
  - Not found exceptions
  - Bad request exceptions

## 🏗️ Project Structure

```
src/
├── main/
│   ├── java/com/example/taskmanager/
│   │   ├── controllers/
│   │   │   └── TaskController.java
│   │   ├── models/
│   │   │   ├── Tasks.java
│   │   │   ├── TasksDTO.java
│   │   │   └── enums/
│   │   │       └── Status.java
│   │   ├── repositories/
│   │   │   └── TaskRepository.java
│   │   ├── services/
│   │   │   └── TaskService.java
│   │   ├── exception/
│   │   │   ├── ErrorObject.java
│   │   │   ├── GlobalExceptionHandlers.java
│   │   │   └── ExceptionHandlers/
│   │   │       ├── BadRequestException.java
│   │   │       └── NotFoundException.java
│   │   └── TaskmanagerApplication.java
│   └── resources/
│       └── application.properties
└── test/
    └── java/com/example/taskmanager/
        └── TaskmanagerApplicationTests.java
```

## 🚀 API Endpoints

### Tasks

- **GET** `/api/tasks` - Retrieve all tasks
- **GET** `/api/tasks/{id}` - Retrieve a specific task by ID
- **POST** `/api/tasks` - Create a new task
- **PATCH** `/api/tasks/{id}` - Update an existing task
- **DELETE** `/api/tasks/{id}` - Delete a task

## 📝 Request/Response Examples

### Create Task

```json
POST /api/tasks
{
    "title": "Complete Project",
    "description": "Finish the task manager implementation",
    "dueDate": "2024-03-20"
}
```

### Update Task

```json
PATCH /api/tasks/{id}
{
    "status": "ONGOING",
    "description": "Updated description"
}
```

### Get Task Response

```json
{
    "id": 1,
    "title": "Complete Project",
    "description": "Finish the task manager implementation",
    "dueDate": "2024-03-20",
    "status": "ONGOING"
}
```

## ⚙️ Configuration

The application uses environment variables for database configuration:

```properties
spring.datasource.url=jdbc:postgresql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}
spring.datasource.username=${MYSQL_USER}
spring.datasource.password=${MYSQL_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.open-in-view=false
```

## 📚 Error Handling

The application implements a global exception handling mechanism with:

- Custom error responses
- HTTP status code mapping
- Detailed error messages
- Timestamp tracking

Example error response:

```json
{
    "statusCode": 404,
    "message": "Task with id: 123 not found!",
    "timestamp": "2024-03-14T10:30:00.000Z"
}
```
