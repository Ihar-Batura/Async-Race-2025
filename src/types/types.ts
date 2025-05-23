export interface ICreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

export interface ICreateButton extends ICreateElement {
  disabled?: boolean;
  name?: string;
  onClick?: () => void;
}

export interface ICreateInput {
  type: string;
  classes?: string[];
  id?: string;
  value?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  min?: string;
  pattern?: string;
  addRules?: string;
  disabled?: boolean;
  onInput?: () => void;
  parent?: HTMLElement;
}

export interface IControlCarCreateUpdate {
  placeholderText: string;
  disabled: boolean;
  text: string;
  id: string;
}

export interface ICarData {
  color: string;
  name: string;
  id?: number;
}

export interface IEngineData {
  velocity: number;
  distance: number;
}

export interface IWinnersData {
  wins: number;
  time: number;
  id?: number;
}

export interface ILink {
  href: string;
  classes?: string[];
  id?: string;
  text?: string;
  target?: string;
  parent?: HTMLElement;
}
