<template lang="html">
  <div>
    <ul v-if="isLoggedIn">
      <li>
        userId: <span>{{ form.userId }}</span>
      </li>
      <li>
        displayName: <span>{{ form.displayName }}</span>
      </li>
      <li>
        email: <span>{{ form.email }}</span>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
// import liff from "@line/liff";

const LINE_URL = "https://page.line.me/380mpdtg";
const LINE_LIFF_ID = "1656311335-8oB7rAg9";

export default {
  layout: "session",

  async mounted() {
    const vm = this;

    liff.ready.then(() => {
      vm.isLoggedIn = liff.isLoggedIn();

      if (vm.isLoggedIn) {
        liff.getProfile().then(profile => {
          vm.form.userId = profile.userId;
          vm.form.displayName = profile.displayName;
          vm.form.email = liff.getDecodedIDToken().email;
        });
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

  // mounted() {
  // liff
  //   .init({
  //     liffId: LINE_LIFF_ID
  //   })
  //   .then(() => {
  //     this.isLoggedIn = liff.isLoggedIn();

  //     if (this.isLoggedIn) {
  //       liff.getProfile().then(profile => {
  //         // this.$store.dispatch("setLine", profile);
  //         this.isDone(profile);
  //       });
  //     } else {
  //       liff.login();
  //     }
  //   });
  // },
  computed: {
    getLine() {
      return this.$store.getters.getLine;
    }
  },
  data() {
    return {
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
      /* profile: 

            displayName: "ชง"
            pictureUrl: "https://profile.line-scdn.net/0hZyFjcyfvBVZ7Ey0TcK16AUdWCzsMPQMeAycZMQoQXDEGcUsHQ3FCZFgXCzZVIUoFTyIdNAkRW29f"
            statusMessage: "เตรียม"
            userId: "Ubc8d733ce5c99d48b146c3d27fdfaf14"
          */

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
