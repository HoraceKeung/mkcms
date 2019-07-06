<template>
	<section>
		<div class="row">
			<div v-for="(c,index) in snapshot" :key="c.id" class="col">
				<mk-card :image="c.thumb" @click="view(c, index)">
					<p class="font-bold text-lg">{{c.name}}</p>
				</mk-card>
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
