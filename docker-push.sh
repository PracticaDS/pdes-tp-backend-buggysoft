#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t pdes-tp-backend-buggysoft .
docker tag pdes-tp-backend-buggysoft:latest glmaljkovich/pdes-tp-backend-buggysoft
docker push glmaljkovich/pdes-tp-backend-buggysoft
