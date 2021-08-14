import type { Service, Volume } from './types.ts'

export const service = (props: Service): Service => ({
    ...props,
})
export const volume = (props: Volume) => props