// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {

}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );


    const categoryBtns = categories.map(function (category, index) {
        let btn_nr = 'btn' + (index + 1);
        const categoryRo = {
            all: 'Toate',
            breakfast: 'Mic Dejun',
            lunch: 'Pranz',
            dinner: 'Cina',
            shakes: 'Bauturi',
            desert: 'Desert'
        }
        return `<button type = "button" class = " filter-btn" data-id = ${category} data-nr = ${btn_nr} >
            ${categoryRo[category]}
            </button>`;
    })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

}