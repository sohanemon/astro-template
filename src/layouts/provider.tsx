import { useAnimate } from "framer-motion";
import * as React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [scope, animate] = useAnimate()

  React.useEffect(() => {
    (async () => {
      await new Promise((r) => setTimeout(r, 1000))
      await animate('h1', { opacity: 1, transform: 'translate(0,0)' })
    })();
  }, [])

  return <body ref={scope} className="default">{children}</body>;
}

