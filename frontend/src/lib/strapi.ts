import { config } from "@/config";

export function getImageUrl(url: string): string {
  return `${config.strapi.imageUrl}${url}`;
}
