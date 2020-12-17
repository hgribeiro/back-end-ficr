import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Images";

@Entity("abrigo")
export default class Abrigo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latidude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  openign_hours: string;

  @Column()
  open_on_weekends: boolean;

  // recebe com primeiro paramns
  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ["insert", "update"],
  })
  // qual o nome da colula que se relaciona com image
  @JoinColumn({ name: "orphanage_id" })
  images: Image[];
}
