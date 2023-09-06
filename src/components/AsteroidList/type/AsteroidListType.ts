export interface IAsteroidListState {
  asteroidListStatus: string
  asteroidList: IAsteroidListData,
  asteroidListError: any,
}

interface IAsteroidListData {
    element_count?: number
    links?: ILinks
    near_earth_objects?: object
}

interface ILinks {
  next: string
  prev: string
  self: string
}

export interface IAsteroidList {
    name: string
    close_approach_data: ICloseDataApproach[]
    is_potentially_hazardous_asteroid: boolean
    estimated_diameter: IDiameter
  }

  interface ICloseDataApproach {
    miss_distance: IMissDistance
    close_approach_date: string
  }

  interface IDiameter {
    meters: IMeters
  }

  interface IMeters {
    estimated_diameter_max: string
  }

  interface IMissDistance {
    lunar: string
    kilometers: string
  }
