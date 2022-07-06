import { useNavigate } from 'react-router-dom'
import { useWindowStore } from 'renderer/store'
import { Container } from 'renderer/components'

export function MainScreen() {
  const { App } = window // The "App" comes from the bridge

  const navigate = useNavigate()
  const store = useWindowStore().about

  function openAboutWindow() {
    App.createAboutWindow()
    store.setAboutWindowState(true)
  }

  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}
