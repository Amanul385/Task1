import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// UserImpl
// accessToken
// : 
// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkMGFlMTRkMjhkMTY1NzhiMzFjOGJlNmM4ZmRlZDM0ZDVlMWExYzEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiMjAyMyBhc3BpcmUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSWRIZVhuakVkTUpfV1R2bTl0anEyak5veXVEZ1hiNi05RF9VRWV2NUxZNGo1QlFvUT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90YXNrMS1kMjhlNCIsImF1ZCI6InRhc2sxLWQyOGU0IiwiYXV0aF90aW1lIjoxNzMzNzYwMzYyLCJ1c2VyX2lkIjoiYlFhUVpwdXZpMVFxRU1KYnhtNlpvd1ZDZ3dGMiIsInN1YiI6ImJRYVFacHV2aTFRcUVNSmJ4bTZab3dWQ2d3RjIiLCJpYXQiOjE3MzM3NjAzNjIsImV4cCI6MTczMzc2Mzk2MiwiZW1haWwiOiIyMDIzYXNwaXJlMTY2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA1OTY4NzIxNDk4NTE5Mzg2MDQyIl0sImVtYWlsIjpbIjIwMjNhc3BpcmUxNjZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.IGF2snP74bWcmTJLi8Exyyk-L4d9t_veeFN8VnuSiDJRb5xP3d_2BHlrK3iA48hoIgegU-X2xxzGqNwLknEchQPLCIVV1FglWwgT3w3G588zycbN1pjSZyt7x00TF9IljLJljc89D0FfGFfjkuC28VsW8Om1E3Qs20SacqtLBO5buDAljgIjuk88YwtXcWyImUBXbmrzG-q6H2nYJHBAtjfIGZcP-1oOyJl8_MU0ifB55t51vlvROMNbQnbsikYR_uZt-u813KBaWSAtjeZHoF6QYAm4PpXj6E3P8TyIAiTRcjlK5QW40_SG9MeyecykCCcv94AD53siLjeMAarBSQ"
// auth
// : 
// AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: UserImpl, …}
// displayName
// : 
// "2023 aspire"
// email
// : 
// "2023aspire166@gmail.com"
// emailVerified
// : 
// true
// isAnonymous
// : 
// false
// metadata
// : 
// UserMetadata {createdAt: '1733760362213', lastLoginAt: '1733760362214', lastSignInTime: 'Mon, 09 Dec 2024 16:06:02 GMT', creationTime: 'Mon, 09 Dec 2024 16:06:02 GMT'}
// phoneNumber
// : 
// null
// photoURL
// : 
// "https://lh3.googleusercontent.com/a/ACg8ocIdHeXnjEdMJ_WTvm9tjq2jNoyuDgXb6-9D_UEev5LY4j5BQoQ=s96-c"
// proactiveRefresh
// : 
// ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
// providerData
// : 
// [{…}]
// providerId
// : 
// "firebase"
// reloadListener
// : 
// null
// reloadUserInfo
// : 
// {localId: 'bQaQZpuvi1QqEMJbxm6ZowVCgwF2', email: '2023aspire166@gmail.com', displayName: '2023 aspire', photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIdHeXnjEdMJ_WTvm9tjq2jNoyuDgXb6-9D_UEev5LY4j5BQoQ=s96-c', emailVerified: true, …}
// stsTokenManager
// : 
// StsTokenManager {refreshToken: 'AMf-vBzFAgKyrPQxmIQWH_H--iw3nptHGUqXqcQ5PsKWUoG5BD…pwNvC5vIsJwQ_lWLdBi2L_ElySHIDtizCYYoIehcU96_KVaMY', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkMGFlMTRkMjhkMTY1Nz…TyIAiTRcjlK5QW40_SG9MeyecykCCcv94AD53siLjeMAarBSQ', expirationTime: 1733763963338}
// tenantId
// : 
// null
// uid
// : 
// "bQaQZpuvi1QqEMJbxm6ZowVCgwF2"