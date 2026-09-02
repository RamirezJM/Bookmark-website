import './style.css'


const tabButtons = document.querySelectorAll('.tab-btn')
const panels = document.querySelectorAll('[data-panel]')

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    panels.forEach(panel => {
      panel.classList.toggle('hidden', panel.dataset.panel !== target)
      panel.classList.toggle('flex', panel.dataset.panel === target)
    })
    tabButtons.forEach(b => {
      const active = b === btn
      if (active) {
        b.classList.add('border-b', 'border-b-red-500', 'text-red-500');
        b.classList.remove('border-none');
      } else {
        b.classList.remove('border-b', 'border-b-red-500', 'text-red-500');
        b.classList.add('border-none');
      }
      b.setAttribute('aria-selected', active)

    })
  })
})