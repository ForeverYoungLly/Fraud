import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../node_modules/.pnpm/nuxt@3.12.4_@parcel+watcher@2.4.1_@types+node@22.4.1_ioredis@5.4.1_magicast@0.3.4_rollup@4.21_qkclzdaycnzn77sttwwpnlbhz4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}