import React from 'react'
import {Card, Statistic, Button, Typography} from 'antd'
import { AppPanelProps } from 'shared/types'

export const AppPanel: React.FC<AppPanelProps> = (props: AppPanelProps) => {
    const {Title} = Typography

    const { selectedApp } = props
    const {displayName, icon} = selectedApp

    return (
        <div className={`px-10 py-2 flex flex-col gap-y-2`}>
            <div className={`flex flex-row gap-x-4`}>
                <img src={icon} alt={``} className={`h-10 w-10 rounded-full`} />
                <Title level={2}>{displayName}</Title>
            </div>
            <Title level={3}>Disk Usage</Title>
            <div className={`flex flex-row gap-x-4`}>
                <Card className={`w-48 flex flex-col`}>
                    <Statistic
                        title="App Size"
                        value={215.32}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        suffix="MB"
                    />
                </Card>
                <Card className={`w-48`}>
                    <Statistic
                        title="User Data"
                        value={115.2}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        suffix="MB"
                    />
                </Card>
                <Card className={`w-48`}>
                    <Statistic
                        title="Cache"
                        value={335.7}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        suffix="MB"
                    />
                </Card>
            </div>
            <Statistic title="Total Size"
                value={112893}
                precision={2}
                suffix="MB"
            />
            <Title level={3}>Actions</Title>
            <div className={`flex flex-row gap-x-4`}>
                <Button type="primary" size={`large`} danger>
                    {`Force Stop`}
                </Button>
                <Button type="primary" size={`large`} danger>
                    {`Clear Cache`}
                </Button>
            </div>
            <div className={`flex flex-row gap-x-4`}>
                <Button type="primary" size={`large`} danger>
                    {`Reset`}
                </Button>
                <Button type="primary" size={`large`} danger>
                    {`Uninstall`}
                </Button>
            </div>

        </div>
    )
}