<template lang="html">
  <div>
    Login
  </div>
</template>

<script>

const LINE_URL = "https://page.line.me/380mpdtg";
const LINE_LIFF_ID = "1656311335-8oB7rAg9";


export default {
  layout: "session",

//   async created(){
//     await liff.init({ liffId: LINE_LIFF_ID });

    // const isFriend = checkFriend();
    // if( !isFriend ){
    //     window.location = LINE_URL;
    // }
    // else 
    // if (liff.isLoggedIn()) {
    //     getUserProfile();
    // }
    // else{
    //     liff.login();
    // }
//   },

   mounted() {
    // const isFriend = checkFriend();
    liff
      .init({
        liffId: LINE_LIFF_ID
      })
      .then(() => {

        if (liff.isLoggedIn()) {
          
          liff.getProfile().then(profile => {
            this.$store.dispatch("setLine", profile);
            this.isDone( profile );
          });
        } else {
          liff.login();
        }
      });
  },
  computed: {
    getLine() {
      return this.$store.getters.getLine;
    }
  },
  data() {
    return {
      form: {
        // firstname: this.$store.getters.getRegister.firstname,
        // lastname: this.$store.getters.getRegister.lastname,
        // gender: this.$store.getters.getRegister.gender
      }
    };
  },
    methods : {

      isDone( profile ){

          /* profile: 

            displayName: "ชง"
            pictureUrl: "https://profile.line-scdn.net/0hZyFjcyfvBVZ7Ey0TcK16AUdWCzsMPQMeAycZMQoQXDEGcUsHQ3FCZFgXCzZVIUoFTyIdNAkRW29f"
            statusMessage: "เตรียม"
            userId: "Ubc8d733ce5c99d48b146c3d27fdfaf14"
          */

          this.$router.replace({ name: 'home' })
          console.log( 'profile: ', profile );
          // console.log( `${this.$store.getters.getLine.userId}/profile.json` );
      },

      checkFriend : async() =>  {
          const friend = await liff.getFriendship();
          return friend.friendFlag;
      },

      getUserProfile: async() =>  {
          const profile = await liff.getProfile();
          console.log( profile );
          
          this.$store.dispatch("setLine", profile);
      }
  }
};
</script>
