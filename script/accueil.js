let currentIndex = 0;

function changeContent(step) {
  const contentItems = document.querySelectorAll(".contenu");
  const totalItems = contentItems.length;

  // Masquer tous les éléments
  contentItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Afficher les deux éléments suivants
  for (let i = 0; i < 2; i++) {
    let indexToShow = (currentIndex + i + step) % totalItems;
    if (indexToShow < 0) {
      indexToShow = totalItems - 1;
    }

    contentItems[indexToShow].classList.add("active");
  }

  currentIndex = (currentIndex + step + totalItems) % totalItems;
}

changeContent(0);
