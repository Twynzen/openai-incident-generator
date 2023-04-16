# Creador inteligente de incidentes.
Este proyecto es una prueba de concepto para un chat inteligente que utiliza el modelo GPT-3.5-turbo de OpenAI para extraer palabras clave y valores de las entradas del usuario con el objetivo de crear incidentes en una base de datos. La base de datos en este caso se almacena en la memoria del servidor.

La aplicación se compone de tres partes principales:

1. **openaiService.ts**: Este módulo utiliza la API de OpenAI para enviar entradas de texto al modelo GPT-3.5-turbo. El propósito de este servicio es recibir una entrada en lenguaje natural y generar una instrucción SQL INSERT adecuada para crear un nuevo incidente en la tabla "incidentes".

2. **databaseService.ts**: Este módulo proporciona un servicio de base de datos en memoria simple que permite agregar y recuperar incidentes. Los incidentes se almacenan en un arreglo en memoria, y las funciones `addIncident()` y `getAllIncidents()` se utilizan para interactuar con los datos.

3. **index.ts**: Este archivo es el punto de entrada principal de la aplicación. Se encarga de enviar las entradas del usuario al servicio de OpenAI y procesar las respuestas generadas por el modelo GPT-3.5-turbo. Luego, utiliza las respuestas para extraer valores de incidentes y agregarlos a la base de datos en memoria utilizando el servicio de base de datos.

La aplicación sigue estos pasos para procesar la entrada del usuario y crear un incidente:

1. El usuario proporciona una entrada en lenguaje natural que describe un incidente, incluyendo detalles como el nombre, el nivel, la descripción y la fecha.
2. La entrada del usuario se envía al modelo GPT-3.5-turbo a través de la función `gptTurboEngine()` en `openaiService.ts`.
3. El modelo GPT-3.5-turbo procesa la entrada y devuelve una instrucción SQL INSERT que contiene las palabras clave y los valores extraídos de la entrada.
4. La aplicación extrae los valores de la instrucción SQL generada y crea un objeto de incidente.
5. El objeto de incidente se agrega a la base de datos en memoria utilizando la función `addIncident()` en `databaseService.ts`.
6. Finalmente, la aplicación muestra todos los incidentes almacenados en la base de datos en la consola.

Esta prueba de concepto demuestra cómo se puede utilizar un modelo de lenguaje avanzado como GPT-3.5-turbo para procesar entradas en lenguaje natural y realizar acciones útiles, como crear incidentes en una base de datos.
