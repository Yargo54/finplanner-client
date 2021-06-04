import React, { useState } from 'react';

import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import "./RegistrationPage.css"
import { useHistory } from 'react-router-dom'

export default function RegistrationPage() {
    let history = useHistory();
    const [isActive, setIsActive] = useState(false);

    let handleCheckboxChange = () => {
        setIsActive(!isActive)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let user = {
            name: data.get('name')
        }
        let registration = {
            login: data.get('login'),
            password: data.get('password')

        }
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user)

        })
            .then((user) => { console.log(user) });


            fetch('http://localhost:3000/reqister', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(registration)
    
            })
                .then((registration) => { console.log(registration) });

                history.push("/choise")
    }

    
    return (
        <div className="div-registration-wrapper">
        <div className="div-registration">
            <div className="content-registration">
                <h2 className="h2-registration">Пожалуйста, зарегистрируйтесь</h2>
                <form onSubmit={(event) => { handleSubmit(event) }}>
                    <Input name="name" text="Ваше имя*" />
                    <Input name="login" text="Логин*" />
                    <Input name="password" text="Пароль*" content="Пароль содержит более 10 символов, более одной цифры,заглавной буквы и знака препинания" classInputPContent="p-register" />
                    <div className='div-consent'>
                        <p className="p-consent">Я даю согласие на обработку своих персональных данных*</p>
                        <input type="checkbox" className="input-checkbox" onChange={handleCheckboxChange} checked={isActive} />
                    </div>
                    <Button isActive={!isActive} type="submit" text="Зарегистрироваться" classbutton="button-register" />
                </form>
            </div>
        </div>
        </div>
    )
}













// {(event)=> {setName(name: event.target.value)}}
{/* <Button onClick={ saveRegistrationForServer and переход на страницу выбора схемы } disabled={!isActive} text="Зарегестрироваться" classbutton="button-register"/> */ }
// 
{/* <Input onChange={(event)=> {setName(event.target.value)}} name="name" text="Ваше имя*" />
<Input onChange={(event)=> {setlogin(event.target.value)}} name ="login" text="Логин*" />
<Input onChange={(event)=> {setpassword(event.target.value)}} name ="password" text="Пароль*" content="Пароль должен состоять минимум из 10 символов и содержать хотя бы одну цифру, одну заглавную букву и один знак препинания" classInputPContent="p-register" /> */}



    // fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     headers: {
    //         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //         //"Content-type": "application/json; raw"
    //     },
    //     body: "Name = " + document.getElementById("name").value
    // })
    //     .then(function (data) {
    //         console.log('Request succeeded with JSON response', data);
    //     })
    //     .catch(function (error) {
    //         console.log('Request failed', error);
    //     });


//     const [name, setName] = useState("");

//     const [login, setlogin] = useState("");
//     const [password, setpassword] = useState("");


//  const func =()=> {
//        let formData = new formData();
//      let hren = formData.get(name)
//     console.log(hren);
//     console.log(formData.get(login));
//     console.log(formData.get(password));
//  }
//  func();









    // fetch(url, {
    //     method: 'post',
    //     headers: {
    //         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //     },
    //     body: 'foo=bar&lorem=ipsum'
    // })
    //     .then(json)
    //     .then(function (data) {
    //         console.log('Request succeeded with JSON response', data);
    //     })
    //     .catch(function (error) {
    //         console.log('Request failed', error);
    //     });


    // saveInfoRegistr =(nameField, value) => {

    // }
    // let saveRegistrationForServer = (event) => {
    //     let user = {
    //         name : name
    //     }
    //     let registration = {
    //         login :login,
    //         password : password

    //     }
    //     fetch('http://localhost:3000/users', {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         }

    //    body: JSON.stringify(user)

    // })
    //         .then((user) => { console.log(user) });

    // }


