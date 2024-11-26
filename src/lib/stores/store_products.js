import { writable, derived } from 'svelte/store';

// Productos iniciales
const productosIniciales = [
    {
        id: 1,
        nombre: "Cynthia & Garchomp Pokémon Trainers Figure",
        descripcion: "En los videojuegos de Pokémon, la Campeona de Sinnoh, Cynthia, muestra rápidamente su generosidad...",
        precio: 64.99,
        unidades: 10,
        valoracion: 4,
        urlImagen: "public/img/Cynthia&GarchompPokémonTrainersFigure.jpg"
    },
    {
        id: 2,
        nombre: "Pokémon Giant Pins: Arcanine Oversize Pin",
        descripcion: "Arcanine es un Pokémon enorme, ¡y este pin extragrande tiene el tamaño perfecto para capturar toda esa magnificencia!",
        precio: 19.99,
        unidades: 15,
        valoracion: 5,
        urlImagen: "public/img/PokémonGiantPinsArcanineOversizePin.jpg"
    },
    {
        id: 3,
        nombre: "Poké Ball",
        descripcion: "¡Captura tus Pokémon favoritos con esta auténtica Poké Ball!",
        precio: 14.99,
        unidades: 30,
        valoracion: 4,
        urlImagen: "public/img/PokeBall.jpg"
    }
];

// Recuperar datos de Local Storage (si existen)
const savedProductos = JSON.parse(localStorage.getItem('productos'));

// Crear un store para productos
export const productosStore = (() => {
    const { subscribe, set, update } = writable(savedProductos || productosIniciales); // Usar productos iniciales si Local Storage está vacío

    // Sincronizar con Local Storage
    const syncWithLocalStorage = (productos) => {
        localStorage.setItem('productos', JSON.stringify(productos));
    };

    return {
        subscribe,
        // Añadir un producto
        addProducto: (producto) => update((productos) => {
            const nuevosProductos = [...productos, producto];
            syncWithLocalStorage(nuevosProductos); // Sincronizar al añadir
            return nuevosProductos;
        }),

        // Eliminar un producto
        removeProducto: (id) => update((productos) => {
            const nuevosProductos = productos.filter((producto) => producto.id !== id);
            syncWithLocalStorage(nuevosProductos); // Sincronizar al eliminar
            return nuevosProductos;
        }),

        // Actualizar unidades de un producto
        updateUnidades: (id, cantidad) => update((productos) => {
            const nuevosProductos = productos.map((producto) => {
                if (producto.id === id) {
                    producto.unidades += cantidad; 
                }
                return producto;
            });
            syncWithLocalStorage(nuevosProductos); // Sincronizar al actualizar
            return nuevosProductos;
        }),

        // Actualizar un producto
        updateProducto: (productoEditado) => update((productos) => {
            const nuevosProductos = productos.map((producto) =>
                producto.id === productoEditado.id ? productoEditado : producto
            );
            syncWithLocalStorage(nuevosProductos); // Sincronizar al actualizar
            return nuevosProductos;
        }),

        // Resetear a productos iniciales
        reset: () => {
            set(productosIniciales);
            syncWithLocalStorage(productosIniciales); // Sincronizar al resetear
        }
    };
})();

// Exportar el store
export const productos = productosStore;

// Crear un store derivado para contar el número de productos
export const numeroProductos = derived(productos, ($productos) => $productos.length);
