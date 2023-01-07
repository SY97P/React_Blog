// import React, { useState, Component } from 'react';
/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
	// render() {
function App() {
	let posts = "강남 고기 맛집";
	function 스타일얻기() {
		return "black-nav";
	}

	// 글제목변경(글제목[0] = 1) 이런거 안 됨
	// 글제목변경() 함수는 글제목 변수에 파라미터를 씌우기만 하는 역할임
	let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '춘천 관광명소']);
	let dateStyle = { paddingLeft: '10px' };
	
	// '따봉'이라는 변수는 초기값이 0으로 state가 선언됨
	// '따봉' 변수의 값은 '따봉변경(newValue)' 함수를 통해 변경됨.
	let [따봉, 따봉변경] = useState(0);
	
	function 제목바꾸기() {
		// var newArray = 글제목; // 이거는 참조가 걸림 -> deep copy 해야함.
		// ...은 [] 혹은 {} 을 없애고 새로운 데이터로 넘겨주세요 라는 뜻
		var newArray = [...글제목]; // deep copy
		// console.log(newArray[0].includes('남자'));
		// console.log(newArray[0].includes('여자'));
		if (newArray[0].includes('남자')) {
			newArray[0] = newArray[0].replace('남자', '여자');
		} else {
			newArray[0] = newArray[0].replace('여자', '남자');
		}
		글제목변경( newArray );
	}
	
	function 순서바꾸기() {
		var newArray = [...글제목];
		newArray.splice(2, 0, newArray[0]);
		newArray.shift();
		글제목변경( newArray );
	}

	return (
	  <div className="App">
		<div className= { 스타일얻기() }>
			<div>개발 Blog</div>
		</div>
		<button onClick={ 제목바꾸기 }>버튼</button>
		<button onClick={ 순서바꾸기 }>정렬</button>
		<div className="list">
			<h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1)} }>👍</span> { 따봉 } </h3>
			<p style= {dateStyle}>1월 4일 발행</p>
			<hr/>
		</div>
		<div className="list">
			<h3> { 글제목[1] } </h3>
			<p style= {dateStyle}>1월 5일 발행</p>
			<hr/>
		</div>
		<div className="list">
			<h3> { 글제목[2] } </h3>
			<p style= {dateStyle}>1월 6일 발행</p>
			<hr/>
		</div>
			
		<Modal />
		
			{/*<div className="modal">
			<h2>제목2</h2>
			<p>날짜2</p>
			<p>상세내용2</p>
		</div>*/}
	  </div>
	);
	// }
}

// Component 만드는 법
// Component는 function App() 과 동레벨에서 작성 (function App 바운드 밖에 선언)
// Component 이름은 대문자로 시작해야함.
// return 문 하나만 써야함.
// return 문 안에 html 문법에서도 div 태그는 하나만 있어야 함. 
// 최상위 div 태그는 <> </> 로 생략해도 됨.
function Modal() {
	return (
		<div className="modal">
			<h2>제목1</h2>
			<p>날짜1</p>
			<p>상세내용1</p>
		</div>
	)
}

export default App;
