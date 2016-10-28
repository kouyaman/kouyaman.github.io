// app.js

var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();
speech.lang = "ja";

//音声合成APIの使用
var ssu = new SpeechSynthesisUtterance();
ssu.lang = 'ja-JP';

btn.addEventListener( 'click' , function() {

	//音声認識をスタート
	speech.start();

} );

speech.addEventListener( 'result' , function( e ) {

	//認識された「言葉(text)」を、表示用のdivタグに代入する
	var text = e.results[0][0].transcript;
	content.textContent = text;

	//認識された「言葉(text)」を、音声合成
	//ssu.text = 'クリスマスにはサンタさん来てくれるかな？';
	ssu.text = text;
	speechSynthesis.speak(ssu);

} );
