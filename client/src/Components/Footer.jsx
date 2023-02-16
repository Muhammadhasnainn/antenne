import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer mt-3">
      <footer className="">
        <div className="canvas row justify-content-between align-items-center">
          <div className="col-md-6 col-12 my-4">
            <img src={logo} alt="footerLogo" className="w-50" />
            <div className="my-4">
              <p>TECH CONSULTING</p>
              <p>SOCIETA' A RESPONSABILITA' LIMITATA SEMPLIFICATA</p>
              <p>
                INTERMEDIAZIONE servizi di telecomunicazione e trasmissione dati
              </p>
              <p>P.IVA 01925980938</p>
              <div className="d-flex gap-2 my-4">
                <button
                  title="Privacy Policy"
                  className="fBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Privacy
                </button>
                <button title="Cookie Policy" className="fBtn"
                data-bs-toggle="modal" 
                data-bs-target="#cookieModal">
                  Cookie
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex gap-3 align-items-center justify-content-center text-center">
              <a
                href="https://www.facebook.com/antenne5g.it"
                target="_blank"
                className="icon py-2 px-2"
              >
                <BsFacebook className="h3 my-auto" />
              </a>
              <a
                href="https://www.instagram.com/antenne5g.it/"
                target="_blank"
                className="icon py-2 px-2"
              >
                <BsInstagram className="h3 my-auto" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Privacy Policy di www.antenne5g.it
                </h1>
                <p className="text-muted">
                  Questo Sito Web raccoglie alcuni Dati Personali dei propri
                  Utenti.
                </p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Questo documento può essere stampato utilizzando il comando di
                stampa presente nelle impostazioni di qualsiasi browser.
              </p>
              <p className="mt-3">
                Titolare del Trattamento dei Dati TECH CONSULTING s.r.l.s <br />
                P.iva 01925980938
                <br />
                Indirizzo email del Titolare: antenne5gitalia@gmail.com
                <br />
                Tipologie di Dati raccolti
                <br />
                Fra i Dati Personali raccolti da questo Sito Web, in modo
                autonomo o tramite terze parti, ci sono: email; Cookie; Dati di
                utilizzo.
              </p>
              <p className="mt-3">
                Dettagli completi su ciascuna tipologia di dati raccolti sono
                forniti nelle sezioni dedicate di questa privacy policy o
                mediante specifici testi informativi visualizzati prima della
                raccolta dei dati stessi. I Dati Personali possono essere
                liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo,
                raccolti automaticamente durante l'uso di questo Sito Web. Se
                non diversamente specificato, tutti i Dati richiesti da questo
                Sito Web sono obbligatori. Se l’Utente rifiuta di comunicarli,
                potrebbe essere impossibile per questo Sito Web fornire il
                Servizio. Nei casi in cui questo Sito Web indichi alcuni Dati
                come facoltativi, gli Utenti sono liberi di astenersi dal
                comunicare tali Dati, senza che ciò abbia alcuna conseguenza
                sulla disponibilità del Servizio o sulla sua operatività. Gli
                Utenti che dovessero avere dubbi su quali Dati siano
                obbligatori, sono incoraggiati a contattare il Titolare.
                L’eventuale utilizzo di Cookie - o di altri strumenti di
                tracciamento - da parte di questo Sito Web o dei titolari dei
                servizi terzi utilizzati da questo Sito Web, ove non
                diversamente precisato, ha la finalità di fornire il Servizio
                richiesto dall'Utente, oltre alle ulteriori finalità descritte
                nel presente documento e nella Cookie Policy, se disponibile.
                L'Utente si assume la responsabilità dei Dati Personali di terzi
                ottenuti, pubblicati o condivisi mediante questo Sito Web e
                garantisce di avere il diritto di comunicarli o diffonderli,
                liberando il Titolare da qualsiasi responsabilità verso terzi.
                Modalità e luogo del trattamento dei Dati raccolti Modalità di
                trattamento Il Titolare adotta le opportune misure di sicurezza
                volte ad impedire l’accesso, la divulgazione, la modifica o la
                distruzione non autorizzate dei Dati Personali. Il trattamento
                viene effettuato mediante strumenti informatici e/o telematici,
                con modalità organizzative e con logiche strettamente correlate
                alle finalità indicate. Oltre al Titolare, in alcuni casi,
                potrebbero avere accesso ai Dati altri soggetti coinvolti
                nell’organizzazione di questo Sito Web (personale
                amministrativo, commerciale, marketing, legali, amministratori
                di sistema) ovvero soggetti esterni (come fornitori di servizi
                tecnici terzi, corrieri postali, hosting provider, società
                informatiche, agenzie di comunicazione) nominati anche, se
                necessario, Responsabili del Trattamento da parte del Titolare.
                L’elenco aggiornato dei Responsabili potrà sempre essere
                richiesto al Titolare del Trattamento. Base giuridica del
                trattamento Il Titolare tratta Dati Personali relativi
                all’Utente in caso sussista una delle seguenti condizioni:
                l’Utente ha prestato il consenso per una o più finalità
                specifiche; Nota: in alcuni ordinamenti il Titolare può essere
                autorizzato a trattare Dati Personali senza che debba sussistere
                il consenso dell’Utente o un’altra delle basi giuridiche
                specificate di seguito, fino a quando l’Utente non si opponga
                (“opt-out”) a tale trattamento. Ciò non è tuttavia applicabile
                qualora il trattamento di Dati Personali sia regolato dalla
                legislazione europea in materia di protezione dei Dati
                Personali; il trattamento è necessario all'esecuzione di un
                contratto con l’Utente e/o all'esecuzione di misure
                precontrattuali; il trattamento è necessario per adempiere un
                obbligo legale al quale è soggetto il Titolare; il trattamento è
                necessario per l'esecuzione di un compito di interesse pubblico
                o per l'esercizio di pubblici poteri di cui è investito il
                Titolare; il trattamento è necessario per il perseguimento del
                legittimo interesse del Titolare o di terzi. È comunque sempre
                possibile richiedere al Titolare di chiarire la concreta base
                giuridica di ciascun trattamento ed in particolare di
                specificare se il trattamento sia basato sulla legge, previsto
                da un contratto o necessario per concludere un contratto. Luogo
                I Dati sono trattati presso le sedi operative del Titolare ed in
                ogni altro luogo in cui le parti coinvolte nel trattamento siano
                localizzate. Per ulteriori informazioni, contatta il Titolare. I
                Dati Personali dell’Utente potrebbero essere trasferiti in un
                paese diverso da quello in cui l’Utente si trova. Per ottenere
                ulteriori informazioni sul luogo del trattamento l’Utente può
                fare riferimento alla sezione relativa ai dettagli sul
                trattamento dei Dati Personali. L’Utente ha diritto a ottenere
                informazioni in merito alla base giuridica del trasferimento di
                Dati al di fuori dell’Unione Europea o ad un’organizzazione
                internazionale di diritto internazionale pubblico o costituita
                da due o più paesi, come ad esempio l’ONU, nonché in merito alle
                misure di sicurezza adottate dal Titolare per proteggere i Dati.
                L’Utente può verificare se abbia luogo uno dei trasferimenti
                appena descritti esaminando la sezione di questo documento
                relativa ai dettagli sul trattamento di Dati Personali o
                chiedere informazioni al Titolare contattandolo agli estremi
                riportati in apertura. Periodo di conservazione I Dati sono
                trattati e conservati per il tempo richiesto dalle finalità per
                le quali sono stati raccolti. Pertanto: I Dati Personali
                raccolti per scopi collegati all’esecuzione di un contratto tra
                il Titolare e l’Utente saranno trattenuti sino a quando sia
                completata l’esecuzione di tale contratto. I Dati Personali
                raccolti per finalità riconducibili all’interesse legittimo del
                Titolare saranno trattenuti sino al soddisfacimento di tale
                interesse. L’Utente può ottenere ulteriori informazioni in
                merito all’interesse legittimo perseguito dal Titolare nelle
                relative sezioni di questo documento o contattando il Titolare.
                Quando il trattamento è basato sul consenso dell’Utente, il
                Titolare può conservare i Dati Personali più a lungo sino a
                quando detto consenso non venga revocato. Inoltre, il Titolare
                potrebbe essere obbligato a conservare i Dati Personali per un
                periodo più lungo in ottemperanza ad un obbligo di legge o per
                ordine di un’autorità. Al termine del periodo di conservazione i
                Dati Personali saranno cancellati. Pertanto, allo spirare di
                tale termine il diritto di accesso, cancellazione,
                rettificazione ed il diritto alla portabilità dei Dati non
                potranno più essere esercitati. Finalità del Trattamento dei
                Dati raccolti I Dati dell’Utente sono raccolti per consentire al
                Titolare di fornire il Servizio, adempiere agli obblighi di
                legge, rispondere a richieste o azioni esecutive, tutelare i
                propri diritti ed interessi (o quelli di Utenti o di terze
                parti), individuare eventuali attività dolose o fraudolente,
                nonché per le seguenti finalità: Gestione dei database di
                Utenti, Pubblicità, Statistica, Remarketing e behavioral
                targeting, Gestione dei tag, Heat mapping e registrazione
                sessioni e Gestione delle richieste di supporto e contatto. Per
                ottenere informazioni dettagliate sulle finalità del trattamento
                e sui Dati Personali trattati per ciascuna finalità, l’Utente
                può fare riferimento alla sezione “Dettagli sul trattamento dei
                Dati Personali”. Dettagli sul trattamento dei Dati Personali I
                Dati Personali sono raccolti per le seguenti finalità ed
                utilizzando i seguenti servizi: Gestione dei database di Utenti
                Questo tipo di servizi permettono al Titolare di costruire
                profili utente partendo da un indirizzo email, il nome o
                qualunque altra informazione che l'Utente fornisce a questo Sito
                Web, così come di tracciare le attività dell'Utente tramite
                funzionalità statistiche. Questi Dati Personali potrebbero
                inoltre venire incrociati con informazioni sull'Utente
                disponibili pubblicamente (come i profili sui social network) ed
                usati per costruire profili privati che il Titolare può
                visualizzare ed utilizzare per migliorare questo Sito Web.
                Alcuni di questi servizi potrebbero inoltre permettere l'invio
                programmato di messaggi all'Utente, come email basate su azioni
                specifiche compiute su questo Sito Web. ActiveCampaign
                (ActiveCampaign, Inc.) ActiveCampaign è un servizio di gestione
                dei database di Utenti fornito da ActiveCampaign, Inc. Dati
                Personali trattati: Cookie; email; varie tipologie di Dati
                secondo quanto specificato dalla privacy policy del servizio.
                Luogo del trattamento: Stati Uniti – Privacy Policy. ZOHO CRM
                (ZOHO Corporation B.V) ZOHO CRM è un servizio di gestione dei
                database di Utenti fornito da ZOHO Corporation B.V. Dati
                Personali trattati: email; varie tipologie di Dati secondo
                quanto specificato dalla privacy policy del servizio. Luogo del
                trattamento: Paesi Bassi – Privacy Policy. Gestione dei tag
                Questo tipo di servizi è funzionale alla gestione centralizzata
                dei tag o script utilizzati su questo Sito Web. L'uso di tali
                servizi comporta il fluire dei Dati dell'Utente attraverso gli
                stessi e, se del caso, la loro ritenzione. Google Tag Manager
                (Google Ireland Limited) Google Tag Manager è un servizio di
                gestione dei tag fornito da Google Ireland Limited. Dati
                Personali trattati: Cookie; Dati di utilizzo. Luogo del
                trattamento: Irlanda – Privacy Policy. Gestione delle richieste
                di supporto e contatto Questo tipo di servizi permette a questo
                Sito Web di gestire le richieste di supporto e contatto
                pervenute tramite email o tramite altri strumenti, come il form
                di contatto. I Dati Personali trattati dipendono dalle
                informazioni fornite dall’Utente all’interno dei messaggi e
                dallo strumento utilizzato per la comunicazione (ad esempio
                l’indirizzo email). ZOHO CRM Email (ZOHO Corporation B.V) ZOHO
                CRM Email è un servizio gestione delle richieste di supporto e
                contatto fornito da ZOHO Corporation B.V. Dati Personali
                trattati: varie tipologie di Dati secondo quanto specificato
                dalla privacy policy del servizio. Luogo del trattamento: Paesi
                Bassi – Privacy Policy. Heat mapping e registrazione sessioni I
                servizi di heat mapping sono utilizzati per individuare quali
                aree di una pagina sono oggetto del passaggio del cursore o di
                click del mouse in modo da rilevare quali di esse attraggono il
                maggior interesse. Questi servizi permettono di monitorare e
                analizzare i dati di traffico e servono a tener traccia del
                comportamento dell’Utente. Alcuni di questi servizi potrebbero
                registrare le sessioni e renderle disponibili per visualizzarle
                in seguito. Hotjar Heat Maps & Recordings (Hotjar Ltd.) Hotjar è
                un servizio di heat mapping e di registrazione delle sessioni
                fornito da Hotjar Ltd. Hotjar rispetta gli header generici „Do
                Not Track”. Questo significa che il browser può indicare allo
                script di non raccogliere alcun dato dell’Utente. Si tratta di
                un'impostazione che è disponibile in tutti i principali browser.
                Maggiori Informazioni sull'opt-out da Hotjar sono disponibili
                qui. Dati Personali trattati: Cookie; Dati di utilizzo; varie
                tipologie di Dati secondo quanto specificato dalla privacy
                policy del servizio. Luogo del trattamento: Malta – Privacy
                Policy – Opt Out. Pubblicità Questo tipo di servizi consente di
                utilizzare i Dati dell’Utente per finalità di comunicazione
                commerciale. Queste comunicazioni sono mostrate su questo Sito
                Web sotto forma di banner e altre forme pubblicitarie, anche in
                relazione agli interessi dell’Utente. Ciò non significa che
                tutti i Dati Personali vengano utilizzati per questa finalità.
                Dati e condizioni di utilizzo sono indicati di seguito. Alcuni
                dei servizi di seguito indicati potrebbero utilizzare Strumenti
                di Tracciamento per identificare l’Utente o utilizzare la
                tecnica del behavioral retargeting, ossia visualizzare annunci
                pubblicitari personalizzati in base agli interessi e al
                comportamento dell’Utente, rilevati anche al di fuori di questo
                Sito Web. Per avere maggiori informazioni in merito, ti
                suggeriamo di verificare le informative privacy dei rispettivi
                servizi. Generalmente i servizi di questo tipo offrono la
                possibilità di disattivare tale tracciamento. Oltre a qualsiasi
                funzione di opt-out fornita da uno qualsiasi dei servizi
                elencati in questo documento, l’Utente può leggere di più su
                come disattivare gli annunci pubblicitari basati sugli interessi
                nell'apposita sezione "Come disattivare la pubblicità basata
                sugli interessi" in questo documento. Pubblico simile di
                Facebook (Facebook, Inc.) Pubblico simile di Facebook è un
                servizio di advertising e di targeting comportamentale fornito
                da Facebook, Inc. che utilizza i Dati raccolti attraverso il
                servizio Pubblico personalizzato di Facebook al fine di mostrare
                annunci pubblicitari a Utenti con comportamenti simili a Utenti
                che sono già in una lista di Pubblico personalizzato sulla base
                del loro precedente utilizzo di questo Sito Web o della loro
                interazione con contenuti rilevanti attraverso le applicazioni e
                i servizi di Facebook. Sulla base di questi Dati, gli annunci
                personalizzati saranno mostrati agli Utenti suggeriti da
                Pubblico simile di Facebook. Gli Utenti possono scegliere di non
                utilizzare i cookie di Facebook per la personalizzazione degli
                annunci visitando questa pagina di opt-out . Dati Personali
                trattati: Cookie; Dati di utilizzo. Luogo del trattamento: Stati
                Uniti – Privacy Policy – Opt Out. Remarketing e behavioral
                targeting Questo tipo di servizi consente a questo Sito Web ed
                ai suoi partner di comunicare, ottimizzare e servire annunci
                pubblicitari basati sull'utilizzo passato di questo Sito Web da
                parte dell'Utente. Questa attività è facilitata dal tracciamento
                dei Dati di Utilizzo e dall'utilizzo di Strumenti di
                Tracciamento per raccogliere informazioni che vengono poi
                trasferite ai partner che gestiscono le attività di remarketing
                e di behavioral targeting. Alcuni servizi offrono un'opzione di
                remarketing basata sulle liste di indirizzi email. In aggiunta
                alle funzionalità di opt-out offerte dai servizi di seguito
                riportati, l'Utente può effettuare l’opt-out visitando la pagina
                di opt-out della Network Advertising Initiative. Gli Utenti
                possono anche scegliere di non partecipare a determinate
                funzionalità pubblicitarie attraverso le corrispondenti opzioni
                di configurazione del dispositivo, come le opzioni di
                configurazione pubblicitaria del dispositivo mobile o la
                configurazione pubblicitaria generica. Facebook Remarketing
                (Facebook, Inc.) Facebook Remarketing è un servizio di
                remarketing e behavioral targeting fornito da Facebook, Inc. che
                collega l'attività di questo Sito Web con il network di
                advertising Facebook. Dati Personali trattati: Cookie; Dati di
                utilizzo. Luogo del trattamento: Stati Uniti – Privacy Policy –
                Opt Out. Remarketing Google Ads (Google Ireland Limited)
                Remarketing Google Ads è un servizio di remarketing e behavioral
                targeting fornito da Google Ireland Limited che collega
                l'attività di questo Sito Web con il network di advertising
                Google Ads ed il Cookie DoubleClick. Gli Utenti possono
                scegliere di non utilizzare i cookie di Google per la
                personalizzazione degli annunci visitando le Impostazioni
                annunci di Google. Dati Personali trattati: Cookie; Dati di
                utilizzo. Luogo del trattamento: Irlanda – Privacy Policy – Opt
                Out. Statistica I servizi contenuti nella presente sezione
                permettono al Titolare del Trattamento di monitorare e
                analizzare i dati di traffico e servono a tener traccia del
                comportamento dell’Utente. Monitoraggio conversioni di Facebook
                Ads (pixel di Facebook) (Facebook, Inc.) Il monitoraggio
                conversioni di Facebook Ads (pixel di Facebook) è un servizio di
                statistiche fornito da Facebook, Inc. che collega i dati
                provenienti dal network di annunci Facebook con le azioni
                compiute all'interno di questo Sito Web. Il pixel di Facebook
                monitora le conversioni che possono essere attribuite alle
                inserzioni di Facebook, Instagram e Audience Network. Dati
                Personali trattati: Cookie; Dati di utilizzo. Luogo del
                trattamento: Stati Uniti – Privacy Policy. Google Analytics
                (Google Ireland Limited) Google Analytics è un servizio di
                analisi web fornito da Google Ireland Limited (“Google”). Google
                utilizza i Dati Personali raccolti allo scopo di tracciare ed
                esaminare l’utilizzo di questo Sito Web, compilare report e
                condividerli con gli altri servizi sviluppati da Google. Google
                potrebbe utilizzare i Dati Personali per contestualizzare e
                personalizzare gli annunci del proprio network pubblicitario.
                Dati Personali trattati: Cookie; Dati di utilizzo. Luogo del
                trattamento: Irlanda – Privacy Policy – Opt Out. Hotjar Form
                Analysis & Conversion Funnels (Hotjar Ltd.) Hotjar è un servizio
                di statistica fornito da Hotjar Ltd. Hotjar rispetta gli header
                generici „Do Not Track”. Questo significa che il browser può
                indicare allo script di non raccogliere alcun dato dell’Utente.
                Si tratta di un'impostazione che è disponibile in tutti i
                principali browser. Maggiori Informazioni sull'opt-out da Hotjar
                sono disponibili qui. Dati Personali trattati: Cookie; Dati di
                utilizzo. Luogo del trattamento: Malta – Privacy Policy – Opt
                Out. Informazioni su come disattivare gli annunci pubblicitari
                basati sugli interessi Oltre a qualsiasi funzione di opt-out
                fornita da uno qualsiasi dei servizi elencati in questo
                documento, gli Utenti possono leggere di più su come disattivare
                gli annunci pubblicitari basati sugli interessi nell'apposita
                sezione della Cookie Policy. Diritti dell’Utente Gli Utenti
                possono esercitare determinati diritti con riferimento ai Dati
                trattati dal Titolare. In particolare, l’Utente ha il diritto
                di: revocare il consenso in ogni momento. L’Utente può revocare
                il consenso al trattamento dei propri Dati Personali
                precedentemente espresso. opporsi al trattamento dei propri
                Dati. L’Utente può opporsi al trattamento dei propri Dati quando
                esso avviene su una base giuridica diversa dal consenso.
                Ulteriori dettagli sul diritto di opposizione sono indicati
                nella sezione sottostante. accedere ai propri Dati. L’Utente ha
                diritto ad ottenere informazioni sui Dati trattati dal Titolare,
                su determinati aspetti del trattamento ed a ricevere una copia
                dei Dati trattati. verificare e chiedere la rettificazione.
                L’Utente può verificare la correttezza dei propri Dati e
                richiederne l’aggiornamento o la correzione. ottenere la
                limitazione del trattamento. Quando ricorrono determinate
                condizioni, l’Utente può richiedere la limitazione del
                trattamento dei propri Dati. In tal caso il Titolare non
                tratterà i Dati per alcun altro scopo se non la loro
                conservazione. ottenere la cancellazione o rimozione dei propri
                Dati Personali. Quando ricorrono determinate condizioni,
                l’Utente può richiedere la cancellazione dei propri Dati da
                parte del Titolare. ricevere i propri Dati o farli trasferire ad
                altro titolare. L’Utente ha diritto di ricevere i propri Dati in
                formato strutturato, di uso comune e leggibile da dispositivo
                automatico e, ove tecnicamente fattibile, di ottenerne il
                trasferimento senza ostacoli ad un altro titolare. Questa
                disposizione è applicabile quando i Dati sono trattati con
                strumenti automatizzati ed il trattamento è basato sul consenso
                dell’Utente, su un contratto di cui l’Utente è parte o su misure
                contrattuali ad esso connesse. proporre reclamo. L’Utente può
                proporre un reclamo all’autorità di controllo della protezione
                dei dati personali competente o agire in sede giudiziale.
                Dettagli sul diritto di opposizione Quando i Dati Personali sono
                trattati nell’interesse pubblico, nell’esercizio di pubblici
                poteri di cui è investito il Titolare oppure per perseguire un
                interesse legittimo del Titolare, gli Utenti hanno diritto ad
                opporsi al trattamento per motivi connessi alla loro situazione
                particolare. Si fa presente agli Utenti che, ove i loro Dati
                fossero trattati con finalità di marketing diretto, possono
                opporsi al trattamento senza fornire alcuna motivazione. Per
                scoprire se il Titolare tratti dati con finalità di marketing
                diretto gli Utenti possono fare riferimento alle rispettive
                sezioni di questo documento. Come esercitare i diritti Per
                esercitare i diritti dell’Utente, gli Utenti possono indirizzare
                una richiesta agli estremi di contatto del Titolare indicati in
                questo documento. Le richieste sono depositate a titolo gratuito
                e evase dal Titolare nel più breve tempo possibile, in ogni caso
                entro un mese. Cookie Policy Questo Sito Web fa utilizzo di
                Strumenti di Tracciamento. Per saperne di più, l’Utente può
                consultare la Cookie Policy. Ulteriori informazioni sul
                trattamento Difesa in giudizio I Dati Personali dell’Utente
                possono essere utilizzati da parte del Titolare in giudizio o
                nelle fasi preparatorie alla sua eventuale instaurazione per la
                difesa da abusi nell'utilizzo di questo Sito Web o dei Servizi
                connessi da parte dell’Utente. L’Utente dichiara di essere
                consapevole che il Titolare potrebbe essere obbligato a rivelare
                i Dati per ordine delle autorità pubbliche. Informative
                specifiche Su richiesta dell’Utente, in aggiunta alle
                informazioni contenute in questa privacy policy, questo Sito Web
                potrebbe fornire all'Utente delle informative aggiuntive e
                contestuali riguardanti Servizi specifici, o la raccolta ed il
                trattamento di Dati Personali. Log di sistema e manutenzione Per
                necessità legate al funzionamento ed alla manutenzione, questo
                Sito Web e gli eventuali servizi terzi da essa utilizzati
                potrebbero raccogliere log di sistema, ossia file che registrano
                le interazioni e che possono contenere anche Dati Personali,
                quali l’indirizzo IP Utente. Informazioni non contenute in
                questa policy Ulteriori informazioni in relazione al trattamento
                dei Dati Personali potranno essere richieste in qualsiasi
                momento al Titolare del Trattamento utilizzando gli estremi di
                contatto. Risposta alle richieste “Do Not Track” Questo Sito Web
                non supporta le richieste “Do Not Track”. Per scoprire se gli
                eventuali servizi di terze parti utilizzati le supportino,
                l'Utente è invitato a consultare le rispettive privacy policy.
                Modifiche a questa privacy policy Il Titolare del Trattamento si
                riserva il diritto di apportare modifiche alla presente privacy
                policy in qualunque momento notificandolo agli Utenti su questa
                pagina e, se possibile, su questo Sito Web nonché, qualora
                tecnicamente e legalmente fattibile, inviando una notifica agli
                Utenti attraverso uno degli estremi di contatto di cui è in
                possesso. Si prega dunque di consultare con frequenza questa
                pagina, facendo riferimento alla data di ultima modifica
                indicata in fondo. Qualora le modifiche interessino trattamenti
                la cui base giuridica è il consenso, il Titolare provvederà a
                raccogliere nuovamente il consenso dell’Utente, se necessario.
                Definizioni e riferimenti legali Dati Personali (o Dati)
                Costituisce dato personale qualunque informazione che,
                direttamente o indirettamente, anche in collegamento con
                qualsiasi altra informazione, ivi compreso un numero di
                identificazione personale, renda identificata o identificabile
                una persona fisica. Dati di Utilizzo Sono le informazioni
                raccolte automaticamente attraverso questo Sito Web (anche da
                applicazioni di parti terze integrate in questo Sito Web), tra
                cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati
                dall’Utente che si connette con questo Sito Web, gli indirizzi
                in notazione URI (Uniform Resource Identifier), l’orario della
                richiesta, il metodo utilizzato nell’inoltrare la richiesta al
                server, la dimensione del file ottenuto in risposta, il codice
                numerico indicante lo stato della risposta dal server (buon
                fine, errore, ecc.) il paese di provenienza, le caratteristiche
                del browser e del sistema operativo utilizzati dal visitatore,
                le varie connotazioni temporali della visita (ad esempio il
                tempo di permanenza su ciascuna pagina) e i dettagli relativi
                all’itinerario seguito all’interno dell’Applicazione, con
                particolare riferimento alla sequenza delle pagine consultate,
                ai parametri relativi al sistema operativo e all’ambiente
                informatico dell’Utente. Utente L'individuo che utilizza questo
                Sito Web che, salvo ove diversamente specificato, coincide con
                l'Interessato. Interessato La persona fisica cui si riferiscono
                i Dati Personali. Responsabile del Trattamento (o Responsabile)
                La persona fisica, giuridica, la pubblica amministrazione e
                qualsiasi altro ente che tratta dati personali per conto del
                Titolare, secondo quanto esposto nella presente privacy policy.
                Titolare del Trattamento (o Titolare) La persona fisica o
                giuridica, l'autorità pubblica, il servizio o altro organismo
                che, singolarmente o insieme ad altri, determina le finalità e i
                mezzi del trattamento di dati personali e gli strumenti
                adottati, ivi comprese le misure di sicurezza relative al
                funzionamento ed alla fruizione di questo Sito Web. Il Titolare
                del Trattamento, salvo quanto diversamente specificato, è il
                titolare di questo Sito Web. Questo Sito Web (o questa
                Applicazione) Lo strumento hardware o software mediante il quale
                sono raccolti e trattati i Dati Personali degli Utenti. Servizio
                Il Servizio fornito da questo Sito Web così come definito nei
                relativi termini (se presenti) su questo sito/applicazione.
                Unione Europea (o UE) Salvo ove diversamente specificato, ogni
                riferimento all’Unione Europea contenuto in questo documento si
                intende esteso a tutti gli attuali stati membri dell’Unione
                Europea e dello Spazio Economico Europeo. Cookie I Cookie sono
                Strumenti di Tracciamento che consistono in piccole porzioni di
                dati conservate all'interno del browser dell'Utente. Strumento
                di Tracciamento Per Strumento di Tracciamento s’intende
                qualsiasi tecnologia - es. Cookie, identificativi univoci, web
                beacons, script integrati, e-tag e fingerprinting - che consenta
                di tracciare gli Utenti, per esempio raccogliendo o salvando
                informazioni sul dispositivo dell’Utente. Riferimenti legali La
                presente informativa privacy è redatta sulla base di molteplici
                ordinamenti legislativi, inclusi gli artt. 13 e 14 del
                Regolamento (UE) 2016/679. Ove non diversamente specificato,
                questa informativa privacy riguarda esclusivamente questo Sito
                Web.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>


