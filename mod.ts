import YAML from 'https://cdn.skypack.dev/yaml?dts'
import { service } from './primitives.ts'
import type { Service } from './types.ts'

const build = (name: string, service: Service) => ({
    [name]: {
        ...service,
        ports: service.ports?.flatMap(([a, b]) => `${a}:${b}`) ?? undefined
    }
})

const webService = service({
    build: '.',
    links: [
        // possibly pass this as an additional parameter or make this easily modifiable for
        // easier composition of services.
        'redis'
    ],
    volumes: [
        '.:/code',
        'logvolume01:/var/log'
    ],
    ports: [
        [5000, 5000]
    ]
})

console.log(YAML.stringify(build('web', webService)))