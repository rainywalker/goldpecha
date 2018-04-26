<template>
    <div class="user_list">
        <table class="table">
            <thead>
            <tr><th>지역</th>
                <th>차량번호</th>
                <th>차종</th>
                <th>핸드폰</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user.area}}</td>
                    <td>{{user.car_num}}</td>
                    <td>{{user.car}}</td>
                    <td>{{user.phone}}</td>
                    <td><button type="button" @click="removeUser(user._id)">삭제</button></td>
                </tr>
            </tbody>

        </table>
        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "UserList",
    created () {
        this.initList()
    },

    data() {
        return {
            users : [],
            errors : []
        }
    },
    methods: {
        initList() {
            this.$http.get(`/api/user`)
            .then(response => {
                this.users = response.data;
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
        removeUser (userId) {
            this.$http.delete(`/api/user/${userId}`)
            .then(res => {
                this.initList()
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
    .user_list{
        table{
            width:100%;border-collapse: collapse;
            th{background: #f4f4f4;border:0;height:40px;font-size: 15px}

            td{
                padding-left:10px;height:30px;border-bottom:1px solid #f5f5f5;font-size: 14px;border-left:1px solid #f5f5f5;
                text-align: center;
            }
        }
    }
</style>
