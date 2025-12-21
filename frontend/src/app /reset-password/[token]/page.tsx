import Link from "next/link";
import { Metadata } from "next";
import LoginShapes from "@/components/common/login-shapes";
import ResetPasswordForm from "@/components/form/reset-pass-form";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Reset Password - Housey",
};

type IParams = Promise<{ token: string }>;

export default async function ResetPasswordPage({ params }: { params: IParams }) {
    const { token } = await params;

    if (!token) {
        redirect("/login");
    }

    return (
        <section className="login__area fix pt-110 pb-110">
            <div className="container">
                <div className="login__inner p-relative z-index-1">
                    <LoginShapes />
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="login__wrapper">
                                <div className="login__top mb-30 text-center">
                                    <h3 className="login__title">Reset Password</h3>
                                </div>
                                <div className="login__form">
                                    <ResetPasswordForm token={token} />
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
    );
}
