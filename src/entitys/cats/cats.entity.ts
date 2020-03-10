import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cat')
export class CatEntity {

    @PrimaryGeneratedColumn() id: number;

    @OneToOne(() => CatEntity, (Cat:
        CatEntity) => Cat.translatable, {
        lazy: true,
    })
    @JoinColumn({ name: 'translatable_id' })
    translatable: CatEntity;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    locale: string;

}
