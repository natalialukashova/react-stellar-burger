import React from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const singInClick = () => {
    navigate("/login");
  };
  const resetPasswordClick = () => {
    navigate("/reset-password");
  };

  return (
    <form className={style.main}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <div className="mb-6">
        <Input
          value={form.email}
          type={"email"}
          placeholder={"Укажите e-mail"}
          name={"e-mail"}
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={resetPasswordClick}
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
