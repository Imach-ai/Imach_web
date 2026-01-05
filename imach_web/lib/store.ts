import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  currency: string
  setCurrency: (currency: string) => void
  
  chatbotOpen: boolean
  toggleChatbot: () => void
  
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
  
  isThemeTransitioning: boolean
  setIsThemeTransitioning: (value: boolean) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      currency: 'USD',
      setCurrency: (currency) => set({ currency }),
      
      chatbotOpen: false,
      toggleChatbot: () => set((state) => ({ chatbotOpen: !state.chatbotOpen })),
      
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      
      isThemeTransitioning: false,
      setIsThemeTransitioning: (value) => set({ isThemeTransitioning: value }),
    }),
    {
      name: 'imach-ui-storage',
    }
  )
)
