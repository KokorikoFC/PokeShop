<!--ProductPopUP-->

<script>
    import { createEventDispatcher } from "svelte";
    import { productosStore } from "../lib/stores/store_products.js";
    import { pedidosStore, addPedido } from "../lib/stores/store_orders.js";
    import { alertMessage } from "../lib/stores/alert_store.js";

    import EditProduct from "./EditProduct.svelte"; // Asegúrate de importar el componente EditProduct

    export let selectedProduct;

    const dispatch = createEventDispatcher(); // Para emitir eventos al componente padre

    let showEditProduct = false; // Controla la visibilidad del popup de editar

    function mostrarEditarProducto() {
        showEditProduct = true; // Muestra el popup de editar
    }

    const handleProductoActualizado = (productoActualizado) => {
        selectedProduct = productoActualizado; // Actualiza el producto
        showEditProduct = false; // Cierra el popup de edición
    };

    function mostrarEliminarProducto() {
        let btnCont = document.getElementById("btnCont");
        btnCont.style.display = "none";
        let deleteCont = document.getElementById("deleteCont");
        deleteCont.style.display = "flex";
    }

    function ocultarEliminarProducto() {
        let btnCont = document.getElementById("btnCont");
        btnCont.style.display = "flex";
        let deleteCont = document.getElementById("deleteCont");
        deleteCont.style.display = "none";
    }

    function eliminarProducto() {
        console.log("Producto a eliminar:", selectedProduct);
        productosStore.removeProducto(selectedProduct.id);
        dispatch("closePopup"); // Notifica al padre que cierre el popup
    }

    let cantidad = 0;

    function mostrarHacerPedido() {
        let btnCont = document.getElementById("btnCont");
        btnCont.style.display = "none";
        let orderCont = document.getElementById("orderCont");
        orderCont.style.display = "flex";
        let productUnidadesPrice = document.getElementById(
            "product-unidades-price",
        );
        productUnidadesPrice.style.display = "none";
    }

    function ocultarHacerPedido() {
        let btnCont = document.getElementById("btnCont");
        btnCont.style.display = "flex";
        let orderCont = document.getElementById("orderCont");
        orderCont.style.display = "none";
        let productUnidadesPrice = document.getElementById(
            "product-unidades-price",
        );
        productUnidadesPrice.style.display = "flex";
    }

    function hacerPedido() {
        console.log("Añadir:", selectedProduct);
        if (cantidad > 0) {
            productosStore.updateUnidades(selectedProduct.id, cantidad);
            addPedido({
                nombre: selectedProduct.nombre,
                cantidad,
                fecha: new Date().toLocaleString(),
            });
            alertMessage.set(
                `Pedido realizado: ${cantidad} unidades de ${selectedProduct.nombre}`,
            );
            dispatch("closePopup");
        } else {
            alertMessage.set("Por favor, pon una cantidad válida.");
        }
    }

    function cancelar() {
        dispatch("closePopup");
    }
</script>

<div class="addProduct-container">
    <div class="close" on:click={cancelar}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            ><path
                fill="#000000"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
            ></path></svg
        >
    </div>
    <div class="addproduct-img-info">
        <div class="addproduct-img">
            <img
                class="imgProdcuto"
                src={selectedProduct.urlImagen}
                alt={selectedProduct.nombre}
            />
        </div>

        <div class="product-info">
            <h2>{selectedProduct.nombre}</h2>
            <div class="product-info__description">
                <p>{selectedProduct.descripcion}</p>
            </div>
        </div>
    </div>
    <div class="product-unidades-price" id="product-unidades-price">
        <div class="product__unidades">
            <p>Unidades disponibles: {selectedProduct.unidades}</p>
        </div>
        <div class="product-price">
            <p>Precio: {selectedProduct.precio}€</p>
        </div>
    </div>
    <div class="deleteCont" id="deleteCont">
        <div class="deleteText">
            <p>¿Estás seguro de que quieres eliminar este producto?</p>
        </div>
        <div class="orderBtns">
            <button on:click={eliminarProducto}>Eliminar producto</button>
            <button id="btnCancelar" on:click={ocultarEliminarProducto}
                >Cancelar</button
            >
        </div>
    </div>
    <div class="orderCont" id="orderCont">
        <div class="orderText">
            <p>¿Cuánto quieres pedir?</p>
        </div>
        <div class="cuantityInputCont">
            <p class="orderTextUnits">
                Unidades disponibles: {selectedProduct.unidades}
            </p>
            <div class="product-unidades">
                <button on:click={() => (cantidad = Math.max(0, cantidad - 1))}
                    >
                    <p>-</p>
                    </button
                >
                <input
                    type="number"
                    bind:value={cantidad}
                    min="0"
                    max={selectedProduct.unidades}
                />
                <button on:click={() => cantidad++}>
                    <p>+</p>
                </button>
                <span>unidades</span>
            </div>
        </div>
        <div class="orderBtns">
            <button on:click={hacerPedido}>Añadir producto</button>
            <button id="btnCancelar" on:click={ocultarHacerPedido}
                >Cancelar</button
            >
        </div>
    </div>
    <div class="btnCont" id="btnCont">
        <button class="btnReedirigir" on:click={mostrarHacerPedido}
            >Pedir unidades</button
        >
        <button class="btnReedirigir" on:click={mostrarEliminarProducto}
            >Eliminar producto</button
        >
        <button class="btnReedirigir" on:click={mostrarEditarProducto}
            >Editar producto</button
        >
    </div>
