FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
EXPOSE 8081
ADD spring-boot-ecommerce.jar crud.jar
ENTRYPOINT ["java","-jar","crud.jar"]