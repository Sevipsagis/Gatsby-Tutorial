/* eslint-disable react/prefer-stateless-function */
import { h, Component } from "preact";
import style from "./style";

import Navbar from "../../components/main-navigator";

class Home extends Component {
  render() {
    console.log(style);
    return (
      <div class={style["container"]}>
        <div class={style["content-wrapper"]}>
          <div class={style["content"]}>
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
