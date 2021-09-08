import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, OneToMany } from 'typeorm';
import { User } from '.';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'timestamp', nullable: false })
    scheduledTime!: Date;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    body!: string;

    @OneToMany(() => User, (User) => User.id)
    users!: User[];
}
