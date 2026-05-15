"use client";

import { useState, useCallback } from "react";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingTable } from "@/components/sections/PricingTable";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TrialBookingModal } from "@/components/TrialBookingModal";

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const openTrial = useCallback(() => setTrialModalOpen(true), []);
  const closeTrial = useCallback(() => setTrialModalOpen(false), []);

  return (
    <>
      <Hero onBookTrial={openTrial} />
      <Features />
      <Testimonials />
      <PricingTable />
      <FAQ />
      <FinalCTA onBookTrial={openTrial} />
      <TrialBookingModal open={trialModalOpen} onClose={closeTrial} />
    </>
  );
}
