import { getField, updateField } from "vuex-map-fields";
import router from "@/config/router";
import { Commit } from 'vuex';
import { PayloadProps, StateProps, MenuProps } from "./types";

export default {
  namespaced: true,
  state: {
    showMenu: true,
    dialogChangePassword: false,
    minim: false,
    path: "",
    menus: [],
    showNotification: false,
    notificationMessage: "",
    notificationType: "",
  },
  mutations: {
    menuMini: (state : StateProps, payload : PayloadProps) : boolean => (state.minim = payload.minim),
    setPath: (state : StateProps, payload : PayloadProps ) : void => {
      state.path = payload.path
    },
    showNotification: (state : StateProps, payload : PayloadProps) : void => {
      (state.showNotification = payload.showNotification),
        (state.notificationMessage = payload.notificationMessage),
        (state.notificationType = payload.notificationType);
    },
    updateField,
  },
  getters: {
    getField,
  },
  actions: {
    openMenu({ commit, state } :  { commit : Commit, state : StateProps }, menu : MenuProps) : void {
      if (menu.link) {
        if (menu.link != state.path) {
          commit("setPath", {path : menu.link});
          commit("menuMini", { mini: true });
          router.push(menu.link);
        }
      }
    },
    openLink({ commit, state } : { commit : Commit, state : StateProps }, url : string) : void {
      if (state.path != url) {
        commit("setPath", {path : url});
        commit("menuMini", { mini: true });
        router.push(url);
      }
    },
  },
};