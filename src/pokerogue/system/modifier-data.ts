export default class ModifierData {
  private player: boolean = false;
  private typeId: string = '';
  private typeGeneratorId: string = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private typePregenArgs: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private args: any[] = [];
  private stackCount: number = 0;

  public className: string = '';
}
