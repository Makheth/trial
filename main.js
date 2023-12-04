// Creating an array for programming languages
const favoriteLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "SQL",
    "PHP"
];

// Function to populate the list
function populateList() {
    const languageList = document.getElementById("languageList");

    favoriteLanguages.forEach((language) => {
        const listItem = document.createElement("li");
        listItem.textContent = language;
        languageList.appendChild(listItem);
    });
}

// function call 
window.onload = populateList;
