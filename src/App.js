// import  {useEffect, useState}  from "react";
// import Form from "./components/Form";

// function App () {
//   const [name,setName] = useState("");
//   const [state, setState] = useState({
//     name  :"",
//     selected: false, 
//   });

//   useEffect(() => {
//     console.log("the state has changed, useEffect runs !")
//   }, [state])
  
//  const handleAdd = () => {
//    setState ((prev)=>({...prev, name}) )
//  };

//  const handleSelect = () => {
//   setState ((prev)=>({...prev, selected:true}) );
// };


//    return( 
//     <div>  
//     <input  type="text" onChange={(e) => setName(e.target.value)}/>
//     <button onClick={handleAdd}> Add Name </button>
//     <button onClick={handleSelect}> Select </button>
  
   

//     {`{
//        name : ${state.name},
//        selected : ${state.selected.toString()}
//     }`}

//       </div>

     
//     );
//  }

//  export default App;

// import  {useEffect, useState}  from "react";

// function App () {
//    const [number, setNumber] = useState(0);

//    console.count("component rendred !");

//    useEffect(() => {
//     console.count("useEffect Runs !")
//     document.title =` You clicked ${number} times`

//    } )

//    return( 
//     <div>  
//     <span>   You clicked {number} times  </span> <br></br>
//     <button onClick={() =>setNumber((prev) => prev +1) }> Increase </button> 
//       </div>
//     );
//  }

//  export default App;

// import React, { useState } from 'react';
// import Form from './components/Form';

// function App() {
//   const [data, setData] = useState('');

//   const handleFormSubmit = (formData) => {
//     setData(formData);
//   }

//   return (
//     <div>
//       <Form onSubmit={handleFormSubmit} />
//       <p>{data}</p>
//     </div>
//   );
// }

// export default App;



// // import { useState, useEffect } from 'react';
// // import { createConnection } from './chat.js';

// // const serverUrl = 'https://localhost:1234';

// // function ChatRoom({ roomId }) {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     const options = {
// //       serverUrl: serverUrl,
// //       roomId: roomId
// //     };
// //     const connection = createConnection(options);
// //     connection.connect();
// //     return () => connection.disconnect();
// //   }, [roomId]);

// //   return (
// //     <>
// //       <h1>Welcome to the {roomId} room!</h1>
// //       <input value={message} onChange={e => setMessage(e.target.value)} />
// //     </>
// //   );
// // }

// // export default function App() {
// //   const [roomId, setRoomId] = useState('general');
// //   return (
// //     <>
// //       <label>
// //         Choose the chat room:{' '}
// //         <select
// //           value={roomId}
// //           onChange={e => setRoomId(e.target.value)}
// //         >
// //           <option value="general">general</option>
// //           <option value="travel">travel</option>
// //           <option value="music">music</option>
// //         </select>
// //       </label>
// //       <hr />
// //       <ChatRoom roomId={roomId} />
// //     </>
// //   );
// // }





// // import { useState, useEffect } from 'react';

// // export default function Counter() {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCount(c => c + 1); // ✅ Pass a state updater
// //     }, 1000);
// //     return () => clearInterval(intervalId);
// //   }, []); // ✅ Now count is not a dependency

// //   return <h1>{count}</h1>;
// // }

// // import React, {useState,useEffect} from "react";

// // export default function App() {
// //   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

// //  const handleResize =() => {
// //    setWindowWidth(windowWidth.innerWidth)
// //  }
  
 
// //   useEffect(() =>{
// //              window.addEventListener('resize',handleResize)
// //   }, [] )
  
// //   return( 
// //     <div>
// //       {windowWidth}
// //     </div>
// //   )

// // }



// // import React, {useState,useEffect} from "react";

// // export default function App() {
// //   const [resourceType, setResourceType] = useState('posts')
// //   const [items, setItems] = useState([])

// //   console.log('render')
 
// //   useEffect(() =>{
// //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
// //          .then((response) => response.json())
// //         .then((json) => setItems(json));
// //   }, [resourceType] )
  
// //   return( 
// //     <>
// //     <div>
// //       <button onClick={() => setResourceType('posts')}> Posts</button>
// //       <button onClick={() => setResourceType('users')}> Users</button>
// //       <button onClick={() => setResourceType('comments')}> Comments</button>

// //     </div>
// //     <h1> {resourceType} </h1>
// //     {items.map(item=> {
// //       return <pre> {JSON.stringify(item)} </pre>
// //     })}
// //     </>
// //   )

// // }








import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import RegistrationForm from './components/RegisterForm';
import Hello from './components/Hello';
import Message from './components/Message';
import { FunctionComponent } from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     {/* <Hello/> */}

     <RegistrationForm/>
    {/* <FunctionComponent/> */}

  {/* <Counter/> */}


    </div>
  );
}

export default App;
