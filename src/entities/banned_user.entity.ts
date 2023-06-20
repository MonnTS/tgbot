import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('banned_users')
export class BannedUserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'user_id' })
  userId: number
}
