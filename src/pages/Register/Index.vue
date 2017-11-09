<style lang="scss" scoped="" type="text/css">
  ul {
    list-style: none;
    padding: 0;
  }
  #register {
    width: 100%;
    display: block;
  }
  #content-holder {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-top: auto;
    margin-bottom: auto;
    height: 20rem;
  }
  .item-content {
    padding-left: 0;
  }
  .wechat {
    width: 5rem;
    height: 5rem;
  }
  .list-block {
    .item-inner {
      &::after {
        bottom: 1px;
      }
    }
  } 
  #login {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
</style>

<template>
  <v-layout>
    <div class="content">
      <router-link id="login" :to="{name: 'login.index'}">登录</router-link>
      <div class="content-block" id="content-holder">
        <form @submit.prevent="login(user)">
          <ul class="list-block">
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="输入手机号码" v-model="user.phone">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="输入验证码" v-model="user.password">
                  </div>
                  <div class="item-after"><button class="button">发送</button></div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="输入密码" v-model="user.password">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="请重新输入密码" v-model="user.password">
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <p>
            <button class="button" id="register">
              注册
            </button>
          </p>
          <p>新用户将自动注册，并视为同意<a>《用户注册协议》</a></p>
        </form>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Register Index Page
   * ============
   *
   * Page where the user can register.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'register-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        user: {
          firstName: null,
          lastName: null,
          email: null,
          passwordConfirm: null,
          password: null,
        },
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will register the user.
       *
       * @param {Object} user The user to be registered.
       */
      register(user) {
        this.$store.dispatch('auth/register', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
