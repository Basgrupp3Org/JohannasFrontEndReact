import React from 'react'

const UserContext = React.createContext()

export { UserContext }


// import * as Cookies from "js-cookie";
// import React from "react";

// export const setSessionCookie = (session) => {
//     Cookies.remove("session");
//     Cookies.set("session", session, { expires: 14 });
// };
// export const getSessionCookie = () => {
//     const sessionCookie = Cookies.get("session");
//     if (sessionCookie === undefined) {
//         return {};
//     }
//     else {
//         return JSON.parse(sessionCookie);
//     }
// };

// export const UserContext = React.createContext(getSessionCookie());
