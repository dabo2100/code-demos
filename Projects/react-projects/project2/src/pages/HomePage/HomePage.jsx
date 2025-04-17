import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

export default function HomePage() {
    return (
        <div className="col-12">
            <Header />
            <HeroSection />
            <ServicesSection />
        </div>
    )
}