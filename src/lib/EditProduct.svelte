<script>
    import { createEventDispatcher } from "svelte";
    import { productos } from "./stores/store_products.js";
    import { alertMessage } from "../lib/stores/alert_store.js"; 

    export let producto;

    let nombre = producto.nombre;
    let descripcion = producto.descripcion;
    let cantidad = producto.unidades;
    let precio = producto.precio;
    let imageFile = null; // Archivo de imagen seleccionado
    let imageUrl = producto.urlImagen // Variable para almacenar la URL de la imagen seleccionada

    const dispatch = createEventDispatcher();
    // Función para manejar el cambio de imagen
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            imageFile = file;
            imageUrl = URL.createObjectURL(file); // Crear la URL de la imagen
        }
    };

    // Configuración de Cloudinary
    const cloudinaryUrl =
        "https://api.cloudinary.com/v1_1/djtukekvp/image/upload";
    const uploadPreset = "ml_default";

     // Función para subir la imagen a Cloudinary
    const subirImagen = async () => {


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
    
                return null;
            }
        } catch (error) {
            console.error("Error al subir la imagen a Cloudinary:", error);
     
            return null;
        }
    };

    // Función para limpiar el nombre del producto
    const limpiarNombre = (nombre) =>
        nombre
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "") // Eliminar caracteres especiales
            .replace(/\s+/g, ""); // Eliminar espacios

    const editProduct = async () => {
        const urlImagen = await subirImagen() || imageUrl; // Mantener la imagen actual si no se sube una nueva

        if (urlImagen && nombre && descripcion && precio > 0 && cantidad > 0) {
            const nombreLimpio = limpiarNombre(nombre);

            const productoEditado = {
                ...producto,
                nombre,
                descripcion,
                precio,
                unidades: cantidad,
                urlImagen: urlImagen, // Usar la nueva URL de la imagen o la actual
            };

            // Actualiza el store con el producto editado
            productos.updateProducto(productoEditado);

            // Emite el producto actualizado
            dispatch("productoActualizado", productoEditado);

            // Cierra el formulario de edición
            dispatch("closePopup");

            alertMessage.set("Producto editado!");
            console.log("Producto editado:", productoEditado);
        } else {
            alertMessage.set("Producto añadido!");
        }
    };

    function cancelar() {
        dispatch("closePopup"); // Cierra el popup al cancelar
    }
</script>

<div class="addProduct-container">
    <div class="addproduct-img-info">
        <div class="addproduct-img">
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                on:change={handleFileChange}
            />
            <label for="fileInput" class="custom-label">+</label>
            <!-- Mostrar la imagen seleccionada -->
            {#if imageUrl}
                <img
                    src={imageUrl}
                    alt="Imagen del producto"
                    class="selected-image"
                />
            {/if}
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
    <div class="contenedor-btn">

        <button class="addBtn" on:click={editProduct}>Editar producto</button>
        <button class="addBtn" on:click={cancelar}>Cancelar</button>
    </div>
</div>

<style>
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
        background: white;
    }

    .addProduct-container {
        min-width: 770px;
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

    .custom-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: white;
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
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .product-info {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .input-nombre {
        background-color: white;
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        border: 4px solid #fde379;
    }

    .input-descripcion {
        background-color: white;
        width: 100%;
        height: 70%;
        border: none;
        border-radius: 10px;
        border: 4px solid #fde379;
    }
    .input-descripcion::-webkit-scrollbar{
        width: 8px;
    }


    .product-unidades-price {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15%;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        font-size: 22px;
        padding: 0 25px;
    }

    .product-unidades {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 100%;
    }
    .product-unidades input {
        height: 70%;
        width: 30%;
        border: none;
        border-radius: 10px;
        border: 4px solid #fde379;
        text-align: center;
    }
    .product-unidades button {
        padding: 0;
        font-size: 30px;
        aspect-ratio: 1;
        height: 60%;
        border: none;
        border-radius: 50%;
        background-color: #fde379;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }

    .product-price {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        height: 100%;
    }
    .product-price input {
        height: 70%;
        width: 50%;
        border: none;
        border-radius: 10px;
        border: 4px solid #fde379;
        text-align: center;
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

    .contenedor-btn {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    .addBtn {
        width: 200px;
        height: 100%;
        background-color: #887464;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .addBtn:hover {
        transition: all 0.3s;
        background-color: #473d34;
    
    }   
    @media (max-width: 991.98px) {
        .addProduct-container {
            left: 50%;
            top: 50%;
            height: 97vh;
            width: 95%;
            min-width: auto;
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
        .selected-image {
            object-fit: contain;
        }
        .product-info {
            height: 50%;
            width: 100%;
            gap: 15px;
        }
        .input-nombre {
            height: 25%;
        }
        .product-unidades-price {
            flex-direction: column;
            height: 20%;
            gap: 10px;
        }
        .product-unidades input,
        .product-price input {
            height: 90%;
            width: 60%;
        }
        .product-price input {
            margin-left: 45px;
        }
        .product-unidades,
        .product-price {
            width: 100%;
            justify-content: start;
            align-items: center;
        }
        .addBtn {
           width: 40%;
           height: 65px;
        }
    }
</style>
