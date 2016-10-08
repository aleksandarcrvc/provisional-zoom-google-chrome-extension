function zoomInScreen() {
    var currentStyle = parseInt(document.body.style.zoom.slice(0,-1));
    document.body.style.zoom = currentStyle + 10 + "%";
}

function zoomOutScreen() {
    var currentStyle = parseInt(document.body.style.zoom.slice(0,-1));
    document.body.style.zoom = currentStyle - 10 + "%";
}

Mousetrap.bind(['shift+up'], zoomInScreen);
Mousetrap.bind(['shift+down'], zoomOutScreen);

function setDefaultZoom(params) {
    document.body.style.zoom = '100%';
}

setDefaultZoom()