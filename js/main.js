"use strict";
document.addEventListener('DOMContentLoaded',function(){
    
    var map = L.map('mapa').setView([-16.5038263,-68.1295752], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-16.5038263,-68.1295752]).addTo(map)
            .bindPopup('Carrera de Informática.<br> UMSA.')
            .openPopup()
            .bindTooltip('Hola Amigos ')
            .openTooltip();
});
