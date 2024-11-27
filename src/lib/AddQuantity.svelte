<script>
    import { createEventDispatcher } from "svelte";
    import { productosStore } from "../lib/stores/store_products.js";
    import { pedidosStore, addPedido } from "../lib/stores/store_orders.js";
    export let nombre = "Producto";
    export let unidadesDisponibles = 0;
    export let productoSeleccionado = {}; 
    import { alertMessage } from "../lib/stores/alert_store.js"; 

    let cantidad = 0;

    const dispatch = createEventDispatcher();

    
    // Función que se encargará de manejar el pedido
    const handlePedido = () => {
        if (cantidad > 0 ) {
            // Actualiza el stock del producto
            productosStore.updateUnidades(productoSeleccionado.id, cantidad);

            // Añadir al historial de pedidos
            addPedido({
                nombre,
                cantidad,
                fecha: new Date().toLocaleString(),
            });

            // Emitir un evento para cerrar el popup y mostrar la confirmación
            alertMessage.set('${cantidad} unidades de ${nombre}');
            dispatch("closePopup"); // Cerramos el popup
        } else {
            alertMessage.set("Selecciona al menos una unidad");
        }
    };

    // Función para manejar la cancelación
    const handleCancelar = () => {
        dispatch("cancelar");
    };
</script>

<style>
    main {
        height: 50%;
        width: 50%;
        background-color: beige;
        border: 2px solid black;
        padding: 3%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
</style>

<main>
    <h3>{nombre}</h3>
    <p>{unidadesDisponibles} Unidades disponibles</p>
    <div class="product-unidades">
        <button on:click={() => (cantidad = Math.max(0, cantidad - 1))}
            >-</button
        >
        <input
            type="number"
            bind:value={cantidad}
            min="0"
            max={unidadesDisponibles}
        />
        <button on:click={() => cantidad++}>+</button>
        <span>unidades</span>
    </div>
    <button on:click={handlePedido}>Pedir</button>
    <button on:click={handleCancelar}>Cancelar</button>
</main>
