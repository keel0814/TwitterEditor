
let cropperHeader = null;
let cropperIcon = null;
const cropAspectRatioIcon = 1.0 / 1.0;
const scaledWidthIcon = 100;
const cropAspectRatioHeader = 3.0 / 1.0;
const scaledWidthHeader = 110;

// アイコン用画像変換メソッド
const cropImageIcon =  (evt) =>{
    const files = evt.target.files;
    if (files.length == 0) {
        return;
    }
    let file = files[0];
    let image = new Image();
    let reader = new FileReader();
    reader.onload = (evt) =>{
        image.onload = () =>{
            let scale = 1;
            let imageData = null;
            {
                const canvas = document.getElementById("sourceIconCanvas");
                {
                    let ctx = canvas.getContext("2d");
                    canvas.width = image.width * scale;
                    canvas.height = image.height * scale;
                    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                }
                if (cropperIcon != null) {
                    // 画像を再読み込みした場合は破棄が必要
                    cropperIcon.destroy();
                }
                cropperIcon = new Cropper(canvas, {                       //①
                    //画像の移動,拡大・縮小,ズーム
                    aspectRatio: cropAspectRatioIcon,
                    viewmode: 1,
                    movable: true,
                    scalable: true,
                    zoomable: true,
                    zoomOnTouch:true,
                    zoomOnWheel:true,
                    autoCrop:true,
                    data: {
                        width: canvas.width,
                        height: canvas.width * cropAspectRatioIcon
                    },
                    
                    crop: function (event) {
                        const croppedCanvas = document.getElementById("croppedIconCanvas");
                        {
                            let ctx = croppedCanvas.getContext("2d");
                            let croppedImageWidth = image.height * cropAspectRatioIcon;
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
// ヘッダー用画像変換メソッド
const cropImageHeader = (evt) => {
    const files = evt.target.files;
    if (files.length == 0) {
        return;
    }
    let file = files[0];
    let image = new Image();
    let reader = new FileReader();
    reader.onload =(evt) =>{
        image.onload = () =>{
            let scale = 1;
            let imageData = null;
            {
                const canvas = document.getElementById("sourceCanvas");
                {
                    let ctx = canvas.getContext("2d");
                    canvas.width = image.width * scale;
                    canvas.height = image.height * scale;
                    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                }
                if (cropperHeader != null) {
                    // 画像を再読み込みした場合は破棄が必要
                    cropperHeader.destroy();
                }
                cropperHeader = new Cropper(canvas, {                       //②
                    //画像の移動,拡大・縮小,ズーム
                    aspectRatio: cropAspectRatioHeader,
                    viewmode: 1,
                    movable: true,
                    scalable: true,
                    zoomable: true,
                    zoomOnTouch:true,
                    zoomOnWheel:true,
                    autoCrop:true,
                    data: {
                        width: canvas.width,
                        height: canvas.width * cropAspectRatioHeader
                    },
                    crop: function (event) {
                        const croppedCanvas = document.getElementById("croppedCanvas");
                        {
                            let ctx = croppedCanvas.getContext("2d");
                            let croppedImageWidth = image.height * cropAspectRatioHeader;
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
//アイコンフレーム
var img;
function img1(){
    img = document.getElementById("croppedIconCanvas");
    img.src = "img/.png";
}
function img2(){
    img = document.getElementById("croppedIconCanvas");
    img.src = "img/.png";
}
function img3(){
    img = document.getElementById("croppedIconCanvas");
    img.src = "img/.png";
}
function img3(){
    img = document.getElementById("croppedIconCanvas");
    img.src = "img/.png";
}
//ヘッダーフレーム
function img1(){
    img = document.getElementById("croppedCanvas");
    img.src = "img/.png";
}
function img2(){
    img = document.getElementById("croppedCanvas");
    img.src = "img/.png";
}
function img3(){
    img = document.getElementById("croppedCanvas");
    img.src = "img/.png";
}
function img3(){
    img = document.getElementById("croppedIconCanvas");
    img.src = "img/.png";
}
//アイコンスタンプ
//ヘッダースタンプ
//ヘッダーテキスト

// cropしたアイコンの画像をtwitterプレビューに反映する
document.getElementById('cropIcon').addEventListener('click', function () {
    resultIconImgUrl = cropperIcon.getCroppedCanvas().toDataURL();          //①の中のクロップされcanvasに描画された画像のURLを取得
    var result = document.getElementById('defineIconCanvas');           //defineIconCanvasに取得した画像を描画
    result.src = resultIconImgUrl;
  });

// cropしたヘッダーの画像をtwitterプレビューに反映する
document.getElementById('cropHeader').addEventListener('click',  () => {
    resultHeaderImgUrl = cropperHeader.getCroppedCanvas().toDataURL();
    var result = document.getElementById('defineHeaderCanvas');
    result.src = resultHeaderImgUrl;
});


//"btn1"というIDを取得して、クリックしたらfunctionを実行する
// document.getElementById('icon frame').addEventListener('click',  () =>{
//     const canvas = document.getElementById("canvas");
//     const context = canvas.getContext("2d");
//     context.drawImage( img , 50 , 50 );

//     //"pics"というIDを取得して、そのsrcを"img/arupaka.png"に変更する
//     document.getElementById("pics").src="img/arupaka.png";

//     //表示・非表示を切り替える要素を取得
//     var img = document.getElementById("image_file");
//     img.src = "img/image1.png";
//     changeElement(img);

//     context.textBaseline = "top";
//     context.fillText( "0,0" , 0 , 0 );
// }, false);

// const tempBtn = () => {
// }
// tempBtn("btn1" , "img/mirror.svg")

// ===============

// var fileArry = ['imgName1','imgName2'];　// 読み込みたい画像のパスの配列　
// var numMaterials = fileArry.length;　　　　// ①読み込みたい画像の数
// var imgObjArry = [];　　　　　　　　　　　　　　// ③ロード済Imageオブジェクト用配列　
// var canvas = document.getElementById('canvasElem');　　　　　　// Canvas要素
// var ctx = canvas.getContext('2d');　　　　　　　　　　　　　　　　　　　// 2dContext

// function loadImges(){
//     var imgObj = new Image();　　　　　　　　　 　　　　 // 新しい Image オブジェクトを作る　
//     imgObj.addEventListener('load',　　　　　　　　　// loadイベントのリッスン
//     function(){　　　　　　　　　　　　　　
//         imgObjArry.push(imgObj);　　　　　　　　　　//　読み込み済画像を③に格納
//         display();
//     },false);
//     imgObj.src = fileArry[imgObjArry.length];　　// ソースのパスを設定
// }
// //画像を取得する
// function display(){
//     for (var i in imgObjArry){
//         ctx.drawImage(imgObjArry[i], 0, 0);
//         imgObjArry[i] = null;
//     }
// }
// var dataURL = canvas.toDataURL('image/png');


// アイコンダウンロード
function downloadIcon(){
    const url = resultIconImgUrl;
    const fileName = 'icon.jpg';
    
    let link = document.getElementById("dlIcon");
    link.href= url;
    link.download = fileName;
}

// ヘッダーダウンロード
function downloadHeader(){
    const url = resultHeaderImgUrl;
    const fileName = 'header.jpg';
    
    let link = document.getElementById("dlHeader");
    link.href= url;
    link.download = fileName;
}

// アイコン変換
const uploaderIcon = document.getElementById('icon-uploader');
uploaderIcon.addEventListener('change', cropImageIcon);
// ヘッダー変換
const uploaderHeader = document.getElementById('header-uploader');
uploaderHeader.addEventListener('change', cropImageHeader);

