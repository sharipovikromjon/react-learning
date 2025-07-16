import classNames from "classnames/bind";
import styles from "./app.module.scss";

const cn = classNames.bind(styles);

const App = () => {
  return (
    <div className={cn("app")}>
      <h1 className={cn("app__text")}>App</h1>
    </div>
  );
};

export default App;
