<!--Página de productos-->

<script>
    import { productos } from "../lib/stores/store_products.js";
    import Productos from "../lib/Product.svelte";
    import AddProduct from "../lib/AddProduct.svelte";
    import ProductPopUp from "../lib/ProductPopUp.svelte";
    import AlertPopUp from "../lib/AlertPopUp.svelte";
    import Historial from "../lib/HistorialPedidos.svelte";
    import EditProduct from "../lib/EditProduct.svelte";
    export let cols = "";

    let productosData = [];
    let showAddProduct = false; // Controla si se muestra el formulario
    let showEditProduct = false; // Controla si se muestra el formulario
    let selectedProduct = null; // Producto seleccionado
    let historial = false; // Controla si se muestra el historial

    // Se suscribe al store para obtener los productos
    $: productosData = $productos;

    function toggleAddProduct() {
        showAddProduct = !showAddProduct; // Alterna la visibilidad
    }

    function toggleHistorial() {
        historial = !historial; // Alterna la visibilidad
    }

    function handleProductClick(event) {
        console.log("Producto seleccionado:", event.detail); // Verifica el producto
        selectedProduct = event.detail; // Extrae el producto del evento
    }
</script>

<style>
    main {
        height: auto;
        background-color: beige;
        padding: 3%;
        overflow: hidden;
        position: relative;
    }

    p {
        margin: 0;
    }
    main::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    main::-webkit-scrollbar-track {
        background: transparent;
    }
    main::-webkit-scrollbar-thumb {
        background: transparent;
    }
    .overlay {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.356);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: none;
    }

    .addProduct {
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }
    .content {
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 50px;
        overflow: hidden;
    }
    .logo {
        width: 100%;
        height: 100px;
    }
    .title_perfil {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid black;
    }

    .perfil {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    .icono {
        height: 55px;
        width: 55px;
        border: 1px solid black;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 0;
    }

    .icono img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .perfil p {
        font-size: 20px;
    }
    .addProduct {
        height: 8%;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 10px;
    }
    .addProduct:hover {
        cursor: pointer;
    }

    .historial {
        border: 1px solid black;
        height: 8%;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 10px;
    }

    .historial:hover {
        cursor: pointer;
    }

    .products {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 54px;
        padding-bottom: 100px;
    }
    .addProduct,
    .historial {
        width: 100%;
        border-radius: 10px;
        background-color: #fde379;
        font-size: 20px;
        border: none;
    }
    .addProduct:hover,
    .historial:hover {
        transition: all 0.3s ease;
        background-color: #edaf52;
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }
        .menu{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
        
    .addProduct,
    .historial {
        width: 150px;
    }

    }
</style>

<main id="main" class={cols}>
    <div class="overlay"></div>
    <div class="content">
        <div class="title_perfil">
            <div class="title">
                <h1>Productos</h1>
            </div>
            <div class="perfil">
                <figure class="icono">
                    <img src="public/img/foto.jpg" alt="perfil" />
                </figure>
                <p>Antonio Perez</p>
            </div>
        </div>
        <div class="menu">
            <div class="addProduct" id="addProduct" on:click={toggleAddProduct}>
                <p>Añadir</p>
            </div>
            <div class="historial" on:click={toggleHistorial}>
                <p>Historial</p>
            </div>
        </div>

        <div class="products" id="products">
            <!-- Captura el evento clickProduct -->
            <Productos {productosData} on:clickProduct={handleProductClick} />
        </div>

        {#if showAddProduct}
            <AddProduct on:closePopup={() => (showAddProduct = false)} />
        {/if}
        {#if showEditProduct}
            <EditProduct producto={selectedProduct} on:closePopup={() => (showEditProduct = false)} />
        {/if}

        {#if selectedProduct}
            <ProductPopUp
                {selectedProduct}
                on:closePopup={() => (selectedProduct = null)}
            />
        {/if}
        <AlertPopUp />
    </div>
</main>
{#if historial}
    <Historial />
{/if}
