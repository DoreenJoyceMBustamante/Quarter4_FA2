function generateTable() {
    const beginning = parseInt(document.getElementById("begValue").value);
    const end = parseInt(document.getElementById("endValue").value);
    let display = document.getElementById("output");

    if (beginning > 2 && beginning < 10 && end > 2 && end < 10) {
        let result = "<table>";

        for (let x = 1; x <= beginning; x++) {
            result += "<tr>";
            for (let y = 1; y <= end; y++) {
                result += "<td>" + (x * y) + "</td>";
            }
            result += "</tr>";
        }

        result += "</table>";
        display.innerHTML = result;

    } else {
        alert("Please enter numbers between 2 and 10");
        display.innerHTML = ""; 
    }  
}
