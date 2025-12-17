'use client';
import Loading from "./loading";
import useAuthCheck from "@/hooks/use-auth-check";

const AuthChecking = ({ children }: { children: React.ReactNode }) => {
  const authChecked = useAuthCheck();
  
  let content;
  if (!authChecked) {
    content = (
      <div style={{ height: "100vh" }} className="d-flex align-items-center justify-content-center">
        <Loading spinner="fade" loading={!authChecked} />
      </div>
    );
  } else {
    content = children;
  }

  return content;
};

export default AuthChecking;
