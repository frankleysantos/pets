<template lang="">
    <div>
        <b-sidebar id="sidebar-1" title="Acesso rápido">
            <div class="px-3 py-2">
                <b-nav vertical class="w-100">

                    <b-dropdown-item-button @click="direcionarRota('home')">
                        <!-- <b-icon icon="house-fill" aria-hidden="true"></b-icon> -->
                        <b-card-img src="assets/img/petshop.png" style="width: 9%"></b-card-img>
                        Home
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item-button @click="direcionarRota('cliente')">
                        <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon>
                        Cliente / Atendimento
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item-button @click="direcionarRota('especie')">
                        <!-- <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon> -->
                        <b-card-img src="assets/img/pets.png" style="width: 9%"></b-card-img> 
                        Especie
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item-button @click="direcionarRota('raca')">
                        <!-- <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon> -->
                        <b-card-img src="assets/img/raca.png" style="width: 10%"></b-card-img> 
                        Raca
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                </b-nav>
            </div>
        </b-sidebar>
    </div>
</template>
<script>
export default {
    methods: {
        direcionarRota(url) {
            window.location = url;
        }
    },
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