<script>
    import { pedidosStore } from "../lib/stores/store_orders.js";
    let historialPedidos = [];
    let mostrarHistorial = true;

    // Suscripción reactiva para mantener actualizado el historial de pedidos
    $: historialPedidos = $pedidosStore;

    const cerrarHistorial = () => {
        mostrarHistorial = false;
    };
</script>

{#if mostrarHistorial}
    <div class="historialCont">
        <div class="historial">
            <div class="close" on:click={cerrarHistorial}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                >
                    <path
                        fill="#000000"
                        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                    ></path>
                </svg>
            </div>
            <h2>Historial de Pedidos</h2>
            <ul>
                {#each historialPedidos as pedido (pedido.fecha)}
                    <li>
                        <div class="pedido">
                            <span class="fecha">{pedido.fecha}</span>
                            <span class="nombre">{pedido.nombre}</span>
                            <span class="cantidad">{pedido.cantidad} unidades</span>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<style>
    /* Contenedor principal que cubre toda la pantalla */
    .historialCont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 15;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4); /* Fondo oscuro con transparencia */
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
    }

    /* Botón de cierre */
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .close:hover {
        transform: scale(1.2); /* Efecto de zoom */
    }

    /* Panel del historial */
    .historial {
        position: relative;
        background-color: #ffffff;
        width: 30%;
        height: 90%;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .historial h2 {
        text-align: center;
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 20px;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 10px;
    }

    /* Lista de pedidos */
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 15px;
    }

    /* Cada pedido */
    .pedido {
        background: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .pedido:hover {
        background: #f0f8ff; /* Efecto hover */
    }

    .fecha {
        font-size: 0.9rem;
        color: #666;
    }

    .nombre {
        font-size: 1.1rem;
        font-weight: bold;
        color: #333;
    }

    .cantidad {
        font-size: 0.95rem;
        color: #555;
    }

    /* Scroll estilizado */
    .historial::-webkit-scrollbar {
        width: 8px;
    }

    .historial::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .historial::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    .historial::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
