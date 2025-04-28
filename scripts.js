// Toggle FAQ answers
document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');
            
            answer.classList.toggle('show');
            
            if (answer.classList.contains('show')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});

// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    body.appendChild(overlay);
    
    // Toggle sidebar
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        sidebar.classList.toggle('sidebar-open');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });
    
    // Cerrar sidebar al hacer clic en overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('open');
        sidebar.classList.remove('sidebar-open');
        this.style.display = 'none';
    });
    
    // Resto de tu código existente...
});