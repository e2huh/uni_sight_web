import './App.css';

function App() {
  return (
    <>
      <div className="title">
        <header className="App-header">
          Uni-sight
        </header>
      </div>
      <hr></hr>
      <div className="text1">질문 입력하기</div>
      <div className="text2">
          '분석하기' 버튼을 누르면 텍스트에 대한 결과가 출력됩니다.
      </div>
      <div className = "inputbox">
        <input className="inputbox" type="text" name="input" alt ="질문을 입력하세요."/>
        <input className="gptbtn" type ="button" />
        <input className="gptbox" type="text" name="input"/> 
        <button id ="btn" type="submit">분석하기</button>
      </div>
      <div className="result">언어 감수성 분석 결과</div>
      <div className ="resulttxt"> 유의하세요! 언어 감수성이 낮게 판단될 수 있는 단어입니다.</div>
      <div className = "resultbox">
        <input className="resultbox" type="text" name="input"/>
      </div>
      <div className="category">- 카테고리 -</div>
      <div className="category1">장애 및 병력</div>
      <div className="category2">성과 가족</div>
      <div className="category3">사회적 신분</div>
      <div className="category4">출신</div>
      <div className="category5">욕설</div>
      <div className="category6">기타</div>
    </>
  );
}

export default App;
