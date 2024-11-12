import siteData from '../assets/Data/siteData.json'

export const sendEmail = async (xfrom, xsubject, xtext) => {
    if (siteData.sendGridAPIKey != '') {
        sgMail.setApiKey(siteData.sendGridAPIKey);
        const msg = {
            to: siteData.myEmail,
            from: xfrom,
            subject: xsubject,
            text: xtext,
        }; try {
            await sendgrid.send(options);
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

export default sendEmail;

