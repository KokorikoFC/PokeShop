<!--Página de productos-->

<script>
    import { productos } from "../lib/stores/store_products.js";
    import Productos from "../lib/Product.svelte";
    import AddProduct from "../lib/AddProduct.svelte";
    import ProductPopUp from "../lib/ProductPopUp.svelte";
    export let cols = "";

    let productosData = [];
    let showAddProduct = false; // Controla si se muestra el formulario
    let selectedProduct = null; // Producto seleccionado

    // Se suscribe al store para obtener los productos
    $: productosData = $productos;

    function toggleAddProduct() {
        showAddProduct = !showAddProduct; // Alterna la visibilidad
    }

    function handleProductClick(event) {
        console.log("Producto seleccionado:", event.detail); // Verifica el producto
        selectedProduct = event.detail; // Extrae el producto del evento
    }
</script>

<style>
    main {
        height: 200vh;
        background-color: beige;
        padding: 2%;
    }

    .addProduct {
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }
    .addProduct:hover {
        background-color: #e0e0e0;
        transform: scale(1.05);
    }
    .content {
        background-color: #f3f3f3;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
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
        border: 1px solid black;
    }
    .icono {
        height: 40px;
        width: 40px;
        border: 1px solid black;
        border-radius: 50%;
        overflow: hidden;
    }

    .icono img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .perfil p {
        font-size: 20px;
    }
    .addProduct {
        border: 1px solid black;
        height: 8%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .addProduct:hover {
        cursor: pointer;
    }
    .products {
        width: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 54px;
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }
        .addProduct {
            width: 150px;
        }
    }
</style>

<main id="main" class={cols}>
    <div class="content">
        <div class="title_perfil">
            <div class="title">
                <h1>Productos</h1>
            </div>
            <div class="perfil">
                <figure class="icono">
                    <img src="src/img/foto.jpg" alt="perfil" />
                </figure>
                <p>Antonio Perez</p>
            </div>
        </div>
        <div class="addProduct" id="addProduct" on:click={toggleAddProduct}>
            <p>Añadir</p>
        </div>

        <div class="products" id="products">
            <!-- Captura el evento clickProduct -->
            <Productos {productosData} on:clickProduct={handleProductClick} />
        </div>

        {#if showAddProduct}
            <AddProduct />
        {/if}

        {#if selectedProduct}
            <!-- Popup con el producto seleccionado -->
            <ProductPopUp {selectedProduct} />
        {/if}
    </div>
</main>
