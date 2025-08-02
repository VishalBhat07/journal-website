import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange);
  }, [])

  return !!isMobile
}

const TABLET_MIN = 768;
const TABLET_MAX = 1023;

export function useIsTab() {
  const [isTab, setIsTab] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${TABLET_MIN}px) and (max-width: ${TABLET_MAX}px)`);
    const onChange = () => {
      setIsTab(mql.matches);
    };
    mql.addEventListener("change", onChange);
    setIsTab(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTab;
}
