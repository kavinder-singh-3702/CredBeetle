"use client";
import React from "react";
import content from "@/data/scroll.tsx";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function index() {
  return (
    <section className="flex flex-col space-y-20 ">
      <h2 className="text-7xl font-extrabold text-white text-center">
        Discover
      </h2>
      {/* <StickyScroll content={content} /> */}
    </section>
  );
}
