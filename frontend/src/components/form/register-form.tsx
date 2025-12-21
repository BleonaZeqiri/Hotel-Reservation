'use client';
import { useState } from "react";
import { IRegisterForm } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import {Email, LockSvg,UserFour } from "../svg";
import axiosInstance from "@/lib/axios";
import { IDBResponseDT } from "@/types/db-response";
import { IUser } from "@/types/user-d-t";
import { notifyError, notifySuccess } from "@/utils/toast";
import InputField, { PasswordToggle } from "./input-field";

export default function RegisterForm() {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IRegisterForm>()
   const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
      try {
         if (data) {
            const res: IDBResponseDT<{ user: IUser; message: string }> = await axiosInstance.post('/auth/register', {
               username: data.name,
               email: data.email,
               password: data.password,
               role: 'user'
            });
            console.log(res);
            notifySuccess(res.data?.message);
         }
         reset()
      } catch (error) {
         console.log(error, 'error in register');
         const err = error as { message: string };
         notifyError(err?.message || 'Something went wrong');
      }
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="login__input-wrapper">
            <InputField
               type="text"
               placeholder="Enter your username"
               icon={<UserFour />}
               error={errors?.name?.message}
               {...register("name", { required: "username is required" })}
            />
            <InputField
               type="text"
               placeholder="Email or Username"
               icon={<Email />}
               error={errors?.email?.message}
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
            <InputField
               type={showConfirmPassword ? "text" : "password"}
               placeholder="Confirm Password"
               icon={<LockSvg />}
               error={errors.confirmPassword?.message}
               {...register("confirmPassword", {
                  required: true,
                  validate: (val: string) => {
                     if (watch('password') != val) {
                        return "Your passwords do not match";
                     }
                  }
               })}
            >
               <PasswordToggle
                  isVisible={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
               />
            </InputField>
         </div>
         <div className="login__btn mt-20">
            <button type="submit" className="tp-btn-xxl w-100">Sign Up</button>
         </div>
      </form>
   )
}
