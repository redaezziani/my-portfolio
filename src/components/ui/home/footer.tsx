'use client';
import { Ro4Logo } from './Icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendMeAMessage } from '@/app/actions/resend';
import FooterLine from '@/components/footer/footer-line';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '../button';

const Footer = () => {
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const handleSendEmail = async () => {
    try {
      setIsSending(true);
      if (!email || !message) return;
      const res = await sendMeAMessage(email as string, message as string);
      if (res?.textStatus === 'error') {
        toast({
          title: 'error',
          description: res?.message ?? 'An error occurred',
          variant: 'error',
        });
      } else {
        toast({
          title: 'success',
          description: res?.message ?? 'Message sent successfully',
          variant: 'success',
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
      setEmail(null);
      setMessage(null);
    }
  };
  return (
    <footer className='z-40 mx-auto  mb-8 mt-0 flex h-auto w-full max-w-[74rem] flex-auto flex-col gap-4 px-3  sm:h-[37.5rem] sm:flex-1 md:p-0'>
      <div className='flex w-full flex-col items-center justify-center gap-3 text-center'>
        <h3 className='flex items-center justify-center gap-2 font-medium text-slate-900 dark:text-slate-50 md:text-4xl'>
          Lets Have a Chat
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width={30}
              height={30}
              fill={'none'}
            >
              <path
                d='M18.9154 11.6997L17.373 15.8314C16.6547 17.7556 16.2955 18.7177 15.709 19.377C14.812 20.3851 13.5203 20.9748 12.1549 20.9995C11.262 21.0156 10.2783 20.6665 8.31091 19.9683C7.27913 19.6022 6.76324 19.4191 6.32165 19.1455C5.64795 18.7281 5.09127 18.1534 4.70166 17.4731C4.44628 17.0272 4.28743 16.5137 3.96974 15.4867L2.56985 10.9613C2.35476 10.266 2.64855 9.51553 3.28412 9.13687C4.11475 8.64198 5.19966 8.96175 5.60953 9.82225L6.5443 11.7848L9.1763 4.73429C9.4501 4.00083 10.2819 3.62265 11.0342 3.88961C11.7865 4.15657 12.1743 4.96757 11.9005 5.70103M11.9005 5.70103L12.5616 3.93029C12.8354 3.19683 13.6672 2.81866 14.4194 3.08562C15.1717 3.35257 15.5596 4.16357 15.2858 4.89704L14.6248 6.66777M11.9005 5.70103L10.4132 9.68518M14.6248 6.66777C14.8986 5.93431 15.7304 5.55613 16.4826 5.82309C17.2349 6.09005 17.6228 6.90105 17.349 7.63451L16.688 9.40524M14.6248 6.66777L13.1374 10.6519M18.5859 12.5854L19.4122 10.372C19.686 9.63852 19.2981 8.82752 18.5458 8.56056C17.7936 8.2936 16.9618 8.67178 16.688 9.40524M16.688 9.40524L15.8617 11.6187'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21.3307 14C21.877 15.6354 21.0574 17.4263 19.5 18'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </span>
        </h3>
        <p className='flex items-center justify-center gap-2 text-sm font-normal text-slate-900 opacity-70 dark:text-slate-50'>
          Questions about our services or want to start a project? <br /> Send
          me a message and I will get back to you as soon as possible
        </p>
      </div>
      <FooterLine />
      <section className='flex w-full items-center justify-center'>
        <div className='mt-5 flex w-full flex-col items-start justify-start gap-3 md:w-[55%]'>
          <div className='flex w-full items-center justify-start gap-4'>
            <div className='flex w-1/2 flex-col gap-3'>
              <Label className='opacity-70'>First Name</Label>
              <Input placeholder='John' className='w-full py-5' />
            </div>
            <div className='flex w-1/2 flex-col gap-3'>
              <Label className='opacity-70'>Last Name</Label>
              <Input placeholder='Doe' className='w-full py-5' />
            </div>
          </div>
          <div className='flex w-full items-center justify-start gap-4'>
            <div className='flex w-1/2 flex-col gap-3'>
              <Label className='opacity-70'>Email</Label>
              <Input placeholder='johnDoe@gmail.com' className='w-full py-5' />
            </div>
            <div className='flex w-1/2 flex-col gap-3'>
              <Label className='opacity-70'>Phone Number</Label>
              <Input
                type='tel'
                placeholder='+234 123 456 7890'
                className='w-full py-5'
              />
            </div>
          </div>
          <div className='flex w-full items-center justify-start gap-4'>
            <div className='flex w-full flex-col gap-3'>
              <Label className='opacity-70'>Message</Label>
              <Textarea
                placeholder='Type your message here...'
                className='w-full py-5'
              />
            </div>
          </div>
          <Button
            onClick={handleSendEmail}
            disabled={isSending}
            className='w-full py-5'
            variant={'gradient'}
          >
            Send Message
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
