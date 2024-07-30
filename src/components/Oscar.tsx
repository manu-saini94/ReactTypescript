import { ReactNode } from "react"

export type OscarProps = {
    children:ReactNode
}

export const Oscar = (props:OscarProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}


