import './style.css'

import iconHamburger from './assets/images/icon-hamburger.svg'
import iconClose from './assets/images/icon-close.svg'


const buttonMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav-menu')
const iconMenu = document.querySelector('.icon-menu')
const nav = document.querySelector('.nav')

buttonMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden')
    navMenu.classList.add('flex')
    nav.classList.add('bg-indigo-900')
    nav.classList.add('opacity-90')
    nav.classList.add('min-h-screen')
    iconMenu.src = iconClose;
  } else {
    navMenu.classList.add('hidden')
    navMenu.classList.remove('flex')
    nav.classList.remove('bg-indigo-900')
    nav.classList.remove('opacity-90')
    nav.classList.remove('min-h-screen')
    iconMenu.src = iconHamburger;
  }

})

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