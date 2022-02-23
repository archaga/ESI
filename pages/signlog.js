export default function Signlog() {
    return (
      <div class="container" id="container">
        <div class="form-container sign-up-container">

        <form action="">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="social"><i class="fa-solid fa-envelope"></i></a>
            <a href="#" class="social"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name/Position"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <button>SignUp</button>   
        </form>
        </div>

        <div class="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="social"><i class="fa-solid fa-envelope"></i></a>
            <a href="#" class="social"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <a href="#">Forgot Your Password</a>

          <button>Sign In</button>
        </form>
        </div>
        
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" id="signIn">Sign In</button>
            </div>

            <div class="overlay-panel overlay-right">
            <h1 class="sign-up">Don't have account?</h1>
            <p>Click sign up and enter your details</p>
            <button class="ghost" id="signUp">Sign Up</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
  
 // document is not defined!
 
//    const signUpButton = document.getElementById('signUp');
//    const signInButton = document.getElementById('signIn');
//	  const container = document.getElementById('container');

//    signUpButton.addEventListener('click', () => {
//		container.classList.add("right-panel-active");
//    });
//    signInButton.addEventListener('click', () => {
//      container.classList.remove("right-panel-active");
//    });
