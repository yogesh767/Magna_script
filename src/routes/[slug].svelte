<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch, session, context }) {
        console.log("page.params.slug", page.params.slug);
        let _id = page.params.slug;
        console.log("_id", _id);
        let res = await fetch("/api/chapters/getChapterById", {
            method: "POST",
            body: JSON.stringify({ _id: _id }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            let resData = await res.json();
            console.log("resData", resData);
            return {
                props: {
                    chapter: resData.chapter,
                },
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`),
        };
    }
</script>

<script>
    import AddImageModel from "../components/AddImageModel/index.svelte";
    import  EditImageModel  from "../components/EditImageModel/index.svelte";
    import {
        Button,
        Card,
        CardBody,
        CardHeader,
        CardSubtitle,
        CardTitle,
    } from "sveltestrap";
    export let chapter;
   
</script>

<div class="mb-3">
    {#if chapter}
        <AddImageModel _id={chapter._id} />
    {/if}
</div>
<div style="display: flex;flex-wrap: wrap;">
    {#if chapter && chapter.images}
        {#each chapter.images as image}
            <Card class="mb-3  card overflow-hidden" style="width:300px;height: 300px;margin-right: 20px;">
                <CardHeader>
                    <CardTitle
                        >{#if image.title}
                            {image.title}
                        {/if}
                    </CardTitle>
                </CardHeader>
                <div
                    class="card-body"
                    style={` background-image: url(${image.image});background-repeat: no-repeat;background-position: center; background-color: black; background-size: contain;`}
                />
                <EditImageModel _id={chapter._id} image={image.image}/>
            </Card>
        {/each}
    {/if}
</div>
