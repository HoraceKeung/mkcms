<template>
	<div :class="'min-w-10 w-10 h-6 rounded-full border flex cursor-pointer px-px '+(value?'bg-gold':'bg-coal-900')" style="transition: background-color 0.15s;" @click="onClick">
		<div :class="[{'toogle-circle-active':value},'toggle-circle']"></div>
	</div>
</template>

<script>
export default {
	props: {
		value: {type: Boolean, required: true}
	},
	methods: {
		onClick () {
			this.$emit('input', !this.value)
		}
	}
}
</script>

<style scoped>
.toggle-circle {
	transition: transform 0.05s;
	width: calc(1.5rem - 2px);
	height: calc(1.5rem - 2px);
	@apply rounded-full bg-white my-auto
}
.toogle-circle-active {
	transform: translateX(1rem);
}
</style>
