

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let restulsArray = [];

// Get 1- Images from NASA APO
async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl);
        restulsArray = await response.json();
        console.log(restulsArray)
    } catch(error) {
        // Catch error here
    }
}

// On Load
getNasaPictures();