import { useEffect } from "react";

import "./App.css";

function App() {
   useEffect(() => {
      // const getEnteredStores = async () => {
      //    const getDate = await fetch(
      //       "https://quickocustomer.docs.apiary.io/#reference/0/get-stores-by-only-zipcode/get-the-stores-available-in-the-zipcode-entered",
      //       {
      //          method: "GET",
      //          headers: {
      //             "Content-Type": "application/json",
      //             "X-User": "customer",
      //          },
      //       }
      //    );
      //    console.log(getDate);
      // };
      // getEnteredStores();
   });
   return (
      <div className="App">
         <h1>Hello world</h1>
      </div>
   );
}

export default App;
