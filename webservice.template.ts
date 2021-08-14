import { service, volume, build } from './mod.ts'

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
        '5000:5000'
    ]
})

const redisService = service({
    image: 'redis'
})

const logVolume = volume({})

export default build(
    [
        ['web', webService],
        ['redis', redisService],
        ['logVolume01', logVolume]
    ]
)