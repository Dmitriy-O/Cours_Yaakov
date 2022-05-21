// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3:ССоздайте объект, называемый «Hellospeaker», к которому вы прикрепите
// метод «говорить», который вы будете подвергнуть глобальному контекстусту
// See Lecture 52, part 1
// var helloSpeaker =
(function(window){
var helloSpeaker={//object==hellospeaker
   speak: function(name) {//function
    console.log(speakWord + " " + name);
  }
};
window.helloSpeaker=helloSpeaker;
var speakWord = "Hello";
})(window)
names;
//helloSpeaker.speak("dimos");
//helloSpeaker
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.

// Шаг 4: Перепишите функцию «говорить» так, чтобы она была прикреплена к
// HelloSpeaker Object вместо того, чтобы быть автономной функцией.
// See Lecture 52, part 2
// function speak(name) {
//   console.log(speakWord + " " + name);
// }

// STEP 5:Разоблачить объект «Hellospeaker» глобальному объему.Назови это
// 'Hellospeaker' также на глобальном объеме
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;