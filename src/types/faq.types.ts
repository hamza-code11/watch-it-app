export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: number;
  title: string;
  items: FAQItem[];
}

export interface FAQData {
  title: string;
  intro: string;
  categories: FAQCategory[];
  supportText: string;
}
