import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp } from 'typeorm';
import { User } from '.';

@Entity()
export class DailyAction {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'timestamp', nullable: false })
    date!: Date;

    @Column({ nullable: false })
    counts!: number;
}
