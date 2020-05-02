# docker-todo-app
this is a MEAN stack app containerized using docker with the help of docker-compose and dockerfile
This todo app only has backend done for now using express server and mongoDB as database

## How to use this app

* Clone the app or download the Zip file to your desired directory
* make sure to install docker(version - 19.03.8) and docker-compose in your system.
* If you are using a RHEL8 system dont forget to enable firewalld for the docker-compose to run as ip forwarding is done in the docker-compose file.
```
systemctl start firewalld
```
* then run the following commands to compile and run the docker compose
```docker compose up```
* If the container is running perfectly you will get message in console saying:
```
express_1   | listening at port 3000
express_1   | Connection to mongoDB is established.
```
* if you don't get these two message, the ip of mongoDB container is not matching with the ip written in express.js code.
* for this what you need to do is find the ip of your mongodb container 
* this can be done by following these commands
 ```
 docker conatiner ls #you will get the running containers
 docker container inspect docker-todo-app_database_1 | grep \"IPAddress\" # you will get the ip addrress
 ```
* get the container name from first command and press the container name in the field <_container_name_>
* open the docker-todo-app folder which has been cloned or downloaded and go to **api-todo/db** and open mongoose.js in your code editor
* then change the url( which looks like: 'mongodb://**172.17.0.2**:27017') to 'mongodb://**<_your_container_ip_>**:27017'
* after changing the code go back to docker-todo-app and run these following commands:
```
docker-compose build
docker-compose up
```
* for RHEL8 after this stop the firewalld and start httpd
 ```
 systemctl stop firewalld
 systemctl start httpd
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
