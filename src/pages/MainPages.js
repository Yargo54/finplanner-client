import React from 'react';
import { Button } from 'antd';
import './MainPages.css';
import { Layout } from 'antd';
import { useHistory } from 'react-router';
import TypingEffect from '../components/type-effect'
const { Content, Footer } = Layout;



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
                        <Button onClick={goRegistration} type="primary" className="registration">Зарегистрироваться</Button>
                        <Button onClick={goLogin} type="primary" className="in">Войти</Button>
                    </div>
                </header>
            </div>
            <Content className="content" style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                 <h1 className="type-text">Привет, это ФинПланер.</h1>
                 <h2 className="type-text center">Мы позаботимся о вашем финансовом</h2>
                 <h2 className="type-text center">планировании,чтобы вы могли</h2>
                    <TypingEffect />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }} className="footer-style">
                <p className="p-contacts">Contacts</p>
                <a href='https://github.com/AleksandrAVK' className="footer-link">AleksandrAVK</a>  
                <br />
                <a href='https://github.com/Yargo54'>Yargo54</a>
            </Footer>
        </div>
    )
}




