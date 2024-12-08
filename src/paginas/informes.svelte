<script>
    import Sidebar from "../lib/Sidebar.svelte";
    export let cols = "";
    import PedidosGastos from "../lib/PedidosGastos.svelte";
    import Graphic1 from "../lib/Graphic1.svelte";
    import Graphic2 from "../lib/Graphic2.svelte";
    import jsPDF from "jspdf";

    // Función para generar el informe en PDF
    function generarInformePDF() {
        const doc = new jsPDF();

        // Título del informe
        doc.setFontSize(22);
        doc.text("Informe de Ventas", 20, 20);

        // Subtítulos y datos ficticios
        doc.setFontSize(16);
        doc.text("Productos Mejor Vendidos", 20, 40);
        doc.setFontSize(12);
        doc.text("1. Gengar Pokémon Trainer Gear Plush Backpack - 150 unidades", 20, 50);
        doc.text("2. Pokémon Trainer Gear Raid Pass Lanyard & Badge Holder - 120 unidades", 20, 60);
        doc.text("3. Nendoroid Raihan Posable Figure - 100 unidades", 20, 70);

        doc.setFontSize(16);
        doc.text("Ganancias del Año", 20, 90);
        doc.setFontSize(12);
        doc.text("Total: 25,000 €", 20, 100);

        doc.setFontSize(16);
        doc.text("Pedidos y Gastos", 20, 120);
        doc.setFontSize(12);
        doc.text("Pedidos Totales: 75", 20, 130);
        doc.text("Gastos Totales: 10,000 €", 20, 140);

        // Pie de página
        doc.setFontSize(10);
        doc.text("Informe generado automáticamente", 20, 270);

        // Descargar el PDF
        doc.save("informe_ventas.pdf");
    }
</script>

<main class={cols}>
    <h1>Informe de Ventas</h1>
    <div class="seccion">
        <div class="downloadBtnCont">
            <div class="downloadBtn" on:click={generarInformePDF}>
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

<style>
    main {
        height: auto;
        background-color: beige;
        padding: 3%;
        overflow: hidden;
        position: relative;
    }
    p {
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
        display: flex;
        width: 100%;
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
        .downloadBtnCont {
            justify-content: end;
            margin-right: 30px;
        }
        .downloadBtn {
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
