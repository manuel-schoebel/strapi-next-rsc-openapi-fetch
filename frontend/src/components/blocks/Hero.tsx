import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/strapi";
import { components } from "@/api/strapi";

export async function Hero({
  title,
  backgroundImage,
  subTitle,
  titleColor,
}: components["schemas"]["ContentHeroComponent"]): Promise<JSX.Element> {
  return (
    <div className="relative h-[600px]">
      <Image
        alt={backgroundImage?.data?.attributes?.alternativeText || ""}
        src={getImageUrl(backgroundImage?.data?.attributes?.url || "")}
        fill
        className="relative"
      />

      <div className="absolute bottom-24 left-24 bg-black p-6 bg-opacity-70">
        <h1
          className={`text-4xl font-black ${
            titleColor === "fuchsia" ? "text-fuchsia-500" : ""
          }`}
        >
          {title}
        </h1>
        <p className="text-2xl">{subTitle}</p>
      </div>
    </div>
  );
}
