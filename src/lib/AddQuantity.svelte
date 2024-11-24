<script>
    export let nombre = "Producto";
    export let unidadesDisponibles = 0;
    let cantidad = 0;
</script>

<main>
    <h3>{nombre}</h3>
    <p>{unidadesDisponibles} Unidades disponibles</p>
    <div class="product-unidades">
        <button on:click={() => (cantidad = Math.max(0, cantidad - 1))}
            >-</button
        >
        <input type="number" bind:value={cantidad} min="0" />
        <button on:click={() => cantidad++}>+</button>
        <span>unidades</span>
    </div>
    <button>Pedir</button>
</main>

<style>
    main{
        height: 50%;
        width: 50%;
        background-color: beige;
        border: 2px solid black;
        padding: 3%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
</style>