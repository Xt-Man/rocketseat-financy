import {
	BaggageClaimIcon,
	BookOpenIcon,
	BriefcaseBusinessIcon,
	CarFrontIcon,
	DumbbellIcon,
	GiftIcon,
	HeartPulseIcon,
	HouseIcon,
	MailboxIcon,
	PawPrintIcon,
	PiggyBankIcon,
	ReceiptTextIcon,
	ShoppingCartIcon,
	TicketIcon,
	ToolCaseIcon,
	UtensilsIcon,
	type LucideIcon,
} from 'lucide-react';

export type { User } from './user.interface';
export type { RegisterInput } from './register-input.interface';
export type { LoginInput } from './login-input.interface';
export type { ProfileInput } from './profile-input.interface';
export type { Category } from './category.interface';
export type { Transaction } from './transaction.interface';

export type IconOption = {
	value: string;
	Icon: LucideIcon;
};

export const ICON_OPTIONS: IconOption[] = [
	{ value: 'briefcase', Icon: BriefcaseBusinessIcon },
	{ value: 'car', Icon: CarFrontIcon },
	{ value: 'heartPulse', Icon: HeartPulseIcon },
	{ value: 'piggyBank', Icon: PiggyBankIcon },
	{ value: 'shoppingCart', Icon: ShoppingCartIcon },
	{ value: 'ticket', Icon: TicketIcon },
	{ value: 'toolCase', Icon: ToolCaseIcon },
	{ value: 'utensils', Icon: UtensilsIcon },
	{ value: 'pawPrint', Icon: PawPrintIcon },
	{ value: 'house', Icon: HouseIcon },
	{ value: 'gift', Icon: GiftIcon },
	{ value: 'dumbbell', Icon: DumbbellIcon },
	{ value: 'bookOpen', Icon: BookOpenIcon },
	{ value: 'baggageClaim', Icon: BaggageClaimIcon },
	{ value: 'mailbox', Icon: MailboxIcon },
	{ value: 'receiptText', Icon: ReceiptTextIcon },
];
