<template>
	<section>
		<div class="row">
			<div v-for="(a,index) in snapshot" :key="a.id" class="col">
				<mk-card :image="a.header" @click="view(a, index)">
					<p class="font-bold text-lg">{{a.title}}</p>
					<p class="text-xs opacity-50">{{a.description}}</p>
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
	mixins: [cmsMixin],
	layout: 'form'
}
</script>
