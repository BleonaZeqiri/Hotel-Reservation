import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import MainProvider from "@/components/provider/main-provider";
import HeaderOne from "@/components/header/header-one";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider>
            <HeaderOne style_2={true}/>
            {children}
            <FooterArea/>
            <BackToTop/>
        </MainProvider>
    )
}
