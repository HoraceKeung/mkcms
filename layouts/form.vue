<template>
	<div>
		<div class="container py-4 flex">
			<div class="h-10 w-10 rounded-full flex cursor-pointer bg-gold mk-box" @click="$router.go(-1)">
				<arrow class="m-auto" style="transform: rotate(180deg);"/>
			</div>
			<p v-show="canDel" class="cursor-pointer ml-auto my-auto" @click="$modal.show('action-confirm')">Delete</p>
		</div>
		<nuxt class="container py-4"/>
	</div>
</template>

<script>
import Arrow from '~/components/svg/Arrow'
export default {
	components: {Arrow},
	computed: {
		canDel () {
			return this.$store.state.itemInView && (!this.$route.path.includes('characters') || this.$route.path.split('/').length >= 6) && !this.$route.path.includes('new')
		}
	}
}
</script>
