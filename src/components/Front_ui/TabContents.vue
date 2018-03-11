<template>
    <div class="tabContens">
        <ul id="tab_ul">
            <tab v-for="obj in buttonName" @toggle="toggle" :key="obj.id" :obj="obj" />
        </ul>
        <TabByContent :tabArr="buttonName" />
        <div class="desc">
            <ul>
                <li>폐차는 정부에서 인증한 정식 관허 폐차장에서 폐차를 하셔야 피해가 없습니다.</li>
                <li>저희 골드폐차는 정식 관허 폐차장으로써 차주님들에게 절대로 수수료를 요구하지 않습니다.</li>
            </ul>

        </div>
        <p class="bannerTel"><a href="tel:010-7941-8785"><img src="http://pyechagold.cdn3.cafe24.com/banner_tel.jpg" alt="폐차 전문 박팀장 지금 바로 전화주세요"></a></p>
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
                    name : '차령초과폐차',
                    isActive : false
                },

                {
                    id : 3,
                    name : '상속폐차',
                    isActive : false
                },
                {
                    id : 4,
                    name : `법인폐차`,
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
.bannerTel img{width:100%}
.desc{margin-bottom:40px;}
.active{background: red}
</style>
