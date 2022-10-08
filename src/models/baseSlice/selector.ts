import type {RootState} from '@/store'
import {createSelector} from 'reselect'

export const baseSelector = (state: RootState) => state.base

export const valueSelector2 = createSelector(baseSelector, base => base.value)

export const valueSelector = (state: RootState) => state.base.value

export const isLoadingSelector = (state: RootState) => state.base.isLoading
