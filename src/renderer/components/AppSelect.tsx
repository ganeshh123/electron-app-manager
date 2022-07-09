import React from 'react'
import Title from 'antd/lib/typography/Title'
import { AppSelectProps, AppSelectItemProps, AppInfo } from 'shared/types'

export const AppSelectItem: React.FC<AppSelectItemProps> = (props: AppSelectItemProps) => {
    const { app, onClick } = props
    const selected = props.selected ?? false

    return (
        <div className={`w-full flex flex-col cursor-pointer bg-white ${selected && 'bg-gray-300'}`} onClick={() => onClick(app)}>
            <div className={`flex flex-row gap-x-4 p-2`}>
                <img src={app.icon} alt={`${app.displayName} icon`} className={`h-8 w-8 rounded-full mt-1`} />
                <Title level={3}>
                    {app.displayName}
                </Title>
            </div>
        </div>
    )
}

export const AppSelect: React.FC<AppSelectProps> = (props: AppSelectProps) => {
    const { appList, selectedApp, setSelectedApp } = props

    const selectApp = (selectedApp: AppInfo) => setSelectedApp(selectedApp)

    return (
        <div className={`overflow-y-auto w-full`}>
            {appList.map((app) => (
                <AppSelectItem
                    app={app}
                    selected={app.name === selectedApp.name}
                    onClick={selectApp}
                />
            ))}
        </div>
    )
}