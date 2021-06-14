document.querySelector('.get-quote').addEventListener('click', getQuote);

function getQuote(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://goquotes-api.herokuapp.com/api/v1/random?count=1', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
           const Quote = response.quotes[0].text;
           document.querySelector('.quotes').innerHTML = `<h1>" ${Quote} "</h1>`;
        }
    }

    xhr.send();
    e.preventDefault();
}
