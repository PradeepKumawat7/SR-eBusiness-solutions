import nodemailer from 'nodemailer';
// Define email content


export const actions = {
    default: async ({ request }) => {
        // Extract form data from the request
        const formData = await request.formData();
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            countryCode: formData.get('countryCode'),
            companyName: formData.get('companyName'),
            website: formData.get('website')
        };
        let html = `<h1>Digital Market</h1>
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li><a href="tel:${data.countryCode}-${data.phone}">Phone: ${data.countryCode}-${data.phone}</a></li>
        <li>Company Name: ${data.companyName}</li>
        <li>Website: ${data.website}</li>
        <p>Message: ${data.message}</p>
    </ul>`;
        const emailContent = {
            from: 'jaipalbhanwariya001@gmail.com',
            to: 'jaipalbhanwariya6@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email.',
            html: html,
        };
        console.log(emailContent);


        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jaipalbhanwariya001@gmail.com',
                pass: 'qhpy lmyh kdjc xxws',
            },
        });

        // Send the email
        transporter.sendMail(emailContent, (error, info) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Email sent successfully!', info.response);
            }
        });
    }
};