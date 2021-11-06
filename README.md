# ApiPersistenciaDeDatos

## como correr el programa?
el programa se corre al abrir una terminal dentro de la carpeta que contiene el codigo, y escribir el comando npm run start

## Modulo Materia

### Get

* para consultar por todos las materias se debe pasar por paramentro cantidadAVisualizar(tipo Integer, la cantidad que se quieren visulizar) y paginaActual(tipo Integer, la pagina que se busca visualizar) en ese orden.

* para consultar por una materia especifica se debe poner, al final de la ruta, el id de la mataria buscada. Ejemplo: http://localhost:3001/mat/2 traeria la materia con id 2.

### Delete

para borrar un elemento se le debe poner, al final de la ruta, el id de la materia que se busca borrar: Ejemplo: http://localhost:3001/mat/2 borraria la materia con id 2.

### Post

para insertar una materia nueva, se le debe pasar en formato JSON:
{ "nombre": "el nombre de la materia", "id_carrera": idCarrera} donde el campo "nombre" recibe un dato de tipo String e "id_carrera" recibe un dato de tipo Integer

### Put

Para actualizar una materia se debe insertar al final el id de la materia que se quiere actualizar: http://localhost:3001/mat/2 se actualizaria la materia con id 2.
Se le debe pasar por paramatro, en formato JSON:
{ "nombre": "el nombre de la materia", "id_carrera": idCarrera} donde el campo "nombre" recibe un dato de tipo String e "id_carrera" recibe un dato de tipo Integer

## Modulo Alumno

### Get

* para consultar por todos los alumnos se debe pasar por paramentro cantidadAVisualizar(tipo Integer, la cantidad que se quieren visulizar) y paginaActual(tipo Integer, la pagina que se busca visualizar) en ese orden.

* para consultar por una materia especifica se debe poner, al final de la ruta, el id de la mataria buscada. Ejemplo: http://localhost:3001/alu/2 traeria el alumno con id 2.

### Delete

para borrar un elemento se le debe poner, al final de la ruta, el id del alumno que se busca borrar: Ejemplo: http://localhost:3001/alu/2 borraria el alumno con id 2.

### Post
para insertar una materia nueva, se le debe pasar en formato JSON:
{"nombre": "nombreAlumno","edad": edadAlumno,"id_carrera": idDeLaCarrera} donde el campo "nombre" recibe un dato de tipo String, edad recibe un dato de tipo Integer e "id_carrera" recibe un dato de tipo Integer

### Put

Para actualizar una materia se debe insertar al final el id de la materia que se quiere actualizar: http://localhost:3001/alu/2 se actualizaria el alumno con id 2.
Se le debe pasar por paramatro, en formato JSON:
{"nombre": "nombreAlumno","edad": edadAlumno,"id_carrera": idDeLaCarrera} donde el campo "nombre" recibe un dato de tipo String, edad recibe un dato de tipo Integer e "id_carrera" recibe un dato de tipo Integer

## Modulo Carrera

### Get

* para consultar por todas las carreras se debe pasar por paramentro cantidadAVisualizar(tipo Integer, la cantidad que se quieren visulizar) y paginaActual(tipo Integer, la pagina que se busca visualizar) en ese orden.

* para consultar por una carrera especifica se debe poner, al final de la ruta, el id de la carrera buscada. Ejemplo: http://localhost:3001/car/2 traeria la carrera con id 2.

### Delete

para borrar un elemento se le debe poner, al final de la ruta, el id de la carrera que se busca borrar: Ejemplo: http://localhost:3001/car/2 borraria el alumno con id 2.

### Post
para insertar una carrera nueva, se le debe pasar en formato JSON:
{"nombre": "nombreCarrera"} donde el campo "nombre" recibe un dato de tipo String

### Put

Para actualizar carrera se debe insertar al final el id de la materia que se quiere actualizar: http://localhost:3001/car/2 se actualizaria la carrera con id 2.
Se le debe pasar por paramatro, en formato JSON:
{"nombre": "nombreCarrera"} donde el campo "nombre" recibe un dato de tipo String

## Modulo Universidad
### Get

* para consultar por todos las universidades se debe pasar por paramentro cantidadAVisualizar(tipo Integer, la cantidad que se quieren visulizar) y paginaActual(tipo Integer, la pagina que se busca visualizar) en ese orden.

* para consultar por una universidad especifica se debe poner, al final de la ruta, el id de la universidad buscada. Ejemplo: http://localhost:3001/uni/2 traeria la universidad con id 2.

### Delete

para borrar un elemento se le debe poner, al final de la ruta, el id del alumno que se busca borrar: Ejemplo: http://localhost:3001/uni/2 borraria la universidad con id 2.

### Post
para insertar una univsersidad nueva, se le debe pasar en formato JSON:
{"nombre": "nombreUniversidad","calle": "calleUniversidad, "localidad":"localidadUniversidad","id_carrera": idDeLaCarrera} donde el campo "nombre" recibe un dato de tipo String, "calle" recibe un dato de tipo String, "localidad" recibe un dato de tipo String "id_carrera" recibe un dato de tipo Integer

### Put

Para actualizar una materia se debe insertar al final el id de la materia que se quiere actualizar: http://localhost:3001/alu/2 se actualizaria el alumno con id 2.
Se le debe pasar por paramatro, en formato JSON:
{"nombre": "nombreUniversidad","calle": "calleUniversidad, "localidad":"localidadUniversidad","id_carrera": idDeLaCarrera} donde el campo "nombre" recibe un dato de tipo String, "calle" recibe un dato de tipo String, "localidad" recibe un dato de tipo String "id_carrera" recibe un dato de tipo Integer
