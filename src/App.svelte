<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	// polls

	const handleAdd = () => {
		activeItem = items[0]; // back to list polls
	};
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={(e) => (activeItem = e.detail)} />
	{#if activeItem === items[0]}
		<PollList />
	{:else if activeItem === items[1]}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
