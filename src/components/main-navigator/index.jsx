import { h, Component } from 'preact';
import style from './style';
class Navbar extends Component {
	render () {
		return (
			<nav class={style.navBar}>
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>About Me</a>
					</li>
					<li>
						<a>Timeline</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
