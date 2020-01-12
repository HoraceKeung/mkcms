<template>
	<div>
		<div class="container py-4 flex">
			<div class="h-10 w-10 rounded-full flex cursor-pointer bg-gold mk-box" @click="goBack">
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
			const p = this.$route.path
			return this.$store.state.itemInView && (!p.includes('characters') || p.split('/').length >= 6) && p.substr(p.length - 4) !== '/new'
		}
	},
	methods: {
		goBack () {
			const p = this.$route.path.split('/')
			p.pop()
			this.$router.push(p.join('/'))
		}
	}
}
</script>
