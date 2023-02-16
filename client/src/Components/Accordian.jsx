import React from "react";
import ContactForm from "./ContactForm";

const Accordian = () => {
  return (
    <div>
      <div className="accordian-container">
        <div className="heading">
          <h2>Per chiarirti ogni dubbio</h2>
          <h3>Domande e dubbi frequenti</h3>
          <div className="line mx-auto my-5"></div>
        </div>

        <div class="accordion container" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Perché installare un antenna 5g?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#headingOne"
            >
              <div class="accordion-body">
                <p>
                  Non richiede alcuno sforzo (facciamo tutto noi) e non
                  interferisce con la tua attività. Lasciandoci utilizzare la
                  tua copertura o il tuo terreno per la realizzazione
                  dell’impianto potrai percepire i proventi derivanti dalla
                  locazione dell’area oppure beneficiare di servizi e/o
                  forniture di vario genere.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Quanto tempo richiede l’installazione ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  L’installazione richiede dai 90 ai 180 giorni. Ma non temere,
                  ci occuperemo di tutto noi.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Ma è conveniente installare un antenna 5g ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Certo, potrai far fruttare, con un canone di locazione di
                  lungo periodo, terreni e spazi inutilizzati.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Cosa dovrei fare ?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Dopo aver inserito i tuoi dati attraverso la procedura
                  guidata, verrai contattato da un nostro esperto, che
                  raccoglierà ulteriori informazioni. Verrà effettuata un
                  analisi sull’area segnalata e se risultasse di interesse,
                  organizzeremo un sopralluogo. Successivamente ci occuperemo
                  completamente noi di ogni aspetto, recando il minimo disturbo
                  alla tua attività.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Mi sta sfuggendo qualcosa ?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Una volta raccolte le informazioni necessarie, ti sottoporremo
                  un’offerta in cui saranno indicate in modo chiaro tutte le
                  condizioni e garanzie, per permetterti di valutare in tutta
                  serenità questa opportunità, e rimarremo a tua disposizione
                  per qualsiasi chiarimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<ContactForm />
      <div className="small-section 
      d-flex justify-content-center align-items-center text-center py-3">
        <div className="heading">
          <h3 className="mt-4 fw-bold">
            L'innovazione tecnologica sta aprendo nuove porte e creando
            opportunità senza limiti.
          </h3>
          <p className="mt-3">Anche tu puoi contribuire al progetto</p>
          <p className="mt-4">
            Guadagna dalla locazione del tuo terreno inutilizzato.
          </p>
          <button className="primary_btn btn py-2 mt-3">
            Scopri se il tuo terreno è idoneo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
