export type Service = {
    build?: string
    image?: string
    ports?: string[]
    volumes?: string[]
    links?: string[]
    networks?: string[]
    configs?: string[]
    secrets?: string[]
}

export type Volume = {
    driver?: string
    "driver_opts"?: Record<string, string>
    external?: boolean
}