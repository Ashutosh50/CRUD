// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Home from "./Pages/Home";
// const Login = () =>{
//     const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
//     return(
//         <>
//         {isAuthenticated ? ( 
//             <li> 
//             <button 
//             onClick={() => logout({ returnTo: window.location.origin })}> 
//             Log Out 
//             </button> 
//             <Home/>
//             </li> 
//             ) : ( 
//                 <li> 
//             <button onClick={() => loginWithRedirect()}>Log In</button> 
//             </li> 
//             )}
//             </>
//     )

// }
// export default Login;