document.addEventListener('DOMContentLoaded', () => {

    // --- Task 5: Display Current Date and Time ---
    function updateDateTime() {
        const datetimeDisplay = document.getElementById('datetime-display');
        if (datetimeDisplay) {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            datetimeDisplay.textContent = now.toLocaleDateString('en-US', options);
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 60000);

    // --- Task 4: Change Background Color ---
    const bgColorBtn = document.getElementById('bg-color-btn');
    if (bgColorBtn) {
        bgColorBtn.addEventListener('click', function() {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        });
    }

    // --- Task 2: Accordion for FAQs ---
    const accordionHeaders = document.querySelectorAll('.accordion-header-custom');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.accordion-content-custom').forEach(item => item.style.display = 'none');
                content.style.display = 'block';
            }
        });
    });

    // --- Task 3: Popup Subscription Form ---
    const modal = document.getElementById('popup-modal');
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (openPopupBtn && modal && closeBtn) {
        openPopupBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- Task 1: Form Validation ---
    const form = document.getElementById('subscribe-form');
    const errorMsgContainer = document.getElementById('form-errors');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            errorMsgContainer.innerHTML = ''; 

            const email = document.getElementById('sub-email').value.trim();
            const password = document.getElementById('sub-password').value;
            const confirmPassword = document.getElementById('sub-confirm').value;
            
            let errors = [];

            if (!email.includes('@') || email.length < 5) {
                errors.push('• Please enter a valid email containing "@".');
            }
            if (password.length < 6) {
                errors.push('• Password must be at least 6 characters long.');
            }
            if (password !== confirmPassword) {
                errors.push('• Passwords do not match.');
            }

            if (errors.length > 0) {
                errorMsgContainer.innerHTML = errors.join('<br>');
            } else {
                alert('Subscription successful!');
                modal.style.display = 'none';
                form.reset();
            }
        });
    }
});