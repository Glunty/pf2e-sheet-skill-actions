import { PartialBy } from './utils';
import { Rank } from './globals';

export type ActionType = 'A' | 'D' | 'T' | 'F' | 'R' | '';

export interface SkillActionData {
  key: string;
  slug: string;
  icon: string;
  proficiencyKey: string;
  requiredRank: Rank;
  actionType: ActionType;
  actor: Actor;
}

export type SkillActionDataParameters = PartialBy<SkillActionData, 'key' | 'actionType' | 'icon' | 'requiredRank'>;

export const SKILL_ACTIONS_DATA: Omit<SkillActionDataParameters, 'actor'>[] = [
  // Acrobatics
  {
    slug: 'balance',
    proficiencyKey: 'acr',
    icon: 'freedom-of-movement',
  },
  {
    slug: 'tumble-through',
    proficiencyKey: 'acr',
    icon: 'unimpeded-stride',
  },
  {
    slug: 'maneuver-in-flight',
    proficiencyKey: 'acr',
    requiredRank: 1,
    icon: 'fleet-step',
  },
  // Arcana
  {
    slug: 'recall-knowledge-arcana',
    proficiencyKey: 'arc',
  },
  // Athletics
  {
    slug: 'climb',
    proficiencyKey: 'ath',
    icon: 'heroic-feat',
  },
  {
    slug: 'force-open',
    proficiencyKey: 'ath',
    icon: 'indestructibility',
  },
  {
    slug: 'disarm',
    proficiencyKey: 'ath',
    requiredRank: 1,
    icon: 'perfect-strike',
  },
  {
    slug: 'grapple',
    proficiencyKey: 'ath',
    icon: 'remove-fear',
  },
  {
    slug: 'high-jump',
    proficiencyKey: 'ath',
    actionType: 'D',
    icon: 'jump',
  },
  {
    slug: 'long-jump',
    proficiencyKey: 'ath',
    actionType: 'D',
    icon: 'longstrider',
  },
  {
    slug: 'shove',
    proficiencyKey: 'ath',
    icon: 'ki-strike',
  },
  {
    slug: 'swim',
    proficiencyKey: 'ath',
    icon: 'waters-of-prediction',
  },
  {
    slug: 'trip',
    proficiencyKey: 'ath',
    icon: 'natures-enmity',
  },
  // Crafting
  {
    slug: 'recall-knowledge-crafting',
    proficiencyKey: 'cra',
  },
  // Deception
  {
    slug: 'feint',
    proficiencyKey: 'dec',
    requiredRank: 1,
    icon: 'delay-consequence',
  },
  // Diplomacy
  {
    slug: 'request',
    proficiencyKey: 'dip',
    icon: 'cackle',
  },
  // Intimidation
  {
    slug: 'demoralize',
    proficiencyKey: 'itm',
    icon: 'blind-ambition',
  },
  // Medicine
  {
    slug: 'administer-first-aid',
    proficiencyKey: 'med',
    actionType: 'D',
  },
  {
    slug: 'treat-poison',
    proficiencyKey: 'med',
    requiredRank: 1,
  },
  // Nature
  {
    slug: 'command-an-animal',
    proficiencyKey: 'nat',
  },
  {
    slug: 'recall-knowledge-nature',
    proficiencyKey: 'nat',
  },
  // Occultism
  {
    slug: 'recall-knowledge-occultism',
    proficiencyKey: 'occ',
  },
  // Performance
  {
    slug: 'perform',
    proficiencyKey: 'prf',
  },
  // Religion
  {
    slug: 'recall-knowledge-religion',
    proficiencyKey: 'rel',
  },
  // Society
  {
    slug: 'recall-knowledge-society',
    proficiencyKey: 'soc',
  },
  // Stealth
  {
    slug: 'conceal-an-object',
    proficiencyKey: 'ste',
  },
  {
    slug: 'hide',
    proficiencyKey: 'ste',
    icon: 'zealous-conviction',
  },
  {
    slug: 'sneak',
    proficiencyKey: 'ste',
    icon: 'invisibility',
  },
  // Survival
  // Thievery
  {
    slug: 'disable-device',
    proficiencyKey: 'thi',
    requiredRank: 1,
    actionType: 'D',
  },
  {
    slug: 'palm-an-object',
    proficiencyKey: 'thi',
  },
  {
    slug: 'pick-a-lock',
    proficiencyKey: 'thi',
    requiredRank: 1,
    actionType: 'D',
    icon: 'ward-domain',
  },
  {
    slug: 'steal',
    proficiencyKey: 'thi',
  },
  // Feat based
  {
    slug: 'bon-mot',
    proficiencyKey: 'dip',
    icon: 'hideous-laughter',
  },
];
