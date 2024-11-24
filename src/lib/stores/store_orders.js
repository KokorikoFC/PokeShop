import { writable } from 'svelte/store';

export const pedidosStore = writable([]);

// Función para agregar un pedido
export const addPedido = (pedido) => {
    pedidosStore.update((pedidos) => {
        return [...pedidos, pedido];  
    });
};


export const syncWithLocalStorage = () => {
    pedidosStore.subscribe((pedidos) => {
        localStorage.setItem('historialPedidos', JSON.stringify(pedidos));
    });
};

// Función para cargar el historial desde el LocalStorage
export const cargarPedidosDesdeLocalStorage = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem('historialPedidos'));
    if (pedidosGuardados) {
        pedidosStore.set(pedidosGuardados);  // Establecer el historial de pedidos guardado
    }
};

cargarPedidosDesdeLocalStorage();
