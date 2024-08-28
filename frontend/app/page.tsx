import { Community } from "@/components/app/community/community";
import CommunityWrapper from "@/components/app/community/community-wrapper";
import { CTA } from "@/components/app/cta/cta";
import { FeaturesSection } from "@/components/app/feature/feaatures";
import Footer from "@/components/app/footer/footer";
import { Hero } from "@/components/app/hero/hero";
import Navbar from "@/components/app/navbar/navbar";
import { WorkLine } from "@/components/app/workings/workline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <WorkLine />
      <CTA />
      <CommunityWrapper />
      <Footer />
    </main>
  );
}
