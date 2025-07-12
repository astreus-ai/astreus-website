export type Mode = 'light' | 'dark'

export const modes: Mode[] = ['light', 'dark']

export function getMode(): Mode {
  if (typeof window === 'undefined') return 'light'
  
  const stored = localStorage.getItem('theme-mode')
  if (stored && modes.includes(stored as Mode)) {
    return stored as Mode
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function setMode(mode: Mode) {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('theme-mode', mode)
  
  if (mode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}