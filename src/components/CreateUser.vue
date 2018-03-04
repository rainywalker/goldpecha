<template>
    <div id="warp">
        <header>
            <h1>골드폐차</h1>
            <div class="v_img">
                <a href="tel:010-7941-8785"><img src="http://pyechagold.cdn3.cafe24.com/v_img.jpg" alt=""></a>
            </div>
        </header>

        <h3 class="inNotice"><p>골드폐차가 약속 드립니다.</p></h3>
        <BoxList />
        <h3 class="inNotice"><p>폐차 종류를 알려드립니다.</p></h3>
        <TabContents />
        <div class="desc">
            <ul>
                <li>폐차는 정부에서 인증한 정식 관허 폐차장에서 폐차를 하셔야 피해가 없습니다.</li>
                <li>저희와 같은 정식 관허 폐차장은 차주님들에게 수수료를 절대로 요구하지 않습니다.</li>
            </ul>
        </div>

        <div class="info">
            <h2>폐차 보상금을 알려드립니다.</h2>
        </div>
        <InputArea />
        <footer>
            <div class="copy">
                <p>Copyright Goldpecha All reserverd 2018</p>
                <address>양주폐차산업 / 사업자 등록번호 127-86-50736 / 관허 03-1 / 양주시 광적면 화합로 74번길 18</address>
            </div>
        </footer>

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
        a{display: inline-block;width:100%;}
        img{width:100%}

    }
    .info{
        background:#ffe11d;height:58px;line-height:58px;margin-bottom:20px;margin-top:40px;
        h2{max-width:$w;margin:$marg;font-size: 24px;font-weight: normal;padding:$pd;}
    }

    .inNotice{
        padding:0 20px;
        p{width:$w;margin:$marg}
        background: #f5f5f5;height: 58px;line-height: 58px;margin-bottom:20px;font-weight: normal;font-size:24px;
    }
    .desc{
        padding:0 20px;
        ul{
            max-width:$w;margin:$marg;padding-top:10px;
            li {
                padding-left:10px;position: relative;letter-spacing: -1px;
                &::before{display: block;position: absolute;background:#000;left:0;top:5px;width:4px;height:4px;
                    border-radius: 4px;
                    content: '';}
            }
        }
    }
    footer{
        background: #f4f4f4;
        .copy{
            max-width:$w;margin:50px auto 0;padding:20px;
            p{margin-bottom:5px;}
            p,address{font-size:13px;color:#000}

        }
    }

}
</style>
