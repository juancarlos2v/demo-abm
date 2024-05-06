# APIREST para Gestión de Estudiantes y Materias

Este proyecto es una APIREST desarrollada con Spring Boot para gestionar un sistema de estudiantes y materias, con funcionalidades de alta, baja, modificación e inscripción de alumnos y materias, diseñado para ser utilizado con un dashboard desarrollado en React.js y Next.js.

## Características

- **Gestión de Estudiantes:** Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la información de los estudiantes.
- **Gestión de Materias:** Permite operaciones CRUD sobre las materias disponibles en el sistema.
- **Inscripciones:** Permite inscribir estudiantes en las materias disponibles.


## Tecnologías Utilizadas

- **Spring Boot:** Framework de desarrollo para aplicaciones Java.
- **React.js y Next.js:** Frameworks de desarrollo frontend para construir interfaces de usuario interactivas.
- **Base de Datos:** Utiliza una base de datos relacional para almacenar la información de estudiantes, materias e inscripciones.


## Instalación y Uso

1. **Clonar el Repositorio:** Clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/juancarlos2v/demo-crud.git
    ```

2. **Configuración del Entorno:** Sigue las instrucciones en la documentación de cada proyecto (backend y frontend) para configurar el entorno de desarrollo y las dependencias necesarias.

3. **Ejecución del Backend:** Inicia el servidor backend de Spring Boot.

    ```bash
    cd backend
    mvn spring-boot:run
    ```

4. **Ejecución del Frontend:** Inicia el servidor de desarrollo frontend para React.js y Next.js.

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

5. **Acceso al Dashboard:** Abre tu navegador web y accede a la URL proporcionada por el servidor de desarrollo de React.js y Next.js para comenzar a utilizar el dashboard de gestión de estudiantes y materias.



## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT) - consulta el archivo `LICENSE` para más detalles.
