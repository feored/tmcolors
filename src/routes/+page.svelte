<script lang="ts">
	import Viewer from '$lib/viewer.svelte';

	let tm_text = $state('$i$fff/$beeo$CFDnz$fff/$CFCf$CFDe$BEDo$BEEr');
	let tm_editor: HTMLTextAreaElement | null = $state(null);

	function add_modifier(modifier: string) {
		tm_text += modifier;
		if (tm_editor) {
			tm_editor.focus();
		}
	}
</script>

<main>
	<h3>Trackmania Formatting Tool</h3>

	<div class="grid">
		<button onclick={() => (tm_text = '')}>Clear</button>
		<button onclick={() => add_modifier('$w')}>Wide</button>
		<button onclick={() => add_modifier('$n')}>Narrow</button>
		<button onclick={() => add_modifier('$i')}>Italic</button>
		<button onclick={() => add_modifier('$b')}>Bold</button>
		<button onclick={() => add_modifier('$s')}>Shadow</button>
		<button onclick={() => add_modifier('$g')}>Reset Color</button>
		<button onclick={() => add_modifier('$n')}>Reset Width</button>
		<button onclick={() => add_modifier('$z')}>Reset Styles</button>
	</div>
	<textarea bind:this={tm_editor} bind:value={tm_text}></textarea>
	<br />
	<Viewer {tm_text} />
</main>

<style>
	.grid {
		display: grid;
		grid-auto-columns: minmax(0, 1fr);
		grid-auto-flow: column;
	}
	textarea {
		font-family: monospace;
	}
</style>
