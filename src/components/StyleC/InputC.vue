<template>
    <div>
        <div class='input-c'>
            <input :name="name" :value="currentValue" :placeholder="placeholder" @input="setData" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        value: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    data() {
        return {
            currentValue: ''
        }
    },
    methods: {
        setData(event){
            const value = event.target.value
            this.$emit('input',value)
        }
    }
}
</script>

<style scoped>

</style>