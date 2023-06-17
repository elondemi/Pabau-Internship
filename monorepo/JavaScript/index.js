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

function changeValues() {
    var values = ["Eloni", "Pabau-task", "Internship-react"];
    var checkboxes = Array.from(document.getElementsByName("interest"));

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var randomIndex = Math.floor(Math.random() * values.length);
            checkbox.value = values[randomIndex];
        }
    });
}

function showSelectedValues() {
    var checkboxes = Array.from(document.getElementsByName("interest"));
    var selectedValues = checkboxes
        .filter(function(checkbox) {
            return checkbox.checked;
        })
        .map(function(checkbox) {
            return checkbox.value;
        });
    alert("Selected Values: " + selectedValues.join(", "));
}