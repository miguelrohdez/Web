--Crea la BD segun el manejador que usemos
/* PostgreSQL
CREATE DATABASE QUECTELUSERS;
\c QUECTELUSERS
*/
/* MySQL*/
/* SQL Server*/
/* Oracle
CREATE TABLESPACE QUECTEL DATAFILE 'C:\oraclexe\app\oracle\oradata\XE\TEMP01.DAT' SIZE 51200K;
ALTER SESSION SET "_ORACLE_SCRIPT"=TRUE;
CREATE  USER  adminquectel  IDENTIFIED  BY  quectel123  DEFAULT  TABLESPACE QUECTEL;
GRANT UNLIMITED TABLESPACE TO adminquectel;
*/

--Crea la tabla para usuarios pueden varias los tipos de datos
--dependiendo el manejador de BD que usemos
CREATE TABLE datosUsuarios(
	idUsuario INT,
	nombre VARCHAR(50) NOT NULL,
	apaterno VARCHAR(50) NOT NULL,
	amaterno VARCHAR(50) NULL,
	email VARCHAR(80) NOT NULL,
	contrasenia VARCHAR(50),
	telefono NUMERIC(13) NULL,
	fechaNacimiento DATE NOT NULL,
	PRIMARY KEY(idUsuario)
	);

--Vista para poder consultar los usuarios sin su contaseña
CREATE VIEW V_datosUsuarios AS
	SELECT nombre + apaterno + amaterno 'Nombre',
		email, telefono, fechaNacimiento
	FROM datosUsuarios
	ORDER BY apaterno;

--Crea la funcion para encriptar la contraseña del cliente
CREATE FUNCTION f_encryptPassUser
AS
BEGIN
END;

--Crea la funcion para desencriptar la contraseña del cliente
CREATE FUNCTION f_decryptPassUser
AS
BEGIN
END;

--Crea el StoreProcedure para insertar a los nuevos clientes
CREATE PROCEDURE sp_insertUsuarios
	@nombre VARCHAR(50),
	@apaterno VARCHAR(50),
	@amaterno VARCHAR(50),
	@email VARCHAR(80),
	@contrasenia VARCHAR(80),
	@telefono NUMERIC(13)
	@fechaNacimiento DATE
AS
	DECLARE @idUser NUMERIC(6)

	SELECT @idUser = MAX(idUsuario)
	FROM datosUsuarios;

	IF @idUser IS NULL
	BEGIN
		@idUser = 1
	ELSE
		SELECT @idUser = MAX(idUser)+1
		FROM datosUsuarios;
	END;

	INSERT INTO datosUsuarios 
	VALUES(
		@idUser, @nombre, @apaterno, @apaterno, 
		@email, f_encryptPassUser(@contrasenia), 
		@telefono, @fechaNacimiento)
;

