import Link from "next/link";
import { Metadata } from "next";
import LoginForm from "@/components/form/login-form";
import LoginShapes from "@/components/common/login-shapes";


export const metadata: Metadata = {
   title: "Login Page - Housey",
};


export default function LoginPage() {
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
                              <h3 className="login__title">Hello Again</h3>
                              <p>Enter your credentials to acces your account.</p>
                           </div>
                           <div className="login__form">

                              <LoginForm />


                              <div className="login__register-now">
                                 <p>Don’t have an account? <Link href="/register">Register Now</Link></p>
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
