<script>
    export let cols = "string";
</script>

<style>
    main {
        height: 200vh;
        background-color: beige;
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 13%;
            height: 90vh;
            overflow-y: scroll;
            border-radius: 30px;
        }
        .graficas {
            height: 200vh;
            width: 80vw;
            background-color: rgb(255, 255, 255);
            margin: 0 auto;
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

<main class={cols}>
    <h1>Informe de Ventas</h1>
    <p>Aquí puedes mostrar un informe detallado...</p>
    <div class="graficas"></div>
</main>
