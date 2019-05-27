# VUTTR (Very Useful Tools to Remember) API

Welcome to **VUTTR API**. This API was developed by **Daniel Silva** for the [bossabox](http://bossabox.com) challenge.

NOTE: This document is a **work in progress**.

## Overview

This project was developed in [NodeJS](https://nodejs.org/en/) with [AdonisJS](https://adonisjs.com) framework. That’s uses a free [PostgreSQL](https://postgresql.org) database instance of a DBaaS called [ElephantSQL](https://elephantsql.com).

## Setup

[Docker](https://docker.com) is the only tool that you need have installed!

Both node enviroment and database connection are configured.

## Running

Run the following command to startup the server.

```bash
docker-compose up
```

### That’s all!

This command starts a docker container, install all project dependencies and starts the dev server at port 3000.

The server will ready after this message:

```bash
info: serving app on http://0.0.0.0:3000
```

### Behind the command

This project uses node-alpine docker image with @adonisjs/cli and aglio global packages installed and can be altered according you need at Dockerfile file.

All tasks that this magic command runs are listed below and can be altered according you need at docker-compose.yml file:

- yarn install
- aglio -i API.apib -o api.html
- adonis migration:run
- adonis serve --dev

## API doc

All routes, methods and params are documented by [API Blueprint](https://apiblueprint.org) description language at API.apib file.