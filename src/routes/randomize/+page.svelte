<script lang="ts">
	import Randomize from '$lib/components/randomize.svelte';
</script>

<menu>
	<li><a href="./">Editor</a></li>
	<li><a href="./gradient">Gradient</a></li>
	<li class="selected"><a href="#">Randomize</a></li>
	<li><a href="./guide">Guide</a></li>
</menu>

<section>
	<Randomize />
</section>
