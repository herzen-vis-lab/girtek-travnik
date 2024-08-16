import { useState, useEffect } from 'react'

// interface StyleMediaQueryProps {
//     mixOrMax: string;
//     widthOrHeight: string;
//     value: string;
//   }

export const useStyleMediaQuery = ({ mixOrMax, widthOrHeight, value } : any) => {
  if (!mixOrMax) mixOrMax = 'min';
  if (!widthOrHeight) widthOrHeight = 'width';

  const [matches, setMatches] = useState(
    window.matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`).matches
  )

  useEffect(() => {
    window
      .matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`)
      .addEventListener('change', e => setMatches(e.matches));
  }, [mixOrMax, widthOrHeight, value]);

  return { matches }
}
