# Server Setup
Our environment is running and tested on a Raspberry Pi 3 with Raspbian Buster Lite.
We recommend that you connect to your Linux via SSH or VNC for configuration.

## Requirements
Run the following commands to install the **OpenJDK 11** on your Raspberry Pi: 
* `sudo apt update`
* `sudo apt upgrade`
* `sudo apt install openjdk-11-jdk`

Run the following commands to install and configure the **MariaDB** on your Raspberry Pi: 
* `sudo apt install mariadb-server`
* `sudo mysql_secure_installation` (set a password, answer each question with **Y**)
* to connect to your database use this command `sudo mysql -u root -p` (you will now be asked for your password)
* create a new account with   `CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';`
* stay connected to your database and create a new database called **expert** or copy&paste this [SQL statement](expert.sql) to create the database (in your SSH session)
* grant your account to the new database with `GRANT ALL ON expert.* TO 'admin'@'localhost' IDENTIFIED BY 'admin';`
* flush the SQL privileges with `FLUSH PRIVILEGES;`
* close the SQL console with `CTRL + C`

### Notes
* if you use a different password while creating the account `'admin'@'localhost'` you have to change it in the configuration [application.yml](./backend/src/main/resources/application.yml) and rebuild the application. (spring:datasource:password)
* for security reasons we recommend changing the **jwt:secret** in configuration [application.yml](./backend/src/main/resources/application.yml) and rebuild the application. 

## Start server
* copy your JAR file ([Create JAR file for server](./README.md)) with WinSCP, VNC or something else to your Raspbian to the path **/home/pi/**
* start your server with `java -jar /home/pi/remotepa.jar`
* access the webserver with your browser about **http://<ip-address>:8080**

### NOTES
* if you start your server the first time use this command `java -jar -Dspring.profiles.active=dev /home/pi/remotepa.jar`
 with this command the server creates a new webserver login with username **admin** and password **admin**. Defined in class [ApplicationStartup](./backend/src/main/java/ch/fhnw/server/ApplicationStartup.java)

## Install service on Raspbian for automatic server start
* create a new file `sudo nano remotepa.service`
* copy&paste [this data](./expertapp.service) to your new file (change path, file name and user / leave with ctrl + x)
* copy the new file to the service folder `sudo cp remotepa.service /etc/systemd/system/remotepa.service`
* start service manually `sudo systemctl start remotepa.service`
* wait 2 minutes and check if your webserver is available
* if the server is running enable your service `sudo systemctl enable remotepa.service`
* reboot your device `sudo reboot` and test if de server is again available

## Relay Service
If you want to publish your website to public but don't have a public IP, you can use a relay service like this two examples:
* install [Yaler](https://yaler.net/raspberrypi)
* install [Ngrok](https://ngrok.com)

## License
This project is licensed under the MIT License, see [LICENSE](LICENSE).

