<template>
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
        <button type="button" @click.prevent="onSubmit">save</button>
    </fieldset>
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

<style scoped>

</style>
