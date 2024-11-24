<script>
    import svelteLogo from "./assets/svelte.svg";
    import { Router, Route } from "svelte-routing";
    import viteLogo from "/vite.svg";
    import Productos from "./paginas/products.svelte";
    import Informes from "./paginas/informes.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
    import "bootstrap/dist/css/bootstrap.min.css";
</script>

<style>
    .row {
        --bs-gutter-x: 0rem;
        --bs-gutter-y: 0rem;
    }

    .mainContent {
        height: 100vh;
        width: 100vw;
        overflow-y: scroll;
        padding: 20px;
        background-color: #fde379;
    }
</style>

<main class="row d-flex align-items-center">
    <Sidebar cols="col-lg-2 col-sm-12 order-2 order-lg-1" />
    
    <div
        class="mainContent row d-flex align-items-center justify-content-center"
    >
    <Router>
      <Route path="/informes">
        <Informes cols="col-lg-10 col-sm-12 order-1 order-lg-2" />
    </Route>
    <Route path="/inventario">
        <Productos cols="col-lg-10 col-sm-12 order-1 order-lg-2" />
    </Route>
  </Router>

    </div>
</main>
