const showDetailsBtn = document.getElementById("showDetailsBtn");
const details = document.getElementById("details");

showDetailsBtn.addEventListener("click", function () {
    details.style.display = "block";

    details.innerHTML = `
        <h3>Student Details</h3>
        <p>Name: Albin Thomas</p>
        <p>Register Number: 2547209</p>
        <p>Programme: MCA</p>
        <p>Status: Active Student</p>
    `;

    showDetailsBtn.textContent = "Details Shown";
});