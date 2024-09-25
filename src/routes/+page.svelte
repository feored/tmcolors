<script lang="ts">
	import Editor from '$lib/components/editor.svelte';
	import Gradient from '$lib/components/gradient.svelte';
</script>

<menu>
	<li class="selected"><a href="#">Editor</a></li>
	<li><a href="./gradient">Gradient</a></li>
	<li><a href="./randomize">Randomize</a></li>
	<li><a href="./guide">Guide</a></li>
</menu>

<section>
	<Editor />
</section>
