<template>
	<section>
		<div class="row">
			<div v-for="(t,index) in snapshot" :key="index" class="col">
				<mk-card @click="view(t, index)">
					<p class="text-xs opacity-50 overflow-hidden">{{t}}</p>
				</mk-card>
			</div>
			<div class="col">
				<div class="mk-box w-full h-full min-h-40 flex cursor-pointer" @click="add">
					<p class="text-6xl m-auto">+</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import cmsMixin from '~/assets/js/cmsMixin'
export default {
	mixins: [cmsMixin]
}
</script>
