## Description

Sample RESTful API app developed in [Nest](https://github.com/nestjs/nest) framework and [TypeORM](https://typeorm.io/), connecting to MSSQL database

## Contents
- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Run as Docker Container](#run-as-docker-container)


## Prerequisite

### Docker
Install Docker following [docker install instructions](https://docs.docker.com/get-docker/)

### MSSQL
This app connects to MSSQL server in local host. The following commands help setup MSSQL using

```
sudo docker pull mcr.microsoft.com/mssql/server:2022-latest
```

```
sudo docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=<YourStrong@Passw0rd>" \
   -p 1433:1433 --name sql1 --hostname sql1 \
   -d \
   mcr.microsoft.com/mssql/server:2022-latest
```

### Create a DB
Create a new database called `Loyalty` in the MSSQL server with the following command
```sql
CREATE DATABASE Loyalty
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Run as Docker Container

### Build Docker Image

Build Docker image with the following command

```
docker build -t nest-loyalty .
```

Run the app as docker container with the following command

```
docker run -p80:3001 nest-loyalty
```
