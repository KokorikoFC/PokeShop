<script>
    import { productos } from "../lib/stores/store_products.js";
    import { clientes } from "../lib/stores/clientes_store.js";
    import { addPedido } from "../lib/stores/store_orders.js"; // Importar la función para añadir pedidos
    import { createEventDispatcher } from "svelte";
    import { alertMessage } from "../lib/stores/alert_store.js"; // Importa el store de alerta

    const dispatch = createEventDispatcher();

    let productosDisponibles = [];
    let clientesDisponibles = [];
    let productoSeleccionado = null;
    let clienteSeleccionado = null;
    let cantidad = 0;

    // Estado para errores
    let errorMensaje = "";

    // Suscribirse a los stores
    productos.subscribe((value) => {
        productosDisponibles = value;
    });

    clientes.subscribe((value) => {
        clientesDisponibles = value;
    });

    function pedirProducto() {
        errorMensaje = ""; // Reiniciar el mensaje de error
        if (!clienteSeleccionado) {
            errorMensaje = "Por favor, selecciona un cliente.";
            return;
        }

        if (!productoSeleccionado) {
            errorMensaje = "Por favor, selecciona un producto.";
            return;
        }

        if (cantidad <= 0) {
            errorMensaje = "Por favor, introduce una cantidad válida.";
            return;
        }

        if (productoSeleccionado.unidades < cantidad) {
            errorMensaje = `No hay suficientes unidades disponibles. Solo quedan ${productoSeleccionado.unidades} unidades.`;
            return;
        }

        // Guardar el pedido en el store
        const nuevoPedido = {
            id: Date.now(), // Generar un identificador único
            producto: {
                id: productoSeleccionado.id,
                nombre: productoSeleccionado.nombre,
            },
            cliente: {
                id: clienteSeleccionado.id,
                nombre: clienteSeleccionado.nombre,
                email: clienteSeleccionado.email,
            },
            cantidad,
            fecha: new Date().toISOString(), // Fecha actual en formato ISO
        };

        addPedido(nuevoPedido); // Añadir el pedido al store

        // Restar las unidades del producto seleccionado
        productos.updateUnidades(productoSeleccionado.id, -cantidad);

        // Mostrar mensaje de alerta
        alertMessage.set(
            `Pedido realizado:\n` +
                `Cliente: ${clienteSeleccionado.nombre}\n` +
                `Producto: ${productoSeleccionado.nombre}\n` +
                `Cantidad: ${cantidad}`,
        );

        // Reiniciar los campos
        cantidad = 0;
        productoSeleccionado = null;
        clienteSeleccionado = null;
    }

    function cancelar() {
        dispatch("closePopup");
    }
</script>

<div class="placeOrder-container">
    <h2>Realizar Pedido</h2>

    <div class="form-group">
        <label for="cliente">Selecciona un cliente:</label>
        <select id="cliente" bind:value={clienteSeleccionado}>
            <option value="" disabled selected>Selecciona un cliente</option>
            {#each clientesDisponibles as cliente}
                <option value={cliente}
                    >{cliente.nombre} - {cliente.email}</option
                >
            {/each}
        </select>
    </div>

    <div class="form-group">
        <label for="producto">Selecciona un producto:</label>
        <select id="producto" bind:value={productoSeleccionado}>
            <option value="" disabled selected>Selecciona un producto</option>
            {#each productosDisponibles as producto}
                <option value={producto}
                    >{producto.nombre} (Unidades disponibles: {producto.unidades})</option
                >
            {/each}
        </select>
    </div>

    <div class="form-group">
        <label for="cantidad">Cantidad:</label>
        <input
            id="cantidad"
            type="number"
            min="1"
            bind:value={cantidad}
            placeholder="Introduce la cantidad"
        />
    </div>

    <!-- Mostrar mensaje de error -->
    {#if errorMensaje}
        <div class="error">{errorMensaje}</div>
    {/if}

    <div class="actions">
        <button on:click={pedirProducto} class="btn btn-primary"
            >Realizar Pedido</button
        >
        <button on:click={cancelar} class="btn btn-secondary">Cancelar</button>
    </div>
</div>

<style>
    .placeOrder-container {
        width: 770px;
        height: auto;
        position: fixed;
        top: 50%;
        left: 57%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        background-color: #edaf52;
        border-radius: 20px;
        z-index: 2;
    }

    h2 {
        text-align: center;
        color: #333;
    }

    .error {
        color: red;
        font-size: 0.9rem;
        text-align: center;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 10px;
        border-radius: 5px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        font-weight: bold;
    }

    select,
    input {
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
    }

    .actions {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .btn {
        padding: 10px 20px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        border: none;
    }

    .btn-primary {
        background-color: #887464;
        color: white;
    }

    .btn-secondary {
        background-color:#887464;
        color: white;
    }

    .btn-primary:hover {
        background-color:  #473d34;
    }

    .btn-secondary:hover {
        background-color:  #473d34;
    }
</style>
