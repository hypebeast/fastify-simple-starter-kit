FROM mhart/alpine-node:14

COPY ./docker/ /
RUN chmod +x docker-entrypoint.sh wait-for.sh

WORKDIR /app

COPY package*.json ./
RUN npm install

VOLUME [ "/app" ]
EXPOSE 3000

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["npm", "run", "dev"]
