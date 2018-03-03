<template>
    <div id="warp">
        <h1>골드폐차</h1>
        <div class="v_img">
            <img src="../assets/v_img.jpg" alt="">
        </div>
        <div class="info">
            <h2>폐차 보상금을 알려드립니다.</h2>
        </div>
        <div class="iptArea">
            <p class="topNotice">차주와 폐차 전문 팀장 1대1 상담으로 <strong>수수료 무료 / 365일 무료 상담 / 무료 견인</strong></p>
            <fieldset>
                <dl>
                    <dt>이름</dt>
                    <dd><input type="text" ref="username" v-model.trim="users.username"></dd>
                    <dt>지역</dt>
                    <dd><input type="text" ref="area" v-model.trim="users.area"></dd>
                    <dt>연락처</dt>
                    <dd><input type="text" ref="phone" v-model.trim="users.phone"></dd>
                    <dt>차종</dt>
                    <dd><input type="text" ref="car" v-model.trim="users.car"></dd>
                    <dt>연식</dt>
                    <dd><input type="text" ref="since" v-model.trim="users.since"></dd>
                    <dt>차량번호</dt>
                    <dd><input type="text" ref="car_num" v-model.trim="users.car_num"></dd>
                </dl>
                <button id="submitBtn" type="button" @click.prevent="onSubmit">정보 보내기</button>
                <p class="desc">내용 확인 후 전문 폐차지도사가 직접 고객님께 연락 드리겠습니다.</p>
            </fieldset>
        </div>
        <h3 class="inNotice"><p>골드 폐차가 약속 드립니다.</p></h3>
        <div class="boxList">
            <ul>
                <li>
                    <dl>
                        <dt><em>01</em>최고가 폐차비 지급</dt>
                        <dd>정기적인 시장 조사를 통해 고객께 <strong>최고가를 보상</strong>하겠습니다.</dd>
                    </dl>

                </li>
                <li>
                    <dl>
                        <dt><em>02</em>당일지급&현장지급</dt>
                        <dd>과태료나 압류가 없다면<strong>현장에서도 입금가능</strong>합니다.</dd>
                    </dl>

                </li>
                <li>
                    <dl>
                        <dt><em>03</em>쉽고 빠른 업무 처리</dt>
                        <dd>날짜만 정해서 전화주시면 말소까지<strong>알아서 처리</strong>해드립니다.</dd>
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
                        <dd><strong>보험 해지용 말소증</strong>울 팩스, 이메일로 보내드립니다.</dd>
                    </dl>

                </li>
                <li class="noneBorder">
                    <a href=""><img src="../assets/banner.jpg" alt=""></a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CreateBook',
        data () {
            return {
                users : {}
            }
        },
        methods: {
            validate() {

                if (this.$refs.username.value === '') {
                    alert('이름을 입력해주세요');
                    this.$refs.username.focus();
                    return false
                }
                if (this.$refs.area.value === '') {
                    alert('지역을 입력해주세요');
                    this.$refs.area.focus();
                    return false
                }
                if (this.$refs.phone.value === '') {
                    alert('연락처를 입력해주세요');
                    this.$refs.phone.focus();
                    return false
                }
                if (this.$refs.car.value === '') {
                    alert('차종 입력해주세요');
                    this.$refs.car.focus();
                    return false
                }
                if (this.$refs.since.value === '') {
                    alert('연식을 입력해주세요');
                    this.$refs.since.focus();
                    return false
                }
                if (this.$refs.car_num.value === '') {
                    alert('차량번호를 입력해주세요');
                    this.$refs.car_num.focus();
                    return false
                }
                return true;

            },
            onSubmit () {
                if (!this.validate()) {
                    return false;
                }
                this.$http.post(`/api/user`, this.users)
                    .then(response => {
                        alert('전송되었습니다.');

                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
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
        @media screen and (max-width:570px) {
            img {width: 100%;}
        }
    }
    .info{
        background:#ffe11d;height:58px;line-height:58px;margin-bottom:40px;
        h2{max-width:$w;margin:$marg;font-size: 24px;font-weight: normal;padding:$pd;}
    }
    .iptArea{
        max-width:$w;margin:$marg;padding:$pd;
        .topNotice{
            font-size:16px;margin-bottom:7px;
            strong{font-size:20px}
        }
        fieldset{
            border:6px solid #f5f5f5;box-sizing: border-box;padding:20px 30px;margin-bottom:30px;
            dl{
                overflow:hidden;
                dt{display: block;float:left;clear:left;font-size: 19px;color:#666;height:30px;line-height: 30px;
                }
                dd{
                    padding-left:100px;margin-bottom:20px;
                    input{
                        background:#f5f5f5 ;height:30px;border:0;width:100%;padding:10px;box-sizing: border-box;
                        color:#666;font-size: 16px;
                    }
                }
            }
            #submitBtn{
                display:inline-block;background:#ffe11d;width:100%;border:0;height:40px;font-size:20px;
                font-weight: bold;line-height: 40px
            }
            .desc{font-size:14px;color:#9d9d9d;margin-top:10px}
        }

    }
    .inNotice{
        padding:0 20px;
        p{width:$w;margin:$marg}
        background: #f5f5f5;height: 58px;line-height: 58px;margin-bottom:20px;font-weight: normal
    }
    .boxList{
        max-width:$w;margin: $marg;padding:0 20px;
        ul{
            display: flex;justify-content: space-between;flex-wrap:wrap;
            li{
                &.noneBorder{border:none}
                width:180px;height:116px;margin-bottom:10px;border:1px solid #f5f5f5;
                dl{
                    padding:10px;
                    border-top:4px solid #ffe11d;
                    dt{
                        color:#000;font-size:16px;margin-bottom:10px;
                        em{display:inline-block;margin-right:5px;font-weight:bold;font-size:17px;color:#d26402;font-style: normal}
                    }
                    dd{
                        font-size:14px;color:#9d9d9d;
                        strong{color:#373737;font-weight: normal}
                    }
                }
            }
        }
    }

}
</style>
