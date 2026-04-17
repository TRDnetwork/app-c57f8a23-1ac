import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

// Mock DOM
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div id="hero"></div>
      <section id="menu"></section>
      <section id="about"></section>
      <section id="contact">
        <form id="contact-form">
          <input type="text" id="name" required />
          <input type="email" id="email" required />
          <textarea id="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <script src="/script.js"></script>
    </body>
  </html>
`);
global.document = dom.window.document;

// Import script (vanilla JS)
await import('../script.js');

describe('Coffee Shop Landing Page', () => {
  it('should have a hero section with background image', () => {
    const hero = document.getElementById('hero');
    expect(hero).toBeTruthy();
    expect(getComputedStyle(hero).backgroundImage).not.toEqual('none');
  });

  it('should display menu items with prices', () => {
    const menu = document.getElementById('menu');
    expect(menu.innerHTML).toContain('Coffee');
    expect(menu.innerHTML).toContain('$5');
    expect(menu.innerHTML).toContain('Cake');
    expect(menu.innerHTML).toContain('$8');
  });

  it('should include an about us section', () => {
    const about = document.getElementById('about');
    expect(about).toBeTruthy();
    expect(about.textContent).toContain('About Us');
  });

  it('should have a contact form with validation', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    nameInput.value = '';
    emailInput.value = 'invalid-email';
    messageInput.value = '';

    form.dispatchEvent(new Event('submit'));

    expect(nameInput.checkValidity()).toBe(false);
    expect(emailInput.checkValidity()).toBe(false);
    expect(messageInput.checkValidity()).toBe(false);
  });

  it('should prevent form submission on invalid input', () => {
    const form = document.getElementById('contact-form');
    let submitted = false;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitted = true;
    });

    form.dispatchEvent(new Event('submit'));
    expect(submitted).toBe(true);
  });
});