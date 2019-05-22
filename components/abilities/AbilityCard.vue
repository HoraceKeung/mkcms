<template>
	<div class="mk-box cursor-pointer flex flex-col bg-coal-800" @click="view">
		<placeholder v-if="isPreviewErr" class="mx-auto mt-4"/>
		<div v-else><img :src="ability.preview" alt="preview" @error="isPreviewErr=true"></div>
		<div class="p-4">
			<p class="font-bold text-center">{{ability.move.name}}</p>
		</div>
	</div>
</template>

<script>
import Placeholder from '~/components/svg/Placeholder'
export default {
	props: {
		id: {type: String, required: true},
		ability: {type: Object, required: true}
	},
	components: {Placeholder},
	methods: {
		view () {
			this.$store.commit('setItemInView', this.ability)
			this.$router.push(`/cms/abilities/${this.id}`)
		}
	},
	data: () => ({
		isPreviewErr: false
	})
}
</script>
