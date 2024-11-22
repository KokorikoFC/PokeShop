<script>
    import { productos } from "../lib/stores/store_products.js";

    let nombre = "";
    let descripcion = "";
    let cantidad = 0;
    let precio = 0;
    let imageFile = null; // Archivo de imagen seleccionado

    // Configuración de Cloudinary
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/djtukekvp/image/upload";
    const uploadPreset = "ml_default";

    // Función para subir la imagen a Cloudinary
    const subirImagen = async () => {
        if (!imageFile) {
            alert("Selecciona una imagen antes de añadir el producto.");
            return null;
        }

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", uploadPreset);

        try {
            const response = await fetch(cloudinaryUrl, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.secure_url) {
                return data.secure_url; // Retorna la URL segura de la imagen subida
            } else {
                alert("Error al subir la imagen.");
                return null;
            }
        } catch (error) {
            console.error("Error al subir la imagen a Cloudinary:", error);
            alert("Error al subir la imagen.");
            return null;
        }
    };

    // Función para limpiar el nombre del producto
    const limpiarNombre = (nombre) =>
        nombre
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "") // Eliminar caracteres especiales
            .replace(/\s+/g, ""); // Eliminar espacios

            const addProduct = async () => {
    const urlImagen = await subirImagen();

    if (urlImagen && nombre && descripcion && precio > 0 && cantidad > 0) {
        const nombreLimpio = limpiarNombre(nombre);

        const nuevoProducto = {
            id: Date.now(),
            nombre,
            descripcion,
            precio,
            unidades: cantidad,
            valoracion: parseFloat((Math.random() * 4.5 + 0.5).toFixed(1)), // Valoración entre 0.5 y 5
            urlImagen // Usamos la URL devuelta por Cloudinary
        };

        // Actualiza el store con el nuevo producto
        productos.addProducto(nuevoProducto);

        // Limpia los campos del formulario
        nombre = "";
        descripcion = "";
        cantidad = 0;
        precio = 0;

        alert("Producto añadido!");
        console.log("Nuevo producto añadido:", nuevoProducto);

    } else {
        alert("Por favor, rellena todos los campos correctamente.");
    }
};

</script>


<div class="addProduct-container">
    <div class="addproduct-img-info">
        <div class="addproduct-img">
            <input 
                type="file" 
                id="fileInput" 
                accept="image/*"
                on:change={(event) => imageFile = event.target.files[0]}
            />
            <label for="fileInput" class="custom-label">+</label>
        </div>
        
        <div class="product-info">
            <input 
                class="input-nombre"
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                bind:value={nombre}
            />
            <textarea
                class="input-descripcion"
                name="descripcion"
                placeholder="Descripción del producto"
                bind:value={descripcion}
            ></textarea>
        </div>
    </div>
    <div class="product-unidades-price">
        <div class="product-unidades">
            <button on:click={() => (cantidad = Math.max(0, cantidad - 1))}
                >-</button
            >
            <input type="number" bind:value={cantidad} min="0" />
            <button on:click={() => cantidad++}>+</button>
            <span>unidades</span>
        </div>
        <div class="product-price">
            <input
                type="number"
                bind:value={precio}
                min="0"
                step="0.01"
                placeholder="Precio"
            /> €
        </div>
    </div>
    <button on:click={addProduct}>Añadir producto</button>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input {
        width: 100%;
        font-size: 20px;
        padding-inline: 10px;
        background: white;
    }

    textarea {
        width: 100%;
        height: 100%;
        font-size: 20px;
        padding: 10px;
        resize: none;
        /* Desactiva la redimensión */
        background: white;
    }

    .addProduct-container {
        border: 1px solid black;
        width: 800px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
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
    }

    .custom-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: #f0f0f0;
        border: 2px dashed #ccc;
        border-radius: 50%;
        font-size: 24px;
        font-weight: bold;
        color: #666;
        cursor: pointer;
    }

    .addproduct-img input {
        display: none;
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
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 5px;
    }

    /* Ocultar las flechas de incremento/decremento en navegadores modernos */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield; /* Para Firefox */
    }

    .text-unidades {
        font-size: 14px;
    }

    .product-price {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .price-input {
        width: 60px;
        text-align: right;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .product-btn {
        width: 100%;
        height: 15%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
