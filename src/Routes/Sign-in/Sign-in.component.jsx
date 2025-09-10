import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";


const SignIn = () => {

    const logInWithGooglePopup = async () => {
        const response  = await signInWithGooglePopUp();
        console.log(response);
        const {user} = response;
        const userResponse = await createUserDocumentFromAuth(user);
        console.log(userResponse);
        
    }


    return (
        <div>
            <h1>This is a sign-in component</h1>
            <button  onClick={logInWithGooglePopup}>
                Sign in with google
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;