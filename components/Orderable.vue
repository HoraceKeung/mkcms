<template>
	<div>
		<div class="mb-4 flex">
			<toggle v-model="isOrdering"/>
			<label class="ml-1 my-auto">Reorder</label>
			<button v-show="isOrdering" class="btn-sm btn-gold ml-2" type="button" @click="saveOrder">Save order</button>
		</div>
		<draggable v-show="isOrdering" v-model="array" class="draggable-row" v-bind="dragOptions">
			<transition-group tag="div">
				<slot name="ordering"></slot>
			</transition-group>
		</draggable>
		<div v-show="!isOrdering" class="row">
			<slot name="notOrdering"></slot>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import {fireDb} from '~/plugins/firebase.js'
export default {
	props: {
		value: {required: true},
		itemType: {type: String, required: true}
	},
	components: {draggable},
	computed: {
		array: {
			get () { return this.value },
			set (val) { this.$emit('input', val) }
		}
	},
	methods: {
		saveOrder () {
			fireDb.ref(this.itemType).set(this.value, err => {
				alert(err || 'Order saved successfully!')
			})
		}
	},
	data: () => ({
		dragOptions: {
			animation: 200,
			group: "group"
		},
		isOrdering: false
	})
}
</script>
