import YAML from 'https://cdn.skypack.dev/yaml?dts'
import type { Service, Volume } from './types.ts'

export const build = (blocks: [string, Service | Volume][], options?: YAML.Options) => {
    const definition: { [key: string]: Service | Volume } = {}

    for (const [blockName, block] of blocks) {
        definition[blockName] = block
    }

    console.log(YAML.stringify(definition, options))
}