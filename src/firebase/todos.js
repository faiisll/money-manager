import { db } from ".";
import { collection, query, where, getDocs, addDoc} from "firebase/firestore";


const getTodos = async () => {
    try{
        const todosRef = collection(db, "todos");
        const q = todosRef.where('todos', '==', false)
        const querySnapshot = await getDocs(q);


        if (querySnapshot) {
            return querySnapshot
          } else {
            return []
          }
    }catch(err){
        throw(err)
    }


  }

export {
    getTodos
}