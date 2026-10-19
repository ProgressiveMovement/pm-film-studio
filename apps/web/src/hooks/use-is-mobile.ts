import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 639px)";

function subscribe(cb: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

// Phone width (< 640 px). The sidebar's useIsMobile in use-mobile.ts uses 768.
export function useIsPhone() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
