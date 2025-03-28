
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleHero from "@/components/schedule/ScheduleHero";
import ScheduleBenefits from "@/components/schedule/ScheduleBenefits";
import ScheduleForm from "@/components/schedule/ScheduleForm";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        <ScheduleHero />
        
        {/* Schedule Form */}
        <section className="py-24 bg-gradient-to-b from-elegant-gray-100 to-elegant-gray-50" id="schedule-form">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScheduleBenefits />
              <ScheduleForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
