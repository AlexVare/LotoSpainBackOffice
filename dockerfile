FROM node:16.14.0 as build

WORKDIR /source

# Copy the package lock file into the container
COPY package*.json ./
# Run ci only for the production dependencies
RUN npm ci

# Copy the rest of the files into the container and build
COPY . .
RUN npm run build --prod
RUN ls -lisa
FROM nginx:alpine
COPY --from=build /source/dist/app-viveiro /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf
