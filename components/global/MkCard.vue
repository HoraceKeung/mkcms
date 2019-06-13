<template>
	<div class="mk-box cursor-pointer flex flex-col bg-coal-800 h-full" @click="$emit('click')">
		<div v-if="isPreviewOk&&image" class="mx-auto"><img :src="image" alt="preview" @error="isPreviewOk=false"></div>
		<placeholder v-else-if="image" class="mx-auto my-4"/>
		<div class="p-4 border-t border-coal-600">
			<slot/>
		</div>
	</div>
</template>

<script>
import Placeholder from '~/components/svg/Placeholder'
export default {
	props: {
		image: {type: String}
	},
	components: {Placeholder},
	data: () => ({
		isPreviewOk: true
	})
}
</script>
