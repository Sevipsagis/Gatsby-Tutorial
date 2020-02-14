import { h, Component } from "preact";
import style from "./style";

class HomeTitle extends Component {
  render() {
    return (
      <div class={style.titleContainer}>
        <div class={style.title}>Hello</div>
      </div>
    );
  }
}

export default HomeTitle;
