function ButtonHideJPG() {
  const image = document.getElementById("14SAZalesshema");
  if (image.style.display == "none"){
    image.classList.toggle("img");
  }
  else {
    image.style.display = "none";
  }
}
