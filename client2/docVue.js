var app = new Vue({
    el: "#app",
    data: function() {
        return{
            users: [],
            quotes: [],
            show: true,

            email: '',
            password: ''
        }
    },

    methods: {

        findAllQuotes : function() {
            axios({
                method: 'get',
                url: 'http://localhost:3000/quotes',
            })
            .then(data => {
                console.log(data)
                app.quotes = data.data.data
            })
        },

        signinUser: function(){
            let data = {
                email : this.email,
                password : this.password
            }

            let self = this
            axios({
                method: "POST",
                url: 'http://localhost:3000/users/login',
                data
            })
            .then(function (response) {
                // console.log(result)
                localStorage.setItem('token', response.data.token)
                location.reload()
            })
            .catch(function (err){
                // console.log(err.response.data.message)
            })
        },

        logoutUser: function(){
            localStorage.removeItem('token')
            location.reload()
        },





    },

    created() { 
        this.findAllQuotes()
    }

})