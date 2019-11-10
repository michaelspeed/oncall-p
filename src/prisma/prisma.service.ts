import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: 'http://atmiyo.achtunglabs.co:4466',
      debug: false,
    });
  }
}
