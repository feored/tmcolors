<script lang="ts">
	import '$lib/style.css';
	import Viewer from '$lib/viewer.svelte';
	import { closest_color, hex_6_to_3 } from '$lib/format';
	import { Bold, Italic } from 'lucide-svelte';

	let tm_text = $state('$i$fff/$beeo$CFDnz$fff/$CFCf$CFDe$BEDo$BEEr');
	let tm_editor: HTMLTextAreaElement | null = $state(null);
	let tm_text_color = $state('#ffffff');

	function add_modifier(modifier: string) {
		tm_text += modifier;
		if (tm_editor) {
			tm_editor.focus();
		}
	}

	function sanitize_color() {
		tm_text_color = closest_color(tm_text_color);
		console.log(tm_text_color);
	}
</script>

<main>
	<h3>Trackmania Formatting Tool</h3>

	<fieldset class="flex">
		<button onclick={() => add_modifier('$w')}><span class="roboto wide">Wide</span></button>
		<button onclick={() => add_modifier('$n')}><span class="robot narrow">Narrow</span></button>
		<button onclick={() => add_modifier('$m')} class="success">Reset Width</button>
	</fieldset>
	<fieldset class="flex">
		<input
			type="color"
			style="width:3rem;height:3rem"
			bind:value={tm_text_color}
			oninput={() => {
				sanitize_color();
			}}
		/>
		<button onclick={() => add_modifier('$' + hex_6_to_3(tm_text_color).slice(1))}
			>Apply Color</button
		>
		<button onclick={() => add_modifier('$g')} class="success">Reset Color</button>
	</fieldset>
	<fieldset class="flex">
		<button onclick={() => add_modifier('$i')}><i>Italic</i></button>
		<button onclick={() => add_modifier('$b')}><b>Bold</b></button>
		<button onclick={() => add_modifier('$s')}
			><span style="text-shadow: 1px 1px 2px black'">Shadow</span></button
		>

		<button onclick={() => add_modifier('$z')} class="success">Reset All Styles</button>
	</fieldset>

	<textarea bind:this={tm_editor} bind:value={tm_text}></textarea>
	<br />
	<Viewer {tm_text} />
</main>

<style>
	.flex {
		display: flex;
	}
	textarea {
		font-family: monospace;
	}
</style>
