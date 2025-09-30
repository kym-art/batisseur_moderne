import Navbar from "../component/Navbar";
import Footer from "../component/footer";

function Service() {
  return (
    <div>
      
             <Navbar currentpage={"services"}   />
            
        <p>
         le cabinet architecturale LE BATISSEUR vous accompagne dans toutes les
         etapes de realisations de vos projets d'habitats
       </p>
       <p>
         notre equipe es donc dispose a vous rendre une game tres varier de
         services
       </p>
       <div class="serv_1">
         <ul>
           <li>ARCHITECTURE</li>
           <p></p>
           <ul class="a">
             <img src="/IMG-20250206-WA0009.jpg" alt="" />
             <img src="/IMG-20250206-WA0008.jpg" alt="" />
           </ul>

           <li>SUIVIS ET CONTROLE</li>
           <p></p>

           <img src="/IMG-20250206-WA0005.jpg" alt="suivi" />
           <img src="/visit.jpg" alt="" />
           <p></p>
           <li>CONSTRUCTION</li>
           <p class="f1">
             <img src="/IMG-20250206-WA0004.jpg" alt="" />
           </p>

           <img src="/IMG-20250206-WA0006.jpg" alt="" />
           <p></p>
           <li>FORMATION</li>
           <p></p>
           <img
             src="/IMG-20250206-WA0006.jpg"
             height="400"
             width="400"
           />
           <p></p>
           <li>GESTION IMMOBILIERE</li>
           <p></p>
           <img src="" alt="" />
         </ul>
       </div>

       <p>
         Nous disposons d'une main d'oeuvres qualifier et d'expert en matiere
         de construction
       </p>
       <p>
         NOUS disposons egalement de praticiens experimente en matiere de
         construction
       </p>
       <div class="serv_2">
         <ul>
           <li>DES Maçons</li>
           <li>ferralleurs</li>
           <li>plombiers ,electriciens ,charpentiers,...............</li>
         </ul>
       </div>
       <p>
         TOUS des maitre de leur domaine ayant fait leur preuves sur plusieurs
         de nos realisations
       </p>

       <p class="e2">
         <a href="le batisseur web realisations.html">
           {" "}
           voir nos realisations
         </a>
       </p>
       <Footer></Footer>
      
    </div>
  );
}
export default Service;
