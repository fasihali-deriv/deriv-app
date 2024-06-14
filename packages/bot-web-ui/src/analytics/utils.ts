import { STRATEGIES } from '../pages/bot-builder/quick-strategy/config';
import { STORED_ITEM_NOT_FOUND, TFormStrategy } from './constants';

export const getRsDropdownTextFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage?.getItem('qs-analytics') ?? '{}');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Rudderstack: unable to get dropdown text');
        return {};
    }
};

const hasStoredText = (parameter: string) => parameter && parameter !== STORED_ITEM_NOT_FOUND;

export const getRsStrategyType = (selected_strategy: string) => STRATEGIES[selected_strategy]?.rs_strategy_name;

export const getQsActiveTabString = (tab: string) => (tab === 'TRADE_PARAMETERS' ? 'trade parameters' : 'learn more');

export const getSubpageName = () => {
    const active_tab = localStorage.getItem('active_tab');
    if (active_tab === '0') {
        return 'dashboard';
    } else if (active_tab === '1') {
        return 'bot_builder';
    } else if (active_tab === '2') {
        return 'charts';
    } else if (active_tab === '3') {
        return 'tutorials';
    }
    return 'undefined';
};

export const getTradeParameterData = ({ form_values }: TFormStrategy) => {
    if (!form_values) return;

    const { symbol, tradetype, type, stake } = form_values;
    const stored_texts = getRsDropdownTextFromLocalStorage();

    return {
        asset_type: hasStoredText(stored_texts?.symbol) ? stored_texts.symbol : symbol,
        trade_type: hasStoredText(stored_texts?.tradetype) ? stored_texts?.tradetype : tradetype,
        purchase_condition: hasStoredText(stored_texts?.type) ? stored_texts?.type : type,
        initial_stake: hasStoredText(stored_texts?.stake) ? stored_texts?.stake : stake,
    };
};
