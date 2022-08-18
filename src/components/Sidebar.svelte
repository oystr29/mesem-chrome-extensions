<script lang="ts">
  import { smileIndex, smiles } from "../data/store";
</script>

<aside class="w-20 top-0 h-screen pb-10 px-2 z-10 bg-whites shadow-lg fixed">
  <div class="flex-col flex items-center relative">
    {#each smiles as smile, i}
      <button
        class={`sidebar-button group ${
          $smileIndex === i ? `${smile.color} active` : "inactive"
        }`}
        on:click={() => ($smileIndex = i)}
      >
        {smile.title}
        <span class="tooltip group-hover:scale-100">{smile.label}</span>
      </button>
    {/each}
  </div>
</aside>
