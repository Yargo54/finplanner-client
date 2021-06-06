import React from 'react';
import './ChoiseProgram.css';


function ChoiseProgram() {
    return (
        <div className="choise-program_wraper">
            <div className="main">
                    <p className="schema">Выберете схему накопления</p>

                    <div className="choise-program-bandle-one">
                        <div className="container">

                            <button className="envelope-img"></button>
                            <p className="four-envelope" >Метод “Четыре конверта”</p>
                            <p className="four-envelope_description">description</p>
                        </div>
                  
                    <div className="container">

                        <button className="jag-img"></button>
                        <p className="six-jag">Метод “Шесть кувшинов”</p>
                        <p className="six-jag_description">description</p>
                    </div>
                </div>
                <div className="choise-program-bandle-one">
                    <div className="container">

                        <button className="vault-img"></button>
                        <p className="vault">Метод “Сейф”</p>
                        <p className="vault_description">description</p>
                    </div>
                    <div className="container">

                        <button className="null-img"></button>
                        <p className="null">Метод “Обнуление”</p>
                        <p className="null_description">description</p>
                    </div>
                </div>
                <div className="choise-program-bandle-one">
                    <div className="container">

                        <button className="latte-img"></button>
                        <p className="latte">Метод “Эффект Латте”</p>
                        <p className="latte_description">description</p>
                    </div>
                    <div className="container">

                        <button className="parts-img"></button>
                        <p className="parts">Метод “50/30/20”</p>
                        <p className="parts_description">description</p>
                    </div>
                </div>
            </div>
        </div>

            
    )
}
export default ChoiseProgram
