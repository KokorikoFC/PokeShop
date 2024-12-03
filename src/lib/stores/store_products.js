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
        nombre: "Nendoroid Raihan Posable Figure",
        descripcion:"El Líder de Gimnasio más fuerte de la región de Galar, Roy, entra en combate como un Nendoroid decidido pero alegre, acompañado de su fiel compañero Duraludon.",
        precio: 59.99,
        unidades: 3,
        valoracion: 5,
        urlImagen: "public/img/raihan_nendroid.jpg"
    },
    {
        id: 4,
        nombre: "Pokémon Legends: Arceus Poké Ball Replica Figuree",
        descripcion: "La región de Hisui, explorada por primera vez en el videojuego Pokémon Legends: Arceus, se celebra en esta réplica de figura de Poké Ball! Cada detalle exquisito",
        precio: 69.99,
        unidades: 14,
        valoracion: 5,
        urlImagen: "public/img/pokeball_arceus.jpg"
    },
    {
        id: 5,
        nombre: "Pokémon Trainer Gear Raid Pass Lanyard & Badge Holder",
        descripcion: "¡Sí, Entrenadores, es hora de salir y lucir su Equipo de Entrenador Pokémon! Este colorido cordón con portatarjetas está inspirado en un Pase de Incursión de Pokémon GO.",
        precio: 12.99,
        unidades: 14,
        valoracion: 4,
        urlImagen: "public/img/trainer_gear.jpg"
    },
    {
        id: 6,
        nombre: "Gengar Pokémon Trainer Gear Plush Backpack",
        descripcion: "¡Sal ahí afuera con una mochila de peluche de Gengar en un vibrante color púrpura! Cuenta con una sonrisa de dientes afilados y un pequeño compartimento para llevar lo esencial en un día fuera.",
        precio: 34.99,
        unidades: 17,
        valoracion: 4,
        urlImagen: "public/img/gengar_back.jpg"
    },
    {
        id: 7,
        nombre: "Pokémon Delicious Adventure: Galar Toast Curry Takedown Figure",
        descripcion: "La región de Galar es conocida por su delicioso curry, algo que los Entrenadores pueden disfrutar junto a sus Pokémon. En esta figura de Pokémon Delicious Adventure, Yamper parece haberlo pasado tan bien comiendo su curry que está a punto de rodar de la alegría.",
        precio: 14.99,
        unidades: 23,
        valoracion: 5,
        urlImagen: "public/img/perrito.jpg"
    },
    {
        id: 8,
        nombre: "Tandemaus Comfy Friends Plush - 11 ¾ In.",
        descripcion: "¿Podrías tú, o un Entrenador en formación, necesitar un abrazo? ¡El peluche Tandemaus Comfy Friends es perfecto para los mimos! Este peluche es un compañero acogedor y reconfortante para jugar.",
        precio: 35.99,
        unidades: 2,
        valoracion: 5,
        urlImagen: "public/img/ratones.jpg"
    },
    {
        id: 9,
        nombre: "Shinx Sitting Cuties Plush - 6 In.",
        descripcion: "El peluche Shinx Sitting Cuties está relleno con microperlas, por lo que se sienta cuando lo colocas sobre una superficie plana. Este peluche de tamaño palma es una forma divertida y encantadora de mostrar tu Pokémon tipo Eléctrico favorito, originalmente descubierto en Sinnoh.",
        precio: 16.99,
        unidades: 12,
        valoracion: 5,
        urlImagen: "public/img/shinx.jpg"
    },
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
