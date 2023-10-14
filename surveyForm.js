function onSubmit() {
    // Get form values
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value).join(", ");
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    // Display values in popup
    let summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = `
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Date of Birth: ${dob}</li>
        <li>Country: ${country}</li>
        <li>Gender: ${gender}</li>
        <li>Profession: ${profession}</li>
        <li>Email: ${email}</li>
        <li>Mobile Number: ${mobile}</li>
    `;

    // Show popup
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    // Reset form
    document.getElementById('surveyForm').reset();

    // Hide popup
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}