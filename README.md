# 🧪 Proyecto JavaScript - Coderhouse  
## Laboratorio XY - Entrega 3

El objetivo de este proyecto es simular un sistema **ABM** (Alta, Baja y Modificación) para gestionar **Reactivos de Laboratorio**.

---

## ⚙️ Funcionalidades principales

### 1. **Carga inicial**
- Se cargan las constantes de proveedores y reactivos al **Local Storage**.  
- Los datos se guardan en los arrays globales `sistema.reactivos` y `sistema.proveedores`.
- Este proceso se realiza únicamente si las claves necesarias no existen previamente en el **Local Storage**.

---

### 2. **Gestión de reactivos**
En la página **Reactivos**, se simula un sistema ABM con las siguientes operaciones:  

#### ➕ **Alta**
- Agrega un nuevo reactivo al array global.
- Actualiza la tabla de visualización.
- Guarda los cambios en el **Local Storage**.

#### ✏️ **Modificación**
- Permite editar un reactivo existente.
- Actualiza el array global, la tabla y el **Local Storage**.

#### ❌ **Borrar**
- Elimina un reactivo del array global.
- Remueve el reactivo de la tabla y actualiza el **Local Storage**.

#### 🔍 **Búsqueda**
- Permite buscar reactivos específicos dentro del sistema.
- Filtra los resultados de la tabla en tiempo real según el texto ingresado.
- Utiliza coincidencias parciales para facilitar la identificación de reactivos.

---

### 🛠️ Otras funcionalidades
Cada vez que interactúas con el sistema, se asegura que los datos en el **Local Storage** se mantengan sincronizados y actualizados.

---
🌟 Tecnologías utilizadas
* HTML5
* CSS3
* JavaScript ES6
* Local Storage
---

## 📁 Cómo usar el proyecto
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
