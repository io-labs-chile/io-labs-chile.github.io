// Función para enviar datos a ThingsBoard
function enviarDatosAThingsBoard() {
    // Ejemplo de uso
    var datos = { acceso: 1 };
    // URL del servidor de ThingsBoard
    var url = 'https://thingsboard.cloud/api/v1/7ezy7ogd2dk1qhhm5plp/telemetry';

    // Configuración de la solicitud
    var configuracion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };

    // Realizar la solicitud
    fetch(url, configuracion)
        .then(response => {
            if (response.ok) {
                console.log("Datos enviados con éxito");
            } else {
                console.error("Error al enviar datos");
            }
        })
        .catch(error => console.error('Error:', error));
}

window.onload = function() {
    enviarDatosAThingsBoard();
};
