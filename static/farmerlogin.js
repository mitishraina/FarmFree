document.getElementById('kycForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Basic form validation
    let name = document.getElementById('name').value;
    let aadhar = document.getElementById('aadhar').value;
    let mobile = document.getElementById('mobile').value;

    if(name && aadhar && mobile) {
        alert('KYC Submitted Successfully!');
    } else {
        alert('Please fill all the fields correctly.');
    }
});
