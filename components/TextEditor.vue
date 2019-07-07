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
		<editor-menu-bubble :editor="editor" @hide="hideLinkMenu" v-slot="{commands, isActive, getMarkAttrs, menu}">
			<div class="menububble" :class="{'is-active': menu.isActive}" :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
				<form class="flex items-center p-1 rounded bg-white" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
					<input class="text-black outline-none" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
					<button class="menububble__button" @click="setLinkUrl(commands.link, null)" type="button">
						<img class="h-4 min-w-4" src="/img/tiptap/remove.svg"/>
					</button>
				</form>
				<template v-else>
					<button class="menububble__button rounded" @click="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }">
						<span>{{ isActive.link() ? 'Update Link' : 'Add Link'}}</span>
						<img class="h-4 w-4 ml-1" src="/img/tiptap/link.svg"/>
					</button>
				</template>
			</div>
		</editor-menu-bubble>
		<editor-content class="p-2 outline-none" :editor="editor"/>
	</div>
</template>

<script>
import {Editor, EditorContent, EditorMenuBar, EditorMenuBubble} from 'tiptap'
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
	Link,
	History
} from 'tiptap-extensions'
export default {
	props: {
		text: {type: String}
	},
	components: {EditorContent, EditorMenuBar, EditorMenuBubble},
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
				new Link(),
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
	methods: {
		showLinkMenu (attrs) {
			this.linkUrl = attrs.href
			this.linkMenuIsActive = true
			this.$nextTick(() => {
				this.$refs.linkInput.focus()
			})
		},
		hideLinkMenu () {
			this.linkUrl = null
			this.linkMenuIsActive = false
		},
		setLinkUrl (command, url) {
			command({href: url})
			this.hideLinkMenu()
			this.editor.focus()
		}
	},
	data: () => ({
		editor: null,
		linkUrl: null,
		linkMenuIsActive: false
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
.menububble {
	transform: translateX(-50%);
	transition: opacity 0.2s, visibility 0.2s;
	@apply absolute flex z-20 bg-coal-900 rounded p-1 mb-2 invisible opacity-0
}
.menububble.is-active {
	@apply opacity-100 visible
}
.menububble__button {
	@apply flex bg-white text-black text-sm p-1
}
</style>
