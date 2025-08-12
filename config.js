// File: klaro-config.js (Versione Definitiva)

var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro-farmacielanzani',
    cookieExpiresAfterDays: 365,
    lang: 'it',
    default: false, 
    mustConsent: true, 
    noticeAsModal: false, 
    notice: {
        layout: 'bar',
        position: 'bottom',
    },
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
                // Il testo del link per aprire il pannello delle preferenze
                learnMore: 'Personalizza', 
            },
            
            // TESTI DEI PULSANTI
            acceptAll: 'Accetta tutti', // Testo per il pulsante di accettazione totale
            accept: 'Salva le preferenze', // Testo per il pulsante di salvataggio nel pannello
            decline: 'Rifiuta', // Testo per il pulsante di rifiuto
            
            purposes: {
                analytics: 'Analisi del traffico',
                styling: 'Stile del sito',
                // Aggiungi altre finalità se necessario
            },
            service: {
                // ...altre traduzioni di servizio...
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