// Hero.service.ts

import { api } from "../api/axiosInstance";
import { HeroData } from "../types/Hero.types";

export const getHero = async (): Promise<HeroData> => {
  const response = await api.get("/hero");

  return response.data;
};



// Service ka simple kaam hai: specific API ko call karna aur uska data return karna.