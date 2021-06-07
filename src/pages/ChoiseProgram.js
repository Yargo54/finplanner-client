import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ChoiseProgram.css';


function ChoiseProgram() {

    let dataAccumulation;

    let [convert, setConvert] = useState('');
    let [convertDescription, setConvertDescription] = useState('');

    let [jug, setJug] = useState('');
    let [jugDescription, setJugDescription] = useState('');

    let [safe, setSafe] = useState('');
    let [safeDescription, setSafeDescription] = useState('');

    let [zeroing, setZeroing] = useState('');
    let [zeroingDescription, setZeroingDescription] = useState('');

    let [latte, setLatte] = useState('');
    let [latteDescription, setLatteDescription] = useState('');

    let [popular, setPopular] = useState('');
    let [popularDescription, setPopularDescription] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/accumulation")
            .then(res => res.json())
            .then((data) => {
                console.log(data)

                dataAccumulation = [...data];
                dataAccumulation.forEach(element => {
                    switch (element.name) {
                        case "Четыре конверта":
                            setConvert(element.name);
                            setConvertDescription(element.short);
                            break;
                        case "Шесть кувшинов":
                            setJug(element.name);
                            setJugDescription(element.short);
                            break;
                        case "Сейф":
                            setSafe(element.name);
                            setSafeDescription(element.short);
                            break;
                        case "Обнуление":
                            setZeroing(element.name);
                            setZeroingDescription(element.short);
                            break;
                        case "Эффект латте":
                            setLatte(element.name);
                            setLatteDescription(element.short);
                            break;
                        case "50/30/20":
                            setPopular(element.name);
                            setPopularDescription(element.short);
                            break;
                    }
                });
            })
    }, [])

    let history = useHistory();

    function onClickConvert() {
        history.push('/accumulationprogramconvert');
    }

    function onClickJug() {
        history.push('/accumulationprogramjug');
    }

    function onClickSafe() {
        history.push('/accumulationprogramsafe');
    }

    function onClickZeroing() {
        history.push('/accumulationprogramzeroing');
    }

    function onClickLatte() {
        history.push('/accumulationprogramlatte');
    }

    function onClickPopular() {
        history.push('/accumulationprogrampopular');
    }

    return (
        <div className="choise-program_wraper">
            <div className="main">
                <p className="schema">Выберете схему накопления</p>


                <div className="choise-program-bandle-one">
                        <div className="container">
                    <button className="envelope-img" onClick={onClickConvert}></button>
                    {/* <p className="four-envelope" >Метод "{convert}"</p> */}
                    <p className="four-envelope" >Метод "Четыре конверта"</p>
                    <p className="four-envelope_description">{convertDescription}</p>
                        </div>
                  
                    <div className="container">
                    <button className="jag-img" onClick={onClickJug}></button>
                    <p className="six-jag">Метод "Шесть кувшинов"</p>
                    {/* <p className="six-jag">Метод "{jug}"</p> */}
                    <p className="six-jag_description">{jugDescription}</p>
                    </div>
                </div>
                <div className="choise-program-bandle-one">
                    <div className="container">
                    <button className="vault-img" onClick={onClickZeroing}></button>
                    <p className="vault">Метод "Сейф"</p>
                    {/* <p className="vault">Метод "{safe}"</p> */}
                    <p className="vault_description">{safeDescription}</p>

                    </div>
                    <div className="container">

                        <button onClick={onClickSafe} className="null-img"></button>
                        <p className="null">Метод “Обнуление”</p>
                        <p className="null_description">description</p>
                    </div>
                </div>
                <div className="choise-program-bandle-one">
                    <div className="container">
                        <button className="latte-img" onClick={onClickLatte}></button>
                        <p className="latte">Метод "Эффект латте"</p>
                        {/* <p className="latte">Метод "{latte}"</p> */}
                        <p className="latte_description">{latteDescription}</p>
                    </div>
                    <div className="container">

                        <button className="parts-img" onClick={onClickPopular}></button>
                        <p className="parts">Метод "50/30/20"</p>
                        {/* <p className="parts">Метод "{popular}"</p> */}
                        <p className="parts_description">{popularDescription}</p>
                    </div>














                </div>
            </div>
        </div>


    )
}
export default ChoiseProgram
