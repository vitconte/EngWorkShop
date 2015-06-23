# EngWorkShop
<H2>INSTALLAZIONE</H2>
<ul>
<li>Scaricare il progetto da github <a href="https://github.com/vitconte/EngWorkShop">https://github.com/vitconte/EngWorkShop</a></li>
<li>Installare node.js (<a href="https://nodejs.org/">https://nodejs.org/</a>)</li>
<li>Usare node per l'installazione dei relativi package (attenzione è necessaria la connessione a internet):</li>
  <ul>
  <li>aprire la console</li>
  <li>andare nella cartella del progetto</li>
  <li>eseguire il comando <code>npm install</code></li>
  </ul>
</li>
</ul>

<h2>USO</h2>
<ul>
  <li>Aprire la console</li>
  <li>Andare nella cartella del progetto</li>
  <li>Avviare il server tramite il comando <code>node server.js</code> e prestare attenzione al numero porta su cui si mette in scolto</li>
  <li>Aprire il browser all'indirizzo <code>localhost:numeroPorta</code> dove numeroPorta è il numero della porta che viene visualizzato al passaggio precedente</li>
</ul>

<h2>PROVARE L'HTML ROUTING</h2>
Per provare l'Html Routing commentare e decommentare le parti indicate con appositi commenti all'interno dei file index.html e app.js

<h2>SERVER COMMUNICATION</h2>
Nella pagina creaContatto-controller e dettaglioContatto-controller ci sono esempi d'uso del servizio $resource.</br>
Nella pagina rubrica-controller ci sono esempi d'uso del servizio $http.

<h2>PROVARE ACCESSIBILITA</h2>
<h3>Markup validator w3c</h3> 
Usare il servizio: <a href="https://validator.w3.org">https://validator.w3.org</a></br>
E' possibile provare il risultato con o senza data attribute "data-" anteposti alle direttive.</br>
Per testare con e senza seguire i commenti inseriti in index.html</br>
Non in tutte le pagine il codice è stato reso w3c compliante. Risulta sicuramente validata il crea contatto.</br>
Si consiglia di copiare l'HTML della pagina direttamente dal browser e fare la prova.</br>

<h3>Screen Reader</h3> 
Scaricare un qualsiasi screen reader. Durante l'esercitazione abbiamo usato l'estensione per chrome ChromeVox.
Testarlo sulla pagina crea contatto decommentando il codice indicato nella pagina stessa.
