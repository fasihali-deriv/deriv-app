import React from 'react';
import { Button, Divider, InlineMessage, Input, Text } from '@deriv-com/ui';
import { useSettings } from '@deriv/api-v2';
import { getAppstorePlatforms } from '@deriv/shared';
// import { FormInputField } from 'src/components';

const EmailAndPasswords = () => {
    const { data: userData } = useSettings();
    const { email } = userData;
    return (
        <section className='flex flex-col gap-16'>
            <div className='flex items-center '>
                <Text size='md' weight='bold'>
                    Email address
                </Text>
                <Divider className='w-100' />
            </div>

            <Text size='sm'>In which country was your document issued?</Text>
            <div className='flex gap-8'>
                {/* <fieldset> */}
                <Input disabled={true} label='Email address*' name='email' value={email} />
                <Button
                    className='email-change_button max-w-[283px] h-[43px]'
                    isLoading={false}
                    size='lg'
                    textSize='sm'
                    type='button'
                >
                    Change email
                </Button>
                {/* </fieldset> */}
            </div>

            <div className='flex items-center '>
                <Text size='md' weight='bold'>
                    Deriv password
                </Text>
                <Divider className='w-100' />
            </div>
            <Text size='sm'>
                Use the Deriv password to log in to Deriv.com, Deriv GO, Deriv Trader, SmartTrader, Deriv Bot and Deriv
                cTrader.
            </Text>
            <Text size='sm'>Apps you have linked to your Deriv password:</Text>
            <Text size='sm'>
                <strong>Deriv.com</strong>
            </Text>

            {/* {getAppstorePlatforms()} */}
        </section>
    );
};

export default EmailAndPasswords;
