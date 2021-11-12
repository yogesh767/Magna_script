<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Figure,
    Image,
  } from "sveltestrap";
  import { onMount, tick } from "svelte";
  let fullscreen;
  export let _id;
  export let title
  export let image;
  let open = false;
  const toggle = async() => {
    fullscreen = true;
    open = !open;
    await tick()
    initImageMaker();
  };
  const saveImage = async (e) => {
    e.preventDefault();
    toggle();
    console.log("title", title);

    // let res = await fetch("api/chapters/addChapter", {
    //   method: "POST",
    //   body: JSON.stringify({ title }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // title="";
    // if (res.ok) {
    //  alert("added chapter successfully");

    // }
  };
  const initImageMaker =()=>{
    const abc = _$(".image").html();
   
     _$(".image").imageMaker({
      templates: [{ url: image, title: title }],
      downloadGeneratedImage:false,
      merge_image_thumbnail_width:500,
      merge_image_thumbnail_height:500
      })
  }
  onMount(async function () {
    initImageMaker()
  });
</script>

<div style="margin:1rem 0 1rem 0.5rem">
  <Button color="primary" on:click={toggle}>Edit Image</Button>
  <Modal isOpen={open} {toggle} class="modal-content">
    <ModalHeader {toggle}>Edit Image</ModalHeader>
    <ModalBody>
      <div class="image"></div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={saveImage}>Save</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
<style>
 
</style>
