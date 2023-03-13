const textField = document.getElementById("comments");
const inputName = document.getElementById("name");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const defaultText = document.querySelector('.default-text')
const likeButton = document.getElementById('like-button')

let date = new Date()
let currentDay = date.getDate()
let currentHours = date.getHours()
let currentMinutes = date.getMinutes()

document.getElementById("submit-button").onclick = function(e) {
  e.preventDefault();
  defaultText.classList.remove('open')
  const commentTemplate = document.querySelector('#card').content
  const commentElement = commentTemplate.querySelector('.card').cloneNode(true); 
  commentElement.querySelector('.card__name').textContent = inputName.value
  commentElement.querySelector('.card__text').textContent = inputDescription.value
  const reverseDate = inputDate.value.split('-').reverse()

if (reverseDate[0] === `${currentDay}`) {
  commentElement.querySelector('.card__date').textContent = `сегодня, ${currentHours}:${currentMinutes}`
} else if (reverseDate[0] === `${currentDay - 1}`) {
  console.log(inputDate.value.getHours())
  commentElement.querySelector('.card__date').textContent = `вчера, ${currentHours}:${currentMinutes}`
}

  // commentElement.querySelector('.card__date').textContent = reverseDate || `${currentDay}.0${currentMonth}.${currentYear}`
  textField.append(commentElement)
  inputName.value=''
  inputDescription.value=''
  inputDate.value=''
}
