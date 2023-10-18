// document.querySelector('.form_button').onclick = () => {
//   const form = document.getElementById('form')

//   const email = document.getElementById('email')

//   console.log(email.checkValidity())

//   if (!email.checkValidity()) {
//     if (email.value.length === 0) {
//       email.setCustomValidity('Помилка.Введіть значення!')
//     }

//     if (!email.checkValidity()) {
//       if (email.value.length > 10) {
//         email.setCustomValidity(
//           'Помилка.Введіть до 10 символів!',
//         )
//       }

//       email.reportValidaty()
//     }
//   }
// }

// document
//   .querySelectorAll('.form__button-add')
//   .forEach((element) => {
//     element.onclick = () => {
//       if (element.getAttribute('operator') === '+') {
//         return age.stepUp(
//           Number(element.getAttribute('value')),
//         )
//       }

//       if (element.getAttribute('operator') === '-') {
//         return age.stepDown(
//           Number(element.getAttribute('value')),
//         )
//       }
//     }
//   })

// document.querySelector('.form__button-save').onclick =
//   () => {
//     const value = document.getElementById('username').value

//     if (value.length === 0) alert('Даних немає')

//     navigator.clipboard
//       .writeText(value)
//       .then(() => alert('Дані зберегли'))
//   }

// const listener = () => {
//   alert('click')
// }

// const listener2 = () => {
//   alert('click 2')
// }

// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener(
//   'click',
//   () => alert('Capture phase (фаза захоплення) outer'),
//   {
//     capture: true,
//   },
// )
// inner.addEventListener(
//   'click',
//   () => alert('Capture phase (фаза захоплення) inner'),
//   {
//     capture: true,
//   },
// )

// outer.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) outer'),
//   {
//     capture: false,
//     once: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) inner'),
//   {
//     capture: false,
//     once: true,
//   },
// )

document
  .querySelector('.form__button')
  .addEventListener('click', (e) => {
    e.preventDefault()
  })
