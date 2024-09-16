document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loader = document.getElementById('loader');
    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });

    // Theme Toggle
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        themeSwitcher.innerHTML = body.classList.contains('dark-mode') ? '<span class="material-icons">light_mode</span>' : '<span class="material-icons">dark_mode</span>';
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // AOS Initialization (for animations)
    AOS.init();

    // Modal Functionality
    function openModal(modalId) {
        document.getElementById(`project-modal-${modalId}`).style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById(`project-modal-${modalId}`).style.display = 'none';
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
});
