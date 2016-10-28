// app.js

var btn = document.getElementById('btn');
var content = document.getElementById('content');

btn.addEventListener( 'click' , function() {

	//テキスト
	var text = 'こんにちは、ぼくです。';
	content.textContent = text;

	//認識された「言葉(text)」を、音声合成
	var ssu = new SpeechSynthesisUtterance();
	ssu.lang = 'ja-JP';
	ssu.text = text;
	speechSynthesis.speak(ssu);

} );
