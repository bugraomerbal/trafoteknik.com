/* Dinamik Fotoğraf Değiştirme */
function changeImage(imageSrc) {
    // Büyük fotoğrafı değiştir
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = imageSrc;

    // Çerçeveyi vurgula
    const thumbnails = document.querySelectorAll('.silisli-sac-thumbnail-frame');
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove('selected'));

    const clickedThumbnail = Array.from(thumbnails).find(thumbnail =>
        thumbnail.querySelector('.silisli-sac-thumbnail').style.backgroundImage.includes(imageSrc)
    );
    clickedThumbnail.classList.add('selected');
}
