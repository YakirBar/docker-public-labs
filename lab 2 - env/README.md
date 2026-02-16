what is ENV? (environment variables)
examples:
auth for database
env for staging/dev
ports
log level for info/error

1. npm install express
2. npm install dotenv

-p <host_port>:<container_port>
open tunnel between my PC to my Container

docker exec -it wizardly_hugle bash
curl localhost:5000

-e flag
inject new env




ENV Levels
- High
- docker inject env
- inject via dockerfile - 4000
- application .env - 5000
- application hardcoded - 3000
- Low


browser 3000
application 3000

docker run -d -p 3000:3000 -e PORT=3000 lab2-env:v0.2

browser 4000
application 8000

docker run -d -p 4000:8000 -e PORT=8000 lab2-env:v0.2

browser 5000
application 4000

docker run -d -p 5000:4000 lab2-env:v0.2

browser 6000
application 5000

docker run -d -p 7000:5000 -e PORT=5000 lab2-env:v0.2


1. Create new folder for lab2
2. Open terminal + configure node - (npm init -y)
3. npm install express
4. npm install dotenv
5. use .env file - port = 4000

6. https://expressjs.com/ -> copy paste - 

require('dotenv').config()
const port = process.env.PORT || 3000
(server.js) - port 4000

7. Check if application work locally - npm start
8. Create Dockerfile - using FROM COPY*2 RUN EXPOSE CMD (without ENV)
9. Docker build
10. Docker run new image and test in browser - port 4000

11. Create Dockerfile - using FROM COPY*2 RUN EXPOSE CMD ENV (port = 5000)
12. Docker build
13. Docker run new image and test in browser - port 5000

14. Docker run new image using -e flag and test in browser - browser: 4000 aplication: 3500
15. Push to GIT (.env)

https://expressjs.com/
https://hub.docker.com/

"scripts": {
  "start": "node server.js"
},