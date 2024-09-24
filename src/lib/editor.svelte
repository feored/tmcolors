<script lang="ts">
	import { tm_to_html, DEFAULT_TEXT_DETAILS } from '$lib/format';
	import '$lib/style.css';
	import type { TextDetails, TMText } from '$lib/format';
	import { on } from 'svelte/events';
	let editor: HTMLElement | null = $state(null);
	let bg_color = $state('#808080');
	let editable_text = $state('');
	let tm_data: TMText[] = $state([]);
	let cursor_pos = $state(0);

	function setCaret(position: number) {
		var range = document.createRange();
		var sel = window.getSelection();
		if (sel == null) return;
		if (editor == null) return;

		range.setStart(editor.childNodes[position], 0);
		range.collapse(true);

		sel.removeAllRanges();
		sel.addRange(range);
	}

	function on_input(event: InputEvent) {
		event.preventDefault();
		if (event.inputType == 'insertText') {
			let new_character = {
				text: event.data || '',
				style: {
					...DEFAULT_TEXT_DETAILS
				}
			};
			tm_data.splice(cursor_pos, 0, new_character);
			cursor_pos++;
			setCaret(cursor_position() + 11);
		} else if (event.inputType == 'deleteContentBackward') {
			console.log('delete');
			console.log(cursor_pos);
			console.log(tm_data.length);
			if (cursor_pos == 0 || tm_data.length == 0) {
				console.log('no characters to delete');
				return;
			}
			tm_data.splice(cursor_pos - 1, 1);
			cursor_pos--;
			setCaret(cursor_position() - 1);
		}
	}

	function cursor_position() {
		var sel = document.getSelection();
		if (sel == null) return 0;
		sel.modify('extend', 'backward', 'paragraphboundary');
		var pos = sel.toString().length;
		if (sel.anchorNode != undefined) sel.collapseToEnd();

		return pos;
	}
</script>

<section>
	<br />
	<br />
	<div
		id="result"
		style:background-color={bg_color}
		contenteditable="true"
		bind:this={editor}
		style="width:100%; min-height:10rem;"
		onbeforeinput={(event) => {
			event.preventDefault();
			on_input(event);
		}}
	>
		{#each tm_data as block}
			<span
				style:color={block.style.color}
				style:font-weight={block.style.bold ? 'bold' : 'normal'}
				style:font-style={block.style.italic ? 'italic' : 'normal'}
				class={block.style.width}
				style:text-shadow={block.style.shadow ? '1px 1px 2px black' : 'none'}
			>
				{block.text}
			</span>
		{/each}
	</div>
	<label for="bgcolor"><small>Background Color</small></label>
	<input id="bgcolor" type="color" bind:value={bg_color} />
</section>

<style>
	#result {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		min-height: 4rem;
		border-radius: 6px;
	}

	#bgcolor {
		margin-top: 1rem;
		width: 3rem;
		height: 3rem;
	}

	#result span {
		font-family: 'Roboto Flex';
		font-size: x-large;
	}
</style>
