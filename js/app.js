
// This function is called for the first part of the assignment when button Let's Do It is clicked. The color of the button changes and it shows a random activity from the API
function click_button() {
    document.getElementById("button_1").style.backgroundColor = "pink";

    axios.request({
        url: "http://www.boredapi.com/api/activity/"
    }).then(bored_success).catch(bored_failed);
}
// This function calls a random activity from the API and injects the text on the page
function bored_success(response) {
    var quote_tag = document.createElement("h1");
    quote_tag.innerText = response['data']['activity'];
    container.appendChild(quote_tag);
}
// This function shows an error message when something goes wrong
function bored_failed(error) {
    var error_tag = document.createElement("h1");
    error_tag.innerText = "Sorry, something went wrong. Please refresh the page."
    container.appendChild(error_tag);
}
// Here I added events for my buttons. When the buttons are clicked, the mentioned functions are called
var button_1 = document.getElementById("button_1");
button_1.addEventListener('click', click_button);
button_4.addEventListener('click', select_part);
button_5.addEventListener('click', select_type);

// This function shows an activity based on the number of participants. For this we need to grab the value of mySelect and assign a variable to it. 
// Then we need to pass this variable as params since the number of participants changes. 
function select_part() {

    document.getElementById("button_4").style.backgroundColor = "pink";
    var selected_num = document.getElementById("mySelect").value;
    axios.get("http://www.boredapi.com/api/activity", {
        params: {
            participants: selected_num,
        }
    })

        .then(bored_success).catch(bored_failed);

}

// This is one of the bonus assignments. Applied the same principle as with select_part() but had to figure out how to define a value for radio button
function select_type() {
    document.getElementById("button_5").style.backgroundColor = "pink";
    var selected_type = document.querySelector('input[name=reload_mode]:checked').value;
    axios.get("http://www.boredapi.com/api/activity", {
        params: {
            type: selected_type,
        }
    })

        .then(bored_success).catch(bored_failed);


}