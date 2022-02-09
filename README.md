# Files Repository Frontend

Proyecto que muestra el listado de los archivos disponibles para toolbox

## Comandos disponibles

En el directorio del proyecto, se pueden ejecutar los siguientes comandos:
### `npm install`  

Instala todas las dependencias para la aplicacion  

### `npm start`

Levantar la aplicacion en modo desarrollo.
Abrir [http://localhost:4031](http://localhost:4031) para ver la aplicacion en el navegador.

### `npm test`

Ejecutar las pruebas unitarias.

### `npm run build`

Construir la aplicacion compactada para ambiente de produccion en la carpeta `build`.

### `docker build --no-cache -t toolbox/toolbox-files-web:latest .`  

Generar la imagen Docker de todos todos los microfrontends, desactivar la cache es importante para hacer una compilación completa.
   
        
### `docker run --name toolbox-files-web -p 4031:80 -d toolbox/toolbox-files-web`  

Desplegar la aplicacion frontend.