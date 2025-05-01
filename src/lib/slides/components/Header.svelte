<script lang="ts">
    let { title } = $props();
</script>

<div class="w:100% h:120px flex px:60px">
    <div class="w:100% h:100% pt:5px bb:5px|sky|solid flex justify-content:start align-items:center overflow:hidden">
        <h1 class="text:3em font:bold">
            {title}
        </h1>
    </div>
</div>
