function openModal(albumId) {
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");

    // Clear previous images
    modalContent.innerHTML = "";

    // Define album images
    const albumImages = {
        packery: ["packery1.jpg", "packery2.jpg", "packery3.jpg"],
        client: ["client1.jpg", "client2.jpg", "client3.jpg"],
        beforeAfter: ["beforeAfter1.jpg", "beforeAfter2.jpg", "beforeAfter3.jpg"]
    };

    // Add images to modal
    if (albumImages[albumId]) {
        albumImages[albumId].forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = imgSrc;
            img.classList.add("modal-img");
            modalContent.appendChild(img);
        });
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "block";
}
