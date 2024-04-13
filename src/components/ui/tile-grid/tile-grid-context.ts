import * as React from "react"

type TileGridContextProps = {
  useHoverDisplay: boolean
}

const TileGridContext = React.createContext<TileGridContextProps | null>(null)

export {
  TileGridContext,
  type TileGridContextProps,
}