<div class="modal fade" id="cookieModal" tabindex="-1" aria-labelledby="cookieModalLabel"
 aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cookie Policy di www.antenne5g.it</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
Questo documento contiene informazioni in merito alle tecnologie che consentono a questo Sito Web di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l’utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell’Utente quando quest’ultimo interagisce con questo Sito Web.

Per semplicità, in questo documento tali tecnologie sono sinteticamente definite “Strumenti di Tracciamento”, salvo vi sia ragione di differenziare.
Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser. Per questo motivo, all’interno di questo documento il termine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.

Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre richiedere il consenso dell’Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.

Questo Sito Web utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente detti Strumenti di Tracciamento “di prima parte”) e Strumenti di Tracciamento che abilitano servizi forniti da terzi (comunemente detti Strumenti di Tracciamento “di terza parte”). Se non diversamente specificato all’interno di questo documento, tali terzi hanno accesso ai rispettivi Strumenti di Tracciamento.
Durata e scadenza dei Cookie e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell’Utente.
In aggiunta a quanto specificato nella descrizione di ciascuna delle categorie di seguito riportate, gli Utenti possono ottenere informazioni più dettagliate ed aggiornate sulla durata, così come qualsiasi altra informazione rilevante - quale la presenza di altri Strumenti di Tracciamento - nelle privacy policy dei rispettivi fornitori terzi (tramite i link messi a disposizione) o contattando il Titolare.

