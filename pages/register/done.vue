<template>
    <div class="d-flex flex-column min-h-screen justify-content-center">

        <div class="text-center p-3">

            <div class="d-flex justify-content-center mb-3"><i class='bx bxs-check-circle' style="font-size: 70px;color: #a3ba45;"></i></div>

            <h3 class="mb-3">ท่านได้ลงทะเบียนผู้ติดเชื้อ ระบบติดตามอาการของกล่องรอดตายเรียบร้อยแล้ว</h3>

            <div>ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง </div>
            <div>เพื่อสอบถามอาการของท่านทุกวัน 2 ช่วงเวลา </div>
            <div>08.00 - 10.00 น. และ 16.00 - 18.00 น.</div>
            <div>ท่านสามารถบันทึกอาการรายวันได้ที่เมนู</div>

            <h3 class="mb-0">"บันทึกอาการ"</h3>
            <div>กรุณากรอกข้อมูลเพื่อให้ทีมงานตรวจสอบได้</div>
        </div>
        
        <div class="mt-4 d-flex justify-content-center">
            <button @click="close" class="btn btn-primary min-w-120" :class="isLoading&&`disabled`" :disabled="isLoading">
                <strong class="text-white">{{ closeTxt }}</strong>
                <div v-if="isLoading" class="loader"><div></div><div></div><div></div></div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){

        return{
            isLoading: false,
            isLineLiff: false,
            closeTxt: "ปิด"
        }
    },

    created(){

        if( typeof liff === "function" ){
            this.isLineLiff = true
        }
    },

    methods: {

        close(){

            this.isLoading = true;
            this.closeLineLiff()

            // 
        },

        closeLineLiff(){

            console.log( typeof liff );

            if( typeof liff !== "object" ) return;

            console.log( liff.isLoggedIn );

            if( !liff.isLoggedIn ){

            }


            if (liff.isInClient()) {

                liff.sendMessages([{
                    'type': 'text',
                    'text': "ขอบคุณ!! ท่านได้ลงทะเบียนผู้ติดเชื้อระบบติดตามอาการของกล่องรอดตายเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง"
                }]);
                
                liff.closeWindow();
            }
            else{
                this.$router.push('/')
            }
        }
    }
}
</script>