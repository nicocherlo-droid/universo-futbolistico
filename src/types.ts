export type Club = {
  id:string; name:string; city:string; province:string; regionId:string;
  foundedYear:number; stadiumName:string; stadiumCapacity:number;
  logoUrl?:string;
};
export type Region={id:string;name:string;};
export type Division={id:string;name:string;level:number;teamIds:string[];promotionSlots:number;relegationSlots:number;};
export type Universe={id:string;name:string;country:string;startYear:number;currentSeason:number;regions:Region[];clubs:Club[];divisions:Division[];};
export type AppState={universes:Universe[];activeUniverseId?:string;};