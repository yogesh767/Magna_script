<script lang="ts">
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Input,
    Label,
    Form,
    NavLink,
    FormGroup,
    FormText,
  } from "sveltestrap";
  let open = false;
  const toggle = () => (open = !open);
  let title;
  const saveChapter = async (e) => {
    e.preventDefault();
    toggle();
    console.log("title", title);
    
    let res = await fetch("api/chapters/addChapter", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    title="";
    if (res.ok) {
     alert("added chapter successfully");
      
    }
  };

</script>

<div>
  <Button  color="primary" on:click={toggle}>Add Chapter</Button >
  <Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Modal title</ModalHeader>
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
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={saveChapter}>Save</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
