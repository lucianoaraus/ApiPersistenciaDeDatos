# ApiPersistenciaDeDatos

## como correr el programa?
el programa se corre al abrir una terminal dentro de la carpeta que contiene el codigo, y escribir el comando npm run start

## Modulo Materia

#### Get

* para consultar por todos las materias se debe pasar por paramentro cantidadAVisualizar(tipo Integer, la cantidad que se quieren visulizar) y paginaActual(tipo Integer, la pagina que se busca visualizar) en ese orden.

* para consultar por una materia especifica se debe poner, al final de la ruta, el id de la mataria buscada. Ejemplo: http://localhost:3001/mat/2 traeria la materia con id 2.

### Delete

para borrar un elemento se le debe poner, al final de la ruta, el id de la materia que se busca borrar: Ejemplo: http://localhost:3001/mat/2 borraria la materia con id 2.

### Post

para insertar una materia nueva, se le debe pasar en formato json:
{ "nombre": "el nombre de la materia", "id_carrera": idCarrera} donde el campo "nombre" recibe un dato de tipo String e "id_carrera" recibe un dato de tipo Integer

## Put

para actualizar 


## Modulo Alumno

{
            "nombre": "Tomás Gabriel Miranda",
            "edad": 23,
            "id_carrera": 1
        }
        
## Modulo Carrera

##Modulo Universidad
