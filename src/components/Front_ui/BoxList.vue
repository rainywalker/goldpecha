<template>
    <div class="boxList">
        <p class="img_promise"><img src="http://pyechagold.cdn3.cafe24.com/img_promise.jpg" alt="정부 인증 1등급 폐차장 환경협회 조기폐차 전문 업체"></p>
        <ul>
            <li class="ico1">
                <dl>
                    <dt><em>01</em>최고가 폐차비 지급</dt>
                    <dd>정기적인 시장 조사를 통해 고객님께 업계 <strong>최고가 보상을</strong> 약속하겠습니다.</dd>
                </dl>

            </li>
            <li class="ico2">
                <dl>
                    <dt><em>02</em>당일지급&현장지급</dt>
                    <dd>미납 과태료나 압류가 없다면 <strong>현장에서 입금도 가능</strong>합니다.</dd>
                </dl>

            </li>
            <li class="ico3">
                <dl>
                    <dt><em>03</em>쉽고 빠른 업무처리</dt>
                    <dd>날짜만 정해서 전화주시면 번거로운 말소처리도 저희가 <strong>알아서 처리</strong>해드립니다.</dd>
                </dl>

            </li>
            <li class="ico4">
                <dl>
                    <dt><em>04</em>무료 견인</dt>
                    <dd>차주님이 원하시는 날짜에 <strong>무료 견인</strong>으로 방문드립니다.</dd>
                </dl>

            </li>
            <li class="ico5">
                <dl>
                    <dt><em>05</em>말소증 전송</dt>
                    <dd><strong>보험 해지에 필요한 말소증</strong>을 팩스나 이메일로 보내드립니다.</dd>
                </dl>
            </li>
            <li class="banner">
                <a href="tel:010-7941-8785"><span class="blind">전화 한통으로 견인에서 말소까지...</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BoxList"
    }
</script>

<style scoped lang="scss">
    $w : 570px;
    $marg : 0 auto;
    $pd : 0 20px;
.boxList{
    max-width:$w;margin: $marg;padding:0 20px 30px;
    .img_promise{
        margin-bottom:20px;
        img{width:100%}
    }
    ul{
        display: flex;justify-content: space-between;flex-wrap:wrap;

        li{
            &.noneBorder{border:none}
            width:180px;height:136px;margin-bottom:10px;border:1px solid #f5f5f5;position: relative;
            &:after{position:absolute;background:url('http://pyechagold.cdn3.cafe24.com/sp_ico.png') no-repeat;
                right:7px;bottom:7px;content: ''}
            a{display: inline-block;width:100%;height:116px}
            dl{
                padding:10px;
                border-top:4px solid #ffe11d;
                dt{
                    color:#000;font-size:15px;margin-bottom:10px;font-weight: bold;letter-spacing: -1px;
                    em{display:inline-block;margin-right:5px;font-weight:bold;font-size:17px;color:#d26402;font-style: normal}
                }
                dd{
                    font-size:14px;color:#9d9d9d;word-break: break-all;line-height: 18px;
                    strong{color:#373737;font-weight: normal}
                }
            }
            &.ico1 {&:after{width:38px;height:28px;}}
            &.ico2 {&:after{width:30px;height:28px;background-position:-40px 0 ;}}
            &.ico3 {&:after{width:29px;height:28px;background-position:-72px 0;}}
            &.ico4 {&:after{width:30px;height:28px;background-position:-135px 0;}}
            &.ico5 {&:after{width:31px;height:28px;background-position:-103px 0;}}
            &.banner{
                background:#abdaeb;
                a{
                    display: inline-block;width:100%;height:116px;position: relative;
                    &:before{display: block;width:180px;height:116px;position: absolute;margin-left:-90px;
                        left:50%;top:10px;content: '';background: url('http://pyechagold.cdn3.cafe24.com/ban.jpg') no-repeat}
                }
            }
        }
        @media (max-width: 410px) {
            li{width:100%}
        }
    }
}
</style>
