// src/aos.d.ts or src/types/aos.d.ts
declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    disable?: boolean | 'phone' | 'tablet' | 'mobile';
    throttleDelay?: number;
    debounceDelay?: number;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}
