"use client";

import { generalSans } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { blogs } from "../../../lib/blogs";
import Navigation from "../illustrations/navigation";

export default function Blogs() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Detect active page on scroll
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.clientWidth;
      const isDesktop = window.matchMedia("(min-width:1024px)").matches;
      const pageSize = isDesktop ? 3 : 1;
      const cardWidth = width / pageSize;
      const newPage = Math.round(scrollLeft / (cardWidth + 24)); // include gap
      setPage(Math.max(0, Math.min(totalPages - 1, newPage)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [totalPages]);

  // Recalculate total pages on resize
  useEffect(() => {
    const update = () => {
      const isDesktop = window.matchMedia("(min-width:1024px)").matches;
      const pageSize = isDesktop ? 3 : 1;
      setTotalPages(Math.ceil(blogs.length / pageSize));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll by card width
  const scrollByCards = (dir: 1 | -1) => {
    const el = viewportRef.current;
    if (!el) return;

    const isDesktop = window.matchMedia("(min-width:1024px)").matches;
    const cardW = isDesktop ? (el.clientWidth - 2 * 24) / 3 : el.clientWidth;
    el.scrollBy({ left: dir * (cardW + 24), behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col items-center md:py-[6rem] py-[3rem]">
      <p className="text-primary font-bold md:text-7xl text-4xl text-center md:tracking-[-0.25rem] tracking-tight md:mb-[2.5rem] mb-[1rem]">
        Blogs & Articles
      </p>
      <p
        className={`${generalSans.className} text-grays font-medium text-center md:mb-[5rem] mb-[2.5rem]`}
      >
        Discover the roadmap to financial success! Stay
        <br className="md:hidden block" /> updated
        <br className="md:block hidden" /> with the latest tips and trends on our blog
      </p>

      <div className="w-full max-w-[1300px] relative">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6 px-4">
          <Navigation
            className="w-[2rem] h-[3rem] cursor-pointer"
            onClick={() => scrollByCards(-1)}
          />
          <div className="flex items-center gap-3">
            <Navigation
              className="w-[2rem] h-[3rem] cursor-pointer rotate-180"
              onClick={() => scrollByCards(1)}
            />
            <Link
              href="https://moniepoint.com/blog"
              className="py-2 px-4 rounded-full bg-primary hover:bg-accent text-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={viewportRef}
          className=" w-full overflow-x-auto no-scroll overscroll-x-contain px-4 snap-x snap-mandatory [scroll-padding-inline:1rem] scrollbar-none"
        >
          <div
            className="
              grid gap-6
              [grid-auto-flow:column]
              [grid-auto-columns:88%]         
              lg:[grid-auto-columns:calc((100%-48px)/3)]  
            "
          >

            {blogs.map((blog, i) => (
              <Link
                href={blog.blogLink}
                key={blog.blogTitle}
                className={`block snap-center lg:snap-start ${i === blogs.length - 1 ? "flex " : ""}`}
              >
                <article className="h-full">
                  <div className="h-[18.94rem] rounded-[1.25rem] overflow-hidden relative mb-[2rem]">
                    <Image
                      src={blog.image || ""}
                      alt={blog.blogTitle}
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(min-width:1024px) 33vw, 90vw"
                    />
                  </div>

                  <div
                    className={`w-full flex justify-between items-center ${generalSans.className} mb-[2rem]`}
                  >
                    <p className="text-[#0357EE] font-medium">{blog.blogType}</p>
                    <p className="text-[#828282] font-medium">{blog.date}</p>
                  </div>

                  <p className="font-bold text-primary text-[1.25rem] leading-tight line-clamp-3">
                    {blog.blogTitle}
                  </p>

                  <p className="text-[#828282] font-medium mt-3">
                    {blog.author}
                  </p>
                </article>

               {i === blogs.length - 1 && <div className="md:w-0 w-[4rem]"></div>}
              </Link>

            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="w-full flex items-center justify-center gap-x-[1rem] md:mt-[2.5rem] mt-[1.5rem] md:hidden">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`w-[1rem] h-[1rem] rounded-[0.25rem] transition-colors duration-300 ${i === page ? "bg-accent" : "bg-[#D2D2D2]"
                }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
