<template>
    <li>
        <button type="button" :class="{'active': obj.isActive}" @click.stop.prevent="tabToggle">{{obj.name}}</button>
    </li>
</template>

<script>
export default {
    name : 'Tab',
    props : ['obj'],
    methods : {
        tabToggle() {
            this.$emit('toggle',this.obj.id)
        }
    }
}
</script>

<style scoped lang="scss">

    button{display:inline-block;width:100%;height:40px;border:0;cursor: pointer;font-size:14px;color:#000;
        letter-spacing: -1px;background: none;line-height: 14px}
    .active{background: #ffe11d;font-weight: bold}
    li{width:33.3333%;height:40px;}
    li:nth-child(4),li:nth-child(5),li:nth-child(6){border-top:3px solid #ffe11d}

</style>
