<script>
    export let cols = ""; 
</script>

<style>
    header {
        height: 100px;
        background-color: rgb(201, 201, 27);
        position: fixed;
        bottom: 0;
    }


    @media (min-width: 992px) {
        header {
            width: 13%;
            height: 100vh; 
            background-color: rgb(179, 242, 131);
        }
    }

</style>

<header class={cols}>
    <p>hola</p>
</header>
