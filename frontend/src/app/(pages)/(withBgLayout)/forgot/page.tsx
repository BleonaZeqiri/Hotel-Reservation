import Link from "next/link";
import { Metadata } from "next";
import LoginShapes from "@/components/common/login-shapes";
import ForgotForm from "@/components/form/forgot-form";



export const metadata: Metadata = {
    title: "Forgot Page - Housey",
};


export default function ForgotPage() {
    return (
        <>

            <section className="login__area fix pt-110 pb-110">
                <div className="container">
                    <div className="login__inner p-relative z-index-1">

                        <LoginShapes />

                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="login__wrapper">
                                    <div className="login__top mb-30 text-center">
                                        <h3 className="login__title">Forgot Password?</h3>
                                        <p>Enter your email address to request password reset.</p>
                                    </div>
                                    <div className="login__form">

                                        <ForgotForm />


                                        <div className="login__register-now">
                                            <p>Remember your password? <Link href="/login">Login</Link></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
