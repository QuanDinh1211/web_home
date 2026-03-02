import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức - iMedia",
  description: "Cập nhật tin tức mới nhất từ iMedia",
};

export default function TinTucLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Layout Tin Tức</h1>
      {children}
    </div>
  );
}
