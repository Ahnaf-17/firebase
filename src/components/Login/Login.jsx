/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {

    // eslint-disable-next-line no-unused-vars
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();
    const handleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log("error",error.message);
        })
    }
    return (
        <div>
            <button onClick={handleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;