import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
    
  );
}

export default App;
