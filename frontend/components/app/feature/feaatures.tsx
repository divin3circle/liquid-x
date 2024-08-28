import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBrandDenodo,
  IconDashboard,
  IconSignRight,
  IconShieldLock,
  IconZoomCheck,
  IconBadges,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Fragmented Liquidity Across Multiple Blockchains",
      description:
        "LiquidX offers seamless cross-chain asset transfers and liquidity pooling, enabling users to manage their liquidity efficiently from a single interface without worrying about network incompatibilities.",
      icon: <IconBrandDenodo />,
    },
    {
      title: "Lack of Real-Time Portfolio Insights",
      description:
        " LiquidX provides a dynamic dashboard with real-time data visualization tools that offer insights into asset performance, helping users make informed decisions quickly.",
      icon: <IconDashboard />,
    },
    {
      title: "High Gas Fees and Slow Transactions",
      description:
        "LiquidX integrates Layer-2 solutions and optimizes transactions to minimize gas fees and reduce transaction times, ensuring a more cost-effective experience for users.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Difficulty in Navigating Multiple DeFi Protocols",
      description:
        " LiquidX aggregates multiple DeFi protocols into a single, easy-to-use platform, providing a consistent and simplified user experience.",
      icon: <IconSignRight />,
    },
    {
      title: "Enhanced Security Measures and Audits",
      description:
        "LiquidX employs robust security measures, including smart contract audits and multi-signature wallets, to protect user assets and enhance trust.",
      icon: <IconShieldLock />,
    },
    {
      title: "Lack of Transparent Credit Scoring in DeFi",
      description:
        "LiquidX offers a decentralized credit scoring system that evaluates users’ creditworthiness based on on-chain activity, providing a fairer and more transparent way to assess risk.",
      icon: <IconZoomCheck />,
    },
    {
      title: "Poor User Experience with Overwhelming Data",
      description:
        "LiquidX features an intuitive UI that presents relevant data clearly and concisely, enhancing user experience and reducing the cognitive load.",
      icon: <IconBadges />,
    },
    {
      title: "And everything else",
      description:
        "LiquidX is a one-stop solution for all your DeFi needs, offering a comprehensive suite of tools and services to address any pain points you may encounter.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-white w-full">
      <h1 className="md:text-3xl text-2xl font-extrabold text-center md:my-8 my-2 font-sans">
        Your DeFi Pain Points, Our Powerful Solutions.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
