"use client";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TargetAudience from "@/components/TargetAudience";
import Plans from "@/components/Plans";
import Banner from "@/components/Banner";
import Advantages from "@/components/Advantages";
import BannerCableGO from "@/components/BannerCableGO";
import Testimonial from "@/components/Testimonial";
import RedesSociales from "@/components/RedesSociales";
import TerminosYCondiciones from "@/components/TerminosYCondiciones";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <TargetAudience />
      <Plans />
      <Banner />
      <Advantages />
      <BannerCableGO />
      <Testimonial />
      <RedesSociales />
      <TerminosYCondiciones />
      <Footer />
    </>
  );
}