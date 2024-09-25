<script lang="ts">
	import Viewer from '$lib/components/viewer.svelte';
	import type { TMData } from '$lib/format';
	import { text_to_tm, compress_tmdata, tmdata_to_text } from '$lib/format';
	import { RotateCw } from 'lucide-svelte';

	let settings = $state({
		color: true,
		width: true,
		uppercase: true,
		bold: true,
		italic: true,
		shadow: false
	});

	function random_color() {
		let random_channel = () => Math.floor(Math.random() * 16).toString(16);
		return `${random_channel()}${random_channel()}${random_channel()}`;
	}

	function randomize(input: string): TMData[] {
		let final: TMData[] = [...text_to_tm(input, false)];
		for (let i = 0; i < final.length; i++) {
			if (settings.color) {
				final[i].style.color = `#${random_color()}`;
			}
			if (settings.width) {
				final[i].style.width = ['narrow', 'normal', 'wide'][Math.floor(Math.random() * 3)] as
					| 'narrow'
					| 'normal'
					| 'wide';
			}
			if (settings.uppercase) {
				final[i].style.uppercase = Math.random() > 0.5;
			}
			if (settings.bold) {
				final[i].style.bold = Math.random() > 0.5;
			}
			if (settings.italic) {
				final[i].style.italic = Math.random() > 0.5;
			}
			if (settings.shadow) {
				final[i].style.shadow = Math.random() > 0.5;
			}
		}
		return compress_tmdata(final);
	}

	let tm_text = $state('Hello World');
	let tm_data: TMData[] = $derived(randomize(tm_text));
	let output_text: string = $derived(tmdata_to_text(tm_data));
</script>

<article class="flex row wrap">
	<label><input type="checkbox" bind:checked={settings.color} />Color</label>
	<label><input type="checkbox" bind:checked={settings.width} />Width</label>
	<label><input type="checkbox" bind:checked={settings.uppercase} />Uppercase</label>
	<label><input type="checkbox" bind:checked={settings.bold} />Bold</label>
	<label><input type="checkbox" bind:checked={settings.italic} />Italic</label>
	<label><input type="checkbox" bind:checked={settings.shadow} />Shadow</label>
</article>

<article>
	<textarea bind:value={tm_text}></textarea>
	<button
		onclick={() => {
			//hack to trigger svelte reactivity
			settings.bold = !settings.bold;
			settings.bold = !settings.bold;
		}}><RotateCw /></button
	>
	<Viewer {tm_data} />
	<code>{output_text}</code>
	<button style="width:fit-content;" onclick={() => navigator.clipboard.writeText(output_text)}
		>Copy to clipboard</button
	>
</article>

<style>
	article label {
		width: auto;
	}
	textarea {
		font-family: monospace;
	}
	code {
		padding: 1rem;
	}
</style>
