// 'use strict';

// const e = React.createElement;

// class Layout extends React.Component {

// }

// const domContainer = document.querySelector("#app");

// const root = ReactDOM.createRoot(domContainer);

// root.render(e(Layout));

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
  
//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };

import { filtrar  } from "./api";
  
  function mostrarPaises(json){
     var resultado = filtrar(json, 10);
     // console.log(resultado[0].flags.png)
     var res = resultado.map(function(i){
        // const countriPaint = (
        //   <div>
        //     <h1>{i.name}</h1>
        //     <img src={i.flags.png}></img> 
        //   </div>
        // )
        return console.log(i.name + " " + i.flags.png)
    })
  }
mostrarPaises()
  // const Layout = (
  //   <section>
  //       <nav className="nav_bar">
  //           <h1>Where in the world?</h1>
  //           <p>Dark Mode</p>
  //       </nav>
  //       {/* <input placeholder="Search for a country"></input> */}
        
  //   </section>
  // );
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(countriPaint);
  