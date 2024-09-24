<script lang="ts">
	import '$lib/style.css';
	import Viewer from '$lib/viewer.svelte';
	import { formatting_data, formatting_unsupported } from '$lib/format_help';
	import { closest_color, hex_6_to_3 } from '$lib/format';
	import { RotateCcw, RotateCw } from 'lucide-svelte';

	const STARTING_TEXT = '$t Example: $t$i Italic $o Bold $f00 Red $w Wide $z Reset'; //$i$fff/$beeo$CFDnz$fff/$CFCf$CFDe$BEDo$BEEr';
	let tm_text = $state(STARTING_TEXT);
	let tm_editor: HTMLTextAreaElement | null = $state(null);
	let tm_text_color = $state('#ffffff');

	let format_info_open = $state(false);
	let history: string[] = $state([STARTING_TEXT]);
	let history_index: number = $state(0);

	function add_modifier(modifier: string) {
		if (!tm_editor) return;
		tm_text =
			tm_text.substring(0, tm_editor.selectionStart) +
			modifier +
			tm_text.substring(tm_editor.selectionStart);
		history_add();
		// tm_editor.focus();
	}
	function sanitize_color() {
		tm_text_color = closest_color(tm_text_color);
	}

	function clear() {
		tm_text = '';
		history_add();
	}
	function undoable(): boolean {
		return history_index != 0;
	}
	function redoable(): boolean {
		return history_index != history.length - 1;
	}

	function history_add() {
		if (history_index != history.length - 1) {
			history = history.slice(0, history_index + 1);
		}
		history.push(tm_text);
		history_index = history.length - 1;
	}

	function undo() {
		if (!undoable()) {
			return;
		}
		history_index--;
		tm_text = history[history_index];
	}

	function redo() {
		if (!redoable()) {
			return;
		}
		history_index++;
		tm_text = history[history_index];
	}
</script>

{#snippet format_guide(format_list: { name: string; code: string; description: string }[])}
	{#each format_list as format_info}
		<article>
			<header class="flex" style="gap:1rem">
				<span>{format_info.name}</span><code>[{format_info.code}]</code>
			</header>
			<small>{@html format_info.description}<small> </small></small>
		</article>
	{/each}
{/snippet}

<main>
	<h3>Trackmania Formatting Tool</h3>
	<p>
		<small>This tool was tested on TM². Details may vary in other versions of Trackmania.</small>
	</p>
	<dialog open={format_info_open || null}>
		<header>
			<h4>Formatting Guide</h4>
		</header>
		<div class="content">
			<p>To format your text, you can use the following modifiers:</p>
			{@render format_guide(formatting_data)}
			<p>
				The game also recognizes the following modifiers for links, but they are not supported by
				this tool for the sake of simplicity.
			</p>
			{@render format_guide(formatting_unsupported)}
		</div>
		<footer>
			<button onclick={() => (format_info_open = false)}>Close</button>
		</footer>
	</dialog>
	<section>
		<button onclick={() => (format_info_open = true)} class="success">Formatting Guide</button>
	</section>
	<details open>
		<summary>Width Modifiers</summary>
		<button onclick={() => add_modifier('$w')}><span class="roboto wide">Wide</span></button>
		<button onclick={() => add_modifier('$n')}><span class="robot narrow">Narrow</span></button>
		<button onclick={() => add_modifier('$m')} class="default">Reset</button>
	</details>
	<details open>
		<summary>Color Modifiers</summary>
		<input
			type="color"
			bind:value={tm_text_color}
			class="inline block"
			oninput={() => {
				sanitize_color();
			}}
		/>
		<button onclick={() => add_modifier('$' + hex_6_to_3(tm_text_color).slice(1))}
			>Insert Color</button
		>
		<button onclick={() => add_modifier('$g')} class="default">Reset Color</button>
	</details>
	<details open>
		<summary>Style Modifiers</summary>
		<button onclick={() => add_modifier('$i')}><i>Italic</i></button>
		<button onclick={() => add_modifier('$o')}><b>Bold</b></button>
		<button onclick={() => add_modifier('$s')} style="text-shadow: 1px 1px 2px black;"
			>Drop Shadow</button
		>
		<button onclick={() => add_modifier('$t')}>UPPERCASE</button>
		<button onclick={() => add_modifier('$z')} class="default">Reset All Styles</button>
	</details>
	<details open>
		<summary> Characters</summary>
	</details>
	<span class="flex">
		<button disabled={!undoable()} onclick={() => undo()}><RotateCcw /></button>
		<button disabled={!redoable()} onclick={() => redo()}><RotateCw /></button>
		<button onclick={() => clear()}>Clear</button>
	</span>
	<textarea oninput={() => history_add()} bind:this={tm_editor} bind:value={tm_text}></textarea>
	<br />
	<Viewer {tm_text} />
</main>

<style>
	textarea {
		font-family: monospace;
	}

	dialog .content {
		max-height: 50vh;
		overflow-y: auto;
	}
</style>
