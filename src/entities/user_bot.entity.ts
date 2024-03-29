import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('kemono_users')
export class UserBotEntity {
  @PrimaryColumn()
  user_id: number

  @Column()
  username: string
}
