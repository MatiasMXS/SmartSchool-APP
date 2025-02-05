## SmartSchool APP
**"Gestiona tus estudiantes de manera eficiente"**  

SmartSchool APP es una solución diseñada para facilitar la gestión de estudiantes, permitiendo llevar un registro detallado de ellos, ver en qué cursos están inscritos y realizar búsquedas rápidas.

---

## 🚀 Funcionalidades

- Gestión completa de estudiantes: Crear, Leer, Actualizar, Eliminar (CRUD).
- Filtración de estudiantes por los cursos en los que están inscritos.
- Búsqueda rápida por nombre y apellido.
- Almacenamiento de imágenes de estudiantes en formato Base64.
- Persistencia de datos en MongoDB.

---

## 💻 Tecnologías Utilizadas
- **Frontend**: React, React Router, Axios.
- **Backend**: Node.js, Express.js.
- **Base de Datos**: MongoDB con Mongoose.
- **Extras**: Material-UI.

---

## ⚙️ Cómo Instalar y Usar

Esta API está deployada y accesible desde:  
[🔗 Integrador SmartSchool APP](https://smart-school-app.vercel.app/)

### Opcional: Instalar Localmente
1. **Clonar el repositorio**:  
   ```bash
   git clone https://github.com/MatiasMXS/SmartSchool-APP.git

2. **Instalar dependencias de la API**: Coloque el siguiente comando:  
   ```bash
   npm install
3. **Configurar variables de entorno**: Crea un archivo .env en la raíz del backend con estas variables:
```bash
VITE_BASE_URL = https://integrador-api-gestion-escolar.vercel.app/api
VITE_STUDENTS = /estudiantes
VITE_NAME = /nombre
VITE_COURSE = /curso
 ```
4. **Ejecutar el proyecto**: Para ejecutarlo simplemente debe usar el comando
    ```bash
   npm run server
---
## 📚**Modo de usp**
Al ingresar a la aplicación:
- Usuario: escuela
- Contraseña: escuela

Páginas de la Aplicación
| Pagina | Descripción | 	Acceso |
| --- | --- | --- |
| Estudiantes |Lista de estudiantes registrados y herramienta de búsqueda | AppBar |
| Cursos | Muestra los estudiantes inscritos en cada curso | AppBar |
| Agregar | Permite añadir nuevos estudiantes | Botón en esquina inferior derecha |
| datos del estudiante | Visualiza la información completa de un estudiante | Al hacer clic en un estudiante en la lista|

---
## 📂 **Estructura del Proyecto**  
Las carpetas del proyecto están organizadas de la siguiente manera:  

```bash
APP-Gestion_Escolar/  
├── public/           # Archivos públicos y recursos estáticos  
├── src/  
│   ├── assets/        # Imágenes y recursos multimedia  
│   ├── components/    # Componentes reutilizables del frontend  
│   ├── hooks/         # Hooks personalizados de React  
│   ├── pages/         # Páginas principales de la aplicación  
│   ├── services/      # Lógica para consumir la API  
│   ├── store/         # Gestión del estado global (Redux u otras)  
│   ├── utils/         # Funciones utilitarias generales  
│   ├── App.jsx        # Componente principal de la aplicación  
│   └── main.jsx       # Punto de entrada del frontend  
├── .env               # Variables de entorno  
├── index.html         # HTML principal  
├── package.json       # Dependencias y scripts  

```
---

## 📂 **Próximos Pasos** 
Algunas de las ideas para continuar este proyecto son:
- Crear una página de Dashboard con estadísticas sobre estudiantes y cursos.
- Implementar un sistema de notas para evaluar el desempeño de los estudiantes.
- Permitir la creación dinámica de nuevos cursos.
- Sistema de usuarios con autenticación para profesores y administradores.
- Mejorar la interfaz con alertas, breadcrumbs, paginación, entre otros
---

## 👨‍💻**Créditos y despliegue**
Este proyecto fue desarrollado por Matías Moreno como parte del trabajo final integrador del curso MERN Stack en el POLO Tecnológico de La Rioja.
- Desarrollador: Matías Moreno
- GitHub: [MatíasMXS](https://github.com/MatiasMXS)



