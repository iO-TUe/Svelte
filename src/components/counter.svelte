<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import Button from "./button.svelte";
    import Gauge from "./gauge.svelte";

    export let initialValue: number;
    export let maxValue: number;
    export let recurse: boolean;

    let count = initialValue;

    function subtract() {
        if (count > 0) count--;
    }

    function add() {
        if (count < 100) count++;
    }

    onMount(() => {
        if (browser) {
            const delay = Date.now() + 50;
            while (Date.now() < delay) {
                console.log();
            }
        }
    });

    // console.log("Script: Counter");
</script>

<!-- {console.log("Render: Counter") ?? ""} -->
<div class="wrapper">
    <Button disabled={count === 0} fn={subtract} sign="-" />
    <div class="counters">
        {#each { length: recurse ? 1 : maxValue } as _, idx (idx)}
            <Gauge value={count} max={maxValue} recurse={false} />
        {/each}
    </div>
    <Button disabled={count === 100} fn={add} sign="+" />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .counters:has(.recurse) {
        display: flex;
        align-items: center;
    }
</style>
