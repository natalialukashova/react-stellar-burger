import React, { useCallback, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export function LoginPage() {
  // навигация по страницам
  const navigate = useNavigate();
  

  const registrationButtonClick = () => {
    navigate("/register");
  };

  const resetPasswordClick = () => {
    navigate("/forgot-password");
  };

  // авторизация пользователя
  const auth = useAuth();

  const [form, setValue] = useState(() => ({ email: "", password: ""}));

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const login = useCallback(
    (e) => {
      e.preventDefault();
      auth.signIn(form);
    },
    [auth, form]
  );

  if (auth.user) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className={style.main}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      <div className="mb-6">
        <Input
          value={form.email}
          type={"email"}
          placeholder={"E-mail"}
          name={"email"}
          onChange={onChange}
        />
      </div>
      <div className="mb-6">
        <Input
          value={form.password}
          type={"password"}
          placeholder={"Пароль"}
          name={"password"}
          icon="ShowIcon"
          onChange={onChange}
        />
      </div>
      <Button onClick={login} htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <div className={`mt-20 ${style.footer}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы новый пользователь?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={registrationButtonClick}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className={style.footer}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={resetPasswordClick}
        >
          Восстановить пароль
        </Button>
      </div>
    </form>
  );
}
