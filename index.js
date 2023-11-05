const modalBox = document.querySelector(".modal-box");
const showModal = document.querySelectorAll(".button-1")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close")
 
const openModal = function(){
    modalBox.classList.remove('hide')
    overlay.classList.remove('hide')
}

const closeModal= function(){
    modalBox.classList.add('hide')
    overlay.classList.add('hide') 
}

for (let i= 0 ; i <showModal.length; i++){
showModal[i].addEventListener('click',  openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);
}

//KEYPRESS EVENTS
document.addEventListener('keydown', function(e){
     console.log(e.key)
    // if(e.key === "Escape" && !modalBox.classList.contains('hidden')){
    //       closeModal();
    //     }
})