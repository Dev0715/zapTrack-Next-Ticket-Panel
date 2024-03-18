import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const ses = new AWS.SES({ apiVersion: 'latest' });

export async function sendMail(to: string, from: string, subject: string, message: string) {
    try {
        const result = await ses.sendEmail({
            Source: from,
            Destination: { ToAddresses: [to] },
            Message: {
                Subject: { Data: subject },
                Body: { Text: { Data: message } }
            }
        }).promise();
        console.log("Email sent: ", result.MessageId);
        return result.MessageId;
    } catch (err) {
        console.log("Error sending email: ", err);
        throw err;
    }
}