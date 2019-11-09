<template>
	<section class="container">
		<div class="row my-4">
			<div v-for="p in pages" :key="p" class="col flex">
				<n-link :to="`/cms/web/${p}`" class="w-full">
					<mk-button :text="p.replace(/([A-Z]+)/g, ' $1')" icon="arrow"/>
				</n-link>
			</div>
			<div class="col">
				<div class="mk-box w-full h-full flex cursor-pointer" @click="$modal.show('action-confirm')">
					<p class="text-3xl m-auto">+</p>
				</div>
			</div>
		</div>
		<modal-action-confirm msg="Add web source" @confirm="addSource">
			<div class="form-group">
				<label for="newSource-input">New source</label>
				<input id="newSource-input" class="form-control" v-model.trim="newSource">
			</div>
		</modal-action-confirm>
	</section>
</template>

<script>
import cmsMixin from '~/assets/js/cmsMixin'
import {fireDb} from '~/plugins/firebase.js'
export default {
	mixins: [cmsMixin],
	layout: 'form',
	computed: {
		pages () {
			return this.snapshot ? Object.keys(this.snapshot) : []
		}
	},
	methods: {
		addSource () {
			if (this.newSource) {
				if (this.pages.includes(this.newSource)) {
					alert('Already exist')
				} else {
					fireDb.ref(`web/${this.newSource.toLowerCase()}`).set([''], err => {
						if (!err) {
							this.$modal.hide('action-confirm')
							fireDb.ref(this.itemType).once('value').then(snapshot => {
								this.$store.commit('setSnapshot', snapshot.val())
							})
						}
					})
				}
			}
		}
	},
	data: () => ({
		newSource: null
	})
}
</script>
