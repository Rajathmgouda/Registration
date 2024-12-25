$(document).ready(function () {
    $('#submit-btn').click(function () {
      // Fetch form data
      const name = $('#name').val();
      const dob = $('#dob').val();
      const gender = $('#gender').val();
      const email = $('#email').val();
      const phone = $('#phone').val();
      const address = $('#address').val();
  
      // Validate form
      if (name && dob && gender && email && phone && address) {
        // Hide form and show details
        $('#form-container').addClass('hidden');
        $('#details-container').removeClass('hidden');
  
        // Display output
        $('#output').html(`
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
        `);
      } else {
        alert('Please fill in all fields!');
      }
    });
  
    // Handle "Go Back" button
    $('#back-btn').click(function () {
      $('#details-container').addClass('hidden');
      $('#form-container').removeClass('hidden');
      $('#registration-form')[0].reset(); // Reset the form
    });
  });
  