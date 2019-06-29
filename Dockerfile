# build step
FROM node:10.16.0-alpine AS build

ENV NODE_ENV=production
ENV URL=localhost
ENV PORT=3001

COPY . .

RUN npm ci --production

EXPOSE 3001

CMD npm start
