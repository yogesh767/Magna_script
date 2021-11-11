
<svelte:head>
  
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.2/jquery.ui.touch-punch.min.js"></script>
    <link rel="stylesheet" href="assets/image-merge-edit-draw-maker/js/imageMaker.min.js">
    <script> 
      window._$ = $;
      </script>
</svelte:head>
<script>
  import AddChapterModel from "../components/AddChpterModel/index.svelte";
  import {Button,Nav,NavItem} from 'sveltestrap'
  import "../app.scss";
</script>
<div class="main">
  <Nav>
    <NavItem>
      <Button color="primary" href="/" style="margin-right: 1rem;">Home</Button>
    </NavItem>
    <NavItem>
      <AddChapterModel />
    </NavItem>
  </Nav>
  
  <slot />
</div>
