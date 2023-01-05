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
		newArray[0] = '여자 코드 추천';
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

	  </div>
	);
	// }
}

export default App;
