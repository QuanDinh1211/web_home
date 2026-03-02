"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FacebookIcon, HolaIcon, InstaIcon } from "@/assets/icons";

function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  const menu = [
    { name: "TRANG CHỦ", path: "/" },
    { name: "GIỚI THIỆU", path: "/gioi-thieu" },
    { name: "DỊCH VỤ", path: "/dich-vu" },
    { name: "TIN TỨC", path: "/tin-tuc" },
    { name: "TUYỂN DỤNG", path: "/tuyen-dung" },
    { name: "LIÊN HỆ", path: "/lien-he" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* ===== TOP HEADER (ẩn khi sticky) ===== */}
      {!isSticky && (
        <div className="bg-[#eef6f9] transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            <Image
              src="/images/LogoImediaColor.png"
              alt="logo"
              width={100}
              height={48}
            />

            <div className="flex items-center gap-3">
              <Image
                src="/images/shipcolor.png"
                alt="ship"
                width={82}
                height={22}
              />
              <Image
                src="/images/foodcolor.png"
                alt="food"
                width={82}
                height={22}
              />
              <Image
                src="/images/digitalcolor.png"
                alt="digital"
                width={82}
                height={22}
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== NAVBAR ===== */}
      <div
        className={`bg-white w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md z-50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
          <div className="flex items-center gap-10">
            {/* Logo khi sticky */}
            {isSticky && (
              <Image
                src="/images/ImediaScroll.png"
                alt="logo"
                width={80}
                height={38}
              />
            )}

            {/* Menu */}
            <div className="flex gap-6 ">
              {menu.map((item) => {
                const isActive = pathname === item.path;

                return (
                  //   <Link
                  //     key={item.path}
                  //     href={item.path}
                  //     className={`text-xs pb-1 transition duration-300 color-primary font-bold ${
                  //       isActive
                  //         ? "text-[#e88900] border-b-1 border-b-[#e88900] color-secondary"
                  //         : "hover:!text-[#e88900]"
                  //     }`}
                  //   >
                  //     {item.name}
                  //   </Link>
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative text-xs font-bold pb-1 transition duration-300 text-[#415BA9]
                        ${isActive ? "text-[#e88900]" : "hover:text-[#e88900]"}
                        
                        after:content-['']
                        after:absolute
                        after:bottom-0
                        after:left-1/2
                        after:-translate-x-1/2
                        after:h-[1px]
                        after:bg-[#e88900]
                        after:transition-all
                        after:duration-300
                        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2 text-[#415BA9]">
            <FacebookIcon className="hover:text-orange-500 transition duration-300 cursor-pointer" />
            <InstaIcon className="hover:text-orange-500 transition duration-300 cursor-pointer" />
            <HolaIcon className="hover:text-orange-500 transition duration-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Spacer để tránh bị che nội dung */}
      {isSticky && <div className="h-[70px]" />}
    </div>
  );
}

export default Header;
