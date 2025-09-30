// <!-- projet:site web proffessionel du cabinet le BAISSEUR
//  DATE de debut:21/01/2025
//  CODE PAR :M.KYM Marius KOUYOE
//  FONCTION:Programmeur en chef et PDG chez AKYM tech industries
//  PROJET MODIFIE LE:
//  _22/01/2025
//  _25/01/2025
//  _29/01/2025
//  _02/02/2025
//  _04/02/2025
//  _31/03/2025
//  css/style_a_propos.css
// -->
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/css/style _b.css";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
function First() {
  return (
    <div className="body">
     <Navbar currentpage={"accueil"}/>
      <h1>
        soyez les Bienvenu sur le site du Cabinet Architecturale et de
        construction LE BATISSEUR
      </h1>
      <p className="para0">
        NOUS vous remercions d'avoir choisi la qualite en optant pour LE
        BATISSEUR
      </p>

      <p ClassName="para1">
        nous sommes specialise dans la realisation d'habitat residentielle de
        qualite
      </p>
      <div ClassName="p0">
        <div ClassName="p1">
          <img src="/4.jpg" alt="" height="400" />
        </div>
        <div ClassName="p2">
          <ul>
            <li>
              Bienvenue chez Le Bâtisseur <br />
            </li>
            <p>
              Cabinet Architecturale et de Construction Le Bâtisseur vous
              accompagne dans la conception et la réalisation de <br />
              vos projets architecturaux, du rêve à la concrétisation. Alliant
              créativité, rigueur technique et conscience environnementale, nous
              concevons des espaces qui allient esthétique, fonctionnalité et
              durabilité. <br />
              Qu’il s’agisse de bâtiments résidentiels, commerciaux ou
              institutionnels, chaque projet est pour nous une œuvre unique,
              façonnée à votre image. <br />
              Notre approche repose sur des valeurs fortes : <br />
            </p>
            <li>
              🔹 Écoute et collaboration <br />
            </li>
            <li>
              🔹 Innovation et performance <br />
            </li>
            <li>
              🔹 Respect des délais et des budgets <br />
            </li>
            <li>
              🔹 Qualité architecturale et constructive <br />
            </li>
            <p>
              Chez Le Bâtisseur, nous ne construisons pas que des murs. <br />
              Nous bâtissons des lieux de vie, d’échange et d’avenir
            </p>
          </ul>
        </div>
        
      </div>

      <em ClassName="para4">notre vision :</em>
      <p ClassName="para5">
        vous ouvrir les portes d'un <strong>Habitat</strong>
      </p>

      <div ClassName="para6">
        <ul>
          <li>
            <img
              src="/acceiullan.png"
              alt="Habitat acceuillant"
              height="500"
              width="300"
            />
            <p>
              <span>acceuillant</span>
              <br />
              un Espace habitable avec un acceuill somptieux , Des espaces de
              bien etre absolu Un espace qui vous ouvre les bras. <br />
              Nos conceptions offrent des entrées lumineuses, chaleureuses et
              modernes. Un lieu où chaque visite commence avec confort et
              sérénité. <br />
              Nous concevons des espaces où la lumière, les matières nobles et
              les volumes apaisants créent une première impression inoubliable.
              .
            </p>
          </li>
          <li>
            <p>
              <span>resistant</span>
              <br />
              Solide dans le temps; Grâce à des matériaux robustes comme le
              béton armé et l’acier, nos réalisations assurent stabilité et
              longévité, même face aux défis du temps <br />
              avec une collaboration etroite avec les concepteurs de materiaux
              de constrution nous assurons a nos client une Architecture
              resistant hyper solide pour une meilleur rentabilite de vos
              investissements.
              <br />
              Pensé pour dure , Construit pour résister. <br />
              Au-delà de la beauté, la solidité. Nous fusionnons ingénierie et
              esthétique pour bâtir des structures fiables, sûres, prêtes à
              défier les années et les élément
            </p>
            <img
              src="/resitant.png"
              alt="resistant"
              height="500"
              width="500"
            />
          </li>
          <li>
            <img
              src="/performant.jpg"
              alt="performant"
              height="500"
              width="500"
            />
            <p>
              <span>performant</span>
              <br />
              Une architecture intelligente et efficace. <br />
              L'intelligence dans chaque détail. <br />
              Nos bâtiments intègrent des solutions technologiques de pointe
              pour maximiser le confort, optimiser l’énergie et anticiper les
              usages de demain. Parce qu’un bon design est aussi un design
              intelligent.
              <br />
              Nous intégrons les dernières technologies pour optimiser le
              confort, la consommation énergétique et les performances globales
              du bâtiments <br />
              un habitat performant avec des ressources divertifier
            </p>
          </li>
          <li>
            <p>
              <span>ecologique</span>
              <br />
              Construire avec la nature, pas contre elle. <br />
              Nos projets favorisent les matériaux durables, l’intégration
              paysagère et les solutions vertes pour un avenir plus sain. <br />
              Vivre en harmonie / avec son environnement. <br />
              Nous croyons en une architecture qui respecte la nature: <br />
              Matériaux durables, intégration paysagère, performances
              énergétiques : chaque projet est un pas vers un avenir plus vert
            </p>
            <img
              src="/ecolo.png"
              alt="ecologique"
              height="500"
              width="300"
            />
          </li>
          <li>
            <img
              src="/aunoa.png"
              alt="autonomme"
              height="500"
              width="300"
            />
            <p>
              <span>autonomme</span>
              <br />
            </p>
          </li>
          Des formes épurées, des matériaux choisis avec soin, et des plans
          optimisés pour réduire les coûts sans sacrifier la qualité.
        </ul>
      </div>
      <img
        src="/5.jpg"
        alt=" "
        width="800"
        height="500"
      />
<Footer></Footer>
      
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </div>      
  
    
  );
}
export default First;
