console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const image = document.querySelector("#imageContainer img");
const feedback = document.querySelector("#feedback");


searchButton.addEventListener("click", displayGif);

function displayGif () {
    let userInput = searchInput.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=i6swkxjYC5ltiMoTnhh17oPxKkGBTm7H&s=${userInput}`, { mode: "cors" })
    .then((res) => res.json())
    .then((data) => {
        image.src = data.data.images.original.url;
        searchInput.value = "";
        feedback.textContent = "";
    })
    .catch((error) => {
        console.error(error);
        feedback.textContent = error.message;
    });
}

