(function (window) {
var helloSpeaker = {};
var speakWork = "Hello";
helloSpeaker.speak = function (name) {
 console.log(speakWork + " " + name);   
} 
window.helloSpeaker = helloSpeaker;
})(window);



// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
