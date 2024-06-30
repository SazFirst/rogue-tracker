export enum VoucherType {
  REGULAR,
  PLUS,
  PREMIUM,
  GOLDEN,
}

export class Voucher {
  public id: string = '';
  public voucherType: VoucherType = {} as VoucherType;
  public description: string = '';
}

export interface Vouchers {
  [key: string]: Voucher;
}

export const vouchers: Vouchers = {};
