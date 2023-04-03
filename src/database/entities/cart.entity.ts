import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum StatusType {
  open = 'OPEN',
  orodered = 'ORDERED',
}

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ type: 'date', nullable: false })
  createdAt: string;

  @Column({ type: 'date', nullable: false })
  updatedAt: string;

  @Column({ type: 'enum', enum: StatusType })
  status: StatusType;
}
