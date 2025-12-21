import BackToTop from "@/components/common/back-to-top";
import HeaderThree from "@/components/header/header-three";
import FooterArea from "@/components/footer/footer-area";
import MainProvider from "@/components/provider/main-provider";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider bodyBg="tp-home-3-bg">
            <HeaderThree transparentWhite={false} top_spacing="mb-0"/>
            {children}
            <FooterArea style_2={true} top_bg="tp-falured-bg-2"/>
            <BackToTop/>
        </MainProvider>
    )
}
