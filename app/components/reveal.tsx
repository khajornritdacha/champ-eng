"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";

export function Reveal({ children }: PropsWithChildren): React.JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasMounted = useSyncExternalStore(
    subscribeToMount,
    getClientMounted,
    getServerMounted,
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`motion-reduce:transition-none ${!hasMounted || isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-[opacity,transform] duration-500 ease-out`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}

function subscribeToMount(): () => void {
  return () => {};
}

function getClientMounted(): boolean {
  return true;
}

function getServerMounted(): boolean {
  return false;
}
