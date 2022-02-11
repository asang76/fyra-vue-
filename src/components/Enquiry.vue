<template>
<br>
<br>
<br>
<br>

<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 sm:w-full w-4/5 sm:px-0 ">
    <div class="col-span-2 bg-white">
        <div class="bg-white flex flex-col flex-1">
            <h1 class="font-bold text-center pb-2" style="font-size:28px;" v-if="!enquiry_msg">
                Let us know what you are looking for!
            </h1>

            <div class="text-left" style="font-size: 14px" v-if="!enquiry_msg">

                <form class="w-full pl-10 max-w-lg" method="POST" @submit.prevent="send_enquiry">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" :class="{invalid: !emailAddress.isValid}">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" v-model.trim="emailAddress.val" @blur="clearValidity('emailAddress')" placeholder="xyz@xyz.com" required>
                            <p v-if="!emailAddress.isValid">Email must not be empty or Email Format is Wrong!.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3" :class="{invalid: !mobileNumber.isValid}">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                                Mobile
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model.trim="mobileNumber.val" @blur="clearValidity('mobileNumber')" placeholder="985000000">
                            <p v-if="!mobileNumber.isValid">Mobile Number must not be empty or must have 10 digits!.</p>
                        </div>
                    </div>
                    <h1 class="mb-4 text-xl text-center font-bold"> Online Presence! </h1>
                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="webapplication" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Web Application - Design and Development </label>

                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="digitalmarketing" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Brand Building - Digital Marketing </label>
                        </div>

                    </div>

                    <h1 class="mb-4 text-xl text-center font-bold"> E-Commerce Platform</h1>

                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="mobileapp" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> User Application (Andoid & iOS ) </label>
                        </div>

                    </div>

                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="businessapp" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Business Application </label>
                        </div>

                    </div>

                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="microsite" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Micro Web Application </label>
                        </div>

                    </div>

                    <h1 class="mb-4 text-xl text-center font-bold">What is your Business Type? </h1>

                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="restaurant" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Restaurant </label>
                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="smallshop" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Small Shop </label>
                        </div>

                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="smes" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Small and Medium Enterprises </label>
                        </div>

                    </div>

                    <h1 class="mb-4 text-xl text-center font-bold"> Free Form Discussion!</h1>
                    <div class="flex flex-wrap -mx-3 mb-2">

                        <div class="flex items-center mr-4 mb-2">
                            <input type="checkbox" value="freediscussion" v-model="enquiryvalues" /> &nbsp; &nbsp;
                            <label for="A3-yes" class="select-none"> Open for the Discussion! </label>
                        </div>

                    </div>

                    <!--  <div class="flex flex-wrap -mx-3 mb-2">
                        Help us Reduce Spam - Friendly Captcha!
                    </div>
                    -->

                    <div class="text-left px-10 pt-10" style="font-size: 14px">
                        <button type="submit" value="submit" class="
            py-2
            hover:underline
            bg-indigo-600
            text-white
            font-bold
            rounded-full
            w-40
            shadow-lg
            focus:outline-none
            focus:shadow-outline
          ">
                            Submit Enquiry
                        </button>
                    </div>
                </form>

            </div>
            <div v-else>
                <h1 class="font-bold text-center pb-2" style="font-size:28px;">
                    Thank you for writing to us!
                </h1>

            </div>

        </div>

    </div>
    <div class="bg-white object-contain">
        <img src="/static/img/enquiry.jpg">
    </div>
</div>

<br>
<br>

<br>
<br>
</template>

<script>
import {
    mapGetters,
} from 'vuex';

export default {
    name: 'Enquiry',
    data() {
        return {
            enquiryvalues: [],
            email: '',
            emailAddress: {
                val: '',
                isValid: true,
            },
            mobileNumber: {
                val: '',
                isValid: true
            },
            formIsValid: true,
            mobile: '',
        }
    },

    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;

            if (this.emailAddress.val === '') {
                this.emailAddress.isValid = false;
                this.formIsValid = false;
            }
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!this.emailAddress.val.match(mailformat)) {
                this.emailAddress.isValid = false;
                this.formIsValid = false;
            }
            if (this.mobileNumber.value === '') {
                this.mobileNumber.isValid = false;
                this.formIsValid = false;
            }
            var mobileformat = /^(\d{10})$/;
            if (!this.mobileNumber.val.match(mobileformat)) {
                this.mobileNumber.isValid = false;
                this.formIsValid = false;
            }

        },

        send_enquiry() {
            this.validateForm();
            if (!this.formIsValid) {
                return;
            }
            let enquiry_data = {
                email: this.emailAddress.val,
                mobile: this.mobileNumber.val,
                requirements: this.enquiryvalues,
            }
            this.$store.dispatch('send_enquiry', enquiry_data);

        },

    },
    computed: {
        ...mapGetters({
            enquiry_msg: 'enquiry_msg',

        })
    }

}
</script>

<style scoped>
.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>
