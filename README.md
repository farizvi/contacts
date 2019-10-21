# Contacts

Contacts is a small application to demonstrate Full Stack Development using **.Net Core** and **ReactJS**

## Description

The server application follows Clean Architecture and CQRS design pattern to implement a Web API project which exposes the API methods for creating, fetching and deleting records.

| Project | Description |
| ------- | ----------- |
| API     | Web API project |
| Application  | This project consists of the business logic. It is dependent on Domain layer but has no dependencies on any other layers |
| Domain  | The project consists of domain entities |
| Persistence | This project contains all database related stuff |
| client-app  | This the front-end application developed using ReactJS |

## How to run the application

To run the server application

```bash
cd API/
dotnet watch run
```

To run the client application

```bash
cd client-app

npm install

npm start
```
