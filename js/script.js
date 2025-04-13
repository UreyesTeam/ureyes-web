document.addEventListener('DOMContentLoaded', function() {
    const knowMoreBtn = document.querySelector('.know-more-btn');
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    const pages = document.querySelectorAll('.page');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                history.replaceState(null, null, `#${id}`);
            }
        });
    }, observerOptions);
    
    pages.forEach(page => {
        observer.observe(page);
    });

    // 滚动箭头事件
    const scrollArrows = document.querySelectorAll('.scroll-arrow');
    scrollArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                e.preventDefault();
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 