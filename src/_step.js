/**
 * Steps to use Firebase 
 * 1.create a project on console.firebase.com
 * 2. Install Firebase
 * 3.Register web app in Firebase
 * 4. Copy firebase init with config from firebase project setting into firebase.init.js
 * 5. Export default app
 * 6. import app from firebase.init.js to app.js
 * 7. import getAuth from firebase/auth and create auth =getAuth(app)
 * 8. Turn on google authentication (firebase>authentication>Enable google signin)
 * 9. Create Google Provider
 * 10.use signInWithPopup and pass auth and provider
 * 11. handle .then( if successful) and .catch(if error)


*/ 