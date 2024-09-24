<script>
	import '$lib/style.css';
	import { version } from '$app/environment';
</script>

<header class="my-4">
	<h3>Trackmania Formatting Tool</h3>
	<div style="text-align:right;">
		<h6>v{version}</h6>
	</div>
</header>
<slot />
