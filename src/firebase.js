import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUFgNo60WZn37MtAw_htjK7Iwmjs4KocM",
  authDomain: "todo-fb-88f28.firebaseapp.com",
  projectId: "todo-fb-88f28",
  storageBucket: "todo-fb-88f28.appspot.com",
  messagingSenderId: "757877501430",
  appId: "1:757877501430:web:c914f3d839917f91cbebd7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };