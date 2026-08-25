// Hero.hooks.ts

import { useQuery } from "@tanstack/react-query";
import { getHero } from "../services/Hero.service";

export const useHero = () => {
  return useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });
};


// Hook (useHero) ek bridge hai jo Service se API ka data laakar React Component ko data, loading, aur error ki form mein deta hai.

