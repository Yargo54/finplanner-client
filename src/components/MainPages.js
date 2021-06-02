import React from 'react';
import { Button } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function MainPage() {

    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo">LOGO</div>
                    <div className="header__button">   
                        <Button type="primary">Зарегистрироваться</Button>
                    <Button type="primary">Войти</Button>
                    </div>
                 
                </Header>
                <Content className="content" style={{ padding: '0 50px' }}>

                    <div className="site-layout-content"></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <div className='github-logo'> 
                    </div> 
                    <a href='https://github.com/AleksandrAVK' className="footer-link" />  <a href='https://github.com/Yargo54' />

                    </Footer>
            </Layout>
        </div>
    )
}
export default MainPage
{/* <a href="sample.html"><img src="images/sample.gif" width="50"  */}