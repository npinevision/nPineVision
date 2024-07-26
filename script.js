function navigateTo(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => window.location.href = page, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.portfolio-item').forEach(item => observer.observe(item));
});
