export interface AuthenticationMethod {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  buttonLabel: string;
  price: string;
  duration: string;
  time: string;
  icon: string;
}

export type AuthenticationPlan = AuthenticationMethod;