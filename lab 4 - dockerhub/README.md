docker tag <old_image> <new_image>

docker tag lab4:v0.1 yakirbartech/lab4-public-registry:v0.1

docker push yakirbartech/lab4-public-registry:v0.1

docker pull yakirbartech/lab4-public-registry:v0.1

1. create account indockerhub
2. create public repository in dockerhub
3. create new node app listening to port <>
4. create dockerfile and build new new_image
-- test locally
5. tag existing image with dockerhub tagname
6. push the artifact to dockerhub
7. delete lab4 images from locally
8. pull and run image (your friend image) from dockerhub public repository
-- test locally