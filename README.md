# Newsfeed system

CMS applicattion for creating and serving news

### Base technologies
- HTML/CSS/JS
- Angular 2
- Django (Python)

### Basic Environment Installation
##### Backend
So, we need a python. Make sure you have one (3.6 recommended). Then you can install Django by using pip. Like this:
>pip install -r requirements.txt

And that's it. Of course you've got to have this repo locally.

##### Frontend
Download Node.js from here https://nodejs.org/en/
Be sure if you installed npm as well. Then run your CLI (or command window or whatever) and type:
>npm install

>npm install webpack -g

Change directory to /newsfeedsystem and:

>python manage.py migrate

And to create a bundle.js file type once:

>webpack

Then to ru nserver:

>python manage.py runserver

All dependencies should install automatically. Everything should be ready.

Except angular following extensions are needed:

- Typescript
- ES6
- Webpack


###### API routes

Following API routes are available:


| **Request**  | **Path**  |
|GET|/api/<table_name>/|
|GET|/api/<table_name>/<id>/|
|POST|/api/<table_name>/create/|
|PUT, UPDATE|/api/<table_name>/update/|
|DELETE|/api/<table_name>/destroy/|


The output is in JSON format.
