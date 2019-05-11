<template>
	<svg :height="`${height}px`" :width="`${height/60*46}px`" viewBox="0 0 46 60">
		<g class="arrow" fill-rule="evenodd">
			<path d="M0,0 23,0 46,30 23,60 0,60 23,30 Z"/>
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		height: {type: Number, default: 16}
	}
}
</script>

<style scoped>
.arrow {
	fill: theme('colors.coal-900');
}
</style>
