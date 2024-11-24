<script>
    import { pedidos } from "../lib/stores/store_orders.js";
    import { productos } from "../lib/stores/store_products.js";

    export let productId; // ID del producto a pedir
    export let closePopup; // Función para cerrar el pop-up

    let quantity = 1;

    const addPedido = () => {
        // Busca el producto en la lista de productos
        productos.subscribe((items) => {
            const producto = items.find((item) => item.id === productId);
            if (producto) {
                const nuevoPedido = {
                    id: Date.now(),
                    nombre: producto.nombre,
                    cantidad: quantity,
                    fecha: new Date().toLocaleDateString(),
                    total: producto.precio * quantity,
                };
                pedidos.update((oldPedidos) => [...oldPedidos, nuevoPedido]);
                alert("Pedido realizado con éxito.");
                closePopup(); // Cierra el pop-up
            }
        });
    };
</script>

<div class="popup">
    <h2>Pedir Unidades</h2>
    <p>Elige cuántas unidades quieres pedir:</p>
    <input type="number" bind:value={quantity} min="1" />
    <button on:click={addPedido}>Confirmar Pedido</button>
    <button on:click={closePopup}>Cancelar</button>
</div>

<style>
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    }
</style>
