

export const generarId = () => {
    const numero = Math.floor(Math.random).toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return numero + fecha;
}