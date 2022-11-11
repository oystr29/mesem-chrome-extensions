<script lang="ts">
  import { onDestroy } from "svelte";
  import { alerts, copied } from "../data/store";
  import { fly } from "svelte/transition";

  export let ms = 2000;
  let visible;
  let timeout;

  const onMessageChange = (message, ms) => {
    clearTimeout(timeout);
    if (!message) {
      // hide Alert if message is empty
      visible = false;
    } else {
      visible = true; // show alert
      if (ms > 0) timeout = setTimeout(() => (visible = false), ms); // and hide it after ms milliseconds
    }
  };
  $: onMessageChange($alerts, ms); // whenever the alert store or the ms props changes run onMessageChange

  onDestroy(() => clearTimeout(timeout)); // make sure we clean-up the timeout
</script>

{#if visible}
  <div
    class="p-2 bg-sky-800 rounded-full items-center fixed top-10 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-50 leading-none flex lg:inline-flex "
    role="alert"
    on:click={() => (visible = false)}
    transition:fly={{ delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5 }}
  >
  <span class="flex rounded-full bg-sky-500 uppercase px-2 py-1 text-xs font-bold mr-3">{$alerts}</span>
  <span class="font-semibold mr-2 text-left flex-auto">{copied}</span>
  </div>
{/if}
