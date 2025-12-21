'use client'
import Link from "next/link";
import { IContactForm } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactInputField, ContactTextAreaField } from "./input-field";


export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>();
    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        try {
            console.log(data,'data');
            reset()
        } catch (error: unknown) {
            console.log(error, 'error in register');
        }
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ContactInputField
                        label="Full Name"
                        id="fname"
                        type="text"
                        placeholder="John"
                        required
                        {...register("fname", { required: "Full Name is required" })}
                        error={errors.fname?.message}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Last Name"
                            id="lname"
                            type="text"
                            placeholder="Smith"
                            required
                            {...register("lname", { required: "Last Name is required" })}
                            error={errors.lname?.message}                        
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Email"
                            id="email"
                            type="email"
                            placeholder="housey@mail.com"
                            required
                            {...register("email", { required: "Email is required" })}
                            error={errors.email?.message}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Phone Number"
                            id="phone"
                            type="text"
                            placeholder="Phone Number"
                            required
                            {...register("phone", { required: "Phone Number is required" })}
                            error={errors.phone?.message}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Subject" 
                            id="subject"
                            type="text"
                            placeholder="Enter Subject"
                            {...register("subject", { required: false})}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <ContactTextAreaField
                        label="Message"
                        id="message"
                        placeholder="Leave us a  message..."
                        required
                        {...register("message", { required: "Message is required" })}
                        error={errors.message?.message}
                    />
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-agree mb-30 d-flex align-items-start mb-25">
                        <input name="checkbox" className="tp-checkbox" type="checkbox" id="agree" />
                        <label className="tp-agree" htmlFor="agree">I agree to <Link href="/privacy-policy">terms & conditions </Link></label>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-comment-btn-wrap">
                        <button className="tp-btn-large w-100 text-center" type="submit">Send Message</button>
                    </div>
                    <p className="ajax-response mt-20"></p>
                </div>
            </div>
        </form>
    )
}
