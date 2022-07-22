import React from "react";

export interface LinkItem {
  title: string;
  link: string;
  icon: React.ReactNode,
  target?: string;
}

export interface LinkMenu {
  id: number;
  title?: string;
  children: Array<LinkItem>
}

export interface SelectOption {
  value: string;
  text: string;
}
