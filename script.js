let voice = new SpeechSynthesisUtterance();
let textarea = document.getElementById("textInput");
let button = document.getElementById("btn");
let voiceSelect = document.getElementById("voiceSelect");

button.addEventListener("click", function () {
    // Set the text to speak
    voice.text = textarea.value;

    // Set the selected voice
    let selectedVoice = voiceSelect.value;
    speechSynthesis.getVoices().forEach(function (availableVoice) {
        if ((selectedVoice === "maleVoice" && availableVoice.name.toLowerCase().includes("male")) ||
            (selectedVoice === "femaleVoice" && availableVoice.name.toLowerCase().includes("female"))) {
            voice.voice = availableVoice;
        }
    });

    // Speak the text
    window.speechSynthesis.speak(voice);
});

