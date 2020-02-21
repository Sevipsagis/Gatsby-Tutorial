import { h, Component } from 'preact';
import style from './style';

class HomeTitle extends Component {
	render () {
		return (
			<div class={style.container}>
				<div class={style.name}>
					<div>Nuttapol</div>
					<div>Phomthon</div>
				</div>
				<div class={style.line} />
				<div class={style.description}>
					<div>{'<Developer/>'}</div>
					<div>{'<Technology Geek/>'}</div>
					<div>{'<Movie Lover/>'}</div>
				</div>
			</div>
		);
	}
}

export default HomeTitle;
