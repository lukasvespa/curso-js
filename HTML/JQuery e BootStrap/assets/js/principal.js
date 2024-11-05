$(document).ready(function() {
    
    // Javascript Padrão
    var xhr = new XMLHttpRequest();
    xhr.open("POST", yourUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: value
    }));

    // jQuery Post
    $.post("/minha-url", {
        value: value
    })
});