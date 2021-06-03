import React from 'react';
import { Button } from 'antd';
import './MainPages.css';
import { Layout } from 'antd';
import { useHistory } from 'react-router';
const { Content, Footer } = Layout;

function MainPage() {

    return (
        <div>
            <div className="header-wrapper">
                <header className="header">
                    <div className="header__button">
                        <Button type="primary">Зарегистрироваться</Button>
                        <Button type="primary">Войти</Button>
                    </div>
                </header>
            </div>

            <Content className="content" style={{ padding: '0 50px' }}>

                <div className="site-layout-content"></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <p>Contacts</p>
                <a href='https://github.com/AleksandrAVK' className="footer-link">link №1;</a>  <a href='https://github.com/Yargo54'>link №2</a>
            </Footer>
        </div>
    )
}
export default MainPage
