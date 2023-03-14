const textField = document.getElementById("comments");
const inputName = document.getElementById("name");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const defaultText = document.querySelector('.default-text')

let date = new Date()
let currentDay = date.getDate()
let currentHours = date.getHours()
let currentMinutes
if (date.getMinutes() < 10) { currentMinutes = `0${date.getMinutes()}`} else {
  currentMinutes = date.getMinutes()
}

document.getElementById("submit-button").onclick = function(e) {
  e.preventDefault();
  defaultText.classList.remove('open')
  const commentTemplate = document.querySelector('#card').content
  const commentElement = commentTemplate.querySelector('.card').cloneNode(true);
  if (inputName.value === '') {
    document.querySelector('.error-name').classList.add('error-name_active')
    document.querySelector('.error-description').classList.remove('error-description_active')
  } else if (inputDescription.value === '') {
    document.querySelector('.error-name').classList.remove('error-name_active')
    document.querySelector('.error-description').classList.add('error-description_active')
  } else {
    document.querySelector('.error-name').classList.remove('error-name_active')
    document.querySelector('.error-description').classList.remove('error-description_active')
  commentElement.querySelector('.card__name').textContent = inputName.value
  commentElement.querySelector('.card__text').textContent = inputDescription.value
  const reverseDate = inputDate.value.split('-').reverse()
  if (reverseDate[0] === `${currentDay}` || !reverseDate[0]) {
    commentElement.querySelector('.card__date').textContent = `сегодня, ${currentHours}:${currentMinutes}`
  } else if (reverseDate[0] === `${currentDay - 1}`) {
    commentElement.querySelector('.card__date').textContent = `вчера, ${currentHours}:${currentMinutes}`
  } 
  textField.append(commentElement)
  const cards = document.getElementsByClassName('card__like')
  Array.prototype.forEach.call(cards, (card) => {
    card.onclick = function(e) {
      e.target.classList.toggle('card__like_active')
    }
  })
  const cardsDelete = document.getElementsByClassName('basket-cap')
  Array.prototype.forEach.call(cardsDelete, (card) => {
    card.onclick = function(e) {
      e.target.closest('.card').remove()
    }
  })
  inputName.value=''
  inputDescription.value=''
  inputDate.value=''
}
}
