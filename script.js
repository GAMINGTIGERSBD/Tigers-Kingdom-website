document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const videoContainer = document.querySelector('.video-container');

    // Animate elements into view
    setTimeout(() => {
        navbar.style.opacity = 1;
        navbar.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
        videoContainer.style.opacity = 1;
        videoContainer.style.transform = 'translateY(0)';
    }, 1500);
});
