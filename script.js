const form = document.getElementById('contactForm');
const result = document.getElementById('result');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            result.textContent = 'Please fill in all fields before sending.';
            result.style.color = '#f87171';
            return;
        }

        result.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        result.style.color = '#22c55e';
        form.reset();
    });
}
