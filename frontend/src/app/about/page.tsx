import { Metadata } from 'next';
import AboutAreaFour from '@/components/about/about-area-4';
import AboutAreaFive from '@/components/about/about-area-5';
import BrandArea from '@/components/brand/brand-area';
import CounterArea from '@/components/counter/counter-area';
import TeamArea from '@/components/team/team-area';
import TextSliderArea from '@/components/text-slider/text-slider-area';
import VideoArea from '@/components/video/video-area';


export const metadata: Metadata = {
    title: "About - Housey Resort and Hotel Next JS Template",
};


export default function AboutPage() {
    return (
        <>

            <AboutAreaFour />
         
            <CounterArea />
        
            <TextSliderArea cls='tp-text-spacing' content_2={true} />
      
            <VideoArea />
    
            <AboutAreaFive />
    
            <TeamArea />
        
            <BrandArea cls='tp-brand-border-2' />
        </>
    )
}
