import React from 'react'
import { Layout, Typography } from 'antd'
import { AppSelect, AppPanel } from 'renderer/components'
import {AppInfo} from 'shared/types'
import { StaticApps } from 'shared/constants'

export const Main: React.FC<{}> = (props: {}) => {

  const { Content, Sider } = Layout
  const { Title } = Typography

  const [selectedApp, setSelectedApp] = React.useState<AppInfo>(StaticApps[0])
  const [appList, setAppList] = React.useState<AppInfo[]>(StaticApps)

  console.log(selectedApp)

  return (
    <Layout className={`h-full`}>
      <div className={`pt-2 pl-2`}>
        <Title className={`text-white`}>
          Electron App Manager
        </Title>
      </div>
      <Layout>
        <Sider width={250}>
          <div className={`w-full h-full`}>
            <AppSelect 
              appList={appList}
              selectedApp={selectedApp}
              setSelectedApp={setSelectedApp}
            />
          </div>
        </Sider>
        <Content className={`overflow-y-auto`}>
          <AppPanel selectedApp={selectedApp} />
        </Content>
      </Layout>
    </Layout>

  )
}
