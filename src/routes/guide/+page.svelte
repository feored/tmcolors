<script lang="ts">
	import { formatting_data, formatting_unsupported } from '$lib/format_help';
	import Viewer from '$lib/components/viewer.svelte';
</script>

{#snippet format_guide(
	format_list: { name: string; code: string; description: string; example?: string }[]
)}
	{#each format_list as format_info}
		<!-- <span class="accent">{format_info.name}</span><code>[{format_info.code}]</code> -->
		<details open>
			<summary>{format_info.name} <code class="large">[{format_info.code}]</code></summary>
			<p>{@html format_info.description}</p>
			{#if format_info.example}
				<p><code class="large">{@html format_info.example}</code></p>
				<Viewer tm_text={format_info.example} />
			{/if}
		</details>
	{/each}
{/snippet}

<menu>
	<li><a href="./">Editor</a></li>
	<li><a href="./gradient">Gradient</a></li>
	<li class="selected"><a href="#">Guide</a></li>
</menu>
<header>
	<h2>Formatting Guide</h2>
	<p class="muted">Tested in TM², details may vary in other versions of Trackmania.</p>
</header>
<section>
	<p>To format your text, you can use the following modifiers:</p>
	{@render format_guide(formatting_data)}
	<p>
		The game also recognizes the following modifiers for links, but they are not supported by this
		tool for the sake of simplicity.
	</p>
	{@render format_guide(formatting_unsupported)}
</section>
