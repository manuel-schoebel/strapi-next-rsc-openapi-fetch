import { components } from "@/api/strapi";
import { Hero } from "@/components/blocks/Hero";
import { ImageText } from "@/components/blocks/ImageText";

export const blocksMap = {
  "content.hero": Hero,
  "content.image-text": (
    props: components["schemas"]["ContentImageTextComponent"]
  ) => (
    <div className="mt-24">
      <ImageText {...props} />
    </div>
  ),
};
