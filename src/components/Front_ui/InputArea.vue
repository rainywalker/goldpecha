<template>
    <div class="iptArea">
        <p class="topNotice">차주와 폐차 전문 팀장 1대1 상담으로 <strong>수수료 무료 / 365일 무료 상담 / 무료 견인</strong></p>
        <fieldset>
            <dl ref="inputField">
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
            onSubmit() {

                if (!this.validate()) {
                    return false;
                }

                this.$http.post(`/api/user`, this.users)
                .then(response => {
                    alert('전송되었습니다.');
                    this.$refs.username.value = '';
                    this.$refs.area.value = '';
                    this.$refs.phone.value = '';
                    this.$refs.car.value = '';
                    this.$refs.since.value = '';
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
                    padding-left:80px;margin-bottom:20px;
                    input{
                        background:#f5f5f5 ;height:30px;border:0;width:100%;padding:10px;box-sizing: border-box;
                        color:#666;font-size: 16px;
                    }
                }
            }
            #submitBtn{
                display:inline-block;background:#ffe11d;width:100%;border:0;height:40px;font-size:20px;
                font-weight: bold;line-height: 40px;cursor: pointer;
            }
            .desc{font-size:14px;color:#9d9d9d;margin-top:10px}
        }

    }
</style>
