<script lang="ts">
  import { smileIndex, smiles, alerts, recents } from "../data/store";
  import { copy } from "svelte-copy";
  import "../index.css";
  import Sidebar from "./Sidebar.svelte";
  import Alert from "./Alert.svelte";

  const onCopy = (e: CustomEvent<string>): void => {
    let temp = $recents;
    const element = e.detail;
    if (temp.indexOf(element) === 0) {
      return;
    }
    if (temp.includes(element)) {
      temp.splice(temp.indexOf(element), 1);
      temp.unshift(element);
    } else if (temp.length === 32) {
      temp.pop();
      temp.unshift(element);
    } else {
      temp.unshift(element);
    }
    $recents = temp;
  };
</script>

<div class="min-w-[600px] min-h-[600px]">
  <Alert />
  <Sidebar />
  <div class="flex bg-zinc-50">
    <div class="ml-20 p-5 w-full">
      {#if $smileIndex === 90}
        <h2 class="text-xl font-semibold mb-5">Recent</h2>
        <div class="grid grid-cols-4 gap-5 my-2">
          {#each $recents as data}
            <button
              on:svelte-copy={(event) => ($alerts = event.detail)}
              on:svelte-copy={onCopy}
              use:copy={data}
              class="btn-grid"
            >
              {data}
            </button>
          {/each}
        </div>
      {:else}
        {#each smiles as smile, i}
          {#if $smileIndex === i}
            <h2 class="text-xl font-semibold mb-5">{smile.label}</h2>
            <div class="grid grid-cols-4 gap-5 my-2">
              {#each smile.data as data}
                <button
                  on:svelte-copy={(event) => ($alerts = event.detail)}
                  on:svelte-copy={onCopy}
                  use:copy={data}
                  class="btn-grid"
                >
                  {data}
                </button>
              {/each}
            </div>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>
