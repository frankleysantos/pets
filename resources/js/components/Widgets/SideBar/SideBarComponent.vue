<template lang="">
    <div>
        <b-sidebar id="sidebar-1" title="Acesso rápido">
            <div class="px-3 py-2">
                <b-nav vertical class="w-25">
                    <b-nav-item href="home" style="text-color:black">Home</b-nav-item>
                    <b-nav-item href="cliente" text-variant="white">Cliente</b-nav-item>
                </b-nav>
            </div>
        </b-sidebar>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    a {
        color: black
    }
    a:hover {
        color: blue
    }
</style>