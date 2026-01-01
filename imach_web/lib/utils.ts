import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency detection and formatting
export interface CurrencyConfig {
  code: string
  symbol: string
  locale: string
  conversionRate: number
  flag: string
}

export const currencies: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', locale: 'en-US', conversionRate: 1, flag: '🇺🇸' },
  GBP: { code: 'GBP', symbol: '£', locale: 'en-GB', conversionRate: 0.79, flag: '🇬🇧' },
  EUR: { code: 'EUR', symbol: '€', locale: 'de-DE', conversionRate: 0.92, flag: '🇪🇺' },
  INR: { code: 'INR', symbol: '₹', locale: 'en-IN', conversionRate: 83.12, flag: '🇮🇳' },
  AED: { code: 'AED', symbol: 'د.إ', locale: 'ar-AE', conversionRate: 3.67, flag: '🇦🇪' },
}

export function detectCurrency(): string {
  if (typeof window === 'undefined') return 'USD'
  
  const stored = localStorage.getItem('preferred_currency')
  if (stored && currencies[stored]) return stored
  
  const locale = navigator.language
  if (locale.startsWith('en-GB')) return 'GBP'
  if (locale.startsWith('en-IN')) return 'INR'
  if (locale.startsWith('ar-AE') || locale.startsWith('ar-SA')) return 'AED'
  if (locale.startsWith('de') || locale.startsWith('fr') || locale.startsWith('es')) return 'EUR'
  
  return 'USD'
}

export function formatCurrency(amount: number, currencyCode: string): string {
  const config = currencies[currencyCode] || currencies.USD
  const convertedAmount = amount * config.conversionRate
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convertedAmount)
}

// Smooth scroll to section
export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Analytics helper
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
}
