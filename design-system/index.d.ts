import type * as React from 'react';

/** The name set as type, with the accent full stop. There is no logo mark yet. */
export interface WordmarkProps { size?: 'sm' | 'md' | 'lg'; mark?: boolean; onBone?: boolean; className?: string }
export declare function Wordmark(props: WordmarkProps): React.ReactElement;

export interface NavLink { label: string; href?: string; active?: boolean }
export interface NavBarProps { links?: NavLink[]; action?: React.ReactNode; homeHref?: string; className?: string }
export declare function NavBar(props: NavBarProps): React.ReactElement;

export interface SectionHeaderProps { eyebrow?: string; title: React.ReactNode; lede?: React.ReactNode; actions?: React.ReactNode; size?: 'md' | 'xl'; align?: 'start' | 'center'; level?: 1 | 2 | 3; className?: string }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet'; size?: 'md' | 'sm'; iconRight?: boolean; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string; multiline?: boolean }
export declare function Input(props: InputProps): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'accent' | 'success' | 'danger'; dot?: boolean; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AlertProps { tone?: 'info' | 'success' | 'danger'; title?: React.ReactNode; action?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Alert(props: AlertProps): React.ReactElement;

export interface CardProps { tone?: 'default' | 'inset' | 'bone'; eyebrow?: string; title?: React.ReactNode; footer?: React.ReactNode; as?: string; children?: React.ReactNode; className?: string }
export declare function Card(props: CardProps): React.ReactElement;

export interface StatProps { value: React.ReactNode; unit?: string; label: React.ReactNode; note?: React.ReactNode; highlight?: boolean; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;

export interface TableColumn<Row = any> { key: string; label: React.ReactNode; align?: 'left' | 'right'; mono?: boolean; render?: (row: Row) => React.ReactNode }
export interface TableProps<Row = any> { columns: TableColumn<Row>[]; rows: Row[]; caption?: React.ReactNode; className?: string }
export declare function Table(props: TableProps): React.ReactElement;

export interface CodeBlockProps { title?: string; children: string; className?: string }
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;

export interface ChatBubbleProps { from?: 'customer' | 'agent' | 'note'; author?: string; time?: string; status?: 'pending' | 'sent' | 'delivered' | 'read' | 'failed'; children?: React.ReactNode; className?: string }
export declare function ChatBubble(props: ChatBubbleProps): React.ReactElement;

export interface ConversationProps { title: string; subtitle?: string; status?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Conversation(props: ConversationProps): React.ReactElement;

declare global {
  interface Window {
    Solotvj: {
      Wordmark: typeof Wordmark; NavBar: typeof NavBar; SectionHeader: typeof SectionHeader; Button: typeof Button;
      Input: typeof Input; Badge: typeof Badge; Alert: typeof Alert; Card: typeof Card; Stat: typeof Stat;
      Table: typeof Table; CodeBlock: typeof CodeBlock; ChatBubble: typeof ChatBubble; Conversation: typeof Conversation;
    };
  }
}
