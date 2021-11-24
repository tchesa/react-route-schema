import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import config from './config.json';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export type User = {
  displayName: string | null,
  email: string | null,
  refreshToken: string,
}

export const login = async (email: string, password: string): Promise<User> => {
  const response = await signInWithEmailAndPassword(auth, email, password)

  return {
    displayName: response.user.displayName,
    email: response.user.email,
    refreshToken: response.user.refreshToken
  }
}
