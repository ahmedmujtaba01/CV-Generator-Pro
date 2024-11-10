// function generateCV() {
//     const template = document.getElementById('template').value;
//     const name = document.getElementById('name').value;
//     const dob = document.getElementById('dob').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const address = document.getElementById('address').value;
//     const city = document.getElementById('city').value;
//     const province = document.getElementById('province').value;
//     const country = document.getElementById('country').value;
//     const education = document.getElementById('education').value;
//     const experience = document.getElementById('experience').value;
//     const profileImage = document.getElementById('profileImage').files[0];

//     // Check if all fields are filled
//     if (!name || !dob || !phone || !email || !address || !city || !province || !country || !education || !experience) {
//         alert("Please fill in all required fields before generating your CV.");
//         return;
//     }

//     let profileImageURL = "";
//     if (profileImage) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             profileImageURL = e.target.result;
//             renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL);
//         };
//         reader.readAsDataURL(profileImage);
//     } else {
//         renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL);
//     }
// }

// function renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL) {
//     const cvPreview = document.getElementById('cvPreview');
//     cvPreview.innerHTML = `
//         <div class="${template}">
//             <h2>${name}</h2>
//             ${profileImageURL ? `<img src="${profileImageURL}" alt="Profile Image" class="profile-image">` : ""}
//             <p><strong>Date of Birth:</strong> ${dob}</p>
//             <p><strong>Phone:</strong> ${phone}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Address:</strong> ${address}, ${city}, ${province}, ${country}</p>
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Experience</h3>
//             <p>${experience}</p>
//         </div>
//     `;
//     alert("CV generated successfully!");
// }

// function downloadCV() {
//     const cvContent = document.getElementById('cvPreview').innerHTML;
//     if (!cvContent) {
//         alert("Please generate the CV before downloading.");
//         return;
//     }
//     const blob = new Blob([cvContent], { type: 'text/html' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'CV.html';
//     link.click();
//     URL.revokeObjectURL(link.href);
// }

// document.getElementById('commentForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('commentName').value;
//     const email = document.getElementById('commentEmail').value;
//     const comment = document.getElementById('commentText').value;

//     if (!name || !email || !comment) {
//         alert("Please fill in all fields before submitting your comment.");
//         return;
//     }
//     alert(`Thank you for your comment, ${name}!`);
// });



function generateCV() {
    const template = document.getElementById('template').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const country = document.getElementById('country').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const profileImage = document.getElementById('profileImage').files[0];

    if (!name || !dob || !phone || !email || !address || !city || !province || !country || !education || !experience) {
        alert("Please fill in all required fields before generating your CV.");
        return;
    }

    let profileImageURL = "";
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageURL = e.target.result;
            renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL);
        };
        reader.readAsDataURL(profileImage);
    } else {
        renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL);
    }
}

function renderCV(template, name, dob, phone, email, address, city, province, country, education, experience, profileImageURL) {
    const cvPreview = document.getElementById('cvPreview');
    cvPreview.innerHTML = `
        <div class="${template}">
            <h2>${name}</h2>
            ${profileImageURL ? `<img src="${profileImageURL}" alt="Profile Image" class="profile-image">` : ""}
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}, ${city}, ${province}, ${country}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
    `;
    alert("CV generated successfully!");
}

function downloadCV() {
    const cvPreview = document.getElementById('cvPreview');
    if (!cvPreview.innerHTML) {
        alert("Please generate the CV before downloading.");
        return;
    }

    html2canvas(cvPreview).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Calculate width and height to fit A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('CV.pdf');
    }).catch(error => {
        console.error("Error generating PDF:", error);
        alert("An error occurred while generating the PDF.");
    });
}

// Comment form submission handler
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('commentName').value;
    const email = document.getElementById('commentEmail').value;
    const comment = document.getElementById('commentText').value;

    if (!name || !email || !comment) {
        alert("Please fill in all fields before submitting your comment.");
        return;
    }
    alert(`Thank you for your comment, ${name}!`);
});

// Attach the download button handler
document.getElementById('downloadButton').addEventListener('click', downloadCV);