Attività strettamente necessarie a garantire il funzionamento di questo Sito Web e la fornitura del Servizio
Questo Sito Web utilizza Cookie comunemente detti “tecnici” o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.

Strumenti di Tracciamento di terza parte
Gestione dei tag
Questo tipo di servizi è funzionale alla gestione centralizzata dei tag o script utilizzati su questo Sito Web.
L'uso di tali servizi comporta il fluire dei Dati dell'Utente attraverso gli stessi e, se del caso, la loro ritenzione.

Google Tag Manager (Google Ireland Limited)
Google Tag Manager è un servizio di gestione dei tag fornito da Google Ireland Limited.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Irlanda – Privacy Policy.

Altre attività che prevedono l’utilizzo di Strumenti di Tracciamento
Interazioni e funzionalità semplici
Questo Sito Web utilizza Strumenti di Tracciamento per consentire semplici interazioni e attivare funzionalità che permettono agli Utenti di accedere a determinate risorse del Servizio e semplificano la comunicazione con il Titolare.

Gestione dei database di Utenti
Questo tipo di servizi permettono al Titolare di costruire profili utente partendo da un indirizzo email, il nome o qualunque altra informazione che l'Utente fornisce a questo Sito Web, così come di tracciare le attività dell'Utente tramite funzionalità statistiche. Questi Dati Personali potrebbero inoltre venire incrociati con informazioni sull'Utente disponibili pubblicamente (come i profili sui social network) ed usati per costruire profili privati che il Titolare può visualizzare ed utilizzare per migliorare questo Sito Web.
Alcuni di questi servizi potrebbero inoltre permettere l'invio programmato di messaggi all'Utente, come email basate su azioni specifiche compiute su questo Sito Web.

