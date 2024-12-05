<script>
    import Sidebar from "../lib/Sidebar.svelte";
    export let cols = "";
    import PedidosGastos from "../lib/PedidosGastos.svelte";
    import Graphic1 from "../lib/Graphic1.svelte";
    import Graphic2 from "../lib/Graphic2.svelte";
</script>

<style>
    main {
        height: auto;
        background-color: beige;
        padding: 3%;
        overflow: hidden;
        position: relative;
    }
    p{
        margin-bottom: 0;
    }
    .seccion {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        min-height: 85vh;
        width: 100%;
        padding-bottom: 100px;
        margin-top: 50px;
    }
    .cuadrados {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: flex-start;
        height: 100%;
    }
    .graficas {
        height: auto;
        width: 100%;
        margin-bottom: 100px;
    }
    .graficas h3 {
        margin-top: 50px;
    }

    .datos {
        width: 100%;
    }
    .downloadBtnCont {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .downloadBtn {
        border-radius: 10px;
        background-color: #fde379;
        font-size: 20px;
        border: none;
        font-weight: bold;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
    .downloadBtn:hover {
        transition: all 0.3s ease;
        cursor: pointer;
        background-color: #edaf52;

    }
    @media (min-width: 992px) {
        .downloadBtnCont{
            justify-content: end;
        }
        .downloadBtn{
            width: 200px;
        }
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }

        .graficas {
            height: 40%;
            background-color: rgb(255, 255, 255);
            margin: 0 /*auto*/;
            margin-bottom: 0px;
            width: 50%;
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
        .seccion {
            padding: 0;
            gap: 0px;
            background-color: white;
        }
        .graficas,
        .datos {
            width: 45%;
            box-sizing: border-box;
        }
    }
</style>

<main class={cols}>
    <h1>Informe de Ventas</h1>
    <div class="seccion">
        <div class="downloadBtnCont">
            <div class="downloadBtn">
                <p>Descargar informe</p>
            </div>
        </div>
        <div class="graficas">
            <h3>Productos mejor vendidos</h3>
            <Graphic1 />
            <h3>Ganancias del año</h3>
            <Graphic2 />
        </div>
        <div class="datos">
            <PedidosGastos />
        </div>
    </div>
</main>
