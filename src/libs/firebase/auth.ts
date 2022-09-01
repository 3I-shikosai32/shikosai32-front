import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '.';

const auth = getAuth(app);

const loginWithGoogle = async () => {
  const googleAuthProvider = new GoogleAuthProvider();
  googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
  const credential = await signInWithPopup(auth, googleAuthProvider);

  return credential.user;
};

const logout = async () => {
  await signOut(auth);
};

export default auth;
export { loginWithGoogle, logout };
