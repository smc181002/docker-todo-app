# docker-todo-app
this is a MEAN stack app containerized using docker with the help of docker-compose and dockerfile
This todo app only has backend done for now using express server and mongoDB as database

## How to use this app

* Clone the app or download the Zip file to your desired directory
* make sure to install docker(version - 19.03.8) and docker-compose in your system.

* then run the following commands to compile and run the docker compose
```docker compose up```
* If the container is running perfectly you will get message in console saying:
```
express_1   | listening at port 3000
express_1   | Connection to mongoDB is established.
```

* The app is ready to use now
 
## Launching the app in web browser
* after lauching the app in a browser when you click on the link you may be getting just a `[]`. So to display some content open postman like service and post new content. when You use the post request Postman like servide set the body to JSON type and update the body. The body should be a object should look like this:
```
{
 "title": "<_your_todo_task_>",
}
```
after this you can check the web browser to see the updated post
