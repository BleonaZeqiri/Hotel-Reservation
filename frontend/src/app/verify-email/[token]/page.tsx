import { Metadata } from "next";
import { emailVerify } from "@/api/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Email Verify - Housey",
};

type IParams = Promise<{ token: string }>;

export default async function EmailVerifyPage({ params }: { params: IParams }) {
  const { token } = await params;
  const verifyData = await emailVerify(token);
  if (verifyData?.data?.message) {
    redirect("/login");
  }
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      {verifyData?.success ? (
        <h3 className="text-center text-success">{verifyData?.message}</h3>
      ) : (
        <h3 className="text-center text-danger">{verifyData?.message}</h3>
      )}
    </div>
  );
}
