FROM mysql:latest

# Establecer variables de entorno para la contraseña y el usuario
ENV MYSQL_ROOT_PASSWORD=7856Dascv
ENV MYSQL_USER=root

# Exponer el puerto deseado
EXPOSE 3306

# Copiar el script de inicialización personalizado
COPY ./my.cnf /etc/mysql/my.cnf
