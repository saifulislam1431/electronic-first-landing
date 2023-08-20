const nintendo = document.querySelector("#nintendo")
const xbox = document.querySelector("#xbox")
const desktop = document.querySelector("#desktop")
const playstation = document.querySelector("#playstation")
const modalWrapper = document.querySelector(".modal_wrapper")
const closeBtn = document.querySelector(".close");

nintendo.addEventListener("click",()=>{
openModal();
})
xbox.addEventListener("click",()=>{
 openModal();
})
desktop.addEventListener("click",()=>{
 openModal();
})
playstation.addEventListener("click",()=>{
openModal();
})
closeBtn.addEventListener("click",()=>{
    closeModal();
})
modalWrapper.addEventListener("click",(e)=>{
    if(e.target !== modalWrapper) return;
    closeModal();
})

const openModal = () =>{
    modalWrapper.classList.add("modal_active")
}
const closeModal = () =>{
    modalWrapper.classList.remove("modal_active")
}
