import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';

import { Cart } from './cart.entity';

@Entity()
export class CartItems {
  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'integer' })
  count: number;

  @OneToOne(() => Cart)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  cartId: string;
}
