    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('details.spoiler').forEach(details => {
        details.addEventListener('toggle', () => {
        if (details.open) {
            details.style.animation = 'fadeIn 0.5s';
            setTimeout(() => details.style.animation = '', 500);
        }
        });
    });
    });