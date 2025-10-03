var klaroConfig = {
    // ID dell'elemento HTML in cui verrà renderizzato Klaro!.
    // Assicurati di avere un <div id="klaro"></div> nel tuo HTML.
    elementID: 'klaro',

    // Metodo di archiviazione del consenso. 'cookie' è lo standard.
    storageMethod: 'cookie',

    // Nome del cookie in cui verrà salvato il consenso.
    cookieName: 'klaro-farmacielanzani',

    // Durata del cookie di consenso in giorni.
    cookieExpiresAfterDays: 365,

    // Lingua predefinita.
    lang: 'it',
    
    // Stato predefinito per tutti i servizi (tranne quelli 'required').
    // 'false' significa che sono tutti disattivati di default (opt-in). Questo è corretto per il GDPR.
    default: false, 
    
    // Se 'true', l'utente deve interagire con il banner prima di usare il sito.
    // Questa è la modifica chiave per garantire che una scelta venga sempre fatta.
    mustConsent: false, 
    
    // Se 'true', il banner viene mostrato come una finestra modale (pop-up) al centro della pagina.
    // È più efficace quando mustConsent è true.
    noticeAsModal: false, 
    
    // Mostra il pulsante "Accetta tutti".
    acceptAll: true, 
    
    // Non nascondere il pulsante "Rifiuta".
    hideDeclineAll: false,

    // Traduzioni e testi personalizzati per l'interfaccia.
    translations: {
        it: {
            consentModal: {
                title: 'Informazioni che raccogliamo',
                description: 'Qui puoi visualizzare e personalizzare le informazioni che raccogliamo su di te.',
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
                styling: 'Funzionalità e Stile',
            },
        },
    },

    // Elenco dei servizi che richiedono il consenso.
    services: [
        {
            // Il 'name' DEVE corrispondere all'attributo 'data-klaro-service' nel tuo HTML.
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            
            // Espressioni regolari per identificare i cookie impostati da questo servizio.
            cookies: [ /^_ga_/, /_ga/, /_gid/, /_gat/ ],
            
            // Non è un servizio essenziale per il funzionamento del sito.
            required: false,

            // L'utente deve dare un consenso esplicito (opt-in).
            optOut: false,
            
            description: 'Servizio di analisi che ci aiuta a capire come i visitatori interagiscono con il sito in forma anonima e aggregata.',
        },
        {
            name: 'google-fonts',
            title: 'Google Fonts',
            purposes: ['styling'],
            cookies: [],
            required: false,
            optOut: false,
            onlyOnce: true, // Questo servizio viene eseguito solo una volta per caricamento pagina.
            description: 'Servizio per caricare caratteri tipografici personalizzati per migliorare l\'aspetto grafico del sito.',
        },
    ],
};