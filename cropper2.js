let cropper = null;
const cropAspectRatio = 3.0 / 1.0;
const scaledWidth = 300;

const cropImage = function (evt) {
    const files = evt.target.files;
    if (files.length == 0) {
        return;
    }
    let file = files[0];
    let image = new Image();
    let reader = new FileReader();
    reader.onload = function (evt) {
        image.onload = function () {
            let scale = scaledWidth / image.width;
            let imageData = null;
            {
                const canvas = document.getElementById("sourceCanvas2");
                {
                    let ctx = canvas.getContext("2d");
                    canvas.width = image.width * scale;
                    canvas.height = image.height * scale;
                    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                }
                if (cropper != null) {
                    // 画像を再読み込みした場合は破棄が必要
                    cropper.destroy();
                }
                cropper = new Cropper(canvas, {
                    aspectRatio: cropAspectRatio,
                    movable: false,
                    scalable: false,
                    zoomable: false,
                    data: {
                        width: canvas.width,
                        height: canvas.width * cropAspectRatio
                    },
                    crop: function (event) {
                        const croppedCanvas = document.getElementById("croppedCanvas2");
                        {
                            let ctx = croppedCanvas.getContext("2d");
                            let croppedImageWidth = image.height * cropAspectRatio;
                            croppedCanvas.width = image.width;
                            croppedCanvas.height = image.height;
                            croppedCanvas.width = croppedImageWidth * scale;
                            croppedCanvas.height = image.height * scale;
                            ctx.drawImage(image,
                                event.detail.x / scale, event.detail.y / scale, event.detail.width / scale, event.detail.height / scale,
                                0, 0, croppedCanvas.width, croppedCanvas.height
                            );
                        }
                    }
                });
            }
        }
        image.src = evt.target.result;
    }
    reader.readAsDataURL(file);
}

const uploader = document.getElementById('icon-uploader');
uploader.addEventListener('change', cropImage);