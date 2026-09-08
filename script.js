const showDetailsBtn = document.getElementById("showDetailsBtn");
const details = document.getElementById("details");

showDetailsBtn.addEventListener("click", function () {
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        details.innerHTML = `
            <p><strong>Name:</strong> Cynthia</p>
            <p><strong>Register Number:</strong> 101</p>
            <p><strong>Programme:</strong> MCA</p>
        `;

        showDetailsBtn.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        showDetailsBtn.textContent = "Show Details";
    }
});