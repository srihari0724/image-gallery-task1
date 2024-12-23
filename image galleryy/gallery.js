let currentImageIndex = 0;
const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg'
    // Add more image paths as needed
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImage.src = images[index];
    caption.innerHTML = `Image ${index + 1}`;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        document.getElementById('modalImage').src = images[currentImageIndex];
        document.getElementById('caption').innerHTML = `Image ${currentImageIndex + 1}`;
    } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('modalImage').src = images[currentImageIndex];
        document.getElementById('caption').innerHTML = `Image ${currentImageIndex + 1}`;
    }
});
