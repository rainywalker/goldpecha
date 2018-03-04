<template>
    <div class="tabContens">
        <ul id="tab_ul">
            <tab v-for="obj in buttonName" @toggle="toggle" :key="obj.id" :obj="obj" />
        </ul>
        <TabByContent :tabArr="buttonName" />
    </div>
</template>

<script>
import Tab from './Tab';
import TabByContent from './TabByContent';

export default {
    name: "TabContents",
    components : {
        Tab,
        TabByContent
    },
    data() {
        return {
            buttonName : [
                {
                    id : 0,
                    name : '일반폐차',
                    isActive : true
                },
                {
                    id : 1,
                    name : '조기폐차',
                    isActive : false
                },
                {
                    id : 2,
                    name : '차령초과(압류)폐차',
                    isActive : false
                },

                {
                    id : 3,
                    name : '상속폐차',
                    isActive : false
                },
                {
                    id : 4,
                    name : `법인폐차 (폐업/해산/청산/파업)`,
                    isActive : false
                },
                {
                    id : 5,
                    name : '문제차',
                    isActive : false
                }

            ]
        }
    },
    methods : {
        toggle(id) {
            this.buttonName.forEach(val => {
                (val.id === id) ? val.isActive = true : val.isActive = false;
            })
        }
    }
}
</script>

<style scoped lang="scss">
$w : 570px;
$marg : 0 auto;
$pd : 0 20px;
.tabContens{max-width:$w;margin:$marg;padding:0 20px}
#tab_ul{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    border:1px solid #f4f4f4;
}
.active{background: red}
</style>
