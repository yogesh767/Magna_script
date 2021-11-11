<script>
  
  import ChapterCard from "../components/ChapterCard/index.svelte";
  import { onMount, tick } from "svelte";
  let chapters = [];
  const getAllChapters = async () => {
    let res = await fetch("api/chapters/getAllChapters", {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      let resData = await res.json();
      chapters = resData.chapters;
    }
  };
  onMount(async function () {
    getAllChapters();
  });
</script>

<svelte:head>
  <title>Magna Script</title>
</svelte:head>

<div style="display: flex;flex-wrap: wrap;">
  {#each chapters as chapter}
        <ChapterCard chapter={chapter}/>
  {/each}
 
</div>

  



