import styles from './signInPopUp.module.scss'
import logo from '../../../assets/images/logo.png'
const SignInPopUp = ({handleSubmit, handleInputChange, signInForm}) => {
  return (
    <div class={styles.wrapper, styles.fadeInDown}>
            < div className={styles.formContent}>

          <h2 className={styles.active}> Sign In </h2>
          <h2 className={styles.inactive, styles.underlineHover}>Sign Up </h2>

          <div className={styles.fadeInFirst}>
            <img src={logo} className={styles.img} id="icon" alt="User Icon" />
          </div>

          <form onSubmit={(ev) => handleSubmit(ev)}>
            <input placeholder="Email"  type="email"  className={styles.fadeInSecond, styles.input} id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />

            <input placeholder="Password" type="password" id="password" className={styles.fadeInThird, styles.input} name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />

            <input type="submit" className={styles.fadeInFourth, styles.login} value="Log In"></input>

          </form>

          <div className={styles.formFooter}>
          <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
          </div>
          </div>
  )
}
export default SignInPopUp