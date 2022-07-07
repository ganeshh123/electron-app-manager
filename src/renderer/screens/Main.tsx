import { Layout, Typography } from 'antd'

export const Main = () => {

  const { Header, Content, Footer, Sider } = Layout
  const { Title } = Typography

  return (
    <Layout>
      <Header>
        <Title>
          Electron App Manager
        </Title>
      </Header>
      <Layout style={{ display: 'flex', flexDirection: 'row' }}>
        <Sider width={200}>

        </Sider>
        <Content>
        </Content>
      </Layout>
    </Layout>

  )
}
