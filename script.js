// Countdown Timer
function startCountdown() {
  const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000 // 24 horas a partir de agora

  const timer = setInterval(function () {
    const now = new Date().getTime()
    const distance = countdownDate - now

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('hours').innerHTML = hours
      .toString()
      .padStart(2, '0')
    document.getElementById('minutes').innerHTML = minutes
      .toString()
      .padStart(2, '0')
    document.getElementById('seconds').innerHTML = seconds
      .toString()
      .padStart(2, '0')

    if (distance < 0) {
      clearInterval(timer)
      document.getElementById('hours').innerHTML = '00'
      document.getElementById('minutes').innerHTML = '00'
      document.getElementById('seconds').innerHTML = '00'
    }
  }, 1000)
}

// FAQ Toggle
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active')

      // Fechar todos os outros
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active')
      })

      // Abrir o clicado se não estava ativo
      if (!isActive) {
        item.classList.add('active')
      }
    })
  })
}

// Smooth Scroll
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}

// Animações de entrada
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  // Elementos para animar
  const elementsToAnimate = document.querySelectorAll(
    '.problema-item, .depoimento, .autoridade-item, .semana'
  )

  elementsToAnimate.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })
}

// Efeito de digitação no título
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ''

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Contador de visitantes (simulado)
function updateVisitorCounter() {
  const counter = document.querySelector('.social-proof strong')
  if (counter) {
    let count = 50000
    const increment = Math.floor(Math.random() * 3) + 1
    count += increment
    counter.textContent = count.toLocaleString('pt-BR') + ' pessoas'
  }
}

// Efeito parallax suave
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(
      '.floating-elements .element'
    )

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
}

// Adicionar efeito de hover nos botões
function initButtonEffects() {
  const buttons = document.querySelectorAll('.cta-button, .cta-button-final')

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px) scale(1.02)'
    })

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)'
    })
  })
}

// Simular urgência - atualizar contador de pessoas
function createUrgency() {
  setInterval(() => {
    updateVisitorCounter()
  }, 30000) // Atualiza a cada 30 segundos
}

// Inicializar tudo quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
  startCountdown()
  initFAQ()
  initSmoothScroll()
  initScrollAnimations()
  initParallax()
  initButtonEffects()
  createUrgency()

  // Pequeno delay para o efeito de entrada
  setTimeout(() => {
    document.body.style.opacity = '1'
  }, 100)
})

// Adicionar estilo inicial ao body
document.body.style.opacity = '0'
document.body.style.transition = 'opacity 0.3s ease'

// Prevenir clique direito (opcional - para proteger um pouco o conteúdo)
document.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})

// Adicionar efeito de loading
window.addEventListener('load', function () {
  document.body.classList.add('loaded')
})
