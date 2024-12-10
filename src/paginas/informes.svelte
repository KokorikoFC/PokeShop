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

    // Configuración inicial de márgenes y fuentes
    const marginLeft = 20;
    let yPosition = 20; // Posición vertical inicial

    // Título principal
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Informe de Ventas", marginLeft, yPosition);
    yPosition += 10;

    // Línea divisoria
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPosition, 190, yPosition); // Desde el margen izquierdo al derecho
    yPosition += 10;

    // Sección: Productos mejor vendidos
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Productos Mejor Vendidos", marginLeft, yPosition);
    yPosition += 10;

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    const productos = [
        "1. Gengar Pokémon Trainer Gear Plush Backpack - 150 unidades",
        "2. Pokémon Trainer Gear Raid Pass Lanyard & Badge Holder - 120 unidades",
        "3. Nendoroid Raihan Posable Figure - 100 unidades"
    ];
    productos.forEach((producto) => {
        doc.text(producto, marginLeft, yPosition);
        yPosition += 10;
    });

    yPosition += 10;

    // Sección: Ganancias del año
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Ganancias del Año", marginLeft, yPosition);
    yPosition += 10;

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Total: 25,000 €", marginLeft, yPosition);
    yPosition += 20;

    // Sección: Pedidos y gastos
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Pedidos y Gastos", marginLeft, yPosition);
    yPosition += 10;

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    const pedidosYGastos = [
        "Pedidos Totales: 75",
        "Gastos Totales: 10,000 €"
    ];
    pedidosYGastos.forEach((item) => {
        doc.text(item, marginLeft, yPosition);
        yPosition += 10;
    });

    // Pie de página
    doc.setFont("Helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
        "Informe generado automáticamente el " + new Date().toLocaleDateString(),
        marginLeft,
        280
    );

    // Guardar el PDF
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
