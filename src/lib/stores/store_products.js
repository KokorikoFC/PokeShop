import { writable, derived } from 'svelte/store';

// Crear un store para productos
export const productosStore = (() => {
    console.log("crearStoreProductos");
    const { subscribe, set, update } = writable([]);

    // Productos iniciales que se añadirán al store al inicializarlo
    const productosIniciales = [
        {
            id: 1,
            nombre: "Cynthia & Garchomp Pokémon Trainers Figure",
            descripcion: "En los videojuegos de Pokémon, la Campeona de Sinnoh, Cynthia, muestra rápidamente su generosidad...",
            precio: 64.99,
            unidades: 10,
            valoracion: 4,
            urlImagen: "src/img/Cynthia&GarchompPokémonTrainersFigure.jpg"
        },
        {
            id: 2,
            nombre: "Pokémon Giant Pins: Arcanine Oversize Pin",
            descripcion: "Arcanine es un Pokémon enorme, ¡y este pin extragrande tiene el tamaño perfecto para capturar toda esa magnificencia!",
            precio: 19.99,
            unidades: 15,
            valoracion: 5,
            urlImagen: "src/img/PokémonGiantPinsArcanineOversizePin.jpg"
        },
        {
            id: 3,
            nombre: "Poké Ball",
            descripcion: "¡Captura tus Pokémon favoritos con esta auténtica Poké Ball!",
            precio: 14.99,
            unidades: 30,
            valoracion: 4,
            urlImagen: "src/img/PokeBall.jpg"
        }
    ];

    // Establece los productos iniciales en el store
    set(productosIniciales);

    return {
        subscribe,
        // Función para añadir un producto al store
        addProducto: (producto) => update(productos => {
            // Función para limpiar el nombre y generar la URL de la imagen
            const limpiarNombre = (nombre) =>
                nombre.toLowerCase()
                    .replace(/[^a-z0-9]/gi, '') // Eliminar caracteres especiales
                    .replace(/\s+/g, ''); // Eliminar espacios

            const nombreLimpio = limpiarNombre(producto.nombre);

            const nuevoProducto = {
                id: Date.now(),
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio,
                unidades: producto.unidades,
                valoracion: (Math.random() * 4.5 + 0.5).toFixed(1), // Valoración aleatoria entre 0.5 y 5
                urlImagen: `src/img/${nombreLimpio}.jpg`
            };

            return [...productos, nuevoProducto];
        }),

        // Función para eliminar un producto del store por ID
        removeProducto: (id) => update(productos =>
            productos.filter(producto => producto.id !== id)
        ),

        // Función para resetear el store a un array vacío
        reset: () => set([])
    };
})();

// Exportar el store para su uso en la aplicación
export const productos = productosStore;

// Crear un store derivado para contar el número de productos
export const numeroProductos = derived(productos, ($productos) =>
    $productos.length
);
