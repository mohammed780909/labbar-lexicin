<template>
  <div>
    <ul v-if="active">
      <li class="container z-depth-1 my-5 p-2">
        <section>
          <div>
            <h3 class="font-weight-normal text-center dark-grey-text my-4 pb-2">
              Enter you name & password
            </h3>

            <!--First row-->
            <div class="row d-flex justify-content-center">
              <div class="col-md-6 col-lg-6 mb-4">
                <!-- Material outline input -->
                <div class="md-form md-outline form-lg">
                  <input
                    type="text"
                    id="form1"
                    class="form-control form-control-lg"
                    v-model="newName"
                  />
                  <label for="form1">Name</label>
                </div>
              </div>

            

              <div class="col-md-6 col-lg-6 mb-4">
                <!-- Material outline input -->
                <div class="md-form md-outline form-lg">
                  <input
                    type="password"
                    id="form3"
                    class="form-control form-control-lg"
                    v-model="newPassword"
                  />
                  <label for="form3">Password</label>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <button class="btn btn-block btn-primary my-4" @click="update">
                  Sign In
                </button>
              </div>
            </div>
            <!--First row-->
          </div>
        </section>
      </li>
    </ul>
 

           <!-- sign out -->
    <ul v-else >
      
        <div class="container z-depth-1 my-5 p-5" >
          <!-- Section -->
          <section>
            <h3 class="font-weight-normal text-center dark-grey-text my-4 pb-2">
              Welcom {{ newName }} to my world
            </h3>

            <div class="col-md-6 col-lg-4 mb-4">
              <button class="btn btn-block btn-primary my-4" @click="update2">
                Sign Out
              </button>
            </div>
          </section>
          <!-- Section -->
        </div>
     
    </ul>
  </div>
</template>

<script>
export default {
  props: ["active", "name", "password"],
  data() {
    return {
      newName: this.name,
      newPassword: this.password,
    };
  },
  methods: {
    update() { 
      
      let user = {
        name: this.newName,
        password: this.newPassword,
        active:false
      };
      this.$emit("update-user", user);
    },

    update2(){
    let user2 = {
        name: '',
        password: '',
        active:true
      };
      this.$emit("update-user2", user2);
    },

  },
  

  }
  
 ;
</script>

<style></style>
