console.log("JavaScript is connected!"); //just comfirmation

const character = document.getElementById("character");
const question = document.getElementById("question");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const correctPassword = "27.11.1999";

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordMessage = document.getElementById("passwordMessage");





passwordButton.addEventListener("click", function () {

    if (passwordInput.value === correctPassword) {

        // Hide password
        passwordScreen.style.display = "none";

        // Show question
        document.querySelector(".question-section").style.display = "block";

    } else {

        passwordMessage.textContent = "Passwordကို ကိုကို့ စီမှာပြန်တောင်းပါ။❤️";
        passwordInput.value = "";
        passwordInput.focus();

    }

});




// =========================
// YES BUTTON
// =========================

yesButton.addEventListener("click", function () {
      
    // Change character
    character.src = "/lib/img/TransparentCha/ExcitedTeanCat.png";

    // Change question
    question.textContent = "ဟီးဟီး ❤️";


        // Hide Yes / No buttons
    document.querySelector(".answer-buttons").style.display = "none";

    // Show input
    document.getElementById("love-input").style.display = "block";

});

submitAnswer.addEventListener("click", function () {

    const answer = loveAnswer.value.trim();

    if (answer === "အာဘွား") {

        // Go to next page
        window.location.href = "loveletter.html";

    } else {

        inputMessage.textContent =
            "အာဘွား ပေးပါဆို 🥺❤️";

    }

});











// =========================
// NO BUTTON
// =========================
let noClickCount = 0;

const noCharacters = [
    "/lib/img/TransparentCha/SheckedTranCat.png",
    "/lib/img/TransparentCha/SadTranCat.png",
    "/lib/img/TransparentCha/SheckedTranCat.png",
    "/lib/img/TransparentCha/SadTranCat.png"

];

const noMessages = [
    "ဟာ မမ နော် 🥺",
    "တကယ်ကြီးမချစ်တော့ဘူးလား? 🥺",
    " ငိုမှာနော်။ 😭",
    " ဘေဘီ.... မချစ်တော့ဘူးလို့မပြောပါနဲ့ 🥺"
];



noButton.addEventListener("click", function () {


    // Change question
    // Increase counter
     noClickCount++;

   // Restart after 4
    if (noClickCount >= noCharacters.length) {
        noClickCount = 0;
    }

    // Change character
    character.src = noCharacters[noClickCount];

    // Change text
    question.textContent = noMessages[noClickCount];

    //Moving Section
        const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";





});

noButton.style.transition = "left 0.4s ease, top 0.4s ease";

