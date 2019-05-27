<template>
	<section>
		<form v-if="body">
			<div class="form-group mb-6">
				<label for="name-input">Name</label>
				<input id="name-input" class="form-control" v-model="body.move.name">
			</div>
			<div class="flex flex-wrap -mx-2">
				<div class="w-1/2 px-2 flex">
					<div class="flex m-auto">
						<input id="kb-input" type="checkbox" class="my-auto" v-model="body.move.kb">
						<label for="kb-input" class="ml-2 cursor-pointer">KB</label>
					</div>
				</div>
				<div class="w-1/2 px-2" v-for="f in [
					{key: 'attackType', label: 'Attack type'},
					{key: 'id', label: 'Move ID'},
					{key: 'input', label: 'Move Input'}
				]" :key="f.key">
					<div class="form-group mb-6">
						<label :for="`move-${f.key}-input`">{{f.label}}</label>
						<input :id="`move-${f.key}-input`" class="form-control" v-model="body.move[f.key]">
					</div>
				</div>
				<div class="w-1/3 px-2" v-for="f in [
					{key: 'moveType', label: 'Move Type', type: 'text'},
					{key: 'damage', label: 'Damage', type: 'number'},
					{key: 'blockDamage', label: 'Block damage', type: 'number'}
				]" :key="f.key">
					<div class="form-group mb-6">
						<label :for="`moveData-${f.key}-input`">{{f.label}}</label>
						<input :id="`moveData-${f.key}-input`" :type="f.type" class="form-control" v-model.number="body.move.moveData[f.key]">
					</div>
				</div>
			</div>
			<p>Frame data</p>
			<div class="flex flex-wrap -mx-2">
				<div class="w-1/4 px-2" v-for="f in [
					{key: 'active'},
					{key: 'blockAdv'},
					{key: 'cancelAdv'},
					{key: 'fblockAdv'},
					{key: 'hitAdv'},
					{key: 'recover'},
					{key: 'startUp'}
				]" :key="f.key">
					<div class="form-group mb-6">
						<label :for="`frameData-${f.key}-input`">{{f.key}}</label>
						<input :id="`frameData-${f.key}-input`" type="number" class="form-control" v-model.number="body.move.frameData[f.key]">
					</div>
				</div>
			</div>
			<div class="form-group mb-6" v-for="f in [
				{key: 'description', label: 'Description'},
				{key: 'additionalRequirements', label: 'Additional Requirements'},
				{key: 'preview', label: 'Preview image'}
			]" :key="f.key">
				<label :for="`${f.key}-input`">{{f.label}}</label>
				<input :id="`${f.key}-input`" class="form-control" v-model="body[f.key]">
			</div>
			<div class="form-group mb-6">
				<label for="slots-input">Slots</label>
				<input id="slots-input" class="form-control" type="number" v-model.number="body.slots">
			</div>
			<button class="btn" type="submit" @click.prevent="save">Save</button>
		</form>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	created () {
		this.body = JSON.parse(JSON.stringify(this.$store.state.itemInView))
	},
	methods: {
		save () {
			fireDb.ref(`abilities/${this.$route.params.id}`).set(this.body, err => {
				alert(err || 'Data saved successfully!')
			})
		}
	},
	data: () => ({
		body: null
	})
}
</script>
