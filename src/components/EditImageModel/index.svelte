<script lang="ts">
  import * as js from 'jquery';
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Figure,
    Image
  } from "sveltestrap";
  import { onMount, tick } from "svelte";
 
  export let _id;
  export let  image;
  let open = false;
  const toggle = () => (open = !open);
  let title;

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
  onMount(async function () {
    const abc=_$("#image").text()
    console.log("abc",abc)
  //   _$("#image").imageMaker({
  //     merge_images:[
  //   {url:image, title:title},
  // ],


  //   });
  });
</script>

<div style="margin:1rem 0 1rem 0.5rem">
  <Button  color="primary" on:click={toggle}>Edit Image</Button >
  <Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Edit Image</ModalHeader>
    <ModalBody>
      <Figure caption="Add text box ">
        <div id="image">
          hello
        </div>
        <Image fluid alt="Landscape" src={image} />
      </Figure>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={saveImage}>Save</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
