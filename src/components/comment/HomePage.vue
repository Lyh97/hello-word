<template>
    <div>
        Hello everyOne. This is homepage.
        <Menu></Menu>
        <router-view></router-view>
    </div>
</template>
<script>

import Menu from './Menu';
export default {
    data() {
        return {

        }
    },
    components: { Menu },
    methods: {

    },
    watch: {

    },
    created: {

    },
    mounted: {

    }
}
</script>