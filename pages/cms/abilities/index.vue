<template>
	<section>
		<div class="flex flex-wrap -mx-2">
			<div v-for="(a,key) in snapshot" :key="key" class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2 mb-4">
				<ability-card :id="key" :ability="a"/>
			</div>
		</div>
	</section>
</template>

<script>
import cmsMixin from '~/assets/js/cmsMixin'
import AbilityCard from '~/components/abilities/AbilityCard'
export default {
	mixins: [cmsMixin],
	components: {AbilityCard}
}
</script>
