<template>
	<div @click="$emit('click')" class="h-10 flex cursor-pointer">
		<div class="left">
			<p class="uppercase m-auto font-bold">{{text}}</p>
		</div>
		<div class="right">
			<component v-if="icon" :is="icon" class="m-auto"/>
		</div>
	</div>
</template>

<script>
import Arrow from '~/components/svg/Arrow'
export default {
	components: {Arrow},
	props: {
		text: {type: String, required: true},
		icon: {type: String}
	}
}
</script>

<style scoped>
.left {
	clip-path: polygon(
		0 0,
		100% 0,
		90% 100%,
		0 100%
	);
	@apply bg-york h-full w-36 flex
}
.right {
	clip-path: polygon(
		30% 0,
		100% 0,
		100% 100%,
		0 100%
	);
	transform: translateX(-0.5rem);
	@apply bg-york-600 h-full w-12 flex pl-2
}
</style>
