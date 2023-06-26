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

  @Column({ nullable: true, length: 255 })
  reason: string

  @Column({ name: 'ban_date', type: 'date' })
  banDate: Date

  @OneToOne(() => UserBotEntity)
  @JoinColumn({ name: 'user_id' })
  userId: UserBotEntity
}
