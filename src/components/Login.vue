
   <template>
<div  class="login fixed pace-done">
    <div class="pace  pace-inactive">
        <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
    <div class="pace-progress-inner">
    </div>
</div>
<div class="pace-activity">
</div>
</div>
        <div class="wrapper animated flipInY">
            <div class="logo">
                <a href="#">
                    <i class="fa fa-bolt"></i> 
                    <span>Maniac</span>
                </a>
            </div>
            <div class="box">
                <div class="header clearfix">
                    <div class="pull-left">
                        <i class="fa fa-sign-in"></i> Sign In</div>
                    <div class="pull-right">
                        <a href="#">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <!-- <form id="loginform" class="bv-form"> -->
                    <div class="alert alert-warning no-radius no-margin padding-sm">
                        <i class="fa fa-info-circle"></i> Please sign in to maniac dashboard</div>
                    <div class="box-body padding-md">
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" placeholder="Username" data-bv-field="username" ref="username">
                            <small data-bv-validator="notEmpty" data-bv-validator-for="username" class="help-block" style="display: none;">The username is required and can't be empty</small>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Password" data-bv-field="password" ref="password">
                            <small data-bv-validator="notEmpty" data-bv-validator-for="password" class="help-block" style="display: none;">The password is required and can't be empty</small>
                        </div>          
                        <div class="form-group">
                            <div class="icheckbox_minimal" style="position: relative;"><input type="checkbox" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> <small>Remember me</small>
                        </div>  
                        <div class="box-footer">                                                               
                            <button class="btn btn-success btn-block" @click="login">Sign in</button>  
                        </div>
                    </div>
                <input type="hidden" value="">
            <!-- </form> -->
            </div>
            <div class="box-extra clearfix">
                <a href="#" class="pull-left btn btn-xs">Forgotten Password?</a>
                <a href="register.html" class="pull-right btn  btn-xs">Register an account</a>
            </div>
            
            <footer>
                Copyright © 2014 by YAKUZI.
                
                <ul class="list-unstyled list-inline">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">UI Elements</a></li>
                    <li><a href="#">Charts</a></li>
                    <li><a href="#">Mobile Apps</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </footer>
        </div>  
</div>
</template>

<script>
     export default {
        methods: {
            login(){
                let username = this.$refs.username.value,
                    password = this.$refs.password.value;
                if (username == '1602E' && password == '1602E'){
                    window.localStorage.setItem('login', 'true');
                    window.history.back();
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      
</style>



