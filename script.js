function openModal(albumId) {
  const modal = document.getElementById("imageModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = "";

  // Define album images
  const albumImages = {
    nature: [
      "images/nature1.jpg",
      "images/nature2.jpg",
      "images/nature3.jpg",
      "images/nature4.jpg",
      "images/nature5.jpg",
      "images/nature6.jpg",
    ],
    wildlife: [
      "images/wildlife1.jpg",
      "images/wildlife2.jpg",
      "images/wildlife3.jpg",
    ],
    food: ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg"],
  };

  // Add images with names to modal
  if (albumImages[albumId]) {
    albumImages[albumId].forEach((imgSrc) => {
      let container = document.createElement("div");
      container.classList.add("image-container");

      let img = document.createElement("img");
      img.src = imgSrc;
      img.classList.add("modal-img");

      
      let imgName = imgSrc.split("/").pop().split(".")[0];

      let caption = document.createElement("div");
      caption.classList.add("image-caption");

      container.appendChild(img);
      container.appendChild(caption);
      modalContent.appendChild(container);
    });
  }

  modal.style.display = "flex";
}

// Close Modal Functions
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}


window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
