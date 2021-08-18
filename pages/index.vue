<template>
  <div class="d-flex flex-column min-h-screen">
    <div class="mb-auto text-center mt-5 pt-3 mx-auto max-w-280" style="margin-top: 30% !important;">

        <div style="width: 150px;height: 150px;margin: 0 auto 15px"><img src="~/assets/images/logo-150x150.png" alt="" class="w-100 h-100"></div>
        <h1 class="title-text">กล่องรอดตาย</h1>
        <h3 class="title-desc">ระบบติดตามอาการ โควิด 19</h3>
        <!-- <h3 class="title-desc">ท่านสามารถสืบค้นข้อมูลเกี่ยวกับการปฏิบัติตัวเมื่อติดเชื้อโควิด 19</h3> -->
    </div>

    <div class="d-flex justify-content-center mb-5">
      <NuxtLink to="/register" class="btn btn-primary btn-submit min-w-160" :class="isLoading&&`disabled`" :disabled="isLoading">
        <strong class="text-white">ลงทะเบียน</strong>
        <div v-if="isLoading" class="loader"><div></div><div></div><div></div></div>
      </NuxtLink>

      <!-- <NuxtLink to="/register" class="btn btn-primary btn-submit min-w-160" :class="isLoading&&`disabled`" :disabled="isLoading">
        <strong class="text-white">บันทึกอาการ</strong>
        <div v-if="isLoading" class="loader"><div></div><div></div><div></div></div>
      </NuxtLink> -->
    </div>
  </div>
</template>

<script>
const LINE_URL = "https://page.line.me/380mpdtg";
const LINE_LIFF_ID = "1656311335-8oB7rAg9";

export default {
  // middleware: 'auth'

  async mounted() {
    const vm = this;

    document.body.classList.add(liff.getOS());

    console.log( 'OS', liff.getOS() );
    this.$store.dispatch('setLineLeff', {isInClient: liff.isInClient})

    liff.ready.then(() => {
      vm.isLoggedIn = liff.isLoggedIn();

      // this.$store.dispatch('set', this.form)
      

      if (vm.isLoggedIn) {
        liff.getProfile().then(profile => {

          vm.form.userId = profile.userId;
          vm.form.displayName = profile.displayName;
          vm.form.email = liff.getDecodedIDToken().email;
        });


        this.isLoading = false

        // this.getUserProfile( this );
        // const profile = liff.getProfile();
        // this.form.userId = profile.userId;
        // this.form.displayName = profile.displayName;
        // this.form.email = liff.getDecodedIDToken().email;
      } else {
        liff.login();
      }
    });

    await liff.init({ liffId: LINE_LIFF_ID });
  },

  computed: {
    getLine() {
      return this.$store.getters.getLine;
    },
    getLineLeff(){
      return this.$store.getters.getLineLeff;
    }
  },

  data() {
    return {
      isLoading: true,
      isLoggedIn: false,
      form: {
        userId: null,
        displayName: null,
        email: null
        // firstname: this.$store.getters.getRegister.firstname,
        // lastname: this.$store.getters.getRegister.lastname,
        // gender: this.$store.getters.getRegister.gender
      }
    };
  },

  methods: {
    isDone(profile) {
      this.form.userId = profile.userId;
      this.form.displayName = profile.displayName;
      // this.form.email = liff.getDecodedIDToken().email;

      this.$router.replace({ name: "home" });
      console.log("km profile: ", profile);
      // console.log( `${this.$store.getters.getLine.userId}/profile.json` );
    },

    checkFriend: async () => {
      const friend = await liff.getFriendship();
      return friend.friendFlag;
    },

    getUserProfile: async vm => {
      const profile = await liff.getProfile();

      console.log("my profile:", profile);
      //   this.$store.dispatch("setLine", profile);

      vm.form.userId = profile.userId;
      vm.form.displayName = profile.displayName;
      vm.form.email = liff.getDecodedIDToken().email;
    }
  }
  
};
</script>
