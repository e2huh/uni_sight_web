import './App.css';
// import React,{useState} from 'react';

function App() {
  return (
    <>
      <div className="title">
        <header className="App-header">
          Uni-sight
        </header>
      </div>
      <hr/>
      <div className = "inputbox">
        <div className="text1">질문 입력하기</div>
        <div className="text2">
            질문을 입력하고 ChatGPT 버튼을 누르면 답변이 출력됩니다.
        </div>
        <input type="text" id="askin" name="input"/>
        <button type="button" id="gptbtn"/>
      </div>
      <div  className = "outputbox">
        <div className ="text1">ChatGPT :</div>
        <div className = "text2">'분석하기' 버튼을 누르면 언어 감수성 분석 결과가 출력됩니다.</div>
        <input className="gptbox" type="text" name="input"/> 
        <button id ="outbtn" type="submit">분석하기</button>
      </div>
      <div className = "result">
        <div className="text1">언어 감수성 분석 결과</div>
        <div className ="text2"> 유의하세요! 언어 감수성이 낮게 판단될 수 있는 단어입니다.</div>
        <div className="category">- 카테고리 -
          <div className="category1">장애 및 병력
            <div className="category2">성과 가족
              <div className="category3">사회적 신분
                <div className="category4">출신
                  <div className="category5">욕설
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input className="resultbox" type="text" name="input"/>
      </div>
      
    </>
  );
}

export default App;
