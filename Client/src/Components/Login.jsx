import { useState } from 'react';
import './Login.css'; 
import { auth } from '../firebase/Fire.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup,OAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import {FaTwitter, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const SignInSignUpForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.providerData[0].email
          );
        navigate('/'); setCookie('logedin','True',365)
        setCookie("user",user.providerData[0].email
        ,365);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert("User not found. Please check your email and try again.");
        } else if (errorCode === 'auth/wrong-password') {
          alert("Invalid password. Please try again.");
        } else {
          alert(errorMessage);
        }
        console.error(error);
      });
  };
  
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/'); setCookie('logedin','True',365)
        setCookie("user",user.providerData[0].email,365);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          alert("The email address is already in use by another account.");
        } else if (errorCode === 'auth/weak-password') {
          alert("The password is too weak. Please choose a stronger password.");
        } else {
          alert(errorMessage);
        }
        console.error(error);
      });
  };
  
  const google = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate('/'); setCookie('logedin','True',365)
      setCookie("user",result.user.displayName,365);
    } catch (error) {
      console.error(error.message);
    }
  }


  const twitter = async (e) => {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/'); setCookie('logedin','True',365)
      setCookie("user",result.user.displayName,365);
    } catch (error) {
      console.error(error.message);
    }
  }

  const microsoft = async (e) => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = result.additionalUserInfo?.isNewUser;
      if (isNewUser) {
        navigate('/'); setCookie('logedin','True',365)
        setCookie("user",result.user.displayName,365);
      } else {
        navigate('/'); setCookie('logedin','True',365)
        setCookie("user",result.user.displayName,365)
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  

  return (
    <div className={`container ${isSignIn ? '' : 'sign-up-mode'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={isSignIn ? handleSignIn : handleSignUp} className={isSignIn ? "sign-in-form" : "sign-up-form"}>
            <h2 className="title">{isSignIn ? "Sign in" : "Sign up"}</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="btn" value={isSignIn ? "Sign in" : "Sign up"} />
            <p className="social-text">Or {isSignIn ? "Sign in" : "Sign up"} with social platforms</p>
            <div className="social-media">
             <a href="#" onClick={twitter} className="social-icon">
                <FaTwitter size={29} />
              </a>
              <a href="#" onClick={google} className="social-icon">
                <FaGoogle size={29} />
              </a>
              <a href="#" onClick={microsoft} className="social-icon">
                <FaMicrosoft size={29} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              "Welcome to Opes-Den – your friendly tech forum!
              Join our community today and dive into discussions, get advice, and connect with fellow tech enthusiasts."
            </p>
            <button className="btn transparent" onClick={toggleForm}>
              Sign up
            </button>
          </div>
          <img src="images/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              "Welcome back! At Opes-Den, we're excited to continue our journey together, exploring tech trends, sharing insights, and connecting with our vibrant community."
            </p>
            <button className="btn transparent" onClick={toggleForm}>
              Sign in
            </button>
          </div>
          <img src="images/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpForm;
