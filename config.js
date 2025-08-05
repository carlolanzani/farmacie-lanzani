// File: klaro-config.js

// Per default, Klaro caricherà la configurazione da una variabile globale "klaroConfig".
// Questo file definisce tale variabile.

var klaroConfig = {
    // ID dell'elemento dove Klaro disegnerà il banner.
    elementID: 'klaro',

    // Metodo di salvataggio delle preferenze. 'cookie' è l'impostazione predefinita e consigliata.
    storageMethod: 'cookie',

    // Nome del cookie in cui verranno salvate le preferenze.
    cookieName: 'klaro-farmacielanzani',

    // Durata del cookie di consenso in giorni.
    cookieExpiresAfterDays: 365,

    // Lingua predefinita dell'interfaccia di Klaro.
    lang: 'it',

    // Se 'true', l'utente deve fornire un consenso esplicito prima di poter navigare.
    // È la scelta più sicura per la conformità al GDPR.
    mustConsent: true,

    // Impostazione per nascondere il pulsante "Rifiuta tutti".
    // Spesso si preferisce mostrare solo "Accetta" e "Personalizza".
    hideDeclineAll: false,

    // Stato predefinito per i servizi. 'false' significa che sono disattivati di default.
    default: false,

    // Se 'true', il banner viene mostrato come una finestra modale che blocca il resto della pagina.
    noticeAsModal: true,

    // Traduzioni personalizzate per l'interfaccia in italiano.
    translations: {
        it: {
            consentModal: {
                title: 'Informazioni che raccogliamo',
                description: 'Qui puoi visualizzare e personalizzare le informazioni che raccogliamo su di te. Per saperne di più, leggi la nostra informativa sulla privacy.',
                privacyPolicy: {
                    // Assicurati che il link punti alla tua pagina della privacy policy
                    text: 'Per saperne di più, si prega di leggere la nostra {privacyPolicy}.',
                    name: 'informativa sulla privacy',
                    url: '/informativa-privacy.html' 
                },
            },
            consentNotice: {
                description: 'Questo sito utilizza i cookie per migliorare la tua esperienza. Premi "Accetta" per continuare o "Personalizza" per gestire le tue preferenze.',
                learnMore: 'Personalizza',
            },
            acceptAll: 'Accetta tutti',
            accept: 'Accetta selezionati',
            decline: 'Rifiuta',
            close: 'Chiudi',
            purposes: {
                necessary: 'Strettamente necessari',
                analytics: 'Analisi del traffico',
                styling: 'Stile del sito',
            },
            service: {
                disableAll: {
                    title: 'Disattiva tutti i servizi',
                },
                optOut: {
                    title: '(opt-out)',
                    description: 'Questo servizio è caricato di default (ma puoi disattivarlo)',
                },
                required: {
                    title: '(sempre richiesto)',
                    description: 'Questo servizio è necessario per il corretto funzionamento del sito.',
                },
            },
        },
    },

    // Elenco dei servizi di terze parti gestiti da Klaro.
    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            // Klaro cercherà e cancellerà i cookie che corrispondono a queste espressioni regolari
            cookies: [ /^_ga_/, /_ga/, /_gid/, /_gat/ ],
            required: false,
            optOut: false,
            description: 'Servizio di analisi del traffico web fornito da Google che ci aiuta a capire come i visitatori interagiscono con il sito in forma anonima.',
        },
        // Aggiungi qui altri servizi se necessario
    ],
};