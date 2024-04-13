import * as React from 'react'

export function useCanHover() {
  const [canHover, setCanHover] = React.useState(true)

  React.useEffect(() => {
    const canHover = window.matchMedia('(hover: hover)').matches;
    setCanHover(canHover)
  }, [])

  return canHover;
}
