import { writable } from 'svelte/store';

// Crear un store para los pedidos
export const pedidosStore = writable([]);

// Función para agregar un pedido
export const addPedido = (pedido) => {
    pedidosStore.update((pedidos) => {
        return [...pedidos, pedido];  
    });
};

// Sincronización automática con el LocalStorage
export const syncWithLocalStorage = () => {
    pedidosStore.subscribe((pedidos) => {
        localStorage.setItem('historialPedidos', JSON.stringify(pedidos));
    });
};

// Función para cargar el historial desde el LocalStorage
export const cargarPedidosDesdeLocalStorage = () => {
    const pedidosGuardados = localStorage.getItem('historialPedidos');
    if (pedidosGuardados) {
        try {
            const parsedPedidos = JSON.parse(pedidosGuardados);
            if (Array.isArray(parsedPedidos)) {
                pedidosStore.set(parsedPedidos); // Establecer el historial de pedidos si es válido
            }
        } catch (error) {
            console.error("Error al cargar los pedidos del LocalStorage:", error);
        }
    }
};

// Inicializar el historial desde el LocalStorage
cargarPedidosDesdeLocalStorage();

// Hacer efectiva la sincronización automática
syncWithLocalStorage();
