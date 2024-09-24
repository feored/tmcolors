<script lang="ts">
	import { tm_to_html } from '$lib/format';
	import '$lib/style.css';
	import type { TMStyle } from '$lib/format';
	let bg_color = $state('#808080');
	let { tm_text = '' }: { tm_text: string } = $props();
</script>

<section>
	<div id="result" style:background-color={bg_color}>
		{#each tm_to_html(tm_text) as block}
			<span
				style:color={block.style.color}
				style:font-weight={block.style.bold ? 'bold' : 'normal'}
				style:font-style={block.style.italic ? 'italic' : 'normal'}
				class={block.style.width}
				style:text-transform={block.style.uppercase ? 'uppercase' : 'none'}
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
		padding: 1rem;
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
