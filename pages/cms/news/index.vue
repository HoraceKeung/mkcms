<template>
	<section>
		<div class="flex flex-wrap -mx-2">
			<div v-for="(n,key) in snapshot" :key="key" class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2 mb-4">
				<mk-card :image="n.header" @click="view(n)">
					<p class="font-bold text-lg">{{n.title}}</p>
					<p class="text-xs opacity-50">{{n.description}}</p>
				</mk-card>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2 mb-4">
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
