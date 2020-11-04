This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

# UI USERS and USER_TASKS

This repository implements the UI to display the data from:

	* USERS CRUD
	* USER's TASK CRUD

the micro-services server provibes two sets of endpoints to the UI, and those was define as fallows.
	
	USERS CRUD
	
	* /Users:get -> List the users
	* /Users/{id}:put -> update a single user
	* /Users/{id}:delete -> deletes a single user
	* /Users/{id}:get -> Select a single user
	* /Usuario:post -> create a new user.

	USER_TASKS

	* /Tasks:get -> List all the task for a single user
	* /Tasks/{id}:get -> select a single task
	* /Tasks/userTask/{user_id}:get -> get a single task from a single user
	* /Tasks/{user_id}:get -> get all the tasks from a single user
	* /Tasks/{id}:put -> update a single user's task
	* /Tasks:post -> create a new user's task


This repository is powered by Laravel then you need to run, the commands describe bellow.

	>> install npm
	>> install angular
	>> config the enviromental file on \src\enviroments, with the path for the micro-services server, example: https://127.0.0.1:8000/api/
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

