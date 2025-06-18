document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el reload

            let parms = {
                name: document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            emailjs.send("service_2w44zp6", "template_q3kg9aj", parms)
                .then(function() {
                    alert("¡Tu mensaje ha sido enviado exitosamente!");
                    form.reset();
                }, function(error) {
                    alert("Hubo un error al enviar el mensaje.");
                });
        });
    }
});