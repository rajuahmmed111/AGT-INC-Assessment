/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { FiBox } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import {
  CheckCircle,
  Users,
  // Loader2,
  LucideCalendarCheck,
} from "lucide-react";
import { LeftContentSkeleton } from "./leftContentSkeleton";
import { useGetQuoteLeftQuery } from "@/redux/api/quoteleftApi";


// Memoized stat card component
const StatCard = memo(
  ({
    icon: Icon,
    value,
    title,
  }: {
    icon: React.ComponentType<any>;
    value: string | number;
    title: string;
  }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:scale-105 group">
      <div className="text-center">
        <Icon className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-300">{title}</div>
      </div>
    </div>
  )
);

StatCard.displayName = "StatCard";

// Memoized trust indicator component
const TrustIndicator = memo(({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-green-400" />
    <span>{text}</span>
  </div>
));

TrustIndicator.displayName = "TrustIndicator";

function LeftContent() {

  const { isLoading, data, isSuccess } = useGetQuoteLeftQuery({});

  if (isLoading) {
    return <LeftContentSkeleton />;
  }

  if (!isSuccess || !data?.data) {
    return (
      <div className="space-y-8">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
            <span className="decoration-red-400 decoration-4">Get Your</span>
            <br />
            <span className="text-4xl lg:text-5xl text-red-400 decoration-red-400 decoration-4">
              Quote
            </span>
          </h1>
          <p className="md:text-2xl text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
            Contact us for a customized solution for your business needs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {data.data.map((item: any, index: number) => (
        <div key={item.id || index} className="space-y-8">
          {/* Hero Section */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              <span className="decoration-red-400 decoration-4">
                {item?.title?.split(" ")[0]} {item?.title?.split(" ")[1]}
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-red-400 decoration-red-400 decoration-4">
                {item?.title?.split(" ")[2]}
              </span>
            </h1>

            <p className="md:text-2xl text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
              {item?.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={FiBox}
              value={item?.units_shipped}
              title={item?.units_shipped_title}
            />
            <StatCard
              icon={TbTruckDelivery}
              value={item?.years}
              title={item?.years_title}
            />
            <StatCard
              icon={Users}
              value={item?.client_satisfied}
              title={item?.client_satisfied_title}
            />
            <StatCard
              icon={LucideCalendarCheck}
              value={item?.week_day}
              title={item?.week_day_title}
            />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {item?.para}
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
              <TrustIndicator text={item?.support} />
              <TrustIndicator text={item?.solutions} />
              <TrustIndicator text={item?.team} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(LeftContent);