<template>
	<section>
		<div class="row">
			<div v-for="(m,index) in snapshot" :key="m.id" class="col">
				<mk-card @click="view(m, index)">
					<p class="font-bold text-lg">{{m.title}}</p>
					<p class="text-xs opacity-50">{{m.description}}</p>
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
