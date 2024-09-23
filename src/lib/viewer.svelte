<script lang="ts">
	import { tm_to_html } from '$lib/format';
	import type { TextDetails } from '$lib/format';
	let bg_color = $state('grey');
	let { tm_text = '' }: { tm_text: string } = $props();
</script>

<main>
	<div id="result" style:backgroundColor={bg_color}>
		{#each tm_to_html(tm_text) as block}
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
	<input type="color" bind:value={bg_color} />
</main>

<style>
	#result {
		background-color: grey;
		padding: 10px;
	}
	#result span {
		font-family: 'Roboto Flex';
		font-size: x-large;
	}
	.wide {
		font-variation-settings:
			'wdth' 151,
			'XTRA' 500;
	}

	.normal {
		font-variation-settings:
			'wdth' 100,
			'XTRA' 468;
	}

	.narrow {
		font-variation-settings:
			'wdth' 25,
			'XTRA' 400;
	}
</style>
