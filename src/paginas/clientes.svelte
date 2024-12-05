<script>
    import Sidebar from "../lib/Sidebar.svelte";
    import { clientes } from "../lib/stores/clientes_store";
    let cols = "";
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
    <!--
        <div class="container">
                <div class="titulo">
                    <h1>Gestión de Clientes</h1>
                </div>
                
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
            </div
        -->
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

    @media (min-width: 992px) {
        main {
            background-color: rgb(255, 255, 255);
            height: 95vh;
            overflow-y: scroll;
            border-radius: 35px;
        }
    }
</style>
