<script lang="ts">
	import { tm_to_html } from '$lib/format';
	import type { TextDetails } from '$lib/format';

	let { tm_text = '' }: { tm_text: string } = $props();
</script>

<main>
	<div id="result">
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
			'slnt' 0,
			'wdth' 151,
			'GRAD' 0,
			'XOPQ' 96,
			'XTRA' 468,
			'YOPQ' 79,
			'YTAS' 750,
			'YTDE' -203,
			'YTFI' 738,
			'YTLC' 514,
			'YTUC' 712;
	}

	.normal {
		font-variation-settings:
			'slnt' 0,
			'wdth' 100,
			'GRAD' 0,
			'XOPQ' 96,
			'XTRA' 468,
			'YOPQ' 79,
			'YTAS' 750,
			'YTDE' -203,
			'YTFI' 738,
			'YTLC' 514,
			'YTUC' 712;
	}

	.narrow {
		font-variation-settings:
			'slnt' 0,
			'wdth' 25,
			'GRAD' 0,
			'XOPQ' 96,
			'XTRA' 468,
			'YOPQ' 79,
			'YTAS' 750,
			'YTDE' -203,
			'YTFI' 738,
			'YTLC' 514,
			'YTUC' 712;
	}
</style>
