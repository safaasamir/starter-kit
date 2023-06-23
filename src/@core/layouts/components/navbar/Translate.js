import React from 'react';
import { useTranslation } from 'react-i18next';


const Translate = () => {

    const [t, i18n ]  = useTranslation();
    return (
        <div>
            {i18n.language == 'ar' && <a onClick={()=>i18n.changeLanguage('en')} className='primary p-1 mx-1 '>En</a>}
            {i18n.language == 'en' &&  <a  onClick={()=>i18n.changeLanguage('ar')} className='warning p-1 '>Ar </a>}
        </div>
    );
}

export default Translate;