ActiveCampaign (ActiveCampaign, Inc.)
ActiveCampaign è un servizio di gestione dei database di Utenti fornito da ActiveCampaign, Inc.
Dati Personali trattati: Cookie, email e varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.

Luogo del trattamento: Stati Uniti – Privacy Policy.

Durata di archiviazione:

ac_enable_tracking: 1 mese
Misurazione
Questo Sito Web utilizza Strumenti di Tracciamento per misurare il traffico e analizzare il comportamento degli Utenti con l'obiettivo di migliorare il Servizio.

Heat mapping e registrazione sessioni
I servizi di heat mapping sono utilizzati per individuare quali aree di una pagina sono oggetto del passaggio del cursore o di click del mouse in modo da rilevare quali di esse attraggono il maggior interesse. Questi servizi permettono di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente.
Alcuni di questi servizi potrebbero registrare le sessioni e renderle disponibili per visualizzarle in seguito.

Hotjar Heat Maps & Recordings (Hotjar Ltd.)
Hotjar è un servizio di heat mapping e di registrazione delle sessioni fornito da Hotjar Ltd.
Hotjar rispetta gli header generici „Do Not Track”. Questo significa che il browser può indicare allo script di non raccogliere alcun dato dell’Utente. Si tratta di un'impostazione che è disponibile in tutti i principali browser. Maggiori Informazioni sull'opt-out da Hotjar sono disponibili qui.
Dati Personali trattati: Cookie, Dati di utilizzo e varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.

