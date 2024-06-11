import {getDatabase,ref,set} from "firebase/database";
import {app} from "./firebase";
import './App.css';

const db=getDatabase(app);

function App() {

  const putData=()=>{
    set(ref(db,'user/shubham'),{
    id:1,
    name:'shubham',
    age:21,
    desc:'wo kuch ni karna chahta hai '
    })
  }
  return (
    <div className="App">
      <h1>firbase rendering app</h1>
      <button onClick={putData}>Put data</button>
    </div>
  );
}

export default App;
