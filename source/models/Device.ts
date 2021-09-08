import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, Generated } from 'typeorm';
import { User } from '.';

@Entity()
export class Device {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @PrimaryGeneratedColumn('uuid')
    deviceId!: string;

    @Column({ nullable: false })
    fcmToken!: string;
}
