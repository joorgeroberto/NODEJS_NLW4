import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

// O @ precisa ser ativado no tsconfig.json:
//    -  "experimentaldecorators:" true,
//    -  "emitDecoratorMetadata": true,
//    -  "strictPropertyInitialization": false
// Instalar a lib uuid e seus tipos: 
//    - yarn add uuid 
//    - yarn add @types/uuid -D 
@Entity("users")
class User {

  @PrimaryColumn()
  readonly id: string;
  
  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { User };