import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "./firebase";

function App() {
  const signInWithGoogle = ()=>{
    
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication,provider).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      <div className="flex justify-center w-full min-h-full">
        <h2 className="text-xl font-mono text-center">Thats whats up</h2>
      </div>
      <div className="w-4/5 mx-auto p-4">
        <button className="py-2 px-3 bg-black text-white rounded-md" onClick={signInWithGoogle}>Sign In Google</button>
      </div>
    </>
  );
}

export default App;
