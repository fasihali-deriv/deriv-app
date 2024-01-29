import React, { useReducer } from 'react';
import { TSelectedPaymentMethod } from 'types';
import { p2p } from '@deriv/api';
import { Loader } from '@deriv-com/ui/dist/components/Loader';
import { PaymentMethodForm } from '../../../../components/PaymentMethodForm';
import { advertiserPaymentMethodsReducer } from '../../../../reducers';
import { PaymentMethodsEmpty } from './PaymentMethodsEmpty';
import { PaymentMethodsList } from './PaymentMethodsList';

/**
 * @component This component is the main component of the PaymentMethods screen. It's used to conditionally display the list of payment methods if it exists otherwise, it will display the empty state and the form to add a new payment method
 * @returns {JSX.Element}
 * @example <PaymentMethods />
 * **/
const PaymentMethods = () => {
    const { data: p2pAdvertiserPaymentMethods, isLoading, isRefetching } = p2p.advertiserPaymentMethods.useGet();
    const [formState, dispatch] = useReducer(advertiserPaymentMethodsReducer, {});

    const handleAddPaymentMethod = (selectedPaymentMethod?: TSelectedPaymentMethod) => {
        dispatch({
            payload: {
                selectedPaymentMethod,
            },
            type: 'ADD',
        });
    };
    const handleEditPaymentMethod = (selectedPaymentMethod?: TSelectedPaymentMethod) => {
        dispatch({
            payload: {
                selectedPaymentMethod,
            },
            type: 'EDIT',
        });
    };
    const handleDeletePaymentMethod = (selectedPaymentMethod?: TSelectedPaymentMethod) => {
        dispatch({
            payload: {
                selectedPaymentMethod,
            },
            type: 'DELETE',
        });
    };
    const handleResetFormState = () => {
        dispatch({ type: 'RESET' });
    };

    if (isLoading) {
        return <Loader />;
    }

    if (formState?.isVisible) {
        return (
            <PaymentMethodForm
                formState={formState}
                onAdd={handleAddPaymentMethod}
                onResetFormState={handleResetFormState}
            />
        );
    }

    if (!p2pAdvertiserPaymentMethods?.length && !isRefetching) {
        return <PaymentMethodsEmpty onAddPaymentMethod={handleAddPaymentMethod} />;
    }

    return (
        <PaymentMethodsList
            formState={formState}
            onAdd={handleAddPaymentMethod}
            onDelete={handleDeletePaymentMethod}
            onEdit={handleEditPaymentMethod}
            onResetFormState={handleResetFormState}
            p2pAdvertiserPaymentMethods={p2pAdvertiserPaymentMethods}
        />
    );
};

export default PaymentMethods;