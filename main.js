// Cambia la clase de la navbar al hacer scroll
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// Crecimiento automatico de textarea

document.addEventListener("input", function (event) {
  if (event.target.classList.contains("auto-grow")) {
    const target = event.target
    target.style.height = "auto" // Restablece la altura para recalcular
    target.style.height = `${target.scrollHeight}px` // Ajusta según el contenido
  }
})

// Formulario de envio de mensaje directo
const btn = document.querySelector('.send-button')

document.querySelector('.direct-message')
  .addEventListener('submit', function(event) {
    event.preventDefault()

    btn.querySelector('p').textContent = 'Sending...'

    const serviceID = 'default_service'
    const templateID = 'template_zhqi9sp'

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.querySelector('p').textContent = 'Submit'

        // ✅ Toast de éxito
        Toastify({
          text: "Message sent successfully!",
          duration: 3000,
          close: true,
          gravity: "top", 
          position: "right",
          backgroundColor: "linear-gradient(to right, #fff, #fff)",
        }).showToast()

        this.reset()
      }, (err) => {
        btn.querySelector('p').textContent = 'Submit'

        // ❌ Toast de error
        Toastify({
          text: `Error sending message. Try again!`,
          duration: 3000,
          close: true,
          gravity: "top", 
          position: "right",
          backgroundColor: "linear-gradient(to right, #fff, #fff)",
        }).showToast()
      })
  })

// Actualiza la hora
function updateClock() {
    const now = new Date()
    const time = now.toLocaleTimeString()
    document.getElementById('clock').innerHTML = `${time}`

    const hours = now.getHours()
    const message = hours < 12
    ? 'Good morning'
    : hours < 18
    ? 'Good afternoon'
    : 'Good evening'
    document.getElementById('greeting').innerHTML = `${message}`
}

// Actualiza la fecha
function updateDate(){
  const now = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  const date = now.toLocaleDateString('en-US', options)
  document.getElementById('date').innerHTML = `${date}`
}

const toggle = document.getElementById('dark-toggle')
const icon = toggle.querySelector('.icon')

// Cargar preferencia guardada
if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark-mode')
  icon.textContent = '☀️'
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  const darkMode = document.body.classList.contains('dark-mode')
  icon.textContent = darkMode ? '☀️' : '🌙'
  localStorage.setItem('dark', darkMode)
})


// Cambia el fondo dinámicamente según la hora
function updateBackground() {
    const now = new Date()
    const hours = now.getHours()

    const sky = document.querySelector('.sky')

    if (hours >= 5 && hours < 10) {
        // Mañana
        sky.style.background = 'linear-gradient(0deg, rgba(255,223,186,1) 0%, rgba(135,206,250,1) 100%)'
    } else if (hours >= 10 && hours < 16) {
        // Tarde
        sky.style.background = 'linear-gradient(0deg, rgba(255,165,0,1) 0%, rgba(135,206,250,1) 100%)'
    } else if (hours >= 16 && hours < 19) {
        // Atardecer
        sky.style.background = 'linear-gradient(0deg, rgba(255,140,0,1) 0%, rgba(75,0,130,1) 100%)'
    } else {
        // Noche
        sky.style.background = 'linear-gradient(0deg, rgba(0,0,128,1) 0%, rgba(25,25,112,1) 100%)'
    }
}

setInterval(updateBackground, 60000)
setInterval(updateClock, 1000)
updateBackground()
updateClock()
updateDate()
