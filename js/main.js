// VARIABLES
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();

  this.classList.add("tab-border");

  // when we click an item, we can access it's id
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // add show class to the chosen tab item
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}

// EVENT LISTENERS
tabItems.forEach(item => item.addEventListener("click", selectItem));
