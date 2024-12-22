# build
FROM node:22-alpine as build
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

# production
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --omit=dev

EXPOSE 3000

ENTRYPOINT ["npm","start"]