export interface PaisSmall{
  name:string;
  alpha3code:string
}

export interface Pais {
  name:           string;
  topLevelDomain: string[];
  alpha2Code:     string;
  alpha3Code:     string;
  callingCodes:   string[];
  capital:        string;
  altSpellings:   string[];
  subregion:      Subregion;
  region:         Region;
  population:     number;
  latlng:         number[];
  demonym:        string;
  area?:          number;
  gini?:          number;
  timezones:      string[];
  borders?:       string[];
  nativeName:     string;
  numericCode:    string;
  flags:          Flags;
  currencies:     Currency[];
  languages:      Language[];
  translations:   Translations;
  flag:           string;
  regionalBlocs:  RegionalBloc[];
  cioc?:          string;
  independent:    boolean;
}

export interface Currency {
  code:   string;
  name:   string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Language {
  iso639_1?:  string;
  iso639_2:   string;
  name:       string;
  nativeName: string;
}

export enum Region {
  Africa = "Africa",
}

export interface RegionalBloc {
  acronym:    Acronym;
  name:       Name;
  otherNames: OtherName[];
}

export enum Acronym {
  Al = "AL",
  Au = "AU",
}

export enum Name {
  AfricanUnion = "African Union",
  ArabLeague = "Arab League",
}

export enum OtherName {
  JāmiAtAdDuwalAlArabīyah = "Jāmiʻat ad-Duwal al-ʻArabīyah",
  LeagueOfArabStates = "League of Arab States",
  UmojaWaAfrika = "Umoja wa Afrika",
  UnionAfricaine = "Union africaine",
  UniãoAfricana = "União Africana",
  UniónAfricana = "Unión Africana",
  الاتحادالأفريقي = "الاتحاد الأفريقي",
  جامعةالدولالعربية = "جامعة الدول العربية",
}

export enum Subregion {
  EasternAfrica = "Eastern Africa",
  MiddleAfrica = "Middle Africa",
  NorthernAfrica = "Northern Africa",
  SouthernAfrica = "Southern Africa",
  WesternAfrica = "Western Africa",
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}
