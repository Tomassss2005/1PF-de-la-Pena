Explicación lógica del proyecto: 

-Todo el front y la lógica(backend) de alumnos se encuentra en la carpeta students.

-Tabla de alumnos: cada alumno tiene un id, nombre y apellido, nota y curso. 
-El archivo students-table-component.html contiene la tabla de alumnos y cada ng-container tiene una característica de cada alumno pasandosela a través students-table-component.ts.
-En la carpeta components se encuentra el archivo students-table-component.ts. Contiene un displayColumns(angular material), que es un array de strings con las características que tiene cada alumno. 


-Directivas: Dentro la carpeta directives está en archivo highlight.directive.ts en donde hay un directiva hecha con fontSize de '20px'. Se puede aplicar para cualquiera texto de una forma más sencilla.

-Modelos: Dentro de la carpeta models se encuentra el archivo student.ts en el que hay una interfaz de alumno con cada una de las cosas de cada alumno.

-Pipes: En la carpeta pipes se ubica el archivo student-name-category.pipe.ts. En donde hice un pipe el cual este el nombre y apellido juntos y sea más fácil de poner el nombre completo junto y no por separado.