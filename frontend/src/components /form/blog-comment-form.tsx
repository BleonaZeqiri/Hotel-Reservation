'use client';
import Link from "next/link";
import { IBlogCommentForm } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactInputField, ContactTextAreaField } from "./input-field";

type IProps = {
    btn_2?: boolean;
}
export default function BlogCommentForm({ btn_2 = false }: IProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBlogCommentForm>();
    const onSubmit: SubmitHandler<IBlogCommentForm> = async (data) => {
        try {
            console.log(data,'data');
            reset()
        } catch (error: unknown) {
            console.log(error, 'error in register');
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ContactInputField
                        top_cls="tp-postbox-input"
                        label="Name"
                        id="name"
                        type="text"
                        placeholder="John"
                        required
                        {...register("name", { required: "Name is required" })}
                        error={errors.name?.message}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ContactInputField
                        top_cls="tp-postbox-input"
                        label="Email "
                        id="Email "
                        type="email"
                        placeholder="www.example.com"
                        {...register("email", { required: "Email is required" })}
                        error={errors.email?.message}
                        required
                    />
                </div>
                <div className="col-lg-12">
                    <ContactTextAreaField
                        top_cls="tp-postbox-textarea"
                        label="Message"
                        id="message"
                        placeholder="Leave us a  comment..."
                        required
                        {...register("comment", { required: "Comment is required" })}
                        error={errors.comment?.message}
                    />
                </div>
                <div className="col-lg-12">
                    <div className="tp-postbox-agree mb-30 d-flex align-items-start mb-25">
                        <input className="tp-checkbox" type="checkbox" id="agree" />
                        <label className="tp-agree" htmlFor="agree">I agree that my submitted data is being <Link href="/privacy-policy">collected and stored.</Link></label>
                    </div>
                </div>
                <div className="col-lg-12">
                    {btn_2 ? <div className="tp-postbox-comment-btn-wrap">
                        <button className="tp-btn-large" type="submit">Leave a comment</button>
                    </div> : <div className="tp-room-review-form-btn">
                        <button className="tp-btn-4" type="submit">Leave a comment</button>
                    </div>}
                </div>
            </div>
        </form>
    )
}
