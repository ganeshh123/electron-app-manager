import { PropsWithChildren } from 'react'


export function Container({ children }: PropsWithChildren<{}>) {
  return(
    <div className={`w-full mx-auto p-5`}>
      {children}
    </div>
  )
}
