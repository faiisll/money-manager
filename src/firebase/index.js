import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyBPFm4kfNxaPHPyArW5zjqlfB0Qn7lNTZc",
    authDomain: "money-manager-1da78.firebaseapp.com",
    projectId: "money-manager-1da78", 
    storageBucket: "money-manager-1da78.appspot.com", 
    messagingSenderId: "1012551697522", 
    appId: "1:1012551697522:web:a4e2eb29c22cecdb6e6eeb", 
    measurementId: "G-1SHBEEH7XQ" 
};
  
export const firebaseApp = initializeApp({...firebaseConfig})

// init firestore service
const db = getFirestore(firebaseApp)
export default db

export const auth = getAuth()

// here we can export reusable database references
export const todosRef = collection(db, 'todos')

export async function getTodos() {
    const citiesCol = collection(db, 'todos');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

export async function addTodo(todo){
    try {
        const docRef = await addDoc(collection(db, "todos"), {
          ...todo
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
  