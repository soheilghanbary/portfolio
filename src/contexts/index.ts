import { atom } from 'recoil'

export const SidebarContext = atom({
    key: 'sidebar',
    default: false,
})

export const paletteContext = atom({
    key: 'palette',
    default: 'primary'
})