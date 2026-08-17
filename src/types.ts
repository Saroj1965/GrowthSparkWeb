export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  accentColor: string;
  deliverables: string[];
  idealFor: string;
  outcomes: string[];
  timelineGuide: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface PhilosophyStep {
  step: string;
  title: string;
  description: string;
  keyAction: string;
}

export interface HowIWorkStep {
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface AudiencePersona {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  iconName: string;
  examples: string[];
}

export interface Differentiator {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface NeedScenario {
  id: string;
  question: string;
  response: string;
  suggestedServiceId: string;
  suggestedServiceName: string;
  suggestedApproach: string;
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceNeeded: string;
  message: string;
}
