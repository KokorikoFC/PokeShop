<script>
    export let cols = "";
</script>

<style>
    p {
        margin: 0;
    }
    .pedidos_gastos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 50px;
    }
    .pedidos_gastos h2 {
        font-size: 20px;
    }

    .cuadrados_pedidos {
        display: flex;
        justify-content: space-between;
        height: 50%;
    }
    .cuadrados_gastos {
        display: flex;
        flex-direction: column;
        gap: 50px;
        height: 50%;
    }
    .pedidos {
        background-color: #edaf52;
        width: 45%;
        padding: 20px;
        border-radius: 20px;
    }
    .gastos {
        background-color: #887464;
        width: 100%;
        padding: 20px;
        border-radius: 20px;
        color: white;
    }
</style>

<div class="pedidos_gastos">
    <div class="cuadrados_pedidos">
        <div class="pedidos">
            <h2>Pedidos noviembre</h2>
            <h3>3009€</h3>
            <p>+8.7% de ganancias</p>
        </div>
        <div class="pedidos">
            <h2>Pedidos noviembre</h2>
            <h3>3052€</h3>
            <p>+1.9% de ganancias</p>
        </div>
    </div>
    <div class="cuadrados_gastos">
        <div class="gastos">
            <h2>Gastos noviembre</h2>
            <h3>1064€</h3>
            <p>2.5% - de gastos</p>
        </div>
        <div class="gastos">
            <h2>Gastos noviembre</h2>
            <h3>2659€</h3>
            <p>5.2% - de gastos</p>
        </div>
    </div>
</div>
