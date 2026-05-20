export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Benefit {
  title: string
  description: string
  highlight?: boolean
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  avatar: string
}

export interface FAQItem {
  question: string
  answer: string
}
