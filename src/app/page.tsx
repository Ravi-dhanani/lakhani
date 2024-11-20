import MainLayout from "@/common/MainLayout";
import DevelopmentApproach from "@/components/developmentApproach/DevelopmentApproach";
import TechStack from "@/components/techStack/TechStack";
import Alcalineworks from "@/components/works/Alcalineworks";
import Hire from "@/components/works/components/Hire";
import Resources from "@/components/works/components/Resources";
import CaseStudies from "../components/caseStudies/CaseStudies";
import BuildingSoftware from "../components/caseStudies/components/BuildingSoftware";
import HeroSection from "../components/hero/HeroSection";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <div>
      <MainLayout sectionName="hero">
        <HeroSection />
      </MainLayout>
      <Services />
      <MainLayout sectionName="caseStudies" className="bg-background">
        <CaseStudies />
      </MainLayout>
      <MainLayout>
        <BuildingSoftware />
      </MainLayout>

      <MainLayout className="bg-background">
        <DevelopmentApproach />
      </MainLayout>
      <MainLayout>
        <TechStack />
      </MainLayout>
      <MainLayout sectionName="works" className="!border-none">
        <Alcalineworks />
      </MainLayout>
      <Resources />
      <MainLayout className="!border-none">
        <Hire />
      </MainLayout>
    </div>
  );
}
