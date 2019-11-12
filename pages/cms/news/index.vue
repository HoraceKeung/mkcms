<template>
	<orderable v-model="snapshot" :itemType="itemType">
		<template v-slot:ordering>
			<div v-for="n in snapshot" :key="n.id" class="col">
				<mk-card :image="n.header">
					<p class="font-bold text-lg leading-tight mb-2">{{n.title}}</p>
					<p class="text-xs opacity-50">{{n.description}}</p>
				</mk-card>
			</div>
		</template>
		<template v-slot:notOrdering>
			<div v-for="(n,index) in snapshot" :key="n.id" class="col">
				<mk-card :image="n.header" @click="view(n, index)">
					<p class="font-bold text-lg leading-tight mb-2">{{n.title}}</p>
					<p class="text-xs opacity-50">{{n.description}}</p>
				</mk-card>
			</div>
			<div class="col">
				<div class="mk-box w-full h-full min-h-40 flex cursor-pointer" @click="add">
					<p class="text-6xl m-auto">+</p>
				</div>
			</div>
		</template>
	</orderable>
</template>

<script>
import Orderable from '~/components/Orderable'
import cmsMixin from '~/assets/js/cmsMixin'
export default {
	mixins: [cmsMixin],
	components: {Orderable}
}
</script>
