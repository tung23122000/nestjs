import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host:'localhost',
    username: 'postgres',
    password: 'tung002312',
    database: 'postgres',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
}