import React from "react";
import { Community } from "./community";
import { CommunityEth } from "./eth";
import { CommunityOptimism } from "./optimism";
import { CommunityICP } from "./icp";
import { CommunityAvalanche } from "./avalanche";
import { CommunityBNB } from "./bnb";

function CommunityWrapper() {
  return (
    <div className="bg-gradient-to-b from-white to-neutral-100 w-full">
      <h1 className="md:text-3xl text-2xl font-extrabold text-center md:my-8 my-2 font-sans">
        <span className="text-primary-500">Cross</span>-chain Interoperability
      </h1>
      <div className="flex items-center justify-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-2 gap-5">
          <Community />
          <CommunityEth />
          <CommunityOptimism />
          <CommunityICP />
          <CommunityAvalanche />
          <CommunityBNB />
        </div>
      </div>
    </div>
  );
}

export default CommunityWrapper;