Luogo del trattamento: Malta – Privacy Policy – Opt Out.

Durata di archiviazione:

_hjAbsoluteSessionInProgress: 30 minuti
_hjCachedUserAttributes: durata della sessione
_hjClosedSurveyInvites: 1 anno
_hjDonePolls: 1 anno
_hjFirstSeen: durata della sessione
_hjIncludedInPageviewSample: 30 minuti
_hjIncludedInSessionSample: 30 minuti
_hjLocalStorageTest: durata della sessione
_hjLocalStorageTest: durata della sessione
_hjMinimizedPolls: 1 anno
_hjRecordingEnabled: durata della sessione
_hjRecordingLastActivity: durata della sessione
_hjSession*: 30 minuti
_hjSessionRejected: durata della sessione
_hjSessionResumed: durata della sessione
_hjSessionTooLarge: durata della sessione
_hjSessionUser*: 1 anno
_hjShownFeedbackMessage: 1 anno
_hjTLDTest: durata della sessione
_hjUserAttributesHash: durata della sessione
_hjViewportId: durata della sessione
_hjid: 1 anno
Statistica
I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente.

Monitoraggio conversioni di Facebook Ads (pixel di Facebook) (Facebook, Inc.)
Il monitoraggio conversioni di Facebook Ads (pixel di Facebook) è un servizio di statistiche fornito da Facebook, Inc. che collega i dati provenienti dal network di annunci Facebook con le azioni compiute all'interno di questo Sito Web. Il pixel di Facebook monitora le conversioni che possono essere attribuite alle inserzioni di Facebook, Instagram e Audience Network.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Stati Uniti – Privacy Policy.

