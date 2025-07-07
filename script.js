// Funciones principales
function makeCall() {
    const phoneNumber = "+34612345678";
    window.open(`tel:${phoneNumber}`, '_self');
}

function downloadCatalog() {
    // Simulación de descarga de catálogo
    alert('El catálogo se descargará próximamente. Contacte por teléfono para más información sobre nuestro Terminal TPV.');
}

// Efectos de scroll suave
document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a elementos específicos
    const animatedElements = document.querySelectorAll('.feature-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efecto hover mejorado para botones
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efecto de click en el teléfono del header
    const headerPhone = document.querySelector('.header-contact .phone');
    if (headerPhone) {
        headerPhone.style.cursor = 'pointer';
        headerPhone.addEventListener('click', makeCall);
        
        headerPhone.addEventListener('mouseenter', function() {
            this.style.color = '#3b82f6';
            this.style.transform = 'scale(1.05)';
        });
        
        headerPhone.addEventListener('mouseleave', function() {
            this.style.color = '#1e3a8a';
            this.style.transform = 'scale(1)';
        });
    }
});

// Función para manejar el envío de email
function sendEmail() {
    const email = 'info@tuempresatpv.com';
    const subject = 'Consulta sobre Terminal TPV';
    const body = 'Hola, me interesa información sobre su Terminal TPV profesional.';
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

// Agregar funcionalidad de email a los elementos de contacto
document.addEventListener('DOMContentLoaded', function() {
    const emailElements = document.querySelectorAll('.contact-item');
    emailElements.forEach(item => {
        const heading = item.querySelector('h4');
        if (heading && heading.textContent === 'Email') {
            item.style.cursor = 'pointer';
            item.addEventListener('click', sendEmail);
            
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
});