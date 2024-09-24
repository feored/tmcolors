<script lang="ts">
	import '$lib/style.css';
	import Viewer from '$lib/viewer.svelte';
	import { formatting_data, formatting_unsupported } from '$lib/format_help';
	import { closest_color, hex_6_to_3 } from '$lib/format';
	import { Bold, Italic } from 'lucide-svelte';

	let tm_text = $state('$i$fff/$beeo$CFDnz$fff/$CFCf$CFDe$BEDo$BEEr');
	let tm_editor: HTMLTextAreaElement | null = $state(null);
	let tm_text_color = $state('#ffffff');

	let format_info_open = $state(false);

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
	<fieldset class="flex">
		<legend>Width modifiers</legend>
		<button onclick={() => add_modifier('$w')}><span class="roboto wide">Wide</span></button>
		<button onclick={() => add_modifier('$n')}><span class="robot narrow">Narrow</span></button>
		<button onclick={() => add_modifier('$m')} class="default">Reset</button>
	</fieldset>
	<fieldset class="flex">
		<legend>Color modifiers</legend>
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
		<button onclick={() => add_modifier('$g')} class="default">Reset Color</button>
	</fieldset>
	<fieldset class="flex">
		<legend>Style modifiers</legend>
		<button onclick={() => add_modifier('$i')}><i>Italic</i></button>
		<button onclick={() => add_modifier('$b')}><b>Bold</b></button>
		<button onclick={() => add_modifier('$s')} style="text-shadow: 1px 1px 2px black;"
			>Drop Shadow</button
		>
		<button onclick={() => add_modifier('$z')} class="default">Reset All Styles</button>
	</fieldset>

	<textarea bind:this={tm_editor} bind:value={tm_text}></textarea>
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
