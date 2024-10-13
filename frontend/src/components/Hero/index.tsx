"use client";
import React from "react";
import Left from "./Left";
import Right from "./Right";

export default function index() {
  return (
    <div className="flex mb-20">
      <Left />
      <Right />
    </div>
  );
}
