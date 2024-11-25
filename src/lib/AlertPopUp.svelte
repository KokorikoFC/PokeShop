<script>
    import { alertMessage } from "../lib/stores/alert_store.js"; // Importa el store de alerta
    import { fade } from 'svelte/transition'; // Importa la transición fade

    let mensaje = "";
    let showAlert = false;

    $: mensaje = $alertMessage; // Suscribirse al store para obtener el mensaje

    // Mostrar el mensaje y ocultarlo después de 2 segundos
    $: if (mensaje) {
        showAlert = true;
        setTimeout(() => {
            showAlert = false; // Ocultar el alert después de 2 segundos
        }, 2000);
    }
</script>

{#if showAlert}
    <div class="alertCont" in:fade={{duration: 500}} out:fade={{duration: 500}}>
        <p>{mensaje}</p>
    </div>
{/if}

<style>
    p {
        margin: 0;
    }

    .alertCont {
        position: absolute;
        top: 0%; /* Coloca el mensaje cerca de la parte superior */
        left: 50%; /* Centra horizontalmente respecto al contenedor padre */
        transform: translateX(-50%); /* Ajusta la posición para centrar el elemento */
        border: 1px solid black;
        padding: 15px;
        z-index: 15;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
