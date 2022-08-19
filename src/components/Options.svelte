<script lang="ts">
  import { smileIndex, smiles, alert } from "../data/store";
  import { copy } from "svelte-copy";
  import type { IStorage } from "../types";
  import "../index.css";
  import Sidebar from "./Sidebar.svelte";
import Alert from "./Alert.svelte";

  export let count: number;
  let successMessage: string = null;

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  function save() {
    const storage: IStorage = {
      count,
    };

    chrome.storage.sync.set(storage, () => {
      successMessage = "Options saved!";

      setTimeout(() => {
        successMessage = null;
      }, 1500);
    });
  }
</script>

<!-- <div class="container">
    <p class="text-red-500">Current Makan: <b>{count}</b></p>
    <div>
        <button on:click={decrement}>-</button>
        <button on:click={increment}>+</button>
        <button on:click={save}>Save</button>
        {#if successMessage}<span class="success">{successMessage}</span>{/if}
    </div>
</div> -->

<div class="min-w-[600px] min-h-[600px] overflow-auto">
  <Alert />
  <Sidebar />
  <div class="flex bg-zinc-50">
    <div class="ml-20 p-5 w-full">
      {#each smiles as smile, i}
        {#if $smileIndex === i}
          <h2 class="text-xl font-semibold mb-5">{smile.label}</h2>
          <div class="grid grid-cols-4 gap-5 my-2">
            {#each smile.data as data}
              <button
                on:svelte-copy={(event) => $alert = event.detail}
                use:copy={data}
                
                class="p-2 w-full whitespace-normal bg-white rounded-none text-xs shadow"
              >
                {data}
              </button>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
