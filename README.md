# fastify-simple-starter-kit

A simple starter kit for [Fastify](Fastify) which tries to provide a simple but yet complete project structure suitable for small and medium sized applications.

It provides you with a basic project structure and libraries which allows you to quickly start a new Fastify project.

---

**NOTE**

This is a work in progress and not yet suitable for production.

---

## Overview

This is a simple starter kit for `Fastify` which tries to provide a simple but yet complete structure suitable for small and medium sized applications.

## Highlights

- [Fastify](https://www.fastify.io/) as a web framework.
- Tries to follow best practices from [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) to ensure separation of concerns between the application components.
- Light dependency injection via [Fastify Decorators](https://www.fastify.io/docs/latest/Decorators/)
- Simple Server-Side rendered HTML without the added complexity of a SPA framework. But you can easily switch to a SPA architecture.
- Server-Side rendering with [point-of-view](https://github.com/fastify/point-of-view).
- Enchanced with [AlpineJS](https://github.com/alpinejs/alpine) for JavaScript behavior on the frontend side.
- [Swagger](https://swagger.io/) API documentation
- Automatic page refreshs with [Browsersync](https://browsersync.io/) and [Snowpack](https://www.snowpack.dev/).
- [Snowpack](https://www.snowpack.dev/) as a super fast frontend build tool.
- Fully dockerized, local development via [docker-compose](https://docs.docker.com/compose/).
- ~~Start off with full test coverage and continuous integration.~~
- A slim but robust foundation -- just enough to maximize your productivity, nothing more.

## Design Goals

This starter kit tries to give you a complete, but yet simple starting point for your next Fastify project.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (>= 12)
- [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

## Quickstart

Use [degit](https://github.com/Rich-Harris/degit) to scaffold the repository:

```terminal
npx degit user/fastify-simple-starter-kit
```

Or clone it manually with `git`:

```terminal
git clone https://github.com/hypebeast/fastify-simple-starter-kit.git
```

**Note**: Don't forget to delete the `.git` folder.

Create an environment configuration file (`.env`):

```terminal
cp .env.example .env
```

Start the database with `docker-compose`:

```terminal
docker-compose up --build -d
```

Initialize the database and run the migrations:

```terminal
npm run knex:migrate:latest
```

Start the application with:

```terminal
npm run dev
```

Now, go to your browser and open `http://localhost:3001`.

## Used Libraries

### Backend

- [Fastify](https://www.fastify.io/): Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.
- [Objection.js](https://vincit.github.io/objection.js/): Objection.js is an ORM (opens new window)for Node.js (opens new window)that aims to stay out of your way and make it as easy as possible to use the full power of SQL and the underlying database engine while still making the common stuff easy and enjoyable.
- [Knex.js](http://knexjs.org/): Used by Objection.js as a SQL query builder.
- [fastify-swagger](https://github.com/fastify/fastify-swagger): Swagger documentation generator for Fastify
- [point-of-view](https://github.com/fastify/point-of-view): Template rendering plugin for Fastify.

### Frontend

- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [AlpineJS](https://github.com/alpinejs/alpine): A rugged, minimal framework for composing JavaScript behavior in your markup.
- [PostCSS](https://postcss.org/): CSS transforms with Javascript
- [Snowpack](https://www.snowpack.dev/): Super fast frontend build tool
- [Browsersync](https://browsersync.io/): Fast page reloads.

## Credits

TODO

## TODO

- [ ] Add tests

## License

See [License](./LICENSE.md).
