import React from 'react';
import { CountComp } from './components/CountCompFunc';

interface IState {
	num: number
}

// 这里我需要一个类组件,因为需要状态
// 我如果希望在setState的里面也要有类型检查的话,这里的泛型还是要设置上

class App extends React.Component<{}, IState> {
	state: IState = {
		num: 0
	}

	render () {
		return (
			<div className="App">
				<div>
					<CountComp num={this.state.num} onChange={(n) => {
						this.setState({
							// 这里在设置的时候没有类型检查,这个想要有就要在这个类组件的名字后面加上泛型
							num: n
						})
					}} />
				</div>
			</div>
		);
	}
}  

export default App;
