import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm";

@Entity("data_results")
export class Results extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_serie: number

    @Column()
    camp1: string

    @Column()
    camp2: string

    @Column()
    camp3: string

    @Column()
    camp4: string

    @Column()
    camp5: string

    @Column()
    camp6: string

    @Column()
    camp7: string

    @Column()
    camp8: string

    @Column()
    camp9: string

    @Column()
    camp10: string

    @Column()
    camp11: string

    @Column()
    camp12: string

    @Column()
    camp13: string

    @Column()
    camp14: string

    @Column()
    camp15: string

    @Column()
    camp16: string

    @Column()
    camp17: string

    @Column()
    camp18: string

    @Column()
    camp19: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    status: number

    @Column()
    result1: string

    @Column()
    result2: string

    @Column()
    result3: string

    @Column()
    result4: string

    @Column()
    result5: string

    @Column()
    result6: string

    @Column()
    viento1: string

    @Column()
    viento2: string

    @Column()
    viento3: string

    @Column()
    viento4: string

    @Column()
    viento5: string

    @Column()
    viento6: string

}