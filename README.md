# 📝 To-Do List – PDM081  
Aplicación móvil desarrollada con **Ionic + Angular** para la gestión sencilla y rápida de tareas diarias.

---

## 📌 Descripción del Proyecto  
Este proyecto es una aplicación de lista de tareas (**To-Do App**) diseñada para permitir al usuario agregar, visualizar y gestionar tareas del día a día. La aplicación presenta un diseño moderno utilizando componentes de **Ionic Framework** y una estructura mantenible en **Angular**.

El usuario puede:  
- ✔️ Ver la fecha actual  
- ✔️ Visualizar sus tareas organizadas por prioridad  
- ✔️ Identificar prioridades mediante colores e iconos  
- ✔️ Compartir, completar o eliminar tareas (lógica futura)  
- ✔️ Agregar nuevas tareas mediante un botón flotante (FAB)

---

## 🚀 Tecnologías Utilizadas  
- **Ionic 7**  
- **Angular 17+**  
- **TypeScript**  
- **HTML / SCSS**  
- **Ionicons**

---

## 📂 Estructura del Proyecto  
```
src/
├── app/
│   ├── home/
│   │   ├── home.page.html
│   │   ├── home.page.ts
│   │   ├── home.page.scss
│   │   └── home.module.ts
├── assets/
├── theme/
└── environments/
```


---

## 🖼️ Características Principales  

### 🔹 1. Encabezado con fecha actual  
El header muestra la fecha del día usando el pipe `date`.

### 🔹 2. Cards dinámicas de tareas  
Las tareas mostradas provienen del arreglo `todoList`, cada una con:  
- Nombre  
- Prioridad (Alta, Intermedia, Baja)  
- Categoría  
- Fecha de vencimiento

### 🔹 3. Colores e iconos según prioridad  
- 🔴 Alta → rojo  
- 🟠 Intermedia → naranja  
- 🟢 Baja → verde  

### 🔹 4. Acciones disponibles en cada tarea  
- Compartir  
- Completar  
- Cancelar  

*(La lógica de estas funciones se implementará más adelante.)*

### 🔹 5. Botón flotante (FAB) para agregar tareas  
Ubicado en la esquina inferior derecha y siempre visible.

---

## 🛠️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio  
git clone https://github.com/BenjaZzzz/to-do-list-pdm081.git

### 2️⃣ Instalar dependencias  
npm install

### 3️⃣ Ejecutar la aplicación  
ionic serve


---

## 📦 Dependencias Importantes  
- `@ionic/angular`  
- `@angular/core`  
- `@angular/forms`  
- `ionicons`  
- `rxjs`

---

## 🔧 Próximas Mejoras (Roadmap)
- Optimización de estructura del código  
- Pantalla para agregar nuevas tareas  
- Persistencia de datos (Storage / Base de datos)  
- Funcionalidad de compartir  
- Marcar tarea como completada  
- Eliminar tarea  
- Integración con API  
- Animaciones y mejoras visuales  

---

## 👨‍💻 Autor  
**Felix Benjamin Ogando Peguero**  
- GitHub: https://github.com/BenjaZzzz  
- LinkedIn: https://www.linkedin.com/in/felix-benjamin-ogando-peguero-b807a5267/

---
