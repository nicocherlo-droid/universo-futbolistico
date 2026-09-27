import type { AppState, Universe } from "./types";
const KEY = "universo-futbolistico:v0.1";
const EMPTY: AppState = { universes: [] };
export function loadState(): AppState { try { const raw=localStorage.getItem(KEY); return raw?JSON.parse(raw) as AppState:EMPTY; } catch { return EMPTY; } }
export function saveState(state: AppState){ localStorage.setItem(KEY,JSON.stringify(state)); }
export function createId(prefix:string){ return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,8)}`; }
export function createUniverse(name:string,startYear:number):Universe{return{id:createId("universe"),name,country:"Argentina",startYear,currentSeason:startYear,regions:[],clubs:[],divisions:[]};}