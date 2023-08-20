const nintendo = document.querySelector("#nintendo")
const xbox = document.querySelector("#xbox")
const desktop = document.querySelector("#desktop")
const playstation = document.querySelector("#playstation")
const modalWrapper = document.querySelector(".modal_wrapper")
const closeBtn = document.querySelector(".close");
const searchContainer = document.querySelector(".search-container");
const searchClose = document.querySelector(".search-close");
const searchBtn = document.querySelector(".search-btn");


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
searchBtn.addEventListener("click",()=>{
    searchContainer.classList.add("search-active");
})
searchClose.addEventListener("click",()=>{
    searchContainer.classList.remove("search-active");
})

const openModal = () =>{
    modalWrapper.classList.add("modal_active")
}
const closeModal = () =>{
    modalWrapper.classList.remove("modal_active")
}
