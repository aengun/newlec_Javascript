
//===============================================================

// // 1. 계산기를 React 컴포넌트로 구현하는 코드
// // input value에 0을 초기화 하시오.
// // JSX로 만들 때의 문제점이 보이는 부분

// ReactDOM.render(
// 	<section>
// 		<h1>계산기</h1>
// 		<div>
// 			<input type="text" dir="rtl" value={0}/>
// 			<input type="text" dir="rtl" />
// 			<input type="button" value="계산" />
// 			<input type="text" dir="rtl" />
// 		</div>
// 	</section>,
// 	document.querySelector("#app")
// );

//===============================================================

// // 2. 1번에서 render에 사용된 VDOM 부분을 Calc라는 컴포넌트로 분리해서 작성하시오
// // 단, function 컴포넌트로 분리해서 작성하시오.

// function Calc(props) {

// 	return <section>
// 		<h1>계산기</h1>
// 		<div>
// 			<input type="text" dir="rtl" value={0} />
// 			<input type="text" dir="rtl" value={0} />
// 			<input type="button" value="계산" />
// 			<input type="text" dir="rtl" value={0} />
// 		</div>
// 	</section>;
// }

// ReactDOM.render(
// 	<Calc />,
// 	document.querySelector("#app")
// );

//===============================================================

// 3. class로 컴포넌트를 작성하시오

class Calc extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
			result: 0
		};
	}

	resultButtonClick(e) {
		// console.log(this.state.x);
		// console.log(this.state.y);

		let { x, y } = this.state;
		x = parseInt(x);
		y = parseInt(y);
		this.setState({ result: x + y });

	}

	//이렇게 함수를 따로 빼지 않고 render()에서 onChange에 함수를 넣어 처리
	// xInputChange(e) {
	// 	this.setState({ x: e.target.value })
	// }

	// render() {
	// 	return <section>
	// 		<h1>계산기</h1>
	// 		<div>
	// 			<input type="text" dir="rtl" value={this.state.x} onChange={this.xInputChange.bind(this)} />
	// 			<input type="text" dir="rtl" value={this.state.y} />
	// 			<input type="button" value="계산" onClick={this.resultButtonClick.bind(this)} />
	// 			<input type="text" dir="rtl" value={this.state.result} />
	// 		</div>
	// 	</section>;
	// }

	render() {
		return <section>
			<h1>계산기</h1>
			<div>
				<input type="text" dir="rtl" value={this.state.x} onChange={(e) => { this.setState({ x: e.target.value }); }} />
				<input type="text" dir="rtl" value={this.state.y} onChange={(e) => { this.setState({ y: e.target.value }); }} />
				<input type="button" value="계산" onClick={this.resultButtonClick.bind(this)} />
				<input type="text" dir="rtl" value={this.state.result} />
			</div>
		</section>;
	}

}

ReactDOM.render(
	<Calc />,
	document.querySelector("#app")
);