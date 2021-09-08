import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Device, Habit } from '.';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: true })
    firstName!: string;

    @Column({ nullable: true })
    lastName!: string;

    @Column({ nullable: false })
    email!: string;

    @Column({ nullable: false })
    password!: string;

    @Column({ nullable: true })
    avatarUrl!: string;

    @Column({ type: 'timetz', nullable: false })
    timezone!: Date;

    @OneToMany(() => Habit, (Habit) => Habit.id)
    habits!: Habit[];

    @Column({ type: 'timestamp', nullable: false })
    createAt!: Date;

    @Column({ type: 'timestamp', nullable: false })
    updateAt!: Date;

    @OneToMany(() => Device, (Device) => Device.deviceId)
    device!: Date;
}
