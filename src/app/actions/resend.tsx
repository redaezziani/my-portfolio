'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMeAMessage = async (email: string, message: string) => {
    try {
        'use server'
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['klausdev2@gmail.com'],
            subject: 'Hello world',
            html: `
            hello world, I am ${email} and I have a message for you
            <br/>
            <p>${message}</p>`,
          });
        
        if (error) {
            return {message: 'An error occurred while sending the email'};
        }
    } catch (error) {
        console.error(error);
    }
}