Durata di archiviazione:

_fbp: 3 mesi
fr: 3 mesi
Google Analytics (Google Ireland Limited)
Google Analytics è un servizio di analisi web fornito da Google Ireland Limited (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google.
Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Irlanda – Privacy Policy – Opt Out.

Durata di archiviazione:

AMP_TOKEN: 1 ora
_ga: 2 anni
_gac*: 3 mesi
_gat: 1 minuto
_gid: 1 giorno
Hotjar Form Analysis & Conversion Funnels (Hotjar Ltd.)
Hotjar è un servizio di statistica fornito da Hotjar Ltd.
Hotjar rispetta gli header generici „Do Not Track”. Questo significa che il browser può indicare allo script di non raccogliere alcun dato dell’Utente. Si tratta di un'impostazione che è disponibile in tutti i principali browser. Maggiori Informazioni sull'opt-out da Hotjar sono disponibili qui.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Malta – Privacy Policy – Opt Out.

Durata di archiviazione:

_hjAbsoluteSessionInProgress: 30 minuti
_hjCachedUserAttributes: durata della sessione
_hjClosedSurveyInvites: 1 anno
_hjDonePolls: 1 anno
_hjFirstSeen: durata della sessione
_hjIncludedInPageviewSample: 30 minuti
_hjIncludedInSessionSample: 30 minuti
_hjLocalStorageTest: durata della sessione
_hjMinimizedPolls: 1 anno
_hjRecordingEnabled: durata della sessione
_hjRecordingLastActivity: durata della sessione
_hjSession*: 30 minuti
_hjSessionRejected: durata della sessione
_hjSessionResumed: durata della sessione
_hjSessionTooLarge: durata della sessione
_hjSessionUser*: 1 anno
_hjShownFeedbackMessage: 1 anno
_hjTLDTest: durata della sessione
_hjUserAttributesHash: durata della sessione
_hjViewportId: durata della sessione
_hjid: 1 anno
Targeting e Pubblicità
Questo Sito Web utilizza Strumenti di Tracciamento per fornire contenuti commerciali personalizzati in base al comportamento dell'Utente e per gestire, diffondere e tracciare annunci pubblicitari.

Pubblicità
Questo tipo di servizi consente di utilizzare i Dati dell’Utente per finalità di comunicazione commerciale. Queste comunicazioni sono mostrate su questo Sito Web sotto forma di banner e altre forme pubblicitarie, anche in relazione agli interessi dell’Utente.
Ciò non significa che tutti i Dati Personali vengano utilizzati per questa finalità. Dati e condizioni di utilizzo sono indicati di seguito.
Alcuni dei servizi di seguito indicati potrebbero utilizzare Strumenti di Tracciamento per identificare l’Utente o utilizzare la tecnica del behavioral retargeting, ossia visualizzare annunci pubblicitari personalizzati in base agli interessi e al comportamento dell’Utente, rilevati anche al di fuori di questo Sito Web. Per avere maggiori informazioni in merito, ti suggeriamo di verificare le informative privacy dei rispettivi servizi.
Generalmente i servizi di questo tipo offrono la possibilità di disattivare tale tracciamento. Oltre a qualsiasi funzione di opt-out fornita da uno qualsiasi dei servizi elencati in questo documento, l’Utente può leggere di più su come disattivare gli annunci pubblicitari basati sugli interessi nell'apposita sezione "Come disattivare la pubblicità basata sugli interessi" in questo documento.

Pubblico simile di Facebook (Facebook, Inc.)
Pubblico simile di Facebook è un servizio di advertising e di targeting comportamentale fornito da Facebook, Inc. che utilizza i Dati raccolti attraverso il servizio Pubblico personalizzato di Facebook al fine di mostrare annunci pubblicitari a Utenti con comportamenti simili a Utenti che sono già in una lista di Pubblico personalizzato sulla base del loro precedente utilizzo di questo Sito Web o della loro interazione con contenuti rilevanti attraverso le applicazioni e i servizi di Facebook.
Sulla base di questi Dati, gli annunci personalizzati saranno mostrati agli Utenti suggeriti da Pubblico simile di Facebook. Gli Utenti possono scegliere di non utilizzare i cookie di Facebook per la personalizzazione degli annunci visitando questa pagina di opt-out .
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Stati Uniti – Privacy Policy – Opt Out.

Durata di archiviazione:

_fbp: 3 mesi
Remarketing e behavioral targeting
Questo tipo di servizi consente a questo Sito Web ed ai suoi partner di comunicare, ottimizzare e servire annunci pubblicitari basati sull'utilizzo passato di questo Sito Web da parte dell'Utente.
Questa attività è facilitata dal tracciamento dei Dati di Utilizzo e dall'utilizzo di Strumenti di Tracciamento per raccogliere informazioni che vengono poi trasferite ai partner che gestiscono le attività di remarketing e di behavioral targeting.
Alcuni servizi offrono un'opzione di remarketing basata sulle liste di indirizzi email.
In aggiunta alle funzionalità di opt-out offerte dai servizi di seguito riportati, l'Utente può effettuare l’opt-out visitando la pagina di opt-out della Network Advertising Initiative.

Gli Utenti possono anche scegliere di non partecipare a determinate funzionalità pubblicitarie attraverso le corrispondenti opzioni di configurazione del dispositivo, come le opzioni di configurazione pubblicitaria del dispositivo mobile o la configurazione pubblicitaria generica.

Facebook Remarketing (Facebook, Inc.)
Facebook Remarketing è un servizio di remarketing e behavioral targeting fornito da Facebook, Inc. che collega l'attività di questo Sito Web con il network di advertising Facebook.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Stati Uniti – Privacy Policy – Opt Out.

Durata di archiviazione:

_fbp: 3 mesi
Remarketing Google Ads (Google Ireland Limited)
Remarketing Google Ads è un servizio di remarketing e behavioral targeting fornito da Google Ireland Limited che collega l'attività di questo Sito Web con il network di advertising Google Ads ed il Cookie DoubleClick. Gli Utenti possono scegliere di non utilizzare i cookie di Google per la personalizzazione degli annunci visitando le Impostazioni annunci di Google.
Dati Personali trattati: Cookie e Dati di utilizzo.

Luogo del trattamento: Irlanda – Privacy Policy – Opt Out.

Durata di archiviazione:

AID: 2 anni
ANID: 2 anni
Conversion: 3 mesi
DSID: 14 giorni
FCNEC: 1 anno
FLC: 10 secondi
FPAU: 3 mesi
FPGCLAW: 3 mesi
FPGCLDC: 3 mesi
FPGCLGB: 3 mesi
IDE: 2 anni
NID: 6 mesi
RUL: 1 anno
TAID: 14 giorni
__gads: 2 anni
__gsas: 2 anni
_gac_: 3 mesi
_gac_gb_: 3 mesi
_gcl_au: 3 mesi
_gcl_aw: 3 mesi
_gcl_dc: 3 mesi
_gcl_gb: 3 mesi
_gcl_gf: 3 mesi
_gcl_ha: 3 mesi
id: 2 anni
test_cookie: 15 minuti
Come gestire le preferenze e prestare o revocare il consenso
Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:

Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi - per esempio, possono impedire l’uso o l’archiviazione di Strumenti di Tracciamento.

In aggiunta, ogni qualvolta l’utilizzo di Strumenti di Tracciamento dipenda da consenso, l’Utente può prestare o revocare tale consenso impostando le proprie preferenze all’interno dell’informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.

Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati.

Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione.

Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le preferenze e revocare il consenso visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattandola direttamente.

Individuare le impostazioni relative agli Strumenti di Tracciamento
Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi ai seguenti indirizzi:

Google Chrome
Mozilla Firefox
Apple Safari
Microsoft Internet Explorer
Microsoft Edge
Brave
Opera
Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del dispositivo per individuare quella pertinente).

