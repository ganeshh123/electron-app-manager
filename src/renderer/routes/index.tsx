import { WindowRouter, Route } from './modules'

import { Main} from 'renderer/screens'

export function AppRoutes() {
  return (
    <WindowRouter
      routes={{
        main: () => (
          <>
            <Route path="/" element={<Main />} />
          </>
        )
      }}
    />
  )
}
