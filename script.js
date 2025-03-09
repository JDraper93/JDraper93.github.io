document.addEventListener('DOMContentLoaded', function() {
    const toTopIcon = document.getElementById('toTopIcon');

    if (toTopIcon) {
        toTopIcon.addEventListener('click', function() {
            // Smooth scroll to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});