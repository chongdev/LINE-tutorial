<template>
    <div class="min-h-screen relative" :style="`position: relative;`">
        
        <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);opacity: .1;width: 320px;"><img src="~/assets/images/logo-150x150.png" alt="กล่องรอดตาย" class="w-100 h-100"></div>

        <div class="appbar-container" v-if="!isApiAvailable">
            <div class="appbar appbar-sticky">
                <div class="appbar-inner">
                    <div class="appber-left">
                        <NuxtLink to="/" class="appber-left-btn"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" id="i-icon-back" viewBox="0 0 30 30"><path fill="none" stroke="#111" stroke-width="1.5" d="M16.5 24.385l-9.192-9.193L16.5 6"></path></svg></NuxtLink>
                    </div>
                    <div class="appbar-title">ลงทะเบียน</div>
                </div>
            </div>
        </div>

        <div class="px-3 relative" style="position: relative;z-index: 1;">
            <div class="title" :class="isApiAvailable&&`pt-2`">
                <h1 class="title-text">ลงทะเบียน</h1>
                <h3 class="title-desc">กรุณากรอกข้อมูลเพื่อยืนยันตัวตน {{isInClient}} {{isApiAvailable}}</h3>
            </div>

            <div class="pb-4">
                <div class="mb-3">
                    <label class="form-label">ชื่อ :</label>
                    <input type="text" class="form-control" autocomplete="off" v-model="inputs.first_name" maxlength="30">
                    <div class="invalid-feedback"></div>
                </div>

                <div class="mb-3">
                    <label class="form-label">นามสกุล :</label>
                    <input type="text" class="form-control" autocomplete="off" v-model="inputs.last_name" maxlength="30">
                    <div class="invalid-feedback"></div>
                </div>

                <div class="mb-3">
                    <label class="form-label">เพศ :</label>
                    <select class="custom-select" v-model="inputs.gender">
                        <option value=""></option>
                        <option value="1">ชาย</option>
                        <option value="2">หญิง</option>
                        <option value="3">ไม่ต้องการตอบ</option>
                        <option value="4">กำหนดเอง</option>
                    </select>
                    <div class="invalid-feedback"></div>
                </div>

                <div class="mb-3" v-if="inputs.gender==4">
                    <label class="form-label">โปรดระบุเพศของคุณ :</label>
                    <input type="text" class="form-control" autocomplete="off" v-model="inputs.custom_gender" maxlength="30">
                    <div class="invalid-feedback"></div>
                </div>

                <div class="row">
                    <div class="col-sm-6 mb-3">
                        <label class="form-label">น้ำหนัก : (กิโลกรัม)</label>
                        <input type="tel" maxlength="3" class="form-control" autocomplete="off">
                        <div class="invalid-feedback">
                        
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <label class="form-label">ส่วนสูง : (เซนติเมตร)</label>
                        <input type="tel" maxlength="3" class="form-control" autocomplete="off">
                        <div class="invalid-feedback">
                        Valid last name is required.
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">เบอร์ติดต่อ :</label>
                    <input type="tel" class="form-control" autocomplete="off" maxlength="10">
                    <div class="invalid-feedback"></div>
                </div>


                <div class="mb-3">
                    <label class="form-label">ที่อยู่ :</label>
                    <textarea class="form-control" rows="3"></textarea>
                    <div class="invalid-feedback"></div>
                </div>


                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-primary btn-block btn-submit" :class="isLoading&&`disabled`" :disabled="isLoading" @click="next">
                        <strong class="btn-text text-white">ถัดไป</strong>
                        <div v-if="isLoading" class="loader"><div></div><div></div><div></div></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){

        return{
            isLoading: false,
            isInClient: false,
            os: 'web',
            isApiAvailable: false,

            inputs: {
                first_name: "",
                last_name: "",
                gender: "",
                custom_gender: "",
            },
        }
    },

    computed: {
        getLine() {
            return this.$store.getters.getLine;
        },
        getLineLeff(){
            return this.$store.getters.getLineLeff;
        }
    },

    created(){
        
        if( typeof liff === "object" ){
            this.isLineLiff = true

            this.isInClient = liff.isInClient ? true: false
            this.os = liff.getOS()

            this.isApiAvailable = liff.isApiAvailable('multipleLiffTransition')

            console.log('isInClient', this.isInClient, this.isApiAvailable);
        }
    },

    methods: {

        next(){
            this.isLoading = true
            // this.$store.dispatch('setRegister', this.form)
            this.$router.push('/register/step2')
        }
    }
}
</script>