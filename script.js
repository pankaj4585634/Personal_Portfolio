document.addEventListener('DOMContentLoaded', function () {
    const skillsList = document.querySelector('.skills-list');
    const toggleBtn = document.getElementById('toggle-skills');
    if (!skillsList || !toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
        const expanded = skillsList.classList.toggle('expanded');
        toggleBtn.textContent = expanded ? 'Show less' : 'Show more';
        toggleBtn.setAttribute('aria-expanded', expanded);
    });
});
alert("Welcome to my porfolio"); //alert message