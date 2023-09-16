export default function LoginPage() {
  return (
    <>
      <form id="login" role="form" action="" method="post" className="p-5 my-3 mx-auto">
        <div className="border-bottom mb-3" id="login-head">
          <h1 className="lead">Log in to the website</h1>
          {true ? <p>Students should sign in using Microsoft</p> : <>
            <p>Use your CIS credentials.</p>
            <p>This log in page is for non-members. <a href="/auth/login.php">JCR members should log in here</a>.</p></>}
        </div>
        <div className="border-bottom pb-3 mb-3" id="login-providers">
          <a href="/auth/microsoft" className="btn btn-primary d-inline-flex" role="button"><img src="/assets/img/icons/microsoft.svg" alt="Microsoft logo" style={{ paddingRight: "12px;" }} /> <span style={{ fontFamily: "Segoe UI, sans-serif", fontSize: "15px" }}>Sign in with Microsoft</span></a>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-user fa-fw"></i></span>
            <input type="text" placeholder="Username" className="form-control" id="username"
              name="username" required autoFocus aria-label="username" autoComplete="username" />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-key fa-fw"></i></span>
            <input type="password" placeholder="Password" className="form-control" id="password"
              name="password" required aria-label="password" autoComplete="current-password" />
          </div>
        </div>
        <div className="mb-3 text-center">
          <button id="login-btn" className="btn btn-primary" type="submit" name="login">Login</button>
        </div>
        <div id="login-foot" className="border-top pt-3">
          <h4>Forgotten password</h4>
          <p>Please <a className="color-red" href="https://www.dur.ac.uk/cis/accounts/reset/">click here</a> to reset
            your
            University password.</p>
        </div>
      </form>
    </>
  )
}