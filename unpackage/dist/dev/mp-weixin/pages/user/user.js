"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userinfo = common_vendor.ref(null);
    const getUserInfo = () => {
      api_apis.apiUserInfo().then((res) => {
        common_vendor.index.__f__("log", "at pages/user/user.vue:125", res);
        userinfo.value = res.data;
      });
    };
    const wxLogin = () => {
      common_vendor.index.__f__("log", "at pages/user/user.vue:132", "微信登录");
      common_vendor.wx$1.login({
        success: (loginRes) => {
          common_vendor.index.__f__("log", "at pages/user/user.vue:136", "登录成功", loginRes);
          if (loginRes.code) {
            common_vendor.index.showModal({
              title: "温馨提示",
              content: "请先登录",
              success: function(res) {
                if (res.confirm) {
                  common_vendor.wx$1.getUserProfile({
                    desc: "用于完善用户资料",
                    success: (profileRes) => {
                      const userInfo = profileRes.userInfo;
                      common_vendor.index.__f__("log", "at pages/user/user.vue:148", "登录成功", {
                        code: loginRes.code,
                        userInfo
                      });
                      getUserInfo();
                    },
                    fail: (err) => {
                      common_vendor.index.__f__("log", "at pages/user/user.vue:181", "获取用户信息失败", err);
                      common_vendor.index.showToast({
                        title: "获取用户信息失败",
                        icon: "none"
                      });
                    }
                  });
                }
              }
            });
          } else {
            common_vendor.index.showToast({
              title: "登录失败",
              icon: "none"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("log", "at pages/user/user.vue:199", "登录失败", err);
          common_vendor.index.showToast({
            title: "登录失败",
            icon: "none"
          });
        }
        // wxda74230cc6e6cade
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userinfo.value
      }, userinfo.value ? {
        b: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        c: common_assets._imports_0,
        d: common_vendor.t(userinfo.value.IP),
        e: common_vendor.t(userinfo.value.address.city || userinfo.value.address.province || userinfo.value.address.country),
        f: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        g: common_vendor.t(userinfo.value.downloadSize),
        h: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        i: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        j: common_vendor.t(userinfo.value.scoreSize),
        k: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        l: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        m: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        n: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        o: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        p: common_vendor.p({
          type: "flag-filled",
          size: "20"
        }),
        q: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      } : {
        r: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        s: common_assets._imports_0,
        t: common_vendor.o(wxLogin)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
