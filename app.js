const stack = document.querySelector('.card-stack');
const cards = [...document.querySelectorAll('.profile-card')];

if (matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = event.clientX / innerWidth - 0.5;
    const y = event.clientY / innerHeight - 0.5;
    stack.style.translate = `${x * 8}px ${y * 5}px`;

    cards.forEach((card) => {
      const depth = Number(card.dataset.depth || 1);
      card.style.marginTop = `${y * -9 * depth}px`;
    });
  });

  document.querySelector('.cta').addEventListener('pointermove', (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left - box.width / 2) * 0.08;
    const y = (event.clientY - box.top - box.height / 2) * 0.08;
    event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  });
  document.querySelector('.cta').addEventListener('pointerleave', (event) => {
    event.currentTarget.style.transform = '';
  });
}
