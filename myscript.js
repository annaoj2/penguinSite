

function changeText(elementId, myText) {
         // saves user input in a variable
         //var inputText = document.getElementById('theInput').value;
        
         // change the html content to whatever the user input
         document.getElementById(elementId).innerHTML = myText;
     }
function favoritePenguin (species) {
        console.log("Your favorite type of penguin is the "+species+" Penguin.");
    }


function verifySpeciesCount(inputText) {
    if (Number(inputText)==18) {
        window.alert("That\'s right!");
    } else {
        window.alert("Try again!");
    }
}

function penguinFact(factNum) {
    var fact = '';
    if (factNum==1){
        fact = "Penguins live only in the Southern Hemisphere.";
    } else if (factNum==2) {
        fact = "Penguins live in Antarctica, Africa, South America, and Australia, but they do not live in North America, Europe, or Asia.";
    } else {
        fact = "Depending on the species and the food availability, penguins eat fish, krill, or squid.";
    }
    return fact; 
}

function displayPenguinFact(factNum,elementId) {
    fact = penguinFact(factNum);
    changeText(elementId, fact);
}