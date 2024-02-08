import React from 'react';
import IcPoiClearPhoto from '../../assets/manual-form/ic-poi-clear-photo.svg';
import IcPoiDocExpiry from '../../assets/manual-form/ic-poi-doc-expiry.svg';
import IcPoiFileFormat from '../../assets/manual-form/ic-poi-file-format.svg';
import IcPoiFileSize from '../../assets/manual-form/ic-poi-file-size.svg';
import { WalletText } from '../../components/base/WalletText';

const FOOTER_ITEMS = [
    { icon: <IcPoiClearPhoto />, text: 'A clear colour photo or scanned image' },
    { icon: <IcPoiFileFormat />, text: 'JPEG, JPG, PNG, PDF, or GIF' },
    { icon: <IcPoiFileSize />, text: 'Less than 8MB' },
    { icon: <IcPoiDocExpiry />, text: 'Must be valid for at least 6 months' },
];

export const ManualFormFooter = () => (
    <div className='grid grid-cols-2 justify-items-center items-center gap-1200 lg:flex lg:justify-evenly'>
        {FOOTER_ITEMS.map(footer => (
            <div className='w-[12.4rem] flex flex-col justify-start items-center' key={footer.text}>
                <div className='flex justify-center items-center w-3600 h-3600'>{footer.icon}</div>
                <WalletText align='center' size='2xs'>
                    {footer.text}
                </WalletText>
            </div>
        ))}
    </div>
);