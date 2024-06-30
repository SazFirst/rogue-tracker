import {PokemonClient, TypeRelations} from 'pokenode-ts';

export interface Ability {
  name: string;
  description: string;
  isHidden: boolean;
}

class PokeApi {
  private pokemonClient: PokemonClient;

  public constructor() {
    this.pokemonClient = new PokemonClient();
  }

  public async getTypeEffectiveness(type: string): Promise<TypeRelations> {
    try {
      const response = await this.pokemonClient.getTypeByName(type);
      return response.damage_relations;
    } catch (error) {
      console.error(`Error fetching type effectiveness for ${type}:`, error);
      return {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: [],
      };
    }
  }

  public async getAbility(pokemonId: number, abilityIndex: number): Promise<Ability> {
    let name = 'Unknown';
    let description = 'Unknown';
    let isHidden = false;

    try {
      const pokemonData = await this.pokemonClient.getPokemonById(pokemonId);

      const abilityLength = pokemonData.abilities.length;

      if (abilityIndex >= abilityLength) {
        abilityIndex = abilityLength - 1; // Pokerogue uses a "None" ability as padding when pokémon have less than 3.
      }
      isHidden = pokemonData.abilities[abilityIndex].is_hidden;

      const abilityName = pokemonData.abilities[abilityIndex].ability.name;
      const abilityData = await this.pokemonClient.getAbilityByName(abilityName);

      name = abilityName.toUpperCase().replace('-', ' ');

      for (const flavorTextEntry of abilityData.flavor_text_entries) {
        if (flavorTextEntry.language.name === 'ko') {
          description = flavorTextEntry.flavor_text;
        }
      }
    } catch (error) {
      console.error('Error fetching Pokémons ability:', error);
    }

    return {
      name: name,
      description: description,
      isHidden: isHidden,
    };
  }

  // Function to get Pokémon type
  public async getPokemonType(id: number): Promise<string[]> {
    try {
      const response = await this.pokemonClient.getPokemonById(id);
      const types = response.types.map(type => type.type.name);
      return types;
    } catch (error) {
      console.error('Error fetching Pokémon type:', error);
      return [];
    }
  }
}

export const pokeApi = new PokeApi();
