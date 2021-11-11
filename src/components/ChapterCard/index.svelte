<script>
  import {Card,CardHeader,CardTitle} from "sveltestrap";
  export let chapter;
  console.log("chapter",chapter)
  let image=chapter.images &&  chapter.images[0].image 

console.log("image",image)
</script>

<a href={"/" + chapter._id}>
  <Card
    class="mb-3 mt-3 card overflow-hidden"
    style="width:300px;height: 300px;margin-right: 20px;"
  >
    <CardHeader>
      <CardTitle
        >{#if chapter.title}
          {chapter.title}
        {/if}
      </CardTitle>
    </CardHeader>

    <div class="card-body" style={` background-image: url(${image});background-repeat: no-repeat;background-position: center; background-color: black; background-size: contain;`}>
    </div>

    <!-- <CardFooter>Footer</CardFooter> -->
  </Card>
</a>

<style>
  a {
    text-decoration: none;
  }
</style>
