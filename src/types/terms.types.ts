export interface TermsSection {
  id: number;
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface TermsData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
  contactText: string;
}
