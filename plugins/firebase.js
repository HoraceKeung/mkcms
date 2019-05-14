import firebase from 'firebase/app'
import 'firebase/auth'
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyBkJUNBUKnXgo3yisN1LiUTfSuG6iv1AR8',
		authDomain: 'mkxi-companion.firebaseapp.com',
		databaseURL: 'https://mkxi-companion.firebaseio.com',
		projectId: 'mkxi-companion'
	})
}
const fireAuth = firebase.auth()
export {fireAuth}

export default ({ store }) => {
	fireAuth.onAuthStateChanged(user => {
		store.commit('setUser', JSON.parse(JSON.stringify(user)))
	})
}
