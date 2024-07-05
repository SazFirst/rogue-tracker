import {pokeApi} from '../libs/pokeapi';

// TODO string 대신 keyof typeof TYPE으로 변경
export interface TypeEffectiveness {
  weaknesses: string[];
  resistances: string[];
  immunities: string[];
}

export async function getPokemonTypeEffectiveness(id: number): Promise<TypeEffectiveness> {
  const types = await pokeApi.getPokemonType(id);

  const typeEffectiveness = await Promise.all(types.map(type => pokeApi.getTypeEffectiveness(type)));

  const weaknesses = new Set<string>();
  const resistances = new Set<string>();
  const immunities = new Set<string>();

  if (types.length === 1) {
    const data = typeEffectiveness[0];
    data.double_damage_from.forEach(t => weaknesses.add(t.name));
    data.half_damage_from.forEach(t => resistances.add(t.name));
    data.no_damage_from.forEach(t => immunities.add(t.name));
  } else if (types.length === 2) {
    const type1Effectiveness = typeEffectiveness[0];
    const type2Effectiveness = typeEffectiveness[1];

    // Calculate weaknesses
    type1Effectiveness.double_damage_from.forEach(t => {
      if (!type2Effectiveness.half_damage_from.some(r => r.name === t.name)) {
        weaknesses.add(t.name);
      }
    });
    type2Effectiveness.double_damage_from.forEach(t => {
      if (!type1Effectiveness.half_damage_from.some(r => r.name === t.name)) {
        weaknesses.add(t.name);
      }
    });

    // Calculate resistances
    type1Effectiveness.half_damage_from.forEach(t => {
      if (!type2Effectiveness.double_damage_from.some(r => r.name === t.name)) {
        resistances.add(t.name);
      }
    });

    type2Effectiveness.half_damage_from.forEach(t => {
      if (!type1Effectiveness.double_damage_from.some(r => r.name === t.name)) {
        resistances.add(t.name);
      }
    });

    // Calculate immunities
    type1Effectiveness.no_damage_from.forEach(t => immunities.add(t.name));
    type2Effectiveness.no_damage_from.forEach(t => immunities.add(t.name));

    immunities.forEach(immunity => {
      weaknesses.delete(immunity);
      resistances.delete(immunity);
    });
  }

  return {weaknesses: [...weaknesses], resistances: [...resistances], immunities: [...immunities]};
}
