<script>
    export let cols = "";
</script>


<style>
        main{
        height: 200vh;
        background-color: beige;
        padding: 3%;
    }
    .seccion{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 100%;
    }
    .pedidos_gastos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 100%;
    }
    .cuadrado_graficas{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: auto;
        width: 50%;
    }
    .graficas {
        height: 50%;
        width: 100%;
        border: 2px solid black;
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
        text-align: center;
        background-color: rgba(255, 0, 0, 0.344);
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }
        .seccion{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 100%;
        }
        .pedidos_gastos{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            height: 100%;
            width: 50%;
        }
        .cuadrado_graficas{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            height: 100%;
            width: 50%;
        }
        .graficas {
            height: 50%;
            width: 90%;
            border: 2px solid black;
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
            height: auto    ;
            width: 100%;
            border: 2px solid black;
            text-align: center;
            background-color: rgba(255, 0, 0, 0.344);
        }

        main::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
        main::-webkit-scrollbar-track {
            background: transparent;
        }
        main::-webkit-scrollbar-thumb {
            background: transparent; 
        }
    }
</style>
<div class="seccion">
    <div class="cuadrado_graficas">
        <div class="graficas">
            <p>Aquí van las gráficas</p>
        </div>
        <div class="graficas">
            <p>Aquí van las gráficas</p>
        </div>
    </div>
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
</div>