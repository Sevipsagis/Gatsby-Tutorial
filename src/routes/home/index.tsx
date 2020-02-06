import { h } from "preact";
import NavBar from './../../components/navbar/index';
import * as style from "./style.css";

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    document.title = 'hello !!!!'
    return (
        <div class={style.container}>
            <div class={style.contentWrapper}>
                <div class={style.content}>
                    <NavBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
