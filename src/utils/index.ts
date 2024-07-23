export const getPokemonDescription = (name:string ,base_experience: number, abilitiesCount:number, movesCount:number, weight:number, height:number) => {
    if (!base_experience && !abilitiesCount && !movesCount && !weight && !height) {
      return 'No description available';
    }
  
    let description = `${name} is a pokemon`;
  
    if (base_experience) {
      description += ` with a base experience of ${base_experience} points`;
    }
  
    if (abilitiesCount) {
      description += `, and possesses ${abilitiesCount} abilities`;
    }
  
    if (movesCount) {
      description += `, a total of ${movesCount} moves`;
    }
  
    if (weight) {
      description += `, and weighs ${weight} lbs`;
    }
  
    if (height) {
      description += ` with a height of ${height} inches`;
    }
  
    // If only the initial part of the description was built, it means no relevant properties were found
    if (description === `${name} is a pokemon`) {
      return 'No description available';
    }
  
    return description + '.';
  }