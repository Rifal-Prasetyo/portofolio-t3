'use client'
import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { Flag } from '@phosphor-icons/react/dist/ssr';
import { redirect } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';


const LanguageMenu: React.FC = () => {
    const t = useTranslations();
    const currentLocale = useLocale();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (lang: string) => {
        void redirect({
            href: '/',
            locale: lang
        });
        handleClose();
    };

    return (
        <>
            <Button
                startIcon={<Flag />}
                onClick={handleClick}
                className='bg-secondary-dark shadow-sm shadow-primary-dark'
            >
                {t('Lang.title')}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => handleLanguageChange('id')}>
                    <ListItemText primary={t('Lang.indonesia')} />
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange('en')}>
                    <ListItemText primary={t('Lang.english')} />
                </MenuItem>
                {
                    currentLocale && currentLocale === 'jp' && (
                        <MenuItem onClick={() => handleLanguageChange('jp')}>
                            <ListItemText primary={t('Lang.japan')} />
                        </MenuItem>
                    )
                }
            </Menu>
        </>
    );
};

export default LanguageMenu;
