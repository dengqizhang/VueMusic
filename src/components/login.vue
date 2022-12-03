<template>
  <div>
    <el-row :gutter="40">
      <el-col :xs="120" :sm="17" :md="10" :lg="17" :xl="20">
        <van-form @submit="onSubmit" class="loginbox">
          <van-cell-group inset>
            <van-field v-model="state.useremail" name="手机帐号" label="手机帐号" placeholder="手机帐号"
              :rules="[{ required: true, message: '请输入正确的手机号' }]" />
            <van-field v-model="state.password" type="password" name="请填写账号密码" label="密码" placeholder="密码"
              :rules="[{ required: true, message: '请输入正确的密码' }]" />
          </van-cell-group>


          <div style="margin: 16px;">
            <!-- 获取pinia里公共方法 -->
            <van-button round block type="primary" native-type="submit"
              @click="mainStore.modificationLogin(state.useremail, state.password)">
              提交
            </van-button>
          </div>
        </van-form>
      </el-col>

    </el-row>
    <div style="padding: .625rem 0px 0px 60%; ">
      <button style="background-color: brown;">注册</button>
    </div>
  </div>
</template>

<script>

// import send from '../request/api.js'
import { ref, onMounted } from "vue"
import { useStore } from "../store";
export default {
  setup() {
    // 实例化pinia
    const mainStore = useStore();

    // 定义响应式数据
    const state = ref({

      useremail: "",// 表单手机号

      password: "",// 表单密码
    })
    //提交
    const onSubmit = (values) => {
      console.log('submit', values);
    }

    onMounted(async () => {

    })

    return {
      state,
      onSubmit,
      mainStore,
    }
  }
}
</script>
<style>
@media screen and (min-width: 600px) {
  .loginbox {
    margin-left: 30%;
  }
}
</style>