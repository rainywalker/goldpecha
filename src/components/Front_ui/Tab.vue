<template>
    <li :class="{'active': obj.isActive}" @click.stop.prevent="tabToggle">
        <a href="#1"  ><span>{{obj.name}}</span></a>
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


    .active{background: #ffe11d;font-weight: bold}
    .hover{background: #ffe11d;font-weight: bold}
    li{
        width:33.3333%;height:40px;
        a{
            display: flex;align-items: center;height:40px;text-decoration: none;
            span{display:inline-block;width:100%;border:0;cursor: pointer;font-size:14px;color:#000;
                letter-spacing: -1px;background: none;line-height: 14px;text-decoration: none;text-align: center}

        }
        a:hover{background:#ffe11d;font-weight: bold}
    }
    li:nth-child(4),li:nth-child(5),li:nth-child(6){border-top:3px solid #ffe11d}

</style>
