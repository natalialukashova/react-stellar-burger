import React from 'react'
import style from './style.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';

export function ResetPassword() {
    const navigate = useNavigate();

    const singInClick = () => {
      navigate("/login");
    };
  return (
    <main className={style.main}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <div className="mb-6">
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          name={"newPassword"}
          icon="ShowIcon"
        />
      </div>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Введите код из пильма"}
          name={"code"}
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
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
    </main>
  );
}
