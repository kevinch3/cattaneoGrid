
export interface Episode {
    titulo: string
    tracklist?: string | null
    descripcion?: string | null
    link: string | null
    likes: string | null
    descargas: string | null
    fecha: string
    episodio: string | null
    fechasubida?: string | null
  }

  export interface EpisodeSort extends Episode {
    _fechasubida: EpisodeExtended
    _fecha: EpisodeExtended
    _descargas: EpisodeExtended
    _likes: EpisodeExtended
    _episodio: EpisodeExtended
    [key: string]: EpisodeExtended | any; // Permite indexar con cualquier string
  }

  export interface EpisodeExtended {
    value: string
    number: number | null
    color: string
  }
