import { useState } from 'react';
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { BaseLayout } from '../layouts';
import { useAuth } from '../contexts/firebase/auth.context';
import firebase from "firebase/app";
import { SignUpPopUp } from "../components/layout";
import { HomePage } from '../pages';
const SignUpPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();
  //   console.log(signInForm.txtEmail, signInForm.txtPassword)
  //   const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
  //   if (result) {
  //     history.goBack();
  //   }    
  // }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };
  const createUser = (e) => {
    e.preventDefault()
    console.log("starting")
    firebase.auth().createUserWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword).then(function(value) {
      console.log("starting")
      
      console.log(value);
      <Redirect to={HomePage} />
    }).catch(function(error) {
      console.log(error);
    });
  }
  return (
    <BaseLayout>
      {!!currentUser === false &&
        <SignUpPopUp 
        handleSubmit={createUser} 
        handleInputChange={handleInputChange} 
        signInForm={signInForm.txtEmail, signInForm.txtPassword}
        />
      }
        {!!currentUser === true && 
          <div>
            <Redirect to={HomePage}/>
          </div>
        }
  </BaseLayout>
  );
};

export default SignUpPage;