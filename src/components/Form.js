import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Зарегаться
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Кличка" />
        <input className="password" type="password" placeholder="Пароль" />
        <a className="submit" align="center">
          Зарегаться
        </a>
        <p className="forgot" align="center">
          <a href="#">Забыли Пароль? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
