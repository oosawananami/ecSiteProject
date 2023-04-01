import { MenuIndex } from '@/script/MenuIndex'
import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// ストアのステートに対して型を定義します
export interface State {
  menuIndex: number
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    menuIndex: MenuIndex.MainUI
  },
  getters: {
    menuIndex(state) {
      return state.menuIndex
    },
  },
  mutations: {
    MenuIndex(state, menuIndex: number) {
      state.menuIndex = menuIndex
    }
  }
})