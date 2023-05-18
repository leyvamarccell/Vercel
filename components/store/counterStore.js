import create from 'zustand'
import {values} from '../Coin'

export const useCounterStore = create((set) => ({
    value: '',
    change: (value) => set(state => ({
        value: values
    }))
}))