<script>
    export let cols = "";
</script>


<style>
    .pedidos_gastos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 100%;
    }
    .cuadrados_pedidos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: top center;
        align-items: baseline;
        height: auto;
        width: 40%;
    }
    .pedidos {
        height: auto;
        width: 25%;
        border: 2px solid black;
        background-color: rgba(255, 0, 0, 0.344);
    }
    .cuadrados_gastos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: baseline;
        height: auto;
        width: 40%;
    }
    .gastos{
        height: auto;
        width: 100%;
        border: 2px solid black;
        background-color: rgba(255, 0, 0, 0.344);
    }
    @media (min-width: 992px) {
        .pedidos_gastos{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            height: 100%;
            width: 50%;
        }
        .cuadrados_pedidos {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            text-align: top center;
            align-items: baseline;
            height: 100%;
            width: 100%;
        }
        .pedidos {
            height: auto;
            width: 45%;
            border: 2px solid black;
            background-color: rgba(255, 0, 0, 0.344);
        }
        .cuadrados_gastos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: baseline;
            height: 100%;
            width: 100%;
        }
        .gastos{
            height: auto;
            width: 100%;
            border: 2px solid black;
            background-color: rgba(255, 0, 0, 0.344);
        }


    }
</style>
    <div class="pedidos_gastos">
        <div class="cuadrados_pedidos">
            <div class="pedidos">
                <p>Pedidos noviembre</p>
                <h3>3009€</h3>
                <p>+1.5% de ganancias</p>
            </div>
            <div class="pedidos">
                <p>Pedidos noviembre</p>
                <h3>3009€</h3>
                <p>+1.5% de ganancias</p>
            </div>
        </div>
        <div class="cuadrados_gastos">
            <div class="gastos">
                <p>Gastos noviembre</p>
                <h3>3009€</h3>
                <p>1.5% - de gastos</p>
            </div>
            <div class="gastos">
                <p>Gastos noviembre</p>
                <h3>3009€</h3>
                <p>1.5% - de gastos</p>
            </div>
        </div>
    </div>