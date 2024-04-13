import * as React from "react"

type TileContextProps = {
  alignForeground: "left" | "right"
}

const TileContext = React.createContext<TileContextProps | null>(null)

export {
  TileContext,
  type TileContextProps,
}
