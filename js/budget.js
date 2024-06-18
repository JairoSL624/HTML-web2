document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuestoForm');
    
    form.addEventListener('submit', function(event) {
        // Validar Nombre
        const nombre = document.getElementById('nombre').value;
        const nombrePattern = /^[A-Za-z]{1,15}$/;
        if (!nombrePattern.test(nombre)) {
            alert('El nombre solo puede contener letras y tener una longitud máxima de 15 caracteres.');
            event.preventDefault();
            return;
        }

        // Validar Apellidos
        const apellidos = document.getElementById('apellidos').value;
        const apellidosPattern = /^[A-Za-z]{1,40}$/;
        if (!apellidosPattern.test(apellidos)) {
            alert('Los apellidos solo pueden contener letras y tener una longitud máxima de 40 caracteres.');
            event.preventDefault();
            return;
        }

        // Validar Teléfono
        const telefono = document.getElementById('telefono').value;
        const telefonoPattern = /^[0-9]{9}$/;
        if (!telefonoPattern.test(telefono)) {
            alert('El teléfono solo puede contener números y tener una longitud exacta de 9 dígitos.');
            event.preventDefault();
            return;
        }

        // Validar Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            event.preventDefault();
            return;
        }
    });

    // Calcular el presupuesto total
    const productoSelect = document.getElementById('producto');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const totalElement = document.getElementById('total');

    form.addEventListener('change', updateTotal);

    function updateTotal() {
        let total = 0;

        // Obtener el precio del producto seleccionado
        const selectedOption = productoSelect.options[productoSelect.selectedIndex];
        total += parseInt(selectedOption.getAttribute('data-precio'));

        // Obtener el precio de los extras seleccionados
        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute('data-precio'));
            }
        });

        // Actualizar el total en el HTML
        totalElement.textContent = total;
    }
});
