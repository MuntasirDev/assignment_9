document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration successful! Redirecting to login page.');
            window.location.href = 'index.html';
        });
    }

    // View Course বোতামে ক্লিক
    const viewButtons = document.querySelectorAll('.view-course-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'course_details.html';
        });
    });

    // পুরো কার্ড ক্লিক
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-course-btn')) {
                window.location.href = 'course_details.html';
            }
        });
    });
});
