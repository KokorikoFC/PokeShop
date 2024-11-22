<script>
    import { productos } from "../lib/stores/store_products.js"; // Importa el store de productos
    import { onMount } from "svelte"; // Para ejecutar código al montar el componente

    let productosData = [];

    // Se suscribe al store para obtener los productos
    $: {
        productosData = $productos;
    }

        // Genera las estrellas de la valoración
        function generateStars(rating) {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                // Estrella completa
                stars.push('full');
            } else if (rating >= i - 0.5) {
                // Media estrella
                stars.push('half');
            } else {
                // Estrella vacía
                stars.push('empty');
            }
        }
        return stars;
    }
</script>

<main id="main">
    <header>
        <div class="logo"></div>
        <div class="menu">
            <p>Productos</p>
            <p>Informes</p>
        </div>
    </header>

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
        <div class="addProduct" id="addProduct">
            <p>Añadir</p>
        </div>

        <div class="products" id="products">
            {#each productosData as product (product.id)}
                <div class="product">
                    <figure class="product-img">
                        <img
                            id="imgProduct"
                            src="src/img/{product.urlImagen}"

                            alt={product.nombre}
                        />
                    </figure>
                    <div class="name">
                        <p id="nameProduct">{product.nombre}</p>
                    </div>
                    <div class="price">
                        <p id="priceProduct">{product.precio}€</p>
                    </div>
                    <div class="review">
                        {#each generateStars(product.valoracion) as star}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                {#if star === 'full'}
                                    <path fill="#FFD700" d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"/>
                                {:else if star === 'half'}
                                    <defs>
                                        <linearGradient id="halfStar" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="50%" stop-color="#FFD700" />
                                            <stop offset="50%" stop-color="#CCCCCC" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#halfStar)" d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"/>
                                {:else}
                                    <path fill="#CCCCCC" d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"/>
                                {/if}
                            </svg>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    header {
        width: 15%;
        height: 100%;
        position: fixed; /* Fija el header */
        left: 0; /* Lo posiciona en el lado izquierdo */
        top: 0; /* Se asegura de que comience desde arriba */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid black;
        background-color: white;
        z-index: 10; /* Asegura que el header esté encima del content */
    }

    .content {
        width: 85%;
        height: 100%;
        margin-left: 15%; /* Espacio para el header fijo */
        background-color: #f3f3f3;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 30px;
        gap: 20px;
    }

    .logo {
        width: 100%;
        height: 100px;
    }

    .title_perfil {
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid black;
    }

    .title {
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
        height: 50px;
        width: 50px;
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
        width: 200px;
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
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 30px;
    }

    .product {
        border: 1px solid black;
        width: 20%;
        min-width: 240px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: white;
        padding: 10px;
        gap: 10px;
    }

    .product:hover {
        cursor: pointer;
    }

    .product-img {
        width: 100%;
        height: 60%;
        border: 1px solid black;
    }

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .name {
        width: 100%;
        height: 15%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
    }

    .price {
        width: 100%;
        height: 6%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }

    .review {
        width: 100%;
        height: 6%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    .review svg {
        width: 30px;
    }
</style>
