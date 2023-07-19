import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

const registrationButtonClick = () => {
    navigate('/register')
}

const resetPasswordClick = () => {
    navigate("/forgot-password");
}

  return (
    <main className={style.main}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      <div className="mb-6">
        <Input type={"email"} placeholder={"E-mail"} name={"e-mail"} />
      </div>
      <div className="mb-6">
        <Input
          type={"password"}
          placeholder={"Пароль"}
          name={"password"}
          icon="ShowIcon"
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
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
    </main>
  );
}
