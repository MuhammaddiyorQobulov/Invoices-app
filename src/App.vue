<template>
<div class="app">
    <router-view />
</div>
</template>

<script>
export default {
    components: {},
}
</script>

<style>
.app {
    display: flex;
    background: var(--primary);
    height: 100%;
    width: 100%;
    color: var(--blue);
    transition: .3s;
}
</style>
