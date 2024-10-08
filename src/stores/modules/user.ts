import { defineStore } from "pinia"
import { UserState, UserInfo } from "../type"
import piniaPersistConfig from "../persist"

export const useUserStore = defineStore({
  id: "codetime-user",
  state: (): UserState => ({
    // 用户token
    token: "",
    // 用户详细信息
    userInfo: {},
    // 用户角色信息
    roles: {}
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    // 登录
    login(userInfo: UserInfo) {
      const { username } = userInfo;
      return new Promise(async (resolve) => {
        this.token = username;
        this.userInfo = userInfo;
        await this.getRoles();
        this.setToken(username);
        resolve(username);
      });
    },
    // 获取用户授权角色信息
    getRoles() {
      return new Promise((resolve) => {
        this.roles = ["admin"];
        resolve(this.roles);
      });
    },
    // 获取用户信息
    // getInfo(roles) {
    //   return new Promise((resolve) => {
    //     this.roles = roles;
    //     resolve(roles);
    //   });
    // },
    // 退出
    logout() {
      return new Promise((resolve) => {
        this.token = "";
        this.userInfo = {};
        this.roles = [];
        resolve(null);
      });
    },
  },
  persist: piniaPersistConfig("codetime-user")
})
