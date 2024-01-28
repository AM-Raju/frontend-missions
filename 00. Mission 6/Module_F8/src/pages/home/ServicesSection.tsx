import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import React from "react";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="flex flex-col justify-center items-center text-center">
        <h1>
          <span className="text-primary">Services</span> that we provide.
        </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new and regular
          customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid gap-[20px]">
        <BatteryReplacement></BatteryReplacement>
        <ChipReplacement></ChipReplacement>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 col-span-12 h-[415px] rounded-2xl"></div>
        <div className="bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 h-[415px] rounded-2xl"></div>
        <div className="bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 h-[415px] rounded-2xl"></div>
        <div className="bg-red-500 col-span-12 md:col-span-12 lg:col-span-4 h-[415px] rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
