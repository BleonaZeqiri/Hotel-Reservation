'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import { Email } from "../svg";
import axiosInstance from "@/lib/axios";
import { IDBResponseDT } from "@/types/db-response";
import { notifySuccess } from "@/utils/toast";
import InputField from "./input-field";

type IforgotForm = {
    email: string;
}
export default function ForgotForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IforgotForm>()
    const onSubmit: SubmitHandler<IforgotForm> = async (data) => {
        try {
            if (data) {
                const res: IDBResponseDT<{ message: string }> = await axiosInstance.post('/auth/forgot-password', {
                    email: data.email,
                });
                // console.log(res);
                notifySuccess(res.data?.message);
            }
            reset()
        } catch (error) {
            console.log(error, 'error in register');
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__input-wrapper">
                <InputField
                    type="text"
                    placeholder="Enter your username"
                    icon={<Email />}
                    error={errors?.email?.message}
                    {...register("email", { required: "Email is required" })}
                />
            </div>
            <div className="login__btn">
                <button type="submit" className="tp-btn-xxl w-100">Send Request</button>
            </div>
        </form>
    )
}
