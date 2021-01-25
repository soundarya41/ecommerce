FROM mysql/mysql-server:5.7

ENV MYSQL_ALLOW_EMPTY_PASSWORD=true
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_DATABASE=soundaryadb

COPY ./DBScripts/ /docker-entrypoint-initdb.d/
COPY ./DBScripts/refresh-database-with-100-products.sql .
COPY ./DBScripts/create-user.sql .
COPY ./DBScripts/01-create-user.sql .
COPY ./DBScripts/02-create-products.sql . 
