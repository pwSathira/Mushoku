declare module "next-themes" {
  import type { ReactNode } from "react"

  export type Theme = "light" | "dark" | "system"

  export interface ThemeProviderProps {
    children: ReactNode
    defaultTheme?: Theme
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    storageKey?: string
    themes?: string[]
    attribute?: string
    value?: Record<string, string>
  }

  export interface UseThemeProps {
    defaultTheme?: Theme
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    storageKey?: string
    themes?: string[]
    attribute?: string
    value?: Record<string, string>
  }

  export function useTheme(): {
    theme: Theme | undefined
    setTheme: (theme: Theme) => void
    resolvedTheme: Theme | undefined
    themes: string[]
    systemTheme: Theme | undefined
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element
} 