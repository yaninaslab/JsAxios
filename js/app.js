

function click_button () {
    document.getElementById("button_1").style.backgroundColor = "pink";
    
    axios.request ({
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
button_3.addEventListener('click', select_part);


function select_part(){
    var select_button = document.getElementById("button_3");
    document.getElementById("button_3").style.backgroundColor = "pink";
    axios.request ({
        url: "http://www.boredapi.com/api/activity?participants=1",
        method: "GET",
        params: {
            participants: 1
        },
        url: "http://www.boredapi.com/api/activity?participants=2",
        method: "GET",
        params: {
            participants: 2
        },
        url: "http://www.boredapi.com/api/activity?participants=3",
        method: "GET",
        params: {
            participants: 3
        },
        url: "http://www.boredapi.com/api/activity?participants=4",
        method: "GET",
        params: {
            participants: 4
        }

    }).then(bored_success).catch(bored_failed);

}

