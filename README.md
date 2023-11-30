# maquetteLemonInteractive
- accueil.html : Le fichier HTML principal contenant la structure de la page.
- accueil.css : Le fichier CSS qui gère la mise en page, le style et la responsivité.
- accueil.js : Le fichier JavaScript qui implémente certaines fonctionnalités dynamiques.
- menu.html : Le fichier HTML principal contenant la structure du navigateur.
- menu.css : Le fichier CSS qui gère la mise en page, le style et la responsivité du navigateur.

## Choix de Conception
# Header
La partie header de la page inclut des éléments de navigation tels que le logo, un menu déroulant. 
Le "logo" à l'image principale du site, et "changer" à une autre icône.
Une liste non ordonnée contient des liens de navigation, et la section de connexion présente une icône suivie des liens "Login" et "Register". 
Les images sont soigneusement organisées dans le dossier "/image/header/".
L'utilisation de classes facilite le stylage avec des règles CSS spécifiques, contribuant ainsi à une conception modulaire et maintenable.

# Section 1
À l'intérieur de la classes Section1, il y a une boîte principale ("box1") qui contient des éléments tels qu'un titre, un sous-titre, et un paragraphe de texte. 
La "box1" est divisée en trois parties. La première partie ("box2") contient des informations textuelles, la deuxième partie ("box3") comporte une image avec des éléments supplémentaires tels qu'une boîte d'information présentant des textes et des images.
Les images utilisées sont tirées du dossier "/image/Section1/".
L'utilisation de classes permet une stylisation spécifique à chaque élément, contribuant ainsi à une conception structurée et organisée.

# Section 2
À l'intérieur de la classes Section2, il y a quatre boîtes ("boxUn" et "boxDeux" alternées) qui contiennent chacune une image, un titre , et un paragraphe de texte. 
Les images utilisées sont extraites du dossier "/image/Section2/".
Cette conception modulaire permet une présentation visuellement structurée du contenu, facilitant la gestion et la stylisation. 
Les classes attribuées à chaque boîte permettent une application de styles spécifiques, contribuant ainsi à une mise en page esthétique et organisée.

# Section 3
 À l'intérieur de la classes SEction3, deux divs principales sont présentes. 
 La première, avec la classe "content-box", contient des titres ainsi qu'un paragraphe de texte descriptif. 
 La deuxième div, avec la classe "image-box", contient une boîte verte ("green-box") et deux images positionnées de manière spécifique.
 Ces images, extraites du dossier "/image/Section3/".
 L'utilisation de classes distinctes facilite la stylisation et le positionnement spécifique de chaque élément, contribuant ainsi à une présentation visuelle cohérente et attrayante.

# Section 4
À l'intérieur de la classes Section4, deux divs principales sont présentes. 
La première, avec la classe "ecriture", contient un titre composé de plusieurs lignes avec un mot spécifique mis en évidence grâce à une balise <span>. 
Une autre div, avec la classe "fleche", contient deux images de flèches pour la navigation, et ces images sont liées à des fonctions JavaScript (changeContent(-1) et changeContent(1)).
La deuxième div, avec la classe "pers", contient plusieurs divs avec la classe "contenu". 
Chaque paragraphe est structuré avec une image de profil, des informations d'en-tête (nom et rôle), suivi d'un paragraphe de texte . 
Les images de profil sont extraites du dossier "/image/Section4/". 
Enfin, le fichier JavaScript "accueil.js" est inclus pour la gestion des fonctions liées à la navigation afin de voir toutes les personnes. 
L'utilisation de classes distinctes pour chaque élément facilite la stylisation et le positionnement spécifique, contribuant ainsi à une présentation visuelle cohérente et attrayante.

# Footer
Le Footer est divisée en trois parties distinctes. 
La première partie, avec la classe "partHaut", comporte deux sous-divs, "partGauche" et "partDroite". 
La "partGauche" contient un titre, suivi de deux paragraphes. 
La "partDroite" est subdivisée en plusieurs listes déroulantes (ul) regroupant des liens vers différentes sections du site, comme "Home", "Courses", "Instructors".
Ensuite, une image est incluse (<img>) avec la source. 
La deuxième partie, avec la classe "partiBas", présente un titre, constituée d'une boîte de texte pour l'adresse e-mail et un bouton "Subscribe". 
La structure du code est claire, utilisant des classes pour organiser les éléments et faciliter la stylisation CSS. 
Cela offre une présentation cohérente et un accès intuitif aux différentes sections du site depuis le pied de page.

### Structure HTML
Le fichier HTML suit une structure claire avec différentes sections pour le header, les différentes parties du contenu, et le footer.

### Style CSS
Le fichier CSS utilise des sélecteurs clairs et des classes bien nommées pour styliser la page. La conception est responsive grâce à des règles spécifiques aux médias.

### JavaScript
Le script JavaScript est utilisé pour changer dynamiquement le contenu de certaines parties de la page. Il utilise des fonctions pour afficher deux éléments actifs à la fois.

### Responsive Design
Le design est adaptatif avec des règles CSS spécifiques pour les écrans de petite taille (inférieurs à 500px).
