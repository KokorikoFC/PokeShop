<!-- Componente del producto -->

<script>
    import { createEventDispatcher } from "svelte";
    export let productosData = []; // Propiedad para recibir los productos

    // Genera las estrellas de la valoración
    function generateStars(rating) {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push("full"); // Estrella completa
            } else if (rating >= i - 0.5) {
                stars.push("half"); // Media estrella
            } else {
                stars.push("empty"); // Estrella vacía
            }
        }
        return stars;
    }
    

    const dispatch = createEventDispatcher(); // Dispatcher para eventos

    function ProductClick(product) {
        dispatch("clickProduct", product); // Emite el evento con el producto
    }
</script>

{#each productosData as product (product.id)}
    <div class="product" on:click={() => ProductClick(product)}>
        <figure class="product-img">
            <img id="imgProduct" src={product.urlImagen} alt={product.nombre} />
        </figure>
        <div class="name">
            <p id="nameProduct">{product.nombre}</p>
        </div>
        <div class="price">
            <p id="priceProduct">{product.precio}€</p>
        </div>
        <div class="review">
            {#each generateStars(product.valoracion) as star}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    {#if star === "full"}
                        <path
                            fill="#FFD700"
                            d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"
                        />
                    {:else if star === "half"}
                        <defs>
                            <linearGradient
                                id="halfStar"
                                x1="0"
                                x2="1"
                                y1="0"
                                y2="0"
                            >
                                <stop offset="50%" stop-color="#FFD700" />
                                <stop offset="50%" stop-color="#CCCCCC" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#halfStar)"
                            d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"
                        />
                    {:else}
                        <path
                            fill="#CCCCCC"
                            d="M12 2l2.39 7.42h7.79l-6.39 4.63l2.39 7.42L12 16.84L7.82 21.47l2.39-7.42l-6.39-4.63h7.79L12 2z"
                        />
                    {/if}
                </svg>
            {/each}
        </div>
    </div>
{/each}

<style>
       p{
        margin-bottom: 0;
    }
    .product {
        width: 20%;
        min-width: 240px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: rgb(245, 95, 95);
        padding: 15px;
        gap: 10px;
        border-radius: 10px;
    }

    .product:hover {
        cursor: pointer;
    }

    .product-img {
        width: 100%;
        height: 60%;
        margin: 0;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
    }

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .name {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
        background-color: white;
        border-radius: 10px;
    }

    .price {
        width: 100%;
        height: 6%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
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
