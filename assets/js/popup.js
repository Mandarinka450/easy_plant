var modal = document.getElementById('myModal');
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var img4 = document.getElementById('image4');
var img5 = document.getElementById('image5');
var img6 = document.getElementById('image6');
var modalImg = document.getElementById('img');

img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img6.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function() {
    modal.style.display = "none";
}

