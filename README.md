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

Follow these steps to run the application

* Clone the repository
	
* At the root directory, restore required packages by running

	```
	dotnet restore
	```
	
* Navigate to `API` directory and start the back end by executing 
	
	```
	dotnet watch run
	```
	
	
* In another command prompt / terminal window navigate to `client-app` directory and install the npm packages for client application by executing
	
	```
	npm install
	```
	
* Start the client applicaiton by executing
	
	```
	npm start
	```
