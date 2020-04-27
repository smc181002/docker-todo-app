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
* open the docker-todo-app folder which has been cloned or downloaded and go to api-todo/db and open mongoose.js in your code editor
* then change the url( which looks like: 'mongodb://localhost:27017') to 'mongodb://<_your_container_ip_>:27017'
* to get your container ip what you need to do is first run the docker-compose.yml file which is in the folder you have downloaded
* after running the dokcer-compose file run the command below:
 ```
 docker conatiner ls #you will get the running containers
 docker container inspect <_container_name_> | grep IPAddress # you will get the ip addrress
 ```
 * Then enter the IP address and run the docker-compose file again
 * for RHEL8 after this stop the firewalld and start httpd
 ```
 systemctl stop firewalld
 systemctl start httpd
 ```
 * The app is ready to use now
