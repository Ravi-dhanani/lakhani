"use client";
import MainLayout from "@/common/MainLayout";
import ClientReview from "./components/ClientReview";
import CompanyInfo from "./components/CompanyInfo";
import OurClients from "./components/OurClients";
import ServicesSection from "./components/ServicesSection";

export default function Services() {
  return (
    <section id="services">
      <ServicesSection />
      <MainLayout>
        <CompanyInfo />
      </MainLayout>
      <OurClients />
      <MainLayout>
        <ClientReview />
      </MainLayout>
    </section>
  );
}
