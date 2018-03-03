<template>
    <div class="boxList">
        <ul>
            <li>
                <dl>
                    <dt><em>01</em>최고가 폐차비 지급</dt>
                    <dd>정기적인 시장 조사를 통해 고객께 <strong>최고가를 보상</strong> 하겠습니다.</dd>
                </dl>

            </li>
            <li>
                <dl>
                    <dt><em>02</em>당일지급&현장지급</dt>
                    <dd>과태료나 압류가 없다면<strong>현장에서도 입금가능</strong> 합니다.</dd>
                </dl>

            </li>
            <li>
                <dl>
                    <dt><em>03</em>쉽고 빠른 업무 처리</dt>
                    <dd>날짜만 정해서 전화주시면 말소까지<strong>알아서 처리</strong> 해드립니다.</dd>
                </dl>

            </li>
            <li>
                <dl>
                    <dt><em>04</em>무료 견인 서비스</dt>
                    <dd>원하시는 날짜에<strong>무료견인</strong>으로 방문드립니다.</dd>
                </dl>

            </li>
            <li>
                <dl>
                    <dt><em>05</em>쉽고 빠른 업무 처리</dt>
                    <dd><strong>보험 해지용 말소증</strong>을 팩스, 이메일로 보내드립니다.</dd>
                </dl>
            </li>
            <li class="noneBorder">
                <a href="tel:010-7941-8785"><img src="../../assets/banner.jpg" alt=""></a>
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
    ul{
        display: flex;justify-content: space-between;flex-wrap:wrap;

        li{
            &.noneBorder{border:none}
            width:180px;height:116px;margin-bottom:10px;border:1px solid #f5f5f5;
            a{display: inline-block;height:116px}
            dl{
                padding:10px;
                border-top:4px solid #ffe11d;
                dt{
                    color:#000;font-size:16px;margin-bottom:10px;font-weight: bold;
                    em{display:inline-block;margin-right:5px;font-weight:bold;font-size:17px;color:#d26402;font-style: normal}
                }
                dd{
                    font-size:14px;color:#9d9d9d;word-break: break-all;
                    strong{color:#373737;font-weight: normal}
                }
            }
            &.noneBorder{
                img{width:100%;height:100%}
            }
        }
        @media (max-width: 415px) {
            li{width:100%}
        }
    }
}
</style>
