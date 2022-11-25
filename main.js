let searchBtn = document.getElementById('searchButton')
let searchBox = document.getElementById('searchbox')
searchBox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchBtn.click();
    }
  });
searchBtn.addEventListener('click', () => setTimeout( changeResult, 1000) )

function changeResult() {
    
    let sect = document.querySelector('section.hidden')
    let para = document.querySelector('#result')
    let searchText = document.getElementById('searchbox')

    if (searchText.value.length <= 3 ) {
        para.innerText = 'Straight up fraud'
    } else if (searchText.value.length <= 4) {
        para.innerText = 'Grift and crash'
    } else if (searchText.value.length <= 5) {
        para.innerText = 'Overvalued but fine'
    } else {
        para.innerText = 'Legitimate business'
    }

    sect.classList.remove('hidden')

}