function openTab(evt, templateType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(templateType).style.display = "block";
    evt.currentTarget.className += " active";
}

let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
})