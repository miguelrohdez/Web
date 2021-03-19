const express = require('express')
const app = express()

app.get('*', (request, response) => {
	response.send({message: 'Chanchito feliz'})
})

app.listen(3000, () => console.log('Nuestro servidor esta escuchando'))

//GET listar elementos /users o /users/:id
//POST crear elementos /users
//PUT remplazar un recurso /users/:id
//PATCH actualizar o remplazar parcialmente /users/:id
//DELETE para eliminar un recurso /users/:id

/*Todas devuleven un status 
GET 200
POST 201
PUT    204
PATCH	204
DELETE	204
*/

/*Arquitectura Serverless
FaaS - Funtion as a Service


*/