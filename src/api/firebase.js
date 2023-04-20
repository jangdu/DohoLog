// Import the functions you need from the SDKs you need
import { v4 as uuid } from "uuid";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  return signInWithPopup(auth, provider).catch(console.error);
}
export function logout() {
  return signOut(auth).catch(console.error);
}

// user계속 체크
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

const database = getDatabase(app);

// admin계정인지 아닌지 확인
function adminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

// add
export async function addNewPost(post) {
  const id = uuid();
  const date = new Date();
  return set(ref(database, `posts/${id}`), {
    ...post,
    id,
    date: date.toLocaleDateString(),
  });
}

// get
export async function getAllPosts() {
  return get(ref(database, "posts")).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log(snapshot);
      return Object.values(snapshot.val());
    }
    return [];
  });
}

//const dbRef = ref(getDatabase(app));

// export async function getPost(id) {
//   return get(child(dbRef, `posts/${id}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot);
//       return snapshot.val();
//     }
//     return [];
//   });
// }
export async function getPost(postId) {
  return get(ref(database, `posts/${postId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return items;
  });
}
