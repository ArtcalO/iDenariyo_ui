<template>
    <div>
            <div class="card mt-50 mb-50">
                <div class="card-title mx-auto"> iDenariyo </div>
                <center><p style="color:orange" >Simple, Secure and Efficient</p></center>
                <div class="nav">
                    <ul class="mx-auto">
                        <li :class="{active:transaction}"><a @click="transaction=true">Transaction</a></li>
                        <li :class="{active:!transaction}" ><a @click="transaction=false">Enregistrement</a></li>
                    </ul>
                </div>
                <form v-if="!transaction" @submit.prevent="register">
                    <div >
                        <div class="row row-1">
                            <div class="col-2"><img class="img-fluid"  /></div>
                            <div class="col-7"> <input v-model="email" type="text" placeholder="adresse electronique"> </div>
                            <div class="col-3 d-flex justify-content-center"> <a>Email</a> </div>
                        </div>
                        <div class="row row-1">
                            <div class="col-2"><img class="img-fluid"  /></div>
                            <div class="col-7"> <input v-model="password" type="text" placeholder="Mot de passe"> </div>
                            <div class="col-3 d-flex justify-content-center"> <a >Password</a> </div>

                        </div>
                        <button class="btn mt-5 d-flex mx-auto" @click.prevent="register"><b>Register</b></button>
                    </div>
                </form>
                <form v-else @submit.prevent="payement">
                    <div >
                        <div class="row row-1">
                            <div class="col-2"><img class="img-fluid"  /></div>
                            <div class="col-7"> <input type="text" v-model="account_number" placeholder="adresse electronique"> </div>
                            <div class="col-3 d-flex justify-content-center"> <a>Numero bancaire</a> </div>
                        </div>
                        <button class="btn mt-5 d-flex mx-auto" @click.prevent="payement"><b>Valider</b></button>
                    </div>
                </form>
            </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                transaction:true,
                account_number:"",
                email:"",
                password:"",
            }
        },
        mounted(){

        },
        methods:{
            register(){
                axios.post(this.url+"/register/", {'email':this.email,'password':this.password})
                .then((res)=>{
                    alert("Votre numero de carte bancaire est : "+res.data.account)
                    this.transaction=false
                }).catch((err)=>{
                    console.log(err)
                })
            },
            payement(){
                axios.post(this.url+'/transaction/',{
                    "sender":this.account_number,
                    "receiver":"TKZ/A000002/iDEN",
                    "amount":12222
                } ,this.headers).then((res)=>{
                    console.log(res)
                    alert(res.data.success)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    };
</script>
<style scoped>
    body {
        background: #ddd;
        min-height: 100vh;
        vertical-align: middle;
        display: flex
    }

    img{
        width: 30px;
        height: 30px;
    }

    .card {
        margin: auto;
        width: 500px;
        padding: 3rem 3.5rem;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    }

    .mt-50 {
        margin-top: 50px
    }

    .mb-50 {
        margin-bottom: 50px
    }

    @media(max-width:767px) {
        .card {
            width: 90%;
            padding: 1.5rem
        }
    }

    @media(height:1366px) {
        .card {
            width: 90%;
            padding: 8vh
        }
    }

    .card-title {
        font-weight: 700;
        font-size: 2.5em
    }

    .nav {
        display: flex
    }

    .nav ul {
        list-style-type: none;
        display: flex;
        padding-inline-start: unset;
        margin-bottom: 6vh
    }

    .nav li {
        padding: 1rem
    }

    .nav li a {
        color: black;
        text-decoration: none
    }

    .active {
        border-bottom: 2px solid black;
        font-weight: bold
    }

    input {
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        width: 100%;
        min-width: unset;
        background-color: transparent;
        border-color: transparent;
        margin: 0
    }

    form a {
        color: gray;
        text-decoration: none;
        font-size: 0.87rem;
        font-weight: bold
    }

    form a:hover {
        color: gray;
        text-decoration: none
    }

    form .row {
        margin: 0;
        overflow: hidden
    }

    form .row-1 {
        border: 1px solid rgba(0, 0, 0, 0.137);
        padding: 0.5rem;
        outline: none;
        width: 100%;
        min-width: unset;
        border-radius: 5px;
        background-color: rgba(221, 228, 236, 0.301);
        border-color: rgba(221, 228, 236, 0.459);
        margin: 2vh 0;
        overflow: hidden
    }

    form .row-2 {
        border: none;
        outline: none;
        background-color: transparent;
        margin: 0;
        padding: 0 0.8rem
    }

    form .row .row-2 {
        border: none;
        outline: none;
        background-color: transparent;
        margin: 0;
        padding: 0 0.8rem
    }

    form .row .col-2,
    .col-7,
    .col-3 {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0 1vh
    }

    form .row .col-2 {
        padding-right: 0
    }

    #card-header {
        font-weight: bold;
        font-size: 0.9rem
    }

    #card-inner {
        font-size: 0.7rem;
        color: gray
    }

    .three .col-7 {
        padding-left: 0
    }

    .three {
        overflow: hidden;
        justify-content: space-between
    }

    .three .col-2 {
        border: 1px solid rgba(0, 0, 0, 0.137);
        padding: 0.5rem;
        outline: none;
        width: 100%;
        min-width: unset;
        border-radius: 5px;
        background-color: rgba(221, 228, 236, 0.301);
        border-color: rgba(221, 228, 236, 0.459);
        margin: 2vh 0;
        width: fit-content;
        overflow: hidden
    }

    .three .col-2 input {
        font-size: 0.7rem;
        margin-left: 1vh
    }

    .btn {
        width: 100%;
        background-color: rgb(65, 202, 127);
        border-color: rgb(65, 202, 127);
        color: white;
        justify-content: center;
        padding: 2vh 0;
        margin-top: 3vh
    }

    .btn:focus {
        box-shadow: none;
        outline: none;
        box-shadow: none;
        color: white;
        -webkit-box-shadow: none;
        -webkit-user-select: none;
        transition: none
    }

    .btn:hover {
        color: white
    }

    input:focus::-webkit-input-placeholder {
        color: transparent
    }

    input:focus:-moz-placeholder {
        color: transparent
    }

    input:focus::-moz-placeholder {
        color: transparent
    }

    input:focus:-ms-input-placeholder {
        color: transparent
    }
</style>