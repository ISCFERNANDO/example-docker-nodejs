FROM mysql:5.7

#ENV MYSQL_DATABASE store_online
#ENV MYSQL_ROOT_PASSWORD api-rest
#ENV MYSQL_USER api-rest
#ENV MYSQL_PASSWORD api-rest
#ENV MYSQL_DATABASE_HOST db

EXPOSE 3306

#WORKDIR /app
COPY script.sql /docker-entrypoint-initdb.d/

#CMD ["mysql", "-u root", "-papi-rest", "store_online < /tmp/script.sql"]