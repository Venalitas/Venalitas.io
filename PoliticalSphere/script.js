function ButtonHideJPG() {
  const image = document.getElementById("14SAZalesshema");
  if (image.style.display == "none"){
    image.style.display = "block";
  }
  else {
    image.style.display = "none";
  }
}

const list = document.getElementById("container");
const sortButton = document.getElementById("container-sort-button");

sortButton.addEventListener("click", SortingList() {
  const listItems = list.querySelectorAll(".item-container");
  const itemsArray = Array.from(listItems);

  
  function compareNames (a, b)
  {
    const nameA = a.querySelector(".item-text-name").textContent;
    const nameB = b.querySelector(".item-text-name").textContent;
    return nameA.localeCompare(nameB); // Locale-aware comparison
  }
  
  itemsArray.sort(compareNames);

  // Clear the list content and re-populate with sorted elements (same as before)
  list.innerHTML = "";
  itemsArray.forEach(function(item-container) {
    list.appendChild(item-container);
  });
}
