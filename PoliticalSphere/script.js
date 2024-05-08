function ButtonHideJPG() {
  const image = document.getElementById("14SAZalesshema");
  if (image.style.display == "none"){
    image.style.display = "block";
  }
  else {
    image.style.display = "none";
  }
}

const list = document.getElementById("Container");
const sortButton = document.getElementById("ContainerSortButton");

sortButton.addEventListener("click", SortingList());

function SortingList() {
  const listItems = list.querySelectorAll(".ItemContainer.ItemTextName");
  const itemsArray = Array.from(listItems);

  function compareNames (a, b) {
    const nameA = a.querySelector(".ItemTextName").textContent;
    const nameB = b.querySelector(".ItemTextName").textContent;
    return nameA.localeCompare(nameB); // Locale-aware comparison
  }
  
  itemsArray.sort(compareNames);

  // Clear the list content and re-populate with sorted elements (same as before)
  list.innerHTML = "";
  itemsArray.forEach(function(ItemContainer) {
    list.appendChild(ItemContainer);
  });
}