Come disattivare la pubblicità basata sugli interessi
Fermo restando quanto precede, si informano gli Utenti della possibilità di avvalersi delle informazioni presenti su YourOnlineChoices (EU), Network Advertising Initiative (USA) e Digital Advertising Alliance (USA), DAAC (Canada), DDAI (Giappone) o altri servizi analoghi. Con questi servizi è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia agli Utenti di utilizzare tali risorse in aggiunta alle informazioni fornite nel presente documento.

La Digital Advertising Alliance mette inoltre a disposizione un’applicazione chiamata AppChoices che aiuta gli Utenti a controllare la pubblicità comportamentale sulle applicazioni mobili.

Conseguenze del rifiuto del consenso
Gli Utenti sono liberi di decidere se prestare o meno il consenso. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questo Sito Web di fornire una migliore esperienza e funzionalità avanzate agli Utenti (in linea con le finalità delineate nel presente documento). Pertanto, in assenza del consenso dell'Utente, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.

Titolare del Trattamento dei Dati
TECH CONSULTING s.r.l.s 
P.iva 01925980938
Indirizzo email del Titolare: antenne5gitalia@gmail.com
Dal momento che l’uso di Strumenti di Tracciamento di terza parte su questo Sito Web non può essere completamente controllato dal Titolare, ogni riferimento specifico a Strumenti di Tracciamento di terza parte è da considerarsi indicativo. Per ottenere informazioni complete, gli Utenti sono gentilmente invitati a consultare la privacy policy dei rispettivi servizi terzi elencati in questo documento.

Data l'oggettiva complessità di identificazione delle tecnologie di tracciamento, gli Utenti sono invitati a contattare il Titolare qualora volessero ricevere ulteriori informazioni in merito all'utilizzo di tali tecnologie su questo Sito Web.

Definizioni e riferimenti legali
Dati Personali (o Dati)
Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.

Dati di Utilizzo
Sono le informazioni raccolte automaticamente attraverso questo Sito Web (anche da applicazioni di parti terze integrate in questo Sito Web), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questo Sito Web, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.

Utente
L'individuo che utilizza questo Sito Web che, salvo ove diversamente specificato, coincide con l'Interessato.

Interessato
La persona fisica cui si riferiscono i Dati Personali.

Responsabile del Trattamento (o Responsabile)
La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.

Titolare del Trattamento (o Titolare)
La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questo Sito Web. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questo Sito Web.

Questo Sito Web (o questa Applicazione)
Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.

Servizio
Il Servizio fornito da questo Sito Web così come definito nei relativi termini (se presenti) su questo sito/applicazione.

Unione Europea (o UE)
Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.

Cookie
I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.

Strumento di Tracciamento
Per Strumento di Tracciamento s’intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.

Riferimenti legali
La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.

Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questo Sito Web.

      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Footer;
