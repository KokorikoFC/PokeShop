import { writable, derived } from 'svelte/store';

// Crea un store para productos
export const productosStore = (() => {
    console.log("crearStoreProductos")
    const { subscribe, set, update } = writable([]);

    // Productos de prueba que se añadirán al inicializar el store
    const productosIniciales = [
        {
            id: 1,
            nombre: "Cynthia & Garchomp Pokémon Trainers Figure",
            descripcion: "En los videojuegos de Pokémon, la Campeona de Sinnoh, Cynthia, muestra rápidamente su generosidad...",
            precio: 64.99,
            unidades: 10,
            valoracion: 4,
            urlImagen: "Cynthia&GarchompPokémonTrainersFigure.jpg"
        },
        {
            id: 2,
            nombre: "Pokémon Giant Pins: Arcanine Oversize Pin",
            descripcion: "Arcanine es un Pokémon enorme, ¡y este pin extragrande tiene el tamaño perfecto para capturar toda esa magnificencia! El Pokémon legendario está aquí como un pin gigante que lo convierte en un accesorio llamativo y una incorporación que llama la atención a cualquier colección.",
            precio: 19.99,
            unidades: 15,
            valoracion: 5,
            urlImagen: "PokémonGiantPinsArcanineOversizePin.jpg"
        },
        {
            id: 3,
            nombre: "Poké Ball",
            descripcion: "¡Captura tus Pokémon favoritos con esta auténtica Poké Ball!",
            precio: 14.99,
            unidades: 30,
            valoracion: 4,
            urlImagen: "/PokeBall.jpg"
        }
    ];

    // Establece los productos iniciales en el store
    set(productosIniciales);

    return {
        subscribe,
        addProducto: (p) => update(productos => {
            const nuevoProducto = {
                id: Date.now(),
                nombre: p.nombre,
                descripcion: p.descripcion,
                precio: p.precio,
                unidades: p.unidades,
                valoracion: p.valoracion,
                urlImagen: p.urlImagen
            };
            return [...productos, nuevoProducto];
        }),
        removeProducto: (id) => update(productos =>
            productos.filter(producto => producto.id !== id)
        ),
        reset: () => set([]) // Resetea el store
    };
})();

// Usar el store para productos
export const productos = productosStore;

// Crear un derived store para contar los productos
export const numeroProductos = derived(productos, ($productos) =>
    $productos.length
);
