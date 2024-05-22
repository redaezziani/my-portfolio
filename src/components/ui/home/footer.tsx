'use client';
import { Ro4Logo } from "./Icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendMeAMessage } from "@/app/actions/resend"
import FooterLine from "@/components/footer/footer-line"
import { useState } from "react";
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
    const [isSending, setIsSending] = useState(false)
    const [email, setEmail] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const { toast } = useToast()
    const handleSendEmail = async () => {
        try {
            setIsSending(true)
            if (!email || !message) return
            const res = await sendMeAMessage(email as string, message as string)
            if (res?.textStatus === 'error') {
                toast({
                    title: 'error',
                    description: res?.message??'An error occurred',
                    variant: 'error'
                })
            } else {
                toast({
                    title: 'success',
                    description: res?.message??'Message sent successfully',
                    variant: 'success'
                })
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            setIsSending(false)
            setEmail(null)
            setMessage(null)
        }
    }
    return (
        <footer
            className=' max-w-6xl w-full px-3 md:p-0 mx-auto mt-0 mb-8  flex flex-auto sm:flex-1 flex-col  gap-4 h-auto sm:h-[37.5rem]'
        >
            <FooterLine />
            <section className=" w-full mt-3 grid  grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full md:w-2/3 col-span-2 flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex flex-col gap-2 justify-start items-start">
                        <h1
                            className="text-2xl font-bold"
                        >
                            Connect with me
                        </h1>
                        <p
                            className="opacity-80"
                        >
                            let's connect and build something great together
                        </p>
                        <div

                            className="flex w-full mt-5  flex-col gap-3 justify-start items-start"
                        >
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                className="w-full"
                                type="email"
                                id="email"
                                value={email ?? ""}
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Label htmlFor="message">
                                Message
                            </Label>
                            <Textarea
                                className="w-full"
                                id="message"
                                value={message ?? ""}
                                name="message"
                                placeholder="Message"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                onClick={handleSendEmail}
                                className="relative mt-2  w-full inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
                                <span
                                    className="absolute inset-0 overflow-hidden rounded-xl">
                                    <span
                                        className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(90,146,248,0.3)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div
                                    className="relative z-10 w-full flex items-center justify-center px-6 py-2 space-x-2 rounded-md bg-gray-950/50 ring-1 ring-white/10 ">
                                    {isSending ? (
                                        <span
                                            className=" text-sm font-medium flex justify-center items-center gap-2"
                                        >
                                            <svg
                                                className=" animate-spin duration-500 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                                                <path d="M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M21 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6 12L3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M7.75706 16.2422L5.63574 18.3635" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M7.75706 7.75804L5.63574 5.63672" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <span
                                                className=" text-sm font-medium"
                                            >
                                                Send Message
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                                                <path d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </>)}
                                </div>
                                <span
                                    className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="w-full flex flex-col gap-2 justify-start items-start">
                    <div
                        className=" flex justify-start items-center gap-1"
                    >
                        <Ro4Logo
                            className="w-5 h-5"
                        />
                        <h1
                            className=" opacity-75"
                        >
                            bring your ideas to life with the power of code
                        </h1>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer