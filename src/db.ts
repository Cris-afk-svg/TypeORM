import {DataSource} from 'typeorm'
import { User } from './entities/User'
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'dpg-cp2ju88l6cac73dg2nd0-a.oregon-postgres.render.com',
    username: 'typeormdb_user',
    password: '8PPLoD8V7SWWNXnAx4ngrGFWol1FsPJK',
    port: 5432,
    database: 'typeormdb',
    entities: [User],
    logging: true,
    synchronize: true,
    ssl:{
        rejectUnauthorized: false
    }
})
