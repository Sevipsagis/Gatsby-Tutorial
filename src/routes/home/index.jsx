/* eslint-disable react/prefer-stateless-function */
import { h, Component } from "preact";
import style from "./style";

import NavBar from "../../components/main-navigation";

class Home extends Component {
  render() {
    document.title = "Sevipsagis | Home";
    return (
      <div class={style.container}>
        <div class={style.contentWrapper}>
          <div class={style.content}>
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
