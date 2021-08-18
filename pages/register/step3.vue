<template>
    <div>
        <div class="appbar-container" v-if="!isApiAvailable">
            <div class="appbar appbar-sticky">
                <div class="appbar-inner">
                    <div class="appber-left">
                        <NuxtLink to="/register/step2" class="appber-left-btn"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" id="i-icon-back" viewBox="0 0 30 30"><path fill="none" stroke="#111" stroke-width="1.5" d="M16.5 24.385l-9.192-9.193L16.5 6"></path></svg></NuxtLink>
                    </div>
                    <div class="appbar-title hide">บันทึกอาการ</div>
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
                    <label class="form-label">อาการที่เป็นปัจจุบัน :</label>
                    
                    <label class="custom-control custom-checkbox mb-2" v-for="(item,i) in items" :key="i" :for="`item-${i}`">
                        <input type="checkbox" class="custom-control-input" :id="`item-${i}`">
                        <span class="custom-control-label">{{item.name}}</span>
                    </label>
                    
                    <div class="invalid-feedback"></div>
                </div>

                <div class="mb-3">
                    <list-box placeholder="อาการอื่น..."></list-box>
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

        let items = [];

        items.push({name: "เจ็บคอ"})
        items.push({name: "มีเสมหะ"})
        items.push({name: "ไม่รับรู้กลิ่นและรส"})
        items.push({name: "ไม่มีไข้ มีน้ำมูก"})
        items.push({name: "ปวดเมื่อนตามตัวข้อต่อ"})
        items.push({name: "ปวดศีรษะ"})
        items.push({name: "เสมหะปนเลือด"})
        items.push({name: "อ่อนเพลีย"})
        items.push({name: "ท้องเสีย"})
        items.push({name: "ตั้งครรภ์"})
        items.push({name: "อื่นๆ (โปรดระบุ)"})
        
        return {
            os: 'web',
            isApiAvailable: false,
            isLoading: false,
            items: items,

            inputs: { }
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
            this.$router.push('/register/done')
        },

        back(){
            this.$router.push('/register/step2')
        }
    }
}
</script>
<style lang="scss" scoped>
    .custom-checkbox{
        
        position: relative;
        padding: 0;
        // .custom-control-input{
        //     left: auto;
        //     right: 8px;
        // }
        .custom-control-label{
            display: block;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 8px;
            width: 100%;
            height: calc(1.6em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;


            &::before, &::after{
                right: 8.5px;
                left: auto;

                width: 1.3rem;
                height: 1.3rem;
                top: 8.5px;
            }
            &::before{
                border-radius: 15px;
                border-width: 0;
                box-shadow: none;
            }
            // &::before{
            //     right: 0;
            //     left: auto;
            // }
        }
    }

    .custom-control-input:checked ~ .custom-control-label{
        color: #fff;
        border-color: #A3BA45;
        background-color: #A3BA45;
    }
</style>