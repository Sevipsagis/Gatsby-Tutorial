import { h, Component } from 'preact';
import style from './style';

import Navbar from '../../components/main-navigator';
import HomeTitle from '../../components/home-title';

class Home extends Component {
	render () {
		console.log(style);
		return (
			<div class={style.container}>
				<div class={style.contentWrapper}>
					<div class={style.content}>
						<Navbar />
						<HomeTitle />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
