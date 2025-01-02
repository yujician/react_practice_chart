import { useEffect, useState } from 'react';

const CYCLE = { red: 'green', green: 'yellow', yellow: 'red' } as const;

type UseTrafficLight = () => {
  light: keyof typeof CYCLE;
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<keyof typeof CYCLE>('red');

  useEffect(() => {
    const timerId = setTimeout(() => {
      const nextLight = CYCLE[light];
      setLight(nextLight);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [light]);

  return { light };
};
