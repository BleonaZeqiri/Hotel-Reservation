'use client';
import {LockSvg } from "../svg";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import { IResetForm } from "@/types/form-d-t";
import { notifySuccess } from "@/utils/toast";
import { IDBResponseDT } from "@/types/db-response";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField, { PasswordToggle } from "./input-field";

export default function ResetPasswordForm({token}: {token: string}) {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IResetForm>()
   const onSubmit: SubmitHandler<IResetForm> = async (data) => {
      try {
         if (data) {
            const res: IDBResponseDT<{message: string }> = await axiosInstance.patch('/auth/reset-password', {
               token: token,
               password: data.password,
            });
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
            <button type="submit" className="tp-btn-xxl w-100">Reset Password</button>
         </div>
      </form>
   )
}
