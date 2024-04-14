# To-Do List Application

This is a simple To-Do List application built using MongoDB, Node.js, Express, and Docker.

## Introduction

A To-Do List application allows users to manage tasks by adding, updating and deleting tasks. This application demonstrates how to build a full-stack web application using MongoDB as the database, Node.js and Express for the backend server, and Docker for containerization.

## Features
- Add a new task
- Mark tasks as completed
- Delete tasks

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB
- Docker

## Getting Started

### Setting Up MongoDB

1. Install MongoDB following the [official installation guide](https://docs.mongodb.com/manual/installation/).
2. Start MongoDB using the appropriate command for your system.

### Running the Application Locally

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
   
     ```bash
npm install

4. Start the server:

   ```bash
npm start

### Running with Docker

1. Ensure Docker is installed on your system.
2. Build the Docker image:

   ```bash
docker build -t todo-list-app .

3. Run the Docker container:

   ```bash
docker run -p 3000:3000 --name todo-list-container todo-list-app

4. The application will be accessible at `http://localhost:3000`.

## Usage

- Open your web browser and go to `http://localhost:3000`.
- View existing tasks, add new tasks, mark tasks as completed, and delete tasks as needed.

## Contributing

Contributions are welcome! Please feel free to fork this repository and submit pull requests to propose improvements.
