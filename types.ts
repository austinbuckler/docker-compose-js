export type Service = {
    build?: string
    ports?: [number, number][]
    volumes?: string[]
    links?: string[]
}