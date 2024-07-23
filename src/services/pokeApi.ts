
export const getPokemonList = async (limit = 50) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pokemon?limit=${limit}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Pokemon list not found (404).');
        }
        throw new Error(`Error fetching Pokemon list: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch Pokemon list:', error);
      return null;
    }
  }
  
  export const getPokemonDetails = async (name: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pokemon/${name}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Pokemon ${name} not found (404).`);
        }
        throw new Error(`Error fetching details for ${name}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch details for ${name}:`, error);
      return null;
    }
  }
  