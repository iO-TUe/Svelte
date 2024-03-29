<script lang="ts">
    import Counter from "../components/Counter.svelte";
    import Header from "../components/header.svelte";

    // console.log("Script: App");
</script>

<div class="App">
    <!-- {console.log("Render: App") ?? ""} -->
    <Header />
    <main class="App-main">
        <Counter initialValue={95} />
    </main>
</div>

<style>
    .App {
        text-align: center;
    }

    .App-main {
        background-color: var(--main-background);
        height: calc(100vh - 114px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        padding: 0 2em;
    }
</style>
