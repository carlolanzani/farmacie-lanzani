var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro-farmacielanzani',
    cookieExpiresAfterDays: 365,
    lang: 'it',
    
    default: false, 
    

    mustConsent: false, 
    
    // Confermiamo che vogliamo un banner, non un pop-up.
    noticeAsModal: false, 

    // Impostazioni del banner
    notice: {
        layout: 'bar',
        position: 'bottom',
    },

    // Il resto della configurazione rimane invariato
    acceptAll: true, 
    hideDeclineAll: false,

    translations: {
        it: {
            consentModal: {
                title: 'Informazioni che raccogliamo',
                description: 'Qui puoi visualizzare e personalizzare le informazioni che raccogliamo su di te. Per saperne di più, leggi la nostra informativa sulla privacy.',
                privacyPolicy: {
                    text: 'Per saperne di più, si prega di leggere la nostra {privacyPolicy}.',
                    name: 'informativa sulla privacy',
                    url: '/informativa-privacy.html' 
                },
            },
            consentNotice: {
                description: 'Utilizziamo i cookie per migliorare la tua esperienza sul sito. Puoi accettarli tutti o personalizzare le tue preferenze.',
                learnMore: 'Gestisci preferenze', 
            },
            

            acceptAll: 'Accetta tutti', 
            accept: 'Salva le preferenze', 
            decline: 'Rifiuta', 
            
            purposes: {
                analytics: 'Analisi del traffico',
                styling: 'Stile del sito',
            },
        },
    },

    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [ /^_ga_/, /_ga/, /_gid/, /_gat/ ],
            required: false,
            optOut: false,
            description: 'Servizio di analisi che ci aiuta a capire come i visitatori interagiscono con il sito in forma anonima.',
        },
        {
            name: 'google-fonts',
            title: 'Google Fonts',
            purposes: ['styling'],
            cookies: [],
            required: false,
            optOut: false,
            onlyOnce: true,
            description: 'Caricamento di font da domini Google (fonts.googleapis.com / fonts.gstatic.com).',
        },
    ],
};