<script lang="ts">
	import Viewer from '$lib/components/viewer.svelte';
	import { text_gradient, closest_color, tmdata_to_text } from '$lib/format';
	import { X, Plus } from 'lucide-svelte';

	const INITIAL_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	const DEFAULT_COLOR = '#ffffff';
	const INITIAL_COLORS = ['#ff0000', '#00ff00', '#0000ff'];

	let gradient_text = $state(INITIAL_TEXT);
	let gradient_colors = $state(INITIAL_COLORS);
	let spaces_count = $state(false);

	function gradient_data_to_text(gradient_data: { color?: string; character: string }[]): string {
		let final_text = '';
		let last_color = '';
		for (let i = 0; i < gradient_data.length; i++) {
			if (gradient_data[i].color && gradient_data[i].color != last_color) {
				final_text += `$${gradient_data[i].color}${gradient_data[i].character}`;
				last_color = gradient_data[i].color!;
			} else {
				final_text += gradient_data[i].character;
			}
		}
		return final_text;
	}

	let tm_data = $derived(text_gradient(gradient_text, gradient_colors, spaces_count));
	let tm_text = $derived(tmdata_to_text(tm_data));
</script>

<section>
	<article>
		<header>Text</header>
		<textarea id="gradient_text" bind:value={gradient_text}></textarea>
		<br />
		<label>
			<input type="checkbox" bind:checked={spaces_count} />
			Take spaces into account</label
		>
	</article>
	<article>
		<header>Colors</header>
		<div class="flex wrap">
			{#each gradient_colors as color, i}
				<div class="flex">
					<input
						type="color"
						bind:value={gradient_colors[i]}
						oninput={() => {
							gradient_colors[i] = closest_color(gradient_colors[i]);
						}}
					/>
					<button
						class="iconbtn"
						onclick={() => gradient_colors.splice(i, 1)}
						disabled={gradient_colors.length < 2}
					>
						<X />
					</button>
				</div>
			{/each}
			<button class="iconbtn" onclick={() => gradient_colors.push(DEFAULT_COLOR)}><Plus /></button>
		</div>
	</article>
	<article>
		<header>Result</header>
		<Viewer {tm_data} />
		<code>{tm_text}</code>
		<button style="width:fit-content;" onclick={() => navigator.clipboard.writeText(tm_text)}
			>Copy to clipboard</button
		>
	</article>
</section>

<style>
	textarea {
		font-family: monospace;
	}
	.iconbtn {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	code {
		padding: 1rem;
	}
</style>
