// app.js

var btn = document.getElementById('btn');
var content = document.getElementById('content');
var speak = document.getElementById('speak');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();
speech.lang = "ja";

btn.addEventListener( 'click' , function() {

	//音声認識をスタート
	speech.start();

} );

speech.addEventListener( 'result' , function( e ) {

	//認識された「言葉(text)」を、表示用のdivタグに代入する
	var text = e.results[0][0].transcript;
	content.textContent = text;

} );

speak.addEventListener( 'click' , function() {

	//音声合成
	var ssu = new SpeechSynthesisUtterance();
	ssu.lang = 'ja-JP';
	ssu.text = content.textContent;
	speechSynthesis.speak(ssu);

} );
