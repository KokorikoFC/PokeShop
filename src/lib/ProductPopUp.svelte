<!--ProductPopUP-->

<script>
    import { createEventDispatcher } from "svelte";
    import { productosStore } from "../lib/stores/store_products.js";
    import { pedidosStore, addPedido } from "../lib/stores/store_orders.js";
    import AddQuantity from "./AddQuantity.svelte";

    export let selectedProduct;

    const dispatch = createEventDispatcher(); // Para emitir eventos al componente padre

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

    function cancelar() {
        dispatch("closePopup"); // Cierra el popup al cancelar
    }

    let activeComponent = ""; // Controla qué componente se muestra
    const openAddQuantity = () => {
        activeComponent = "addQuantity";
    };
</script>

<div class="addProduct-container">
    <div class="close" on:click={cancelar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="#000000" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
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
    <div class="product-unidades-price">
        <div class="product-unidades">
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
        <div class="deleteBtns">
            <button on:click={eliminarProducto}>Eliminar producto</button>
            <button id="btnCancelar" on:click={ocultarEliminarProducto}
                >Cancelar</button
            >
        </div>
    </div>
    <div class="btnCont" id="btnCont">
        <button class="btnReedirigir" on:click={openAddQuantity}
            >Pedir unidades</button
        >
        <button class="btnReedirigir" on:click={mostrarEliminarProducto}
            >Eliminar producto</button
        >
        <button class="btnReedirigir">Editar producto</button>
    </div>

    {#if activeComponent === "addQuantity"}
        <AddQuantity
            nombre={selectedProduct.nombre}
            unidadesDisponibles={selectedProduct.unidades}
            productoSeleccionado={selectedProduct}
            on:cancelar={cancelar}
        />
    {/if}
</div>

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
        top: 4%;
        right: 3%;
        border: 1px solid black;
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
        height: 100%;
        border-radius: 10px;
        padding: 20px;
        font-size: 18px;
        border: 4px solid #fde379;
        width: 100%;
    }

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

    .deleteCont {
        border: 1px solid black;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        display: none;
    }

    .deleteText {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }

    .deleteBtns {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .deleteBtns button {
        width: 30%;
        height: 100%;
        background-color: #887464;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 8px;
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
    }
</style>
