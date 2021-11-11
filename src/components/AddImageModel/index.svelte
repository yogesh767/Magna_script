<script lang="ts">
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Input,
    Label,
    FormGroup,
    FormText,
    NavLink 
  } from "sveltestrap";
  let open = false;
  let thumbnail;
  const toggle = () => (open = !open);
  let title;
  export let _id;
  console.log(_id)
  const saveImage = async (e) => {
    e.preventDefault();
    toggle();
    console.log("title", title);
    let res = await fetch("api/chapters/addImages", {
      method: "POST",
      body: JSON.stringify({ title, thumbnail,_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("added chapter successfully");
    }
  };

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      thumbnail = e.target.result;
    };
  };
</script>

<div style="margin-top: 1rem;">
  <Button color="primary" on:click={toggle}>Add Image</Button>
  <Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Add Chapter Images</ModalHeader>
    <ModalBody>
      <FormGroup>
        <Label for="exampleEmail">Chapter Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter chapter title"
          bind:value={title}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input
          type="file"
          name="thumbnail"
          id="thumbnail"
          bind:this={thumbnail}
          accept=".jpg, .jpeg, .png"
          on:change={(e) => onFileSelected(e)}
        />
        <FormText color="muted">Upload Images</FormText>
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={saveImage}>Save</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
