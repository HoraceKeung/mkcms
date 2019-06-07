import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyBkJUNBUKnXgo3yisN1LiUTfSuG6iv1AR8',
		authDomain: 'mkxi-companion.firebaseapp.com',
		databaseURL: 'https://mkxi-companion.firebaseio.com',
		projectId: 'mkxi-companion'
	})
}
const fireAuth = firebase.auth()
const fireDb = firebase.database()
export {fireAuth, fireDb}

export default async ({ store }) => {
	await asyncOnAuthStateChanged(store)
}

function asyncOnAuthStateChanged (store) {
	return new Promise(resolve => {
		fireAuth.onAuthStateChanged(user => {
			resolve(user)
			store.commit('setUser', JSON.parse(JSON.stringify(user)))
		})
	})
}
