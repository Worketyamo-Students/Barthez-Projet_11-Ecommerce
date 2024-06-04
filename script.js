/* ------------------------ DECLARATION DES CONSTANTE ----------------------- */
const homeSearch = document.querySelector("#homeSearch");
const searhIcon = homeSearch.parentElement.querySelector('.search-icon');
const leftBtnNav = document.querySelector("#leftNav");
const rightBtnNav = document.querySelector("#rightNav");
const categoryNav = document.querySelector("#categoryNav");

/* ----------- VIDER LE CHAMPS DE SAISIE AU CHARGEMENT DE LA PAGE ----------- */
window.addEventListener('DOMContentLoaded', ()=>{
    homeSearch.value = "";
})

/* ----------------- METTRE LE FOCUS SUR LE CHAMPS DE RECHERCHE ---------------- */
homeSearch.addEventListener('focus', ()=>{
    homeSearch.parentElement.classList.add('focus');
})

/* ----------------- RETIRER LE FOCUS SUR LE CHAMPS DE RECHERCHE ---------------- */
document.addEventListener('click', (e)=>{
    if(!homeSearch.contains(e.target) && e.target !== homeSearch.parentElement){
        homeSearch.parentElement.classList.remove('focus');
    }
});

/* ------------------------------- NAVIGATION ------------------------------- */
leftBtnNav.addEventListener('click', ()=>{
    // categoryNav.style.transform = `translateX(-${val}rem)`;
})
rightBtnNav.addEventListener('click', ()=>{
    // categoryNav.style.transform = `translateX(${val}rem)`;
})
