<template>
    <div>
        <ul>
            <li v-for="user in users">
                <span>{{user.username}}</span>
                <span>{{user.phone}}</span>
                <span>{{user.car}}</span>
                <button type="button" @click="removeUser(user._id)">삭제</button>
            </li>
        </ul>
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

<style scoped>

</style>
