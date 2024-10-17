const image = document.getElementById('image');
const cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 1,
});

document.getElementById('cropImgbtn').addEventListener('click', function() {
    var cropImg = cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('outputImg').src = cropImg;
});