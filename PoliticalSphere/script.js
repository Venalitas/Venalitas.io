function ButtonHideJPG() {
  const image = document.getElementById("14SAZalesshema");
  if (image.style.display == "none"){
    image.style.display = "block";
  }
  else {
    image.style.display = "none";
  }
}

const list = document.getElementById("ContainerId");
const sortButton = document.getElementById("ContainerSortButton");

function SortingListAZ() {
  const listItems = list.querySelectorAll(".ItemContainer");
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

function SortingListPartyJV() {
  const listItems = list.querySelectorAll(".ItemContainer");
  const itemsArray = Array.from(listItems);

  list.innerHTML = "";
  for (let i=0; i<itemsArray.length; i++){
    if (itemsArray[i].querySelector(".ItemTextParty").textContent != "Jaunā Vienotība"){
      itemsArray[i].style.display = "none";
    }
    list.appendChild(itemsArray[i]);
  }
}

function SortingListReset() {
  const listItems = list.querySelectorAll(".ItemContainer");
  const itemsArray = Array.from(listItems);

  list.innerHTML = "";
  for (let i=0; i<itemsArray.length; i++){
    itemsArray[i].style.display = "";

    list.appendChild(itemsArray[i]);
  }
}
