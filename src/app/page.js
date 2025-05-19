'use client';
import { useEffect, useState } from "react";
import About from "@/components/About";
import Client from "@/components/Client";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CustomServices from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Loader from "@/components/Loader"; // make sure this file exists
import AppDevelopment from "@/components/AppDevelopment";
import ContactForm from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // loader duration
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="pt-20">
      <Navbar />
      <Main />
      <About />
      <CustomServices />
      <Client />
      <Testimonial />
      <Team />
      <Faq />
      <ContactForm/>

      <Footer />
    </div>
  );
}
