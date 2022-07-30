$(function(){
    $("#header").load("html/header.html");
    $("#carousel").load("html/carousel.html");
});

function togglePopup(){
    document.getElementById("popup").classList.toggle("active")
}

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active")
    document.getElementById("btn-menu").classList.toggle("active")
    document.getElementById("btn-pesquisa").classList.toggle("active")
}