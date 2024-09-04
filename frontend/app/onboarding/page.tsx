import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import GetUserInformation from "./get-info";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Onboarding() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
        <GetUserInformation />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Onboarding;
