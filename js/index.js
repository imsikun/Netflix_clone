const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// select tab content item
function selectItem(e){
  removeShow();
  removeBorder();
  // adding the border to current tab
  this.classList.add('tab-border');

  // Grab content items
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add('show');
}

//remove border function
function removeBorder(){
  tabItems.forEach(items => items.classList.remove('tab-border'));
}

function removeShow(){
  tabContentItems.forEach(items => items.classList.remove('show'));
}

// listen to tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));