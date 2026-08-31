export interface PolicySection {
  id: number;
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface PolicyData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
  contactText: string;
}
