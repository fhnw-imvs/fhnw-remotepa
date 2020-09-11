## Developer guide

### Development environment requirements
* Backend
    * JDK 11
    * running and configured MariaDB (see [USER MANUAL](SETUP.md))
* Frontend
    * Nodejs, see [README](../frontend/README.md)

### Local Run (Build)
There are multiple ways for running the application locally: 

1. build and run `full stack` using gradle wrapper (if there is no local installation)
   1. `./gradlew clean build` (builds the backend & frontend)
   2. `./gradlew clean bootRun` (runs the backend packaged with the frontend)
2. build and run `full stack` using local gradle installation
   1. `gradle clean bootRun` (needs to be run in the `root` or `backend` folder)
3. build and run `seperatly` 
   1. `npm install && npm start` (needs to be run in the `frontend` folder)
   2. `gradle bootRun` (needs to be run in the `root` or `backend` folder)
   
#### NOTES
* your full stack application will be available on https://localhost:8443
* `gradle bootRun` `build` etc. use the compiled sources of the `frontend/build` if found.
* in some cases npm may cause exceptions like `File not found` etc. in this case it is recommended to clean or delete the `node_modules` folder

### Security settings
#### Certificate
* for security reasons we recommend creating an own self signed certificate
* create on **Windows:** 'C:\Program Files (x86)\Java\jre1.8.0_261\bin>keytool -genkeypair -keysize 2048 -keyalg RSA -alias remotepa -storetype PKCS12 -keystore remotepa.pfx -validity 3650'
* create on **Mac:** 'cd /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home' and then use the same command as Windows
* copy the new certificate to */backend/src/main/resources/cert/*
* edit the **key-store-password** in [application.yml](../backend/src/main/resources/application.yml)

#### JWT Key
* for security reasons we recommend to change the **secret** key in [application.yml](../backend/src/main/resources/application.yml)

### Create JAR file for server
* to create a Jar file for your webserver run `./gradlew clean build` (builds the backend & frontend)
* you can find the file in *./backend/build/libs*
* rename the file to remotepa.jar and copy it to your raspberry pi

### Server Setup
* to set up your webserver please have a look at [SETUP](SETUP.md)

### Release Management  
1. start the release `start_release <version>` e.g `v1.1.0`
2. Update [CHANGELOG](CHANGELOG.md)
4. `fin_release <new-version>` e.g `v1.2.0`

## License
This project is licensed under the MIT License, see [LICENSE](../LICENSE).
