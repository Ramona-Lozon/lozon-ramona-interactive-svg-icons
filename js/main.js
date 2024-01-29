console.log("JS file connected");

const searchGraphic = document.querySelector('#search_icon')
const emailGraphic = document.querySelector('#email_icon')
const infoGraphic = document.querySelector('#info_icon')
const sodaGraphic = document.querySelector('#soda_can_icon')
const homeGraphic = document.querySelector('#home_icon')
const userGraphic = document.querySelector('#user_icon')

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

emailGraphic.addEventListener('click', logThisId);
searchGraphic.addEventListener('click', logThisId);
infoGraphic.addEventListener('click', logThisId);
sodaGraphic.addEventListener('click', logThisId);
homeGraphic.addEventListener('click', logThisId);
userGraphic.addEventListener('click', logThisId);