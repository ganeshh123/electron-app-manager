import { AppInfo } from 'shared/types/appinfo'

export type AppSelectItemProps = {
  app: AppInfo
  selected?: boolean
  onClick: (selectedApp: AppInfo) => void
}

export type AppSelectProps = {
  appList: AppInfo[]
  selectedApp: AppInfo
  setSelectedApp: React.Dispatch<React.SetStateAction<AppInfo>>
}

export type AppPanelProps = {
  selectedApp: AppInfo
}
