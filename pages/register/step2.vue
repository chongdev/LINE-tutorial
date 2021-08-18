<template>
    <div>
        <div class="appbar-container" v-if="!isApiAvailable">
            <div class="appbar appbar-sticky">
                <div class="appbar-inner">
                    <div class="appber-left">
                        <NuxtLink to="/register" class="appber-left-btn"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" id="i-icon-back" viewBox="0 0 30 30"><path fill="none" stroke="#111" stroke-width="1.5" d="M16.5 24.385l-9.192-9.193L16.5 6"></path></svg></NuxtLink>
                    </div>
                    <div class="appbar-title">บันทึกอาการ</div>
                </div>
            </div>
        </div>

        <div class="px-3">
            <div class="title" :class="isApiAvailable&&`pt-2`">
                <h1 class="title-text">บันทึกอาการ</h1>
                <h3 class="title-desc">กรุณากรอกข้อมูลอาการ</h3>
            </div>


            <div class="pb-4">
                <div class="mb-3">
                    <label class="form-label">ผลการตรวจ :</label>
                    
                    <div class="relative">
                        <input id="fileImageInput" type="file" class="d-none">
                        <div>
                            <label for="fileImageInput" class="d-block w-100 mt-2 border border-gray-12 rounded pt-2 text-center bg-white">
                                <svg width="24" height="24"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="i-icon-add" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8.333 8.333h5.334-5.334v5.334-5.334zm0 0H3h5.333V3v5.333z" mask="url(#b)"></path></g></svg>
                                <p>กรุณาแนบไฟล์ผลการตรวจในรูปไฟล์ภาพ</p>
                            </label>
                        </div>
                    </div>
                    <div class="invalid-feedback"></div>
                </div>


                <div class="mb-3">
                    <label class="form-label">วันที่ตรวจ :</label>
                    <input type="date" class="form-control" autocomplete="off" v-model="inputs.sdate">
                </div>

                <div class="mb-3">
                    <label class="form-label">สถานที่ตรวจ :</label>
                    <input type="text" class="form-control" autocomplete="off">
                </div>

                <div class="mb-3">
                    <label class="form-label">โรคประจำตัว :</label>
                    
                    <div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="congenital_disease_0" value="0" class="custom-control-input" v-model="inputs.congenital_disease">
                            <label for="congenital_disease_0" class="custom-control-label">ไม่มี</label>
                        </div>

                        <div class="custom-control custom-radio">
                            <input type="radio" id="congenital_disease_1" value="1" class="custom-control-input" v-model="inputs.congenital_disease">
                            <label for="congenital_disease_1" class="custom-control-label">มี (โปรดระบุ)</label>
                        </div>
                    </div>

                    <div class="mt-1" v-if="inputs.congenital_disease==1">
                        <list-box placeholder="โปรดระบุโรคประจำตัวของคุณ..."></list-box>
                        
                        <!-- <div class="invalid-feedback"></div> -->
                    </div>
                </div>


                <div class="mb-3">
                    <label class="form-label">ยาที่ใช้อยู่ :</label>
                    
                    <div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="drug_0" value="0" class="custom-control-input" v-model="inputs.drug">
                            <label for="drug_0" class="custom-control-label">ไม่มี</label>
                        </div>

                        <div class="custom-control custom-radio">
                            <input type="radio" id="drug_1" value="1" class="custom-control-input" v-model="inputs.drug">
                            <label for="drug_1" class="custom-control-label">มี (โปรดระบุ)</label>
                        </div>
                    </div>

                    <div class="mt-1" v-if="inputs.drug==1">
                        <list-box placeholder="โปรดระบุยาที่ใช้อยู่..."></list-box>
                        <!-- <div class="invalid-feedback"></div> -->
                    </div>
                </div>


                <div class="mb-3">
                    <label class="form-label">ประวัติแพ้ยา :</label>
                    
                    <div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="allergy-0" value="0" class="custom-control-input" v-model="inputs.drug_allergy">
                            <label for="allergy-0" class="custom-control-label">ไม่มี</label>
                        </div>

                        <div class="custom-control custom-radio">
                            <input type="radio" id="allergy-1" value="1" class="custom-control-input" v-model="inputs.drug_allergy">
                            <label for="allergy-1" class="custom-control-label">มี (โปรดระบุ)</label>
                        </div>
                    </div>

                    <div class="mt-1" v-if="inputs.drug_allergy==1">
                        <list-box placeholder="โปรดระบุประวัติแพ้ยา..."></list-box>
                        <!-- <input type="text" class="form-control" autocomplete="off" placeholder="โปรดระบุประวัติแพ้ยา..."> -->
                        <!-- <div class="invalid-feedback"></div> -->
                    </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                    <div>
                        <button class="btn btn-secondary min-w-120" @click="back"><strong class="text-white">ย้อนกลับ</strong></button>
                    </div>
                    <div>
                        <button class="btn btn-primary min-w-120 btn-submit" @click="next" :class="isLoading&&`disabled`" :disabled="isLoading">
                            <strong class="text-white">ถัดไป</strong>
                            <div v-if="isLoading" class="loader"><div></div><div></div><div></div></div>
                        </button>
                    </div>
                </div>
            </div>


            
        </div>
    </div>
</template>

<script>
import ListBox from '~/components/ListBox/index.vue'

export default {
    components: {ListBox},
    data(){

        return {
            isLoading: false,
            isApiAvailable: false,

            os: 'web',
            inputs: {
                sdate: "",
                congenital_disease: "",
            }
        }
    },

    created(){
        if( typeof liff === "object" ){
            this.os = liff.getOS()
            this.isApiAvailable = liff.isApiAvailable('multipleLiffTransition')
        }
    },

    methods: {
        next(){
            this.isLoading = true;
            this.$router.push('/register/step3')
        },

        back(){
            this.$router.push('/register')
        }
    }
}
</script>