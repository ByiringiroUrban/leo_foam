const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files


// Create a POST route to handle form submissions
app.post('/api/members', (req, res) => {
    const formData = req.body;

    // Set up your email details
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service (e.g., Gmail)
        auth: {
            user: 'urbanpac20@gmail.com', // Replace with your email
            pass: 'txwy ywhl avow hbcr'    // Replace with your email password (or app password)
        }
    });

    const mailOptions = {
        from: '"urban" <byiringirourban20@gmail.com>', // Your email address
        to: 'urbanpac20@gmail.com', // Replace with the recipient's email address
        subject: 'J.R.A.M Membership Form Submission',
        text: `New Membership Form Submission:

Full Name: ${formData.fullName}
Date of Birth: ${formData.dob}
Telephone: ${formData.tel}
Email: ${formData.email}
Education Level: ${formData.education}
Profession: ${formData.profession}
Occupation: ${formData.occupation}
Born Again: ${formData.bornAgain}
Born Again Details: ${formData.bornAgainDetails}
Baptized: ${formData.baptized}
Ministry Gift: ${formData.ministryGift}
Serving in Department: ${formData.servingDepartment}
Desired Department: ${formData.department}
Gender: ${formData.gender}
Age Group: ${formData.ageGroup}
Personal ID: ${formData.personalId}
Marital Status: ${formData.status}
Disability: ${formData.disability}
Cell: ${formData.cell}
Sector: ${formData.sector}
District: ${formData.district}
Street Number: ${formData.streetNumber}
Province: ${formData.province}
City: ${formData.city}
Nationality: ${formData.nationality}
Number of Children: ${formData.numberOfChildren}
Children Names and Ages: ${formData.childrenNamesAndAges}
Spiritual Information: ${formData.spiritualInformation}
Custom Input: ${formData.customInput}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          return res.status(500).send('Error sending email');
      }
  
      // Send a success response with JavaScript to show a popup and redirect
      res.send(`
          <script>
              alert('Form submitted successfully! by Leo Kafuruka');
              window.location.href = '/'; // Redirect to the form page
          </script>
      `);
  });
  
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
