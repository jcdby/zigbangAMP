
function showModal() {
  modal.style.display = "block";
  b.setAttribute('class', 'modal-open')
}

function closeModal(){
  modal.style.display = "none";
  b.classList.remove('modal-open')
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}

