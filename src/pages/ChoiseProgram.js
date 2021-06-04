import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ChoiseProgram.css';


function ChoiseProgram() {
    
    let dataAccumulation;

    let [ convert, setConvert ] = useState('');
    let [ convertDescription, setConvertDescription ] = useState('');

    let [ jug, setJug] = useState('');
    let [ jugDescription, setJugDescription ] = useState('');

    let [ safe, setSafe] = useState('');
    let [ safeDescription, setSafeDescription ] = useState('');

    let [ zeroing, setZeroing] = useState('');
    let [ zeroingDescription, setZeroingDescription ] = useState('');

    let [ latte, setLatte] = useState('');
    let [ latteDescription, setLatteDescription ] = useState('');

    let [ popular, setPopular] = useState('');
    let [ popularDescription, setPopularDescription ] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/accumulation")
        .then(res => res.json())
        .then((data) => {
            dataAccumulation = [...data];
            dataAccumulation.forEach(element => {
                switch(element.name){
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
        <div>
            <div className="main">
                <div className='container'>
                    <p className="schema">Выберете схему накопления</p>

                    <button className="envelope-img" onClick={onClickConvert}></button>
                    <p className="four-envelope" >Метод "{convert}"</p>
                    <p className="four-envelope_description">{convertDescription}</p>

                    <button className="jag-img" onClick={onClickJug}></button>
                    <p className="six-jag">Метод "{jug}"</p>
                    <p className="six-jag_description">{jugDescription}</p>

                    <button className="vault-img" onClick={onClickSafe}></button>
                    <p className="vault">Метод "{safe}"</p>
                    <p className="vault_description">{safeDescription}</p>


                    <button className="null-img" onClick={onClickZeroing}></button>
                    <p className="null">Метод "{zeroing}"</p>
                    <p className="null_description">{zeroingDescription}</p>


                    <button className="latte-img" onClick={onClickLatte}></button>
                    <p className="latte">Метод "{latte}"</p>
                    <p className="latte_description">{latteDescription}</p>

                    <button className="parts-img" onClick={onClickPopular}></button>
                    <p className="parts">Метод "{popular}"</p>
                    <p className="parts_description">{popularDescription}</p>
                </div>
            </div>

        </div>
    )
}
export default ChoiseProgram
