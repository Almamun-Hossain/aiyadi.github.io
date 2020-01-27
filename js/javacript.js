
const modal = document.querySelector('.contact-modal');
const modalBtn = document.querySelector('.c-button');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "flex";
}
function closeModal(){
    modal.style.display = "none";
}
