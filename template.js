//Dark Mode
let darkLight = () => {
    let elementData = document.body.classList.toggle("dark_mode_class")

}
darkLight();
//Search
$(document).ready(function() {
    const searchData = ["Antalya", "Denizli", "Trabzon", "İzmir", "Bursa", "İstanbul"];
    $("#search_id").autocomplete({
        source: searchData
    });

});


//now Date
const nowDate = () => {
    let dateYear = document.getElementById("now_date");
    dateYear.innerHTML = new Date().getFullYear();

}
nowDate();