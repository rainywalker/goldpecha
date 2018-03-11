<template>
    <div class="iptArea">
        <p class="topNotice">차주와 폐차장에 근무하는 팀장 1대1 상담 시스템<br><strong>수수료 <em>무료</em> / 365일 상담 <em>무료</em> / 견인 <em>무료</em></strong></p>
        <fieldset>
            <dl ref="inputField">
                <dt>차종</dt>
                <dd><input type="text" ref="car" v-model.trim="users.car"></dd>
                <dt>지역</dt>
                <dd><input type="text" ref="area" v-model.trim="users.area"></dd>
                <dt>차량번호</dt>
                <dd><input type="text" ref="car_num" v-model.trim="users.car_num"></dd>
                <dt>핸드폰</dt>
                <dd><input type="text" ref="phone" v-model.trim="users.phone"></dd>
            </dl>
            <button id="submitBtn" type="button" @click.prevent="onSubmit"><strong>최고가 폐차 보상금</strong> 지금 확인하세요!</button>
            <p class="input_desc">버튼을 누르시면 확인 후 연락드리겠습니다.</p>
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "InputArea",
        data () {
            return {
                users : {}
            }
        },
        methods: {
            validate() {


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

                if (this.$refs.car_num.value === '') {
                    alert('차량번호를 입력해주세요');
                    this.$refs.car_num.focus();
                    return false
                }
                return true;

            },
            onSubmit() {

                if (!this.validate()) {
                    return false;
                }

                this.$http.post(`/api/user`, this.users)
                .then(response => {
                    alert('전송되었습니다.');
                    this.$refs.area.value = '';
                    this.$refs.phone.value = '';
                    this.$refs.car.value = '';
                    this.$refs.car_num.value = '';
                })
                .catch(e => {
                    this.errors.push(e)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    $w : 570px;
    $marg : 0 auto;
    $pd : 0 20px;

    .iptArea{
        max-width:$w;margin:$marg;padding:$pd;
        border:6px solid #f5f5f5;box-sizing: border-box;margin-bottom:30px;

        .topNotice{
            position:relative; font-size:16px;letter-spacing: -1px;padding-top:20px;padding-right:130px;
            line-height: 26px;
            em{color:#de630b;font-style: normal}
            &:before{position: absolute;top:10px;right:0px;width:103px;height:92px;content: '';
                background:url('http://pyechagold.cdn3.cafe24.com/i_cert.png') no-repeat top right;}
            strong{font-size:20px}
        }
        fieldset{

            padding-top:60px;

            dl{
                overflow:hidden;
                dt{display: block;float:left;clear:left;font-size: 19px;color:#666;height:30px;line-height: 30px;
                }
                dd{
                    padding-left:80px;margin-bottom:20px;
                    input{
                        background:#f5f5f5 ;height:30px;border:0;width:100%;padding:10px;box-sizing: border-box;
                        color:#666;font-size: 16px;
                    }
                }
            }
            #submitBtn{
                display:inline-block;background:#ffe11d;width:100%;border:0;height:40px;font-size:18px;
                font-weight: bold;line-height: 40px;cursor: pointer;letter-spacing: -1px;
                strong{color:#de630b}
            }
            .input_desc{font-size:14px;color:#9d9d9d;margin:10px 0;padding:0}
        }

    }
</style>
