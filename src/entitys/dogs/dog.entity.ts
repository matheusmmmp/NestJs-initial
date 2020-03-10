import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dog')
export class DogEntity {

    @PrimaryGeneratedColumn() id: number;

    @OneToOne(() => DogEntity, (Dog:
        DogEntity) => Dog.translatable, {
        lazy: true,
    })
    @JoinColumn({ name: 'translatable_id' })
    translatable: DogEntity;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    locale: string;

}
