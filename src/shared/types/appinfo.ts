export type Locations = {
  appData?: string[]
}

export type AppInfo = {
  name: string
  displayName: string
  process: string
  icon?: string
  cache: {
    win32: Locations
    darwin?: Locations
  }
  userData: {
    win32: Locations
    darwin?: Locations
  }
  install: {
    win32: Locations
    darwin?: Locations
  }
  boot: {
    win32: Locations & { arguments?: string }
    darwin?: Locations & { arguments?: string }
  }
}
