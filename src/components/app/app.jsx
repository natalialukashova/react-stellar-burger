import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import { useEffect, useState } from "react";
import { api, config } from "../../Api/Api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    api
      .getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main data={data} />
    </div>
  );
}

export default App;
