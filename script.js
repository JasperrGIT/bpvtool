const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        // Remove active class van alle sterren
        stars.forEach(s => s.classList.remove('active'));

        // Add active class voor de aangevinkte ster
        const rating = star.getAttribute('data-value');
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }

        console.log(`User rated: ${rating} stars`);
    });
});
