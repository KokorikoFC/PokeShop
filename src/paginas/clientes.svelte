<script>
    import Sidebar from "../lib/Sidebar.svelte";
    import { clientes } from "../lib/stores/clientes_store";
    export let cols = "";
    let cliente = { id: null, nombre: "", email: "", telefono: "" };
    let editMode = false;

    let listaClientes = [];
    clientes.subscribe((value) => {
        listaClientes = value;
    });

    function agregarCliente() {
        if (cliente.nombre && cliente.email && cliente.telefono) {
            if (editMode) {
                clientes.update((c) =>
                    c.map((item) => (item.id === cliente.id ? cliente : item)),
                );
                editMode = false;
            } else {
                cliente.id =
                    listaClientes.length > 0
                        ? Math.max(...listaClientes.map((c) => c.id)) + 1
                        : 1;
                clientes.update((c) => [...c, cliente]);
            }
            limpiarFormulario();
        }
    }

    function eliminarCliente(id) {
        clientes.update((c) => c.filter((item) => item.id !== id));
    }

    function editarCliente(c) {
        cliente = { ...c };
        editMode = true;
    }

    function limpiarFormulario() {
        cliente = { id: null, nombre: "", email: "", telefono: "" };
        editMode = false;
    }
</script>

<main class={cols}>
    <section class="container">
        <div class="tituloContainer">

            <h1>Gestión de Clientes</h1>
        </div>

        <!-- Formulario -->
        <form on:submit|preventDefault={agregarCliente}>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input id="nombre" type="text" bind:value={cliente.nombre} placeholder="Nombre del cliente" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" bind:value={cliente.email} placeholder="Correo electrónico" />
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input id="telefono" type="tel" bind:value={cliente.telefono} placeholder="Teléfono" />
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">{editMode ? "Guardar Cambios" : "Añadir Cliente"}</button>
                {#if editMode}
                    <button type="button" class="btn btn-secondary" on:click={limpiarFormulario}>Cancelar</button>
                {/if}
            </div>
        </form>

        <!-- Tabla de Clientes -->
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listaClientes as c}
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.email}</td>
                            <td>{c.telefono}</td>
                            <td class="actions">
                                <button class="btn btn-edit" on:click={() => editarCliente(c)}>Editar</button>
                                <button class="btn btn-delete" on:click={() => eliminarCliente(c.id)}>Eliminar</button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </section>
</main>


<style>
    main {
        height: auto;
        background-color: beige;
        padding: 3%;
        overflow: hidden;
        position: relative;
    }

    .tituloContainer {
        width: 100%;
        display: flex;
        color: black;
    }

    .tituloContainer h1{
        color: black;
    }

    p {
        margin: 0;
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
    .container {
        width: 100%;
    }

    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
    }

    /* Form styles */
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #edaf52;
        padding: 1.5rem;
        border-radius: 10px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-group label {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    .form-group input {
        padding: 0.5rem;
        font-size: 1rem;
        border:none;
        border-radius: 5px;
    }

    .form-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .btn {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #887464;
        color: #fff;
    }

    .btn-secondary {
        background-color: #6c757d;
        color: #fff;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-secondary:hover {
        background-color: #5a6268;
    }

    /* Table styles */
    .table-wrapper {
        margin-top: 2rem;
        overflow-x: auto; 
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 100px 0px;
    }

    table th,
    table td {
        padding: 0.75rem;
        text-align: left;
        background-color:#fde3798f ;
        text-align: center;
    }

    table th {
        background-color: #fde379;
    }

    .actions {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn-edit {
        background-color: #ffc107;
        color: #000;
    }

    .btn-delete {
        background-color: #dc3545;
        color: #fff;
    }

    .btn-edit:hover {
        background-color: #e0a800;
    }

    .btn-delete:hover {
        background-color: #c82333;
    }
    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            margin-left: 16%;
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }
    }
</style>
