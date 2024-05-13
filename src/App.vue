<template>
<div class="app">
    <side-bar />
    <router-view />
</div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
    components: {
        SideBar
    },
}
</script>

<style>
.app {
    display: flex;
    background: var(--primary);
    height: 100%;
    width: 100%;
    color: var(--blue);
    transition: .2s;
}
</style>
