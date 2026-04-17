document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation already enforced by 'required' attributes
    // You can extend this with custom logic if needed

    // Simulate successful submission
    alert('Thank you! Your message has been sent.');

    // Reset form
    form.reset();
  });
});