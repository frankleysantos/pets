<template lang="">
    <div>
        <b-card bg-variant="light">
            <b-form-group
                label="Street:"
                label-for="nested-street"
                label-cols-sm="1"
                label-align-sm="right"
            >
                <b-form-input id="nested-street"></b-form-input>
            </b-form-group>

            <b-form-group
                label="City:"
                label-for="nested-city"
                label-cols-sm="1"
                label-align-sm="right"
            >
                <b-form-input id="nested-city"></b-form-input>
            </b-form-group>

            <b-form-group
                label="State:"
                label-for="nested-state"
                label-cols-sm="1"
                label-align-sm="right"
            >
                <b-form-input id="nested-state"></b-form-input>
            </b-form-group>

            <b-form-group
                label="Country:"
                label-for="nested-country"
                label-cols-sm="1"
                label-align-sm="right"
            >
                <b-form-input id="nested-country"></b-form-input>
            </b-form-group>

            <b-form-group
                label="Ship via:"
                label-cols-sm="1"
                label-align-sm="right"
                class="mb-0"
                v-slot="{ ariaDescribedby }"
            >
                <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="10"
                    >
                </b-form-textarea>
            </b-form-group>
        </b-card>
    </div>
</template>
<script>
export default {
    props: ['pet_id']
}
</script>
<style lang="">
    
</style>