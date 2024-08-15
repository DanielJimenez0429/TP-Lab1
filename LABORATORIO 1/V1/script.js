document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medallas-form');
    const tableBody = document.querySelector('#medallas-table tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const pais = document.getElementById('pais').value;
        const oro = document.getElementById('oro').value;
        const plata = document.getElementById('plata').value;
        const bronce = document.getElementById('bronce').value;

        // Crear una nueva fila en la tabla
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pais}</td>
            <td>${oro}</td>
            <td>${plata}</td>
            <td>${bronce}</td>
        `;
        tableBody.appendChild(row);

        // Limpiar el formulario
        form.reset();
    });
});
