import BackToTop from "@/components/common/back-to-top";
import FooterTwo from "@/components/footer/footer-two";
import HeaderFour from "@/components/header/header-four";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderFour />
            {children}
            <FooterTwo/>
            <BackToTop/>
        </>
    )
}
