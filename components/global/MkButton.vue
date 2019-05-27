<template>
	<div @click="$emit('click')" class="mkbtn">
		<div class="left">
			<span class="uppercase font-bold leading-none whitespace-no-wrap mx-auto">{{text}}</span>
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
.mkbtn {
	transition: all .5s;
	@apply cursor-pointer flex justify-center select-none w-full
}
.mkbtn:hover {
	box-shadow: 0 0 60px rgba(253,169,15,.5);
}
.mkbtn:hover .right {
	@apply bg-white
}
.mkbtn:hover .right::before {
	border-color: transparent transparent white;
}
.left {
	@apply bg-gold text-white w-full flex py-4 pl-4 pr-2 relative
}
.left::after {
	content: "";
	right: -1.5rem;
	border-width: 3rem 1.5rem 0 0;
	border-color: theme('colors.gold') transparent transparent;
	@apply absolute top-0
}
.right {
	@apply bg-gold-600 flex pl-2 pr-4 py-4 ml-7 relative
}
.right::before {
	content: "";
	left: -1.5rem;
	border-width: 0 0 3rem 1.5rem;
	border-color: transparent transparent theme('colors.gold-600');
	@apply absolute top-0
}
</style>
