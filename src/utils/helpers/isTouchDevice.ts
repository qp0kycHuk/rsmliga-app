export function isTouchDevice(): boolean {
  return (
    !!(
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || ((window as any).DocumentTouch && typeof document !== 'undefined' && document instanceof (window as any).DocumentTouch))
    ) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || (navigator as any).msMaxTouchPoints))
  )
}
