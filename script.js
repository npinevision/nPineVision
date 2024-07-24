
function navigateTo(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('fade-out')) {
        document.body.classList.remove('fade-out');
    }

    // Scroll fade-in effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    portfolioItems.forEach(item => {
        observer.observe(item);
    });
});
