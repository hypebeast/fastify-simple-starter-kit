#!/bin/sh
set -e

echo "Waiting for MySql to come up..."
/wait-for.sh mysql:3306

echo "Running database migrations..."
npx knex migrate:latest

exec "$@"
