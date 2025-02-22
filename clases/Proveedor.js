class Proveedor {

    constructor(codigo, razonSocial, telefono, mail) {
        this.codigo = codigo;
        this.razonSocial = razonSocial;
        this.telefono = telefono;
        this.mail = mail;
    }

    toString() {
        return `${this.razonSocial} (${this.codigo})`;
    }

    agregarProveedor(codigo, razonSocial, telefono, mail) {
        if (sistema.proveedores.some(p => p.codigo === codigo)) {
            throw new Error("El proveedor ya existe.");
        } else {
            sistema.proveedores.push(new Proveedor(codigo, razonSocial, telefono, mail));
            this.guardarProveedoresEnStorage(); // Guardar después de agregar el proveedor
        }
    }

    eliminarProveedor(codigo) {
        const index = sistema.proveedores.findIndex(proveedor => proveedor.codigo === codigo);
        if (index !== -1) {
            const usadoEnReactivo = sistema.reactivos.some(reactivo => reactivo.proveedor === codigo);
            if (usadoEnReactivo) {
                alert(`No se puede eliminar el proveedor ${codigo} porque está asociado a un reactivo.`);
                return false;
            }
            sistema.proveedores.splice(index, 1);
            this.guardarProveedoresEnStorage(); // Guardar después de eliminar el proveedor
            return true;
        }
        return false;
    }

     // Método para guardar los proveedores en localStorage y sessionStorage
    guardarProveedoresEnStorage() {
        // Guardar en localStorage
        localStorage.setItem("proveedores", JSON.stringify(sistema.proveedores));

    }

    // Método para cargar los proveedores desde localStorage o sessionStorage
    cargarProveedoresDesdeStorage() {
        const proveedoresLocal = localStorage.getItem("proveedores");
        if (proveedoresLocal) {
            sistema.proveedores = JSON.parse(proveedoresLocal);
        }
        
    }


     
    listarProveedores() {
        return sistema.proveedores.map(proveedor => proveedor.toString()).join("\n");
    }

}



