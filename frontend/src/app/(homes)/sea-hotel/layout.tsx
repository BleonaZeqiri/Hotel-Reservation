import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import HeaderOne from "@/components/header/header-one";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderOne />
            {children}
            <FooterArea/>
            <BackToTop/>
        </>
    )
}
