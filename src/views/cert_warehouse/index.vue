<template>
    <div>
        <form-c class='form' :formdata="roles_data" @next="setNext"></form-c>
    </div>
</template>

<script>
import js_modules from './index.js';
export default js_modules
</script>

<style>
@import './index.css';
</style>