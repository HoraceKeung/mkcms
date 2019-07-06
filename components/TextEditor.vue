<template>
	<div class="rounded-lg border-2 bg-coal-900 overflow-hidden">
		<editor-menu-bar :editor="editor" v-slot="{commands, isActive}">
			<div class="menubar">
				<button type="button" :class="{'bg-gold': isActive.bold()}" @click="commands.bold"><img src="/img/tiptap/bold.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.italic()}" @click="commands.italic"><img src="/img/tiptap/italic.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.strike()}" @click="commands.strike"><img src="/img/tiptap/strike.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.underline()}" @click="commands.underline"><img src="/img/tiptap/underline.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.paragraph()}" @click="commands.paragraph"><img src="/img/tiptap/paragraph.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.heading({level:1})}" @click="commands.heading({level:1})">H1</button>
				<button type="button" :class="{'bg-gold': isActive.heading({level:2})}" @click="commands.heading({level:2})">H2</button>
				<button type="button" :class="{'bg-gold': isActive.heading({level:3})}" @click="commands.heading({level:3})">H3</button>
				<button type="button" :class="{'bg-gold': isActive.bullet_list()}" @click="commands.bullet_list"><img src="/img/tiptap/ul.svg"/></button>
				<button type="button" :class="{'bg-gold': isActive.ordered_list()}" @click="commands.ordered_list"><img src="/img/tiptap/ol.svg"/></button>
				<button type="button" @click="commands.undo"><img src="/img/tiptap/undo.svg"/></button>
				<button type="button" @click="commands.redo"><img src="/img/tiptap/redo.svg"/></button>
			</div>
		</editor-menu-bar>
		<editor-content class="p-2 outline-none" :editor="editor"/>
	</div>
</template>

<script>
import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
import {
	HardBreak,
	Bold,
	Italic,
	Strike,
	Underline,
	Heading,
	BulletList,
	OrderedList,
	ListItem,
	History
} from 'tiptap-extensions'
export default {
	props: {
		text: {type: String, required: true}
	},
	components: {EditorContent, EditorMenuBar},
	mounted () {
		this.editor = new Editor({
			content: this.text,
			extensions: [
				new HardBreak(),
				new Bold(),
				new Italic(),
				new Strike(),
				new Underline(),
				new Heading({ levels: [1, 2, 3] }),
				new BulletList(),
				new OrderedList(),
				new ListItem(),
				new History()
			],
			onUpdate: ({getHTML}) => {
				this.$emit('update:text', getHTML())
			}
		})
	},
	beforeDestroy () {
		this.editor.destroy()
	},
	data: () => ({
		editor: null
	})
}
</script>

<style scoped>
.menubar {
	@apply flex flex-wrap bg-white
}
.menubar button {
	@apply h-full px-2 h-8 w-8 text-black
}
.menubar img {
	@apply h-4 w-4
}
</style>