</div>

{#if showEditProduct}
    <EditProduct
        bind:producto={selectedProduct}
        on:productoActualizado={(e) => handleProductoActualizado(e.detail)}
        on:closePopup={() => (showEditProduct = false)}
    />
{/if}


<style>
    p {
        margin-bottom: 0;
    }
    .imgProdcuto {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .addProduct-container {
        width: 770px;
        height: 500px;
        position: fixed;
        top: 50%;
        left: 57%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 40px;
        background-color: #edaf52;
        border-radius: 20px;
        z-index: 2;
    }

    .close {
        z-index: 10;
        position: absolute;
        top: 3%;
        right: 2%;
        width: fit-content;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .close:hover {
        cursor: pointer;
    }

    .addproduct-img-info {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .addproduct-img {
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: white;
        border-radius: 10px;
        border: 4px solid #fde379;
        overflow: hidden;
    }

    .product-info {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .product-info__description {
        background-color: white;
        text-align: justify;
        height: 100%;
        border-radius: 10px;
        padding: 20px;
        font-size: 18px;
        border: 4px solid #fde379;
        width: 100%;
        overflow-y: scroll;
    }
    .product-info__description::-webkit-scrollbar{
        width: 8px;
    }
    /*
    .product-info__description::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    .product-info__description::-webkit-scrollbar-thumb{
        background: #724a1858;
        border-radius: 4px;
    }
*/
    .product-unidades-price {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
        border-radius: 10px;
        font-family: Arial, sans-serif;
        font-size: 22px;
        padding: 0 25px;
        background-color: white;
        border: 4px solid #fde379;
    }

    .product-unidades {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        height: 100%;
        width: 50%;
    }

    .product-price {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        height: 100%;
        width: 50%;
    }
    .btnCont {
        display: flex;
        width: 100%;
        height: 10%;
        justify-content: space-between;
    }
    .btnCont button {
        width: 30%;
        height: 100%;
        background-color: #887464;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .btnCont button:hover,.deleteBtns button:hover,.orderBtns button:hover {
        transition: all 0.3s;
        background-color: #473d34;
    }
    .deleteCont,
    .orderCont {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        display: none;
    }
    .orderCont {
        height: 40%;
        flex-direction: column;
        justify-content: space-between;
    }

    .deleteText,
    .orderText {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: 10px;
        font-weight: 600;
    }

    .cuantityInputCont {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .orderText {
        flex-direction: column;
        padding-top: 15px;
    }
    .orderTextUnits {
        font-size: 18px;
        background-color: white;
        border: 4px solid #fde379;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
    }

    .product-unidades input {
        width: 30%;
        border: none;
        border-radius: 10px;
        border: 4px solid #fde379;
        text-align: center;
        font-size: 18px;
        padding: 5px;
    }
    .product-unidades span {
        font-size: 18px;
    }
    .product-unidades button {
        padding: 0;
        font-size: 20px;
        aspect-ratio: 1;
        height: 30px;
        border: none;
        border-radius: 50%;
        background-color: #fde379;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }
    .product-unidades button p{
        margin-bottom: 3px;
        font-weight: bold;
    }

    .deleteBtns,
    .orderBtns {
        height: 35px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .deleteBtns button,
    .orderBtns button {
        width: 30%;
        height: 100%;
        background-color: #887464;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
    

    @media (max-width: 991.98px) {
        .addProduct-container {
            left: 50%;
            top: 50%;
            height: 98vh;
            width: 95%;
            z-index: 5;
            padding: 15px;
        }
        .addproduct-img-info {
            flex-direction: column;
            gap: 20px;
        }
        .addproduct-img {
            width: 100%;
            height: 50%;
        }
        .imgProdcuto {
            object-fit: contain;
        }
        .product-info {
            height: 50%;
            width: 100%;
            gap: 15px;
        }
        .product-info__description {
            overflow-y: scroll;
        }
        .product-unidades-price {
            flex-direction: column;
            height: 15%;
        }
        .product-unidades,
        .product-price {
            width: 100%;
            justify-content: start;
            align-items: center;
            font-size: 20px;
        }
        .cuantityInputCont {
            height: 50%;
            flex-direction: column;
        }
        .orderBtns {
            height: 60px;
        }
    }
</style>
