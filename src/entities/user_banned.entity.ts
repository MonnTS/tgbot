import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UserBotEntity } from './user_bot.entity'

@Entity('kemono_users_banned')
export class UserBotBannedEntity {
  @PrimaryGeneratedColumn({ name: 'ban_id' })
  banId: number

  @Column()
  reason: string

  @Column({ name: 'ban_date' })
  banDate: Date

  @OneToOne(() => UserBotEntity)
  @JoinColumn({ name: 'user_id' })
  userId: UserBotEntity
}
