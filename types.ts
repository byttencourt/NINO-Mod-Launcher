import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  description: string;
  category: 'Client' | 'Cloud' | 'Security';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}