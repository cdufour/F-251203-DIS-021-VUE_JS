// JS pur
var totos = document.getElementsByClassName('toto');

for (i=0; i<totos.length; i++) {
    totos[i].styles.color = 'green';
}

// <img id="myImage" />
document.getElementById('myImage').addEventListener('click', () => {
    console.log('reaction')
})


// en jQuery
$('.toto').css('color', 'green');
$('#myImage').click(() => console.log('reaction'))
