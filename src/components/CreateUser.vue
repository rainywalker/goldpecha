<template>
    <div id="warp">
        <h1>골드폐차</h1>
        <div class="v_img">
            <img src="../assets/v_img.jpg" alt="">
        </div>
        <div class="info">
            <h2>폐차 보상금을 알려드립니다.</h2>
        </div>
        <InputArea />
        <h3 class="inNotice"><p>골드 폐차가 약속 드립니다.</p></h3>
        <BoxList />
        <h3 class="inNotice"><p>폐차 종류를 알려드립니다.</p></h3>
        <TabContents />
        <div class="desc">
            <ul>
                <li>&middot; 폐차는 정부에서 인증한 정식 관허 폐차장에서 폐차를 하셔야 피해가 없습니다.</li>
                <li>&middot; 저희와 같은 정식 관허 폐차장은 차주님들에게 수수료를 절대로 요구하지 않습니다.</li>
            </ul>
        </div>


    </div>
</template>

<script>
    import InputArea from './Front_ui/InputArea';
    import BoxList from './Front_ui/BoxList';
    import TabContents from './Front_ui/TabContents';
    export default {
        name: 'CreateUser',
        components : {
            InputArea,
            BoxList,
            TabContents
        }
    }
</script>

<style lang="scss">
    $w : 570px;
    $marg : 0 auto;
    $pd : 0 20px;
#warp{
    margin: 0 auto;
    h1{background:#ffe11d;text-align: center;height:58px;line-height:58px;font-size: 28px;letter-spacing:1px;}
    .v_img{
        max-width:$w;margin:40px auto 30px;text-align: left;padding:$pd;
        img{width:100%}

    }
    .info{
        background:#ffe11d;height:58px;line-height:58px;margin-bottom:40px;
        h2{max-width:$w;margin:$marg;font-size: 24px;font-weight: normal;padding:$pd;}
    }

    .inNotice{
        padding:0 20px;
        p{width:$w;margin:$marg}
        background: #f5f5f5;height: 58px;line-height: 58px;margin-bottom:20px;font-weight: normal;font-size:28px;
    }
    .desc{
        padding:0 20px;
        ul{
            max-width:$w;margin:$marg;padding-top:40px;
        }
    }
}
</style>
