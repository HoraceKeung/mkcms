<template>
	<section>
		<div class="mb-3 flex">
			<p class="my-auto mr-2">Tweets</p>
			<div class="mk-box h-10 w-10 flex cursor-pointer" @click="tweets.push('')">
				<p class="m-auto text-2xl">+</p>
			</div>
		</div>
		<div v-for="(t,index) in tweets" :key="`tweets${index}`" class="flex mb-6">
			<input class="form-control mr-2 flex-1" v-model="tweets[index]">
			<div class="mk-box w-10 h-10 my-auto flex cursor-pointer" @click="tweets.splice(index,1)"><p class="m-auto text-xl">X</p></div>
		</div>
		<button class="btn btn-gold" type="button" @click="save">Save</button>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import cmsMixin from '~/assets/js/cmsMixin'
export default {
	mixins: [cmsMixin],
	layout: 'form',
	methods: {
		save () {
			fireDb.ref(this.itemType).set(this.tweets, err => {
				alert(err || 'Data saved successfully!')
			})
		}
	},
	watch: {
		snapshot (val) { this.tweets = JSON.parse(JSON.stringify(val)) }
	},
	data: () => ({
		tweets: []
	})
}
</script>
