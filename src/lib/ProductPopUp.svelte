<!--ProductPopUP-->

<script>
    export let selectedProduct; // Declara selectedProduct como prop
    console.log("Producto seleccionado para el pop up:", selectedProduct); // Verifica el producto
</script>

<style>
   p{
    margin-bottom: 0;
   }
    .imgProdcuto {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .addProduct-container {
        max-width: 800px;
        height: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
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
    .btnCont{
        display: flex;
        width: 100%;
        height: 10%;
        justify-content: space-between;
    }
    .btnCont button{
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
            top: 45%;
            height: 80vh;
            width: 95%;
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

        .product-unidades-price {
            flex-direction: column;
            height: 20%;
            gap: 10px;
        }
        .product-unidades,
        .product-price {
            width: 100%;
            justify-content: start;
            align-items: center;
        }
    }
</style>

<div class="addProduct-container">
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
    <div class="btnCont">
        <button>Pedir unidades</button>
        <button>Eliminar producto</button>
        <button>Editar producto</button>
    </div>
</div>
