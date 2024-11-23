<!--ProductPopUP-->

<script>
    
    export let selectedProduct; // Declara selectedProduct como prop
    console.log("Producto seleccionado para el pop up:", selectedProduct); // Verifica el producto

</script>

<div class="addProduct-container">
    <div class="addproduct-img-info">
        <div class="addproduct-img">
            <img class="imgProdcuto" src={selectedProduct.urlImagen} alt={selectedProduct.nombre} />
        </div>
        
        <div class="product-info">
            <h2>{selectedProduct.nombre}</h2>
            <p>{selectedProduct.descripcion}</p>
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
    <button >Pedir unidades</button>
    <button >Eliminar producto</button>
    <button >Editar producto</button>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .imgProdcuto{
        width: 100%;
    }

    .addProduct-container {
        border: 1px solid black;
        width: 800px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 58%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        background-color: white;
    }

    .addproduct-img-info {
        width: 100%;
        height: 60%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .addproduct-img {
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        position: relative;
    }

    .custom-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: #f0f0f032;
        border: 2px dashed #ccc;
        border-radius: 50%;
        font-size: 24px;
        font-weight: bold;
        color: #666;
        cursor: pointer;
        position: absolute;
    }

    .addproduct-img input {
        display: none;
    }

    .selected-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .product-info {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid black;
    }

    .input-nombre {
        background-color: antiquewhite;
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .input-descripcion {
        background-color: rgb(255, 210, 150);
        width: 100%;
        height: 80%;
    }

    .product-unidades-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 15%;
        padding: 10px;
        background-color: #d9dde1;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        padding: 10px;
    }

    .product-unidades {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .product-price {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .btn-minus,
    .btn-plus {
        background-color: #d9dde1;
        border: none;
        font-size: 16px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .btn-minus:hover,
    .btn-plus:hover {
        background-color: #c4c9ce;
    }

    .quantity-input {
        width: 80px;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
</style>