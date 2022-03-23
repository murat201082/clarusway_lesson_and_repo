const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(".container .seat:not(.occupied)");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

//önce localStorage sonra slectBox
//initial value == movieSelectBox.value
//movieSelectBox.options[movieSelectBox.selectedIndex].value == movieSelectBox.value
//(sayfa yüklenince en güncel movie seat price)
let currentTicketPrice = localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.options[movieSelectBox.selectedIndex].value;

//movieIndex (sayfa yüklenince en güncel movie index)
let currentMovieIndex = localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex;

window.onload = () =>{
    movieSelectBox.selectedIndex = currentMovieIndex;
    updateMovieInfo();
}
movieSelectBox.addEventListener("change", (e)=>{
    let ticketPrice = e.target.value;
    let movieIndex = e.target.selectedIndex;
    console.log(movieIndex);
    updateMovieInfo();
    setMovieDataToLocalStorage(ticketPrice, movieIndex);
});

const setMovieDataToLocalStorage = (ticketPrice, movieIndex) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", ticketPrice);
}

container.addEventListener("click", (e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
        console.log(e.target.classList);
    }
    // if(e.target.classList.contains("seat") && e.target.classList.contains("occupied")){
    //     alert("lütfen rezerve olmayan koltuk seçiniz!");
    // }
    updateMovieInfo();
});

const updateMovieInfo = () =>{
    let selectedSeats = document.querySelectorAll(".row .seat.selected");
    // let selectedSeats2 = document.querySelectorAll(".row .seat .selected");

    let selectedSeatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));
    // console.log(selectedSeatsIndexArray);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndexArray));

    count.innerText = selectedSeatsIndexArray.length;
    total.innerText = selectedSeatsIndexArray.length * movieSelectBox.value;
    film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];


}

(function (x){
    return (function(y){
        console.log(x);
    })(2)
})(1);
    