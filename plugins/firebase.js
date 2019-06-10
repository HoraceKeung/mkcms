import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyDc-18n2tHHwbjumEJxlpC7F-gqwYEhPPA',
		authDomain: 'mk-kompanion.firebaseapp.com',
		databaseURL: 'https://mk-kompanion.firebaseio.com',
		projectId: 'mk-kompanion'
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
