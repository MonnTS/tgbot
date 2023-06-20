import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('banned_users')
export class BannedUserInfoEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  username: String

  @Column()
  reason: String

  @Column({ name: 'ban_date' })
  banDate: Date
}
