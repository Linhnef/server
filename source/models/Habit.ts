import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, OneToMany } from 'typeorm';
import { DailyAction } from './DailyAction';

enum Type {
    Good = 1,
    Bad = 2
}

enum WeekDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

@Entity()
export class Habit {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    name!: string;

    @Column({ nullable: false })
    type!: Type;

    @Column({ type: 'boolean', nullable: false })
    isFinished!: boolean;

    @Column({ nullable: false, default: 1 })
    dailyGoals!: number;

    @Column({ type: 'timestamp', nullable: false })
    startTime!: Date;

    @Column({ type: 'time', nullable: true })
    dailyReminderTime!: Date;

    @Column({ nullable: true })
    ExcludedReminderWeekdays!: WeekDays;

    @Column({ type: 'date', nullable: true })
    ExcludedReminderDate!: Date;

    @Column({ type: 'timestamp', nullable: false })
    updatedAt!: Timestamp;

    @OneToMany(() => DailyAction, (DailyAction) => DailyAction.id)
    dailyActions!: DailyAction[];
}
