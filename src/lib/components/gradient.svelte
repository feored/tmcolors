<script lang="ts">
	import Viewer from '$lib/components/viewer.svelte';
	import { hex_to_rgb, rgb_to_hex_3, closest_color } from '$lib/format';
	import { X, Plus } from 'lucide-svelte';

	const INITIAL_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	const DEFAULT_COLOR = '#ffffff';
	const INITIAL_COLORS = ['#ff0000', '#00ff00', '#0000ff'];

	let gradient_text = $state(INITIAL_TEXT);
	let gradient_colors = $state(INITIAL_COLORS);
	let spaces_count = $state(false);

	function gradient(start_color: number[], end_color: number[], ratio: number): number[] {
		var differences = end_color.map((c, i) => c - start_color[i]);
		return start_color.map((c, i) => c + differences[i] * ratio);
	}

	let tm_text = $derived.by(() => {
		let final_text = '';

		let input_text = spaces_count ? gradient_text : gradient_text.replace(/\s/g, '');

		let input_colors = [...gradient_colors];
		if (input_text.length < input_colors.length) {
			input_colors = input_colors.slice(0, input_text.length);
		}
		let gradients_num = input_colors.length - 1;
		let char_per_color_set = Math.floor(input_text.length / gradients_num);
		let gradient_data: { color?: string; character: string }[] = [];

		for (let i = 0; i < input_text.length; i++) {
			var start_color = input_colors[Math.min(Math.floor(i / char_per_color_set), gradients_num)];
			var end_color = input_colors[Math.min(Math.floor(i / char_per_color_set) + 1, gradients_num)];
			var ratio = Math.min(1, (i % char_per_color_set) / char_per_color_set);
			let rgb = gradient(hex_to_rgb(start_color), hex_to_rgb(end_color), ratio);
			let hex = rgb_to_hex_3(rgb[0], rgb[1], rgb[2]).slice(1);
			gradient_data.push({ color: hex, character: input_text[i] });
		}
		if (!spaces_count) {
			for (let i = 0; i < gradient_text.length; i++) {
				if (gradient_text[i] == ' ') {
					gradient_data.splice(i, 0, { character: ' ' });
				}
			}
		}
		console.log(gradient_data);
		final_text = gradient_data.reduce((final_text, { color, character }) => {
			if (!color) return final_text + character;
			return final_text + `$${color}${character}`;
		}, '');
		return final_text;
	});
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
					<button class="iconbtn" onclick={() => gradient_colors.splice(i, 1)}>
						<X />
					</button>
				</div>
			{/each}
			<button class="iconbtn" onclick={() => gradient_colors.push(DEFAULT_COLOR)}><Plus /></button>
		</div>
	</article>
	<article>
		<header>Result</header>
		<Viewer {tm_text} />
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
</style>
