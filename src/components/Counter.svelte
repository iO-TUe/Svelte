<script lang="ts">
    import Button from "./Button.svelte";
    import Gauge from "./gauge.svelte";

    export let initialValue: number;

    let count = initialValue;

    function subtract() {
        if (count > 0) count--;
    }

    function add() {
        if (count === 99) celebrate();
        if (count < 100) count++;
    }

    // console.log("Script: Counter");

    async function celebrate() {
        const defaults = {
            spread: 360,
            ticks: 70,
            gravity: 0,
            decay: 0.95,
            startVelocity: 30,
            colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
            origin: {
                x: 0.5,
                y: 0.35,
            },
        };

        function loadConfetti() {
            return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                    return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                    resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
            });
        }

        const confetti = await loadConfetti();

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
            });

            confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
        setTimeout(shoot, 400);
    }
</script>

<!-- {console.log("Render: Counter") ?? ""} -->
<div class="wrapper">
    <Button disabled={count === 0} fn={subtract} sign="-" />
    <Gauge value={count} recurse={false} />
    <Button disabled={count === 100} fn={add} sign="+" />
</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
</style>
