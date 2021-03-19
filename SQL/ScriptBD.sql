CREATE TABLE datosUsuarios(
	idUsuario INT PRIMARY KEY
	nombre VARCHAR(50) NOT NULL,
	apaterno VARCHAR(50) NOT NULL,
	amaterno VARCHAR(50) NULL,
	email VARCHAR(80) NOT NULL,
	contrasenia VARCHAR(50),
	telefono NUMERIC(13) NULL,
	fechaNacimiento DATE NOT NULL
	);

CREATE PROCESS sp_insertUsuarios
AS
	INSERT INTO datosUsuarios
;

CREATE FUNCTION f_encryptPassUser
AS
BEGIN
END;

