<template>
	<div>
		<div class="container py-4">
			<div class="h-10 w-10 rounded-full flex cursor-pointer bg-white bg-gold mk-box" @click="$router.go(-1)">
				<arrow class="m-auto" style="transform: rotate(180deg);"/>
			</div>
		</div>
		<nuxt class="container py-4"/>
	</div>
</template>

<script>
import Arrow from '~/components/svg/Arrow'
export default {
	components: {Arrow}
}
</script>
