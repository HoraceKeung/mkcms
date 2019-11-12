<template>
	<section>
		<div class="row">
			<div v-for="(a,index) in webpages" :key="a.id" class="col">
				<mk-card :image="a.header" @click="view(a, index)">
					<p class="font-bold text-lg leading-tight mb-2">{{a.title}}</p>
					<p class="text-xs opacity-50">{{a.description}}</p>
				</mk-card>
			</div>
			<div class="col">
				<div class="mk-box w-full h-full min-h-40 flex cursor-pointer" @click="add">
					<p class="text-6xl m-auto">+</p>
				</div>
			</div>
		</div>
		<button type="button" @click="$modal.show('action-confirm')">Delete source</button>
		<modal-action-confirm msg="Delete source" @confirm="delSource"/>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import cmsMixin from '~/assets/js/cmsMixin'
export default {
	mixins: [cmsMixin],
	layout: 'form',
	computed: {
		webpages () {
			return this.snapshot ? this.snapshot.filter(x => x) : []
		}
	},
	methods: {
		delSource () {
			fireDb.ref(this.itemType).set(null, err => {
				if (!err) {
					this.$modal.hide('action-confirm')
					this.$router.push('/cms/web')
				}
			})
		}
	}
}
</script>
