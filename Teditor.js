//初期状態
//icon headerファイル選択を非表示
document.getElementById('iconFile').style.display = "none";
document.getElementById('headerFile').style.display = "none";
//icon headerプレビュー画面を非表示
document.getElementById('iconPreview').style.display = "none";
document.getElementById('headerPreview').style.display = "none";
//icon headerツール部分を非表示
document.getElementById('twitterSection').style.display = "";
document.getElementById('iconSection').style.display = "none";
document.getElementById('headerSection').style.display = "none";
//icon headerテンプレートを非表示
document.getElementById('Empty').style.display = "";
document.getElementById('IconFrameTemplate').style.display = "none";
document.getElementById('HeaderFrameTemplate').style.display = "none";
document.getElementById('IconStampTemplate').style.display = "none";
document.getElementById('HeaderStampTemplate').style.display = "none";
document.getElementById('textTemplate').style.display = "none";
document.getElementById('etcTemplate').style.display = "none";
//決定ボタンの表示
document.getElementById('cropIcon').style.display = "none";
document.getElementById('cropHeader').style.display = "none";

function buttonClick(){
  radio = document.getElementsByName('accessible-radio') 


  //twitterボタンを押したとき
  if(radio[0].checked) {
    //icon headerファイル選択を非表示
    document.getElementById('iconFile').style.display = "none";
    document.getElementById('headerFile').style.display = "none";
    //twitterプレビュー画面の表示
    document.getElementById('twitterPreview').style.display = "";
    document.getElementById('iconPreview').style.display = "none";
    document.getElementById('headerPreview').style.display = "none";
    //twitterツール部分を表示
    document.getElementById('twitterSection').style.display = "";
    document.getElementById('iconSection').style.display = "none";
    document.getElementById('headerSection').style.display = "none";

    //ダウンロードボタンの表示
    document.getElementById('dlIcon').style.display = "";
    document.getElementById('dlHeader').style.display = "";

    //決定ボタンの表示
    document.getElementById('cropIcon').style.display = "none";
    document.getElementById('cropHeader').style.display = "none";


    //iconボタンを押したとき
  }else if(radio[1].checked) {
    //headerファイル選択を非表示
    document.getElementById('iconFile').style.display = "";
    document.getElementById('headerFile').style.display = "none";
    //iconプレビュー画面の表示
    document.getElementById('twitterPreview').style.display = "none";
    document.getElementById('iconPreview').style.display = "";
    document.getElementById('headerPreview').style.display = "none";
    //iconツール部分を表示
    document.getElementById('twitterSection').style.display = "none";
    document.getElementById('iconSection').style.display = "";
    document.getElementById('headerSection').style.display = "none";

    //ダウンロードボタンの表示
    document.getElementById('dlIcon').style.display = "none";
    document.getElementById('dlHeader').style.display = "none";

    //決定ボタンの表示
    document.getElementById('cropIcon').style.display = "";
    document.getElementById('cropHeader').style.display = "none";

    //ヘッダーボタンを押したとき
  }else if(radio[2].checked) {
    //iconファイル選択を非表示
    document.getElementById('iconFile').style.display = "none";
    document.getElementById('headerFile').style.display = "";
    //headerプレビュー画面の表示
    document.getElementById('twitterPreview').style.display = "none";
    document.getElementById('iconPreview').style.display = "none";
    document.getElementById('headerPreview').style.display = "";
    //headerツール部分を表示
    document.getElementById('twitterSection').style.display = "none";
    document.getElementById('iconSection').style.display = "none";
    document.getElementById('headerSection').style.display = "";

    //ダウンロードボタンの表示
    document.getElementById('dlIcon').style.display = "none";
    document.getElementById('dlHeader').style.display = "none";

    //決定ボタンの表示
    document.getElementById('cropIcon').style.display = "none";
    document.getElementById('cropHeader').style.display = "";    
  }
}

//アイコンのツールボタンを押したとき
function toolClick(){
  tool = document.getElementsByName('iconToolRadio') 

  //twitterボタンを押したとき
  if(tool[0].checked) {
    //iconテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "none";

    //iconボタンを押したとき
  }else if(tool[1].checked) {
    //iconテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "none";

    //ヘッダーボタンを押したとき
  }else if(tool[2].checked) {
    //iconテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "none";

  }else if(tool[3].checked) {
    //iconテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "";

  }
}
//ヘッダーのツールボタンを押したとき
function toolHeaderClick(){
  toolH = document.getElementsByName('headerToolRadio') 

  //フレームツールボタンを押したとき
  if(toolH[0].checked) {
    //headerフレームテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "none";

    //スタンプツールボタンを押したとき
  }else if(toolH[1].checked) {
    //headerスタンプテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "none";

    //テキストボタンを押したとき
  }else if(toolH[2].checked) {
    //headerテキストテンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "";
    document.getElementById('etcTemplate').style.display = "none";

    //その他ボタンを押したとき
  }else if(toolH[3].checked) {
    //headerその他テンプレートを表示
    document.getElementById('Empty').style.display = "none";
    document.getElementById('IconFrameTemplate').style.display = "none";
    document.getElementById('HeaderFrameTemplate').style.display = "none";
    document.getElementById('IconStampTemplate').style.display = "none";
    document.getElementById('HeaderStampTemplate').style.display = "none";
    document.getElementById('textTemplate').style.display = "none";
    document.getElementById('etcTemplate').style.display = "";

  }
}