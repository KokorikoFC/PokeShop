<script>
    import { pedidosStore } from "../lib/stores/store_orders.js";

    let historialPedidos = [];
    export let mostrarHistorial = false; // Se controla desde el padre

    $: historialPedidos = $pedidosStore;

    const cerrarHistorial = () => {
        mostrarHistorial = false;
        // Notifica al componente padre que el historial se cerró
        dispatch("cerrar");
    };

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
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
            <hr>
            <div class="historialPedidosCont">
                <ul>
                    {#each historialPedidos as pedido (pedido.id)}
                        <li>
                            <div class="pedido">
                                <span class="fecha">
                                    <strong>Fecha:</strong> {new Date(pedido.fecha).toLocaleString()}
                                </span>
                                <span class="producto">
                                    <strong>Producto:</strong> {pedido.producto.nombre}
                                </span>
                                <span class="cliente">
                                    <strong>Cliente:</strong> {pedido.cliente.nombre} - {pedido.cliente.email}
                                </span>
                                <span class="cantidad">
                                    <strong>Cantidad:</strong> {pedido.cantidad} unidades
                                </span>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}


<style>
    /* Estilo del contenedor principal */
    .historialCont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 15;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4); 
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .close:hover {
        transform: scale(1.2); 
    }

    .historial {
        position: relative;
        background-color: #fde379;
        width: 30%;
        height: 90%;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        overflow-y: hidden;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .historial h2 {
        text-align: center;
        font-size: 1.5rem;
        color: #333;
    }

    .historial hr {
        margin: 20px 0;
        border: 3px solid #724a18;
        opacity: 1;
        border-radius: 30px;
    }

    .historialPedidosCont {
        overflow-y: auto;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 15px;
    }

    .pedido {
        background: white;
        border-radius: 5px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .pedido:hover {
        background: #f0f8ff;
    }

    .fecha, .producto, .cliente, .cantidad {
        font-size: 0.95rem;
        color: #555;
    }


    /* Scroll estilizado */
    .historialPedidosCont::-webkit-scrollbar {
        width: 8px;
    }

    .historialPedidosCont::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .historialPedidosCont::-webkit-scrollbar-thumb {
        background: #724a1858;
        border-radius: 4px;
    }

    .historialPedidosCont::-webkit-scrollbar-thumb:hover {
        background: #724a18;
    }
     @media (max-width: 991.98px) {
        .historial {
            width: 100%;
        }
     }
</style>
