import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
    return (
        <>
        <ReactTypingEffect
               text={[ "Контролировать ваши расходы", "Тратить деньги разумно","Копить на ваши цели","Планировать ваш бюджет"]}
               cursorRenderer={cursor => <h1>{cursor}</h1>}
               speed = {75}
               eraseSpeed ={50}
               eraseDelay ={2150}
               typingDelay= {950}
               displayTextRenderer={(text, i) => {
                 return (
                   <h1>
                     {text.split('').map((char, i) => {
                       const key = `${i}`;
                       return (
                         <span
                           key={key}
                           style={i%2 === 0 ? { color: 'magenta'} : {}}
                         >{char}</span>
                       );
                     })}
                   </h1>
                 );
               }}  
        />

  <br />
{/*   
        <ReactTypingEffect
          text={["こんにちは、私の友人","สวัสดีเพื่อนของฉัน!","你好，我的朋友"]}
          cursorRenderer={cursor => <h1>{cursor}</h1>}
          speed = {95}
          eraseSpeed ={80}
          eraseDelay ={1150}
          typingDelay= {950}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i%2 === 0 ? { color: 'magenta'} : {}}
                    >{char}</span>
                  );
                })}
              </h1>
            );
          }}        
        />
        <br />
                  <ReactTypingEffect
               text={["Hello, my friend !","Salut, mon ami !", "Hola, mi amigo !", "Hallo, mein Freund !"]}
               cursorRenderer={cursor => <h1>{cursor}</h1>}
               speed = {95}
               eraseSpeed ={80}
               eraseDelay ={2150}
               typingDelay= {950}
               displayTextRenderer={(text, i) => {
                 return (
                   <h1>
                     {text.split('').map((char, i) => {
                       const key = `${i}`;
                       return (
                         <span
                           key={key}
                           style={i%2 === 0 ? { color: 'magenta'} : {}}
                         >{char}</span>
                       );
                     })}
                   </h1>
                 );
               }}  
        /> */}
  
        
      </>
    );
  };

export default TypingEffect