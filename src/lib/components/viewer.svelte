<script lang="ts">
	import { tm_to_html } from '$lib/format';
	let bg_color = $state('#000000');
	let { tm_text = '' }: { tm_text: string } = $props();
</script>

<section>
	<div class="flex row align-center" style="gap:1rem;">
		<div id="result" style:background-color={bg_color} class="grow">
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
		<div class="shrink">
			<input title="Background Color" id="bgcolor" type="color" bind:value={bg_color} />
		</div>
	</div>
</section>

<style>
	#result {
		padding: 1rem;
		border-radius: 6px;
		white-space: pre-line;
		overflow-x: auto;
	}
	#result span {
		font-family: 'Roboto Flex';
		font-size: x-large;
		white-space: pre;
	}
</style>
