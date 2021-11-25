

function click_button() {
    document.getElementById("button_1").style.backgroundColor = "pink";

    axios.request({
        url: "http://www.boredapi.com/api/activity/"
    }).then(bored_success).catch(bored_failed);
}

function bored_success(response) {
    var quote_tag = document.createElement("h1");
    quote_tag.innerText = response['data']['activity'];
    container.appendChild(quote_tag);
}

function bored_failed(error) {
    var error_tag = document.createElement("h1");
    error_tag.innerText = "Sorry, something went wrong. Please refresh the page."
    container.appendChild(error_tag);
}

var button_1 = document.getElementById("button_1");
button_1.addEventListener('click', click_button);
button_4.addEventListener('click', select_part);


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

