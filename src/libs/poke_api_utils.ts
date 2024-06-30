import {TYPES} from 'pokenode-ts';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PokeApiUtils {
  static convertToTypeId(typeName: string): number {
    return TYPES[typeName.toUpperCase() as keyof typeof TYPES];
  }
}
