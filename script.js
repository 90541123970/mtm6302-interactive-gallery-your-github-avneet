document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery-container");

    const images = [
        { src: "https://leafyplace.com/wp-content/uploads/2019/08/pansy-3.jpg", title: "Image 1", description: "Pansies are one of the most popular early bloomers that produce beautiful flowers with large petals in many colors" },
        { src: "https://leafyplace.com/wp-content/uploads/2020/01/primrose.jpg", title: "Image 2", description: "Primrose is another well-loved variety of flowering plant due to its bright yellow, red, or purple petals it produces in early spring." },
        { src: "https://leafyplace.com/wp-content/uploads/2020/04/marigold.jpg", title: "Image 2", description: "Appreciated around the world for their beautiful flowers, marigolds are a type of flowering plant from the Calendula genius" },
        { src: "https://www.leafyplace.com/wp-content/uploads/2019/09/snapdragons.jpg", title: "Image 2", description: "Appreciated around the world for their beautiful flowers, snapdragons are grown as a type of annual plant even though they are categorized as a perennial plant." },
        { src: "https://leafyplace.com/wp-content/uploads/2020/01/geranium.jpg", title: "Image 2", description: "Geraniums are a very popular type of summer-blooming plant due to its multitude of varieties" },
        { src: "https://leafyplace.com/wp-content/uploads/2019/06/sunflower.jpg", title: "Image 2", description: "One of the tallest flowering annual plants is the sunflower. These famous flowers are easily identified with their long stems and very large big round yellow flowers." },
        { src: "https://leafyplace.com/wp-content/uploads/2019/08/begonia.jpg", title: "Image 2", description: "Extremely popular worldwide, begonias are a type of annual flowering plant that will continue to flower into the fall." },
        { src: "https://leafyplace.com/wp-content/uploads/2019/08/petunia.jpg", title: "Image 2", description: "Petunias are an autumn or fall flower that produces mainly pink, white, and violet blossoms." },
        { src: "https://leafyplace.com/wp-content/uploads/2019/06/Chrysanthemum-flowers.jpg", title: "Image 2", description: "Chrysanthemums (or, sometimes called mums) are a type of flowering plant that produces large colorful blooms in the fall." },
        { src: "https://leafyplace.com/wp-content/uploads/2021/01/sweet-pea.jpg", title: "Image 2", description: "Sweet peas are a type of flowering climbing plant that you need to plant every year to enjoy their dainty flowers." },
        { src: "https://leafyplace.com/wp-content/uploads/2021/03/viola.jpg", title: "Image 2", description: "Plant violas in the fall if you want them to flower on and off during the winter months. Winter violas are tough enough to survive cold weather and can flower all through the winter." },
        { src: "https://leafyplace.com/wp-content/uploads/2020/04/zinnia.jpg", title: "Image 2", description: "Zinnia produces vibrant flowers that look beautiful in bouquets." },
        { src: "https://leafyplace.com/wp-content/uploads/2019/09/roses.jpg", title: "Image 2", description: "There are more than 360 rose species and thousands of rose cultivars, all producing beautiful flowers that have a wonderful fragrance" },
        // Add more images as needed
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;

        imgElement.addEventListener("click", function() {
            displayImageDetails(image);
        });

        galleryContainer.appendChild(imgElement);
    });

    function displayImageDetails(image) {
        // Create the modal overlay
        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal-overlay");

        // Create modal content
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", () => {
            modalOverlay.style.display = "none";
            document.body.removeChild(modalOverlay);
        });

        // Populate modal content
        const modalImage = document.createElement("img");
        modalImage.src = image.src;
        modalImage.alt = image.title;

        const modalTitle = document.createElement("h2");
        modalTitle.classList.add("modal-title");
        modalTitle.textContent = image.title;

        const modalDescription = document.createElement("p");
        modalDescription.classList.add("modal-description");
        modalDescription.textContent = image.description;

        // Append elements
        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalDescription);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Display modal
        modalOverlay.style.display = "flex";
    }
});
