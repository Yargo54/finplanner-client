import React from 'react';
import { Button } from 'antd';
import './MainPages.css';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import { useHistory } from 'react-router-dom';

export default function MainPage() {

    let history = useHistory();

    function goRegistration() {
        history.push("/registration");
    }
    
    function goLogin() {
        history.push("/login");
    }


    return (
        <div>
            <div className="header-wrapper">
                <header className="header">
                    <div className="header__button">
                        <Button onClick={goRegistration} type="primary">Зарегистрироваться</Button>
                        <Button onClick={goLogin} type="primary">Войти</Button>
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




