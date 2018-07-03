import React from 'react';

const AuthForm = (props) => {
  return (
    <div>
      <form>
        <h1>{props.formName}</h1>
        <div className="auth">
          <label htmlFor="email">Email</label>
          <input type="text" id="emailfield" name="email" onChange={props.changeInputs} />
        </div>
        <div className="auth1">
          <label htmlFor="password">Password</label>
          <input type="password" id="passwordfield" name="password" className="auth" onChange={props.changeInputs} />
        </div>
        <input type="button" value="submit" />
      </form>
    </div>
  )
}

export default AuthForm;