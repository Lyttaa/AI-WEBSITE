document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.website-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });

    items.forEach(item => {
        observer.observe(item);
    });
});
