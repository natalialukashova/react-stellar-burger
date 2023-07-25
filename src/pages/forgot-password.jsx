import React, { useCallback, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function ForgotPassword() {
  // навигация по страницам
  const navigate = useNavigate();

  const singInClick = () => {
    navigate("/login");
  };

  // проверка пользователя
  let auth = useAuth();

  const [form, setValue] = useState({ email: "" });

  const onChange = (e) => {
    setValue({ email: e.target.value });
  };

  console.log(form)

  let verification = useCallback(
    (e) => {
      e.preventDefault();
      auth.verificationUser(form);
    },
    [auth, form]
  );

  if (auth.user) {
    // return <Navigate to={"/reset-password"} />;
    console.log(auth.user)

  }

  return (
    <form className={style.main}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <div className="mb-6">
        <Input
          value={form.email}
          type={"email"}
          placeholder={"Укажите e-mail"}
          name={"email"}
          onChange={onChange}
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={verification}
      >
        Восстановить
      </Button>
      <div className={`mt-20 ${style.footer}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={singInClick}
        >
          Войти
        </Button>
      </div>
    </form>
  );
}
