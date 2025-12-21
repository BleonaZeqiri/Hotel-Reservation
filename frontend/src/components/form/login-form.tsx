'use client';
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "@/types/form-d-t";
import { LockSvg, UserFour } from "../svg";
import axiosInstance from "@/lib/axios";
import { IDBResponseDT } from "@/types/db-response";
import { IUser } from "@/types/user-d-t";
import { notifyError, notifySuccess } from "@/utils/toast";
import InputField, { PasswordToggle } from "./input-field";
import useGlobalContext from "@/hooks/use-global-context";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const {handleSetUserInfo} = useGlobalContext();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginForm>();
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            if (data) {
                const res: IDBResponseDT<{ user: IUser; token: string }> = await axiosInstance.post('/auth/login', {
                    email: data.email,
                    password: data.password
                });
                if (res.success) {
                    Cookies.set(
                        "userInfo",
                        JSON.stringify({
                            accessToken: res.data?.token,
                            user: res.data?.user,
                        }),
                        { expires: 1 }
                    );
                    handleSetUserInfo(res.data?.user, res.data?.token);
                    notifySuccess(res?.message);
                    router.push('/');
                } else {
                    console.log(res,'res in login');
                    notifyError(res?.message);
                }
            }
            reset()
        } catch (error: unknown) {
            console.log(error, 'error in register');
            const err = error as { message: string };
            notifyError(err?.message);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__input-wrapper">
                <InputField
                    type="text"
                    placeholder="Email or Username"
                    icon={<UserFour />}
                    error={errors.email?.message}
                    {...register("email", { required: "Email is required" })}
                />
                <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    icon={<LockSvg />}
                    error={errors.password?.message}
                    {...register("password", { required: "Password is required" })}
                >
                    <PasswordToggle
                        isVisible={showPassword}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                </InputField>
            </div>
            <div className="login__option mb-25 d-sm-flex justify-content-between">
                <div className="login__forgot">
                    <Link href="/forgot">forgot password?</Link>
                </div>
            </div>
            <div className="login__btn">
                <button type="submit" className="tp-btn-xxl w-100">Sign In</button>
            </div>
        </form>
    )
}
