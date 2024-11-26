<script>
    export let cols = "";
</script>


<style>
        main {
        height: 200vh;
        background-color: beige;
        padding: 3%;
    }
    .cuadrados {
        display: flex;
        flex-direction: row;
        /* justify-content: space-around; */
        text-align: center;
        align-items: flex-start;
        height: 100%;
    }
    .graficas {
        height: auto;
        width: 40%;
        border: 2px solid black;
    }
    .pedidos {
        height: auto;
        width: 25%;
        border: 2px solid black;
        margin: 20px;
    }
    .cuadrados_gastos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: auto;
        width: 40%;
    }
    .gastos{
        height: auto;
        width: 100%;
        border: 2px solid black;
        text-align: center;
        margin: 20px;
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;

        }
        .cuadrados{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            height: 100%;
        }
        .graficas {
            height: 50vh;
            background-color: rgb(255, 255, 255);
            margin: 0 /*auto*/;
            border: 2px solid black;
        }
        .pedidos {
            height: max-content;
            background-color: rgb(255, 255, 255);
            margin: 0 /*auto*/;
            border: 2px solid black;
        }
        .gastos {
            height: 30vh;
            background-color: rgb(255, 255, 255);
            margin: 0 /*auto*/;
            border: 2px solid black;
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

<div class="cuadrados">
    <div class="graficas">
        <p>Aquí van las gráficas</p>
    </div>
    <div class="pedidos">
        <p>Pedidos noviembre</p>
        <h3>3009€</h3>
        <p>1.5% + de ganancias</p>
    </div>
    <div class="pedidos">
        <p>Pedidos noviembre</p>
        <h3>3009€</h3>
        <p>1.5% + de ganancias</p>
    </div>
</div>
<div class="cuadrados">
    <div class="graficas">
        <p>Aquí van las gráficas</p>
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