<template>
	<section>
		{{ability}}
	</section>
</template>

<script>
export default {
	layout: 'form',
	computed: {
		ability () { return this.$store.state.itemInView }
	}
}
</script>
