import { writable } from "svelte/store";

export const clientes = writable([
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", telefono: "123456789" },
    { id: 2, nombre: "Ana Gómez", email: "ana.gomez@example.com", telefono: "987654321" },
    { id: 3, nombre: "Luis Martínez", email: "luis.martinez@example.com", telefono: "456123789" }
]);
