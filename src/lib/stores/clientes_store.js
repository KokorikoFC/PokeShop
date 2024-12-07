import { writable } from "svelte/store";

export const clientes = writable([
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", telefono: "123456789" },
    { id: 2, nombre: "Ana Gómez", email: "ana.gomez@example.com", telefono: "987654321" },
    { id: 3, nombre: "Luis Martínez", email: "luis.martinez@example.com", telefono: "456123789" },
    { id: 4, nombre: "Carlos Mendoza", email: "carlos.mendoza@example.com", telefono: "654321987" },
    { id: 5, nombre: "Lucía Fernández", email: "lucia.fernandez@example.com", telefono: "612345678" },
    { id: 6, nombre: "Javier Rodríguez", email: "javier.rodriguez@example.com", telefono: "677123456" },
    { id: 7, nombre: "Isabel Gómez", email: "isabel.gomez@example.com", telefono: "699852741" },
    { id: 8, nombre: "Roberto Sánchez", email: "roberto.sanchez@example.com", telefono: "688123789" }
]);