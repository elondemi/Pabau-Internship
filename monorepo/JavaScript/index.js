function shuffleValues() {
    var checkboxes = Array.from(document.getElementsByName("interest"));
    var labelContainer = document.getElementById("myForm");

    checkboxes.sort(function() {
        return 0.5 - Math.random();
    });

    checkboxes.forEach(function(checkbox) {
        labelContainer.appendChild(checkbox.parentNode);
    });
}

