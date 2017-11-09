<style lang="scss" scoped="" type="text/css">
  ul {
    list-style: none;
    padding: 0;
  }
  #login {
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
  #register {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
</style>

<template>
  <v-layout>
    <div class="content">
      <router-link id="register" :to="{name: 'register.index'}">注册</router-link>
      <div class="content-block" id="content-holder">
        <form @submit.prevent="login(user)">
          <ul class="list-block">
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="number" placeholder="手机号码" v-model="user.phone">
                  </div>
                </div>
                <v-input-clear :value="user.phone" @click="user.phone = ''"></v-input-clear>
              </div>
            </li>
            <li v-if="!loginByPassword">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="验证码" v-model="user.password">
                  </div>
                  <div class="item-after"><button class="button">发送</button></div>
                </div>
              </div>
            </li>
            <li v-else>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="密码" v-model="user.password">
                  </div>
                  <v-input-clear :value="user.password" @click="user.password = ''"></v-input-clear>
                </div>
              </div>
            </li>
          </ul>
          <p>
            <button class="button" id="login">
              登录
            </button>
          </p>
        </form>
        <div class="text-center">
          <p v-if="!loginByPassword"><a @click="loginByPassword=!loginByPassword">使用密码登录</a></p>
          <p v-else><a @click="loginByPassword=!loginByPassword">使用验证码登录</a></p>
          <p><router-link :to="{ name: 'login.index' }">忘记密码？</router-link></p>
          <p><a><img class="wechat" :src="require('@/assets/sprite/wechart.svg')"/></a></p>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';
  import VInputClear from '@/components/InputClear';

  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        user: {
          phone: null,
          password: null,
        },
        loginByPassword: true,
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      login(user) {
        this.$store.dispatch('auth/login', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
      VInputClear,
    },
  };
</script>
