const dropMenu = document.querySelectorAll('#list__category');

const clickMenu = (event) => {
  if (event.id === openMenu) {
    console.log(true);
  } else {
    console.log(false);
  }

};

const openMenu = dropMenu.addEvantListener("click");