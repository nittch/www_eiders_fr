+++
title = "Connaissance d'aéronefs"
weight = 2
+++

<style>
  .grille{
    display: grid;
    grid-template-columns: 20% 40% 40%;
  }

  .titre_generation {
    grid-column: 1 / 4;
  }

  .aeronef {
    grid-column: 1;

  }

  .aeronef .titre .drapeau{
    font-size: large;
  }

  .aeronef .titre .marque {
    color: grey;
    font-family: sans-serif;
  }

  .aeronef .titre .modele {
    font-size: large;
    font-family: sans-serif;
  }

  .aeronef .titre .date {
    color: grey;
  }

  .aeronef .titre .type {
    color: grey;
  }

  .aeronef .caracteristique {
    padding-right: 0.2em;
    text-align: right;

    color: grey;
  }

  .aeronef p {
    padding-left: 2em;
  }

  .avec_module_dcs {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, grey 0%, white 90%) 1;

    padding: 5px;
  }

  .reportages {
    grid-column: 2;

    padding: 0.2em;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, white 80%, grey 100%) 1;
  }

  .images {
    grid-column: 3;

    padding: 0.2em;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, grey 0%, white 20%) 1;
  }
</style>

Il est commun de classer les jets par [génération](https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rations_des_avions_de_combat), ici nous suivons la classification Wikipédia (inspirée d'Aerospaceweb).

<div class="grille">

<div class="titre_generation">
<h2>Vieux coucous (Warbirds)</h2>
<p>1935-1952 : avions militaires à hélices.</p>
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Messerschmitt" "Bf 109" "1937" >}}
{{< exemplaires 34852 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "LfklgwVE0TA" >}} <!-- Yataka -->
{{< ressource-video-youtube "22tVIa2BPu8" >}} <!-- La 2nd Guerre Mondiale -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Hurricane" "1937" "chasseur bombardier" >}}
{{< exemplaires 14583 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "DO2cqqm1y0c" >}} <!-- Cap Aviation -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "Supermarine" "Spitfire" "1938" >}}
{{< exemplaires 20351 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "5OzJw4u5bRw" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "hgI4Y8yTpds" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":jp:" "Mitsubishi" "A6M Zéro" "1940" "chasseur-bombardier léger, embarqué" >}}
{{< exemplaires 10939 >}}
<p>Très maniable, une grande puissance de feu mais aucun blindage.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "Mal9vqxk7N4" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F4F Wildcat" "1940" "embarqué" >}}
{{< exemplaires 7885 >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-1" "1940" >}}
{{< exemplaires 8734 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "P-40 Warhawk" "1940" >}}
{{< exemplaires 13738 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "F29Z9qh3U9I" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Bf 110" "1940" "chasseur lourd et bombardier" >}}
{{< exemplaires 6150 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Bell" "P-39 Airacobra" "1941" >}}
{{< exemplaires 9584 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "uuONOqGRL7M" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-38 Lightning" "1941" "chasseur lourd" >}}
{{< exemplaires 10037 >}}
<p>bimoteur bipoutre, long rayon d'action</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "V3ZEiCpdxf8" >}} <!-- Yataka -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Focke-Wulf" "Fw 190" "1941" "chasseur lourd et bombardier" >}}
{{< exemplaires 20051 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "bBwTnfL6aOE" >}} <!-- Imineo -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "de Havilland" "DH.98 Mosquito" "1941" "chasseur bombardier" >}}
{{< exemplaires 7781 >}}
{{< caracteristique "faible signature radar car en bois" >}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Typhoon" "1941" "chasseur bombardier" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Lavochkin-Gorbunov-Gudkov" "LaGG-3" "1941" >}}
{{< exemplaires 6258 >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Republic" "P-47 Thunderbolt" "1942" "chasseur lourd et bombardier" >}}
{{< exemplaires 15660 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "tsyOuQcjVmg" >}} <!-- Yataka -->
{{< ressource-video-youtube "HJo7n54LhEA" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "9WktioQKTzU" >}} <!-- La 2nd Guerre Mondiale -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "P-51 Mustang" "1942" "chasseur" >}}
{{< exemplaires 15586 >}}
<p>Souvent utilisé en escorteur grâce à son long rayon d'action.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "XT0qKOfhqac" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Chance Vought" "F4U Corsair" "1942" "chasseur bombardier embarqué" >}}
{{< exemplaires 12571 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "uiGvpu7WXhI" >}} <!-- Yataka -->
{{< ressource-video-youtube "6j9VJpGZQZ0" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "g3lwvONfKWA" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-9" "1942" >}}
{{< exemplaires 16769 >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine" "La-5" "1942" >}}
{{< exemplaires 9920 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F6F Hellcat" "1943" "embarqué" >}}
{{< exemplaires 12275 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "ka-w3--0TlA" >}} <!-- Cap Aviation -->
{{< ressource-video-youtube "jBYl0WwIYLI" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Tempest" "1944" "chasseur bombardier" >}}
</div>

<div class="titre_generation">
<h2>Chasseurs jets première génération</h2>
<p>1942-1950 : semblable aux chasseurs à motopropulseurs à explosions, poussée limitée des premiers moteurs à réaction, subsoniques, radar rares, armement classique ou conventionnel (canons, bombes, roquettes). <ul>
<li />Utilisation d'ailes en flèche pour approcher le mur du son (mais sans grande manœvrabilité), dédiés à l'interception ou la supériorité aérienne (exemples: MiG-15 ou F-86).</p>
</ul>
</div>

<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Me 262" "1944" "chasseur-bombardier">}}
<p>Premier avion de chasse opérationnel à moteur à réaction de l'histoire. Utilisé à la fin de la seconde guerre mondiale.</p>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Gloster" "Meteor" "1944" >}}
<p>Seul avion à réaction utilisé par les alliés pendant la seconde guerre mondiale.</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-80 Shooting Star" "1945" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-84 Thunderjet" "1947" >}}
{{< exemplaires 7524 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "0QXwnORK0XE" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-15 Fagot" "1948" >}}
{{< exemplaires 18169 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "K9UTQs9GHcg" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "_LaaGkpVZ-k" >}} <!-- Cap Aviation -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "F-86 Sabre" "1949" >}}
{{< exemplaires 9860 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "zPuEcTYlGtU" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-17 Fresco" "1952" >}}
{{< exemplaires 10367 >}}
</div>

<div class="aeronef">
{{< aeronef ":canada:" "Avro Canada" "CF-100 Canuck" "1953" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "j0wLQ78ZyQs" >}} <!-- Drole de machine -->
</div>

<div class="titre_generation">
<h2>Chasseurs jets seconde génération</h2>
<p>1950-1960 : après la guerre de Corée, il a fallu adapter de nombreuses stratégies. <ul>
<li />supersoniques en palier
<li />le canon s'est avéré inadaptés à de telles vitesses. De grands progrès concernant les radars et les missiles infrarouges.
<li />redécouverte de l'intérêt d'avoir des avions multi-rôles alors que des intercepteurs allant à Mach 2 (grâce à l'utilisation de post-combustion) apparaissent.
<li />un grand nombre d'avions devenant obsolètes très rapidement (exemple: Century series = F-100s qui ont battu nombre de records à la chaine)
</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "F-100 Super Sabre" "1954" "chasseur bombardier" >}}
<p>Premier avion de l'USAF à franchir le mur du son en pallier.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "76FlSirWXOI" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-19 Farmer" "1955" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-102 Delta Dagger" "1956" "intercepteur" >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Premier avion de l'USAF à suivre la loi des aires dans son design.</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell" "F-101 Voodoo" "1957" "chasseur bombardier, ou intercepteur" >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Premier avion de l'USAF à franchir les 1000 mph (1600 km/h).</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Vought" "F-8 Crusader" "1957" "embarqué" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Voilure à angle de calage variable.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "ExwU1lSUs7Q" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "F-104 Starfighter" "1958" "intercepteur" >}}
<p>
Premier avion de combat capable d'aller à mach 2.<br />
Le seul avion de l'histoire à détenir simultanément le record de vitesse et d'altitude.
</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "LgPcH0dk-pM" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "Jtxrn3yqPQw" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-106 Delta Dart" "1959" "intercepteur" >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
{{< caracteristique "Datalink SAGE" >}}
<p>Utilisation d'une aile delta, mach 2.3.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "QDdD4KPAOR8" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-9 Fishpof" "1959" "intercepteur" >}}
<p>delta, mach 2</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "lQd684FwTRk" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "J35 Draken" "1960" >}}
{{< caracteristique "super-manœvrabilité (double-delta, cobra = Kort Parad)" >}}
{{< caracteristique "veille infrarouge" >}}

<p>mach 2</p>
</div>
<div class="images">
{{< ressource-video-youtube "jqiDEcfSnXs" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-21 Fishbed" "1960" >}}
{{< exemplaires 13996 >}}
{{< caracteristique "super-manœvrabilité (delta, cobra)" >}}
<p>delta, mach 2</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "FSdcJzgNFHM" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage III" "1961" >}}
<p>delta, mach 2</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "DueHCwa8uc8" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "Gg3Of12mJrU" >}}
{{< ressource-video-youtube "4uM81xdS3E8" >}} <!-- Yataka -->
</div>
<div class="images">
{{< ressource-video-youtube "h1jT8RZSM_I" >}}
</div>

<div class="titre_generation">
<h2>Chasseurs jets troisième génération</h2>
<p>1960-1975 : des chasseurs pensés pour être multi-rôles dès la conception.
On peut citer différents aspects : <ul>
<li />radar à capacités de guidage BVR, capacité "look down/shoot down" impliquant un filtrage électronique doppler, utilisation de missiles adaptés
<li />vaste gamme d'armements, allant des missiles air-sols aux bombes guidées laser tout en pouvant aussi engager des cibles en BVR
<li />réduction de la consommation (améliorant la distance parcourable)
<li />utilisation de géométries variables
<li />apparition d'avertisseurs de proximité sol
</ul>
</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-4 Phantom II" "1960" "embarqué, chasseur-bombardier et intercepteur" >}}
{{< caracteristique "veille infrarouge" >}}
<p>F-4J au début des années 1970s : premier radar opérationnel look-down/shoot-down.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "s_qjwnFvoxs" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Northrop" "F-5 Freedom Fighter" "1964" "chasse et attaque" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "P59n9_R62RY" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "2nWrScjSZ6g" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-15 Flagon" "1967" "intercepteur" >}}
<p>delta, mach 2.1</p>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-23 Flogger" "1970" >}}
{{< caracteristique "veille infrarouge" >}}
<p> Géométrie variable. <br /> Premier radar soviétique look-down/shoot-down.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "zrLFrQsomAs" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-25 Foxbat" "1972" "interception et reconnaissance" >}}
{{< caracteristique "veille infrarouge" >}}
<p>mach 3</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "CgAeLkgkZBE" >}} <!-- Drole de machine -->
</div>
<div class="videos">
{{< ressource-video-youtube "fRjKKfzdRlo" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":sweden:" "Saab" "37 Viggen" "1972" "attaque, chasse, reconnaissance" >}}
{{< caracteristique "manœuvrabilité (delta, canards)" >}}
{{< caracteristique "atterrissage court (inversion de poussée)" >}}
</div>
<div class="reportages">
{{< ressource-playlist-youtube "PLZkiCzfgMp65Z1e73Qo4DjKM6ecy8ynP2" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fBE41A9VT3Q" >}}
{{< ressource-video-youtube "UyA-oTElVRw" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage F1" "1973" "reconnaissance et attaque" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "u6GCimwkcx8" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "UnycNFTXXco" >}}
</div>
<div class="images">
{{< ressource-video-youtube "38AEBg2ZkXs" >}} <!-- Armee de l'air et de l'espace -->
</div>

<div class="aeronef">
{{< aeronef ":israel:" "IAI" "Kfir" "1975" >}}
<p>delta. Basé sur le Mirage 5.</p>
</div>

<div class="titre_generation">
<h2>Chasseurs jets quatrième génération</h2>
<p>1975-2005 : accent mis sur la maniabilité plutôt que sur la vitesse. On peut citer certains aspects : <ul>
<li />grande manœvrabilité avec des avions instables par design, ceci rendu possible grâce aux commandes de vol électriques (exemple: F-16)
<li />utilisation de commandes numériques (exemple : écrans DDI)
<li />utilisation de data-link pour communiquer avec l'AWACS
<li />côté soviétique, une grande maniabilité en dogfight (exemple : Su-27 avec sa forte poussée et son aérodynamisme améliorant le comportement en post-décrochage)
<li />côté américain, des avions d'avantage taillés pour le BVR (missiles Fox1/Fox3 au delà de la portée visuelle), abandonnant la veille infrarouge
<li />la longévité des avions de cette génération est remarquable (la "Teen Series" américaine - F-14, F-15, F-16, F/A-18, ou les soviétiques MiG-29 et Su-27 sont pour certains toujours en service aujourd'hui). Ceci s'explique en partie avec une avionique modulaire, permettant une mise à niveau dans le temps (exemple: mise à niveau en radar AESA possible sur Mirage 2000).
</ul>
</p>
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Grumman" "F-14 Tomcat" "1974" "embarqué" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "AHtAdp3Kei0" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F-15 Eagle" "1976" "chasseur lourd, supériorité aérienne" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "0DmjlubOn1g" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "General Dynamics" "F-16 Fighting Falcon" "1978" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "ztEONZIFNeQ" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "W1ILwzgkCXk" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "iX2oCqcvYzQ" >}} <!-- aeronewstv -->
</div>
<div class="images">
{{< ressource-video-youtube "m06uWM_tABM" >}}
{{< ressource-video-youtube "tdczvix3EiE" >}}
{{< ressource-video-youtube "C-WgHooZ7-Y" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-31 Foxhound" "1981" "intercepteur et attaque" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Basé sur le MiG-25. Radar PESA, Datalink.</p>
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-29 Fulcrum" "1983" >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "8R0XFjDR-j0" >}} <!-- Les guerriers du ciel -->
</div>
<div class="images">
{{< ressource-video-youtube "iXRSyj_mNis" >}}
{{< ressource-video-youtube "VCWjByenDsM" >}}
{{< ressource-video-youtube "xzwL_6NuEls" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F/A-18 Hornet" "1983" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "F61h1Fee9Zw" >}} <!-- les ailes de legende -->
</div>
<div class="images">
{{< ressource-playlist-youtube "PLCO6ndZDWgg3-duVAaaH8Lojv2ge6ilUf" >}}
{{< ressource-playlist-youtube "PLCO6ndZDWgg27ZPKn4eQttowQA_Py4GA2" >}}
{{< ressource-video-youtube "JYUm5Nl6318" >}}
{{< ressource-web "https://www.youtube.com/c/HornetVids/videos" "Youtube HornetVids" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":fr:" "Dassault" "Mirage 2000" "1984" >}}
{{< caracteristique "manœuvrabilité (delta)" >}}
{{< caracteristique "veille infrarouge limitée" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "VkRisFae93Y" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "bFHF9j_LvPk" >}}
{{< ressource-video-youtube "qsbqV0rz87o" >}}
</div>
<div class="images">
{{< ressource-video-youtube "k-SlLeYRGnE" >}}
{{< ressource-video-youtube "PCvXyetyVkg" >}}
{{< ressource-video-youtube "XlaJJXkS3uo" >}}
{{< ressource-video-youtube "QrQxJSRSZAU" >}}
{{< ressource-video-youtube "lBJ01alfMjc" >}}
{{< ressource-video-youtube "T5DrtgXX7qQ" >}} <!-- Armee de l'air et de l'espace -->
{{< ressource-video-youtube "JEPhz2E41pw" >}} <!-- Armee de l'air et de l'espace -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-27 Flanker" "1985" "chasseur lourd, supériorité aérienne" >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "FjEQy8S0Vp0" >}} <!-- Imineo -->
{{< ressource-video-youtube "yZvMljUNCeU" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fTzCnolXsnM" >}}
{{< ressource-video-youtube "daOPK07baBw" >}}
{{< ressource-video-youtube "MtlLVexLfrQ" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-15E Stike Eagle" "1989" "chasseur bombardier" >}}
<p>Basé sur le F-15.</p>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-34 Fullback" "1990" "chasseur bombardier" >}}
<p>Basé sur le Su-27.</p>
</div>

<div class="titre_generation">
<h2>Chasseurs jets génération 4.5</h2>
<p>La génération 4.5 correspond souvent aux nouveaux avions, ou aux versions mises à jours au début des années 90. Ils comprennent certaines capacités de cinquième génération, sans toutes les avoir. Ces capacités peuvent comprendre : <ul>
<li />intégration avancée des capteurs (meilleure Situation Awareness)
<li />radar AESA (sans partie mécanique, avec un scan plus précis)
<li />supercroisière (capacités à rester supersonique sans post-combustion, réduisant la consommation et la signature thermique)
<li />super-manœuvrabilité (utilisation plus généralisée de canards ou de poussée vectorielle, ou de meilleurs ratios poussée/poids)
<li />capacité multi-rôle étendue
<li />réduction de la surface équivalente radar (utilisation de matériaux absorbants ou composites)
<li />les progrès en matière de furtivité ont ramené le besoin d'une intégration de la veille infrarouge, mise de côté en occident (on peut citer l'Optronique Secteur Frontal du Rafale ou le PIRATE-IRST du Typhoon)
<li />un data-link de grande capacité
</ul>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "F/A-18E/F Super Hornet" "1995" "embarqué" >}}
<p>Basé sur le F/A-18.</p>
</div>
<div class="images">
{{< ressource-video-youtube "0fM7SUSgFj8" >}}
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "JAS 39 Gripen" "1996" "intercepteur" >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.1" >}}
</div>
<div class="images">
{{< ressource-video-youtube "BnOOxKD3uD4" >}}
{{< ressource-video-youtube "eXaPfUs6sQw" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Rafale" "2002" "embarqué" >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.4" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "IzRh3at56tA" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "LAfdmC32Xk0" >}} <!-- Yataka -->
{{< ressource-video-youtube "PQZZe1WbRQ8" >}}
{{< ressource-video-youtube "UxHbrs2f6Eo" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "Kaa90KtQZ5A" >}}
{{< ressource-video-youtube "ykYkyN6nwzw" >}}
{{< ressource-video-youtube "9v6ZGFlDY50" >}}
{{< ressource-video-youtube "Acxj1DNBqe0" >}} <!-- armee de l'air et de l'espace -->
</div>
<div class="images">
{{< ressource-video-youtube "AdhVCkHf0w0" >}} <!-- Chasse Embarquee -->
{{< ressource-video-youtube "DTQlsmkmFp4" >}} <!-- Chasse Embarquee -->
{{< ressource-playlist-youtube "PLkToWNixl-3MKDli84ARCklq1aNiqvvLz" >}} <!-- Chasse Embarquee -->
{{< ressource-video-youtube "vRVQw1vRgZY" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:/:india:" "Soukhoï" "Su-30-MKI Flanker-H" "2002" "chasseur lourd, supériorité aérienne" >}}
{{< caracteristique "super-manœuvrabilité (canards, poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>basé sur le Su-27</p>
</div>

<div class="aeronef">
{{< aeronef ":eu:" "Eurofighter" "Typhoon" "2004" "intercepteur" >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="images">
{{< ressource-video-youtube "U45UyriEtZI" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":cn:/:pakistan:" "Chengdu" "JF-17 Thunder" "2010" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "-4qLGbSEZ6s" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-35 Flanker-E" "2012" "chasseur lourd, supériorité aérienne" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>basé sur le Su-27</p>
</div>

<div class="aeronef">
{{< aeronef ":india:" "HAL" "Tejas" "2015" >}}
{{< caracteristique "manœuvrabilité (double-delta)">}}
{{< caracteristique "veille infrarouge" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-35 Fulcrum-F" "2017" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>basé sur le MiG-29</p>
</div>

<div class="titre_generation">
<h2>Chasseurs jets cinquième génération</h2>
<p>depuis 2005 : on peut citer plusieurs aspects : <ul>
<li />furtivité, avec les munitions dans une soute interne
<li />super-manœuvrabilité (avec souvent atterrissage court)
<li />supercroisière
<li />radar AESA, opérant dans plusieurs modes à la fois, avec capacité LPIR (low probability of intercept radar = invisible au RWR adverse)
<li />fusion de donnée avec l'utilisation d'IA (améliorant la situation awareness)
<li />capacité multirôle, y compris Battlefield C3 (réduisant le besoin d'AWACS sur le champ de bataille)
<li />Software Defined Aircraft (permettant la mise à jour de l'avionique par mise à jour logicielle)
<li />smart helmets
</ul>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-22 Raptor" "2005" "supériorité aérienne" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "furtif" >}}
</div>
<div class="images">
{{< ressource-web "https://www.reddit.com/r/aviation/comments/tqgc2c/f22_pilot_demonstrates_a_minimum_radius_turn/" "F-22 pilot demonstrates a minimum radius turn followed by J-turn reposition a.k.a Herbst Maneuver..." >}}
{{< ressource-video-youtube "GUlHhKvIX3w" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-35 Lightning II" "2015" "embarqué" >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "décollage vertical" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="images">
{{< ressource-video-youtube "zW28Mb1YvwY" >}}
{{< ressource-video-youtube "Eiop4hrBJO4" >}}
{{< ressource-video-youtube "KVMiscT8VqE" >}}
</div>

<div class="aeronef">
{{< aeronef ":cn:" "Chengdu" "J-20" "2017" >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "bCm98fpR5Nc" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-57 Felon" "2020" "supériorité aérienne" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle), cobra, herbst, kulbit" >}}
{{< caracteristique "supercroisière mach 1.6" >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "p9133N8uaFY" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "Lnzz2NT5i-w" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "B8OYE8r2u8Y" >}} <!-- aeronewstv -->
</div>
<div class="images">
{{< ressource-video-youtube "yNaeKHfnHHM" >}}
{{< ressource-video-youtube "ctioYUO5flw" >}}
</div>

<div class="titre_generation">
<h2>Avions d'attaque au sol et d'interdiction (bombardiers tactiques)</h2>
</div>

<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 87 Stuka" "1936" "bombardier en piqué" >}}
{{< exemplaires 6000 >}}
<p>sirène</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "l8ox3PFd_qU" >}} <!-- Yataka -->
{{< ressource-video-youtube "6uvsgObrJx0" >}} <!-- Cap Aviation -->
{{< ressource-video-youtube "PpRfvKx2ouE" >}} <!-- Imineo -->
</div>
<div class="images">
{{< ressource-video-youtube "2JdcyGGby0Y" >}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Consolidated" "PBY Catalina" "1936" "hydravion de patrouille et de bombardement" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "cS2KevJqV4s" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Blenheim" "1937" "bombardier rapide" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "KSLXszp2lYM" >}} <!-- Imineo -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-2 Chtourmovik" "1941" "avion d'attaque ou bombardier torpilleur" >}}
{{< exemplaires 36183 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-20 Havoc" "1941" "attaque au sol, bombardier léger, chasseur nocturne" >}}
{{< exemplaires 7476 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Grumman" "TBF Avenger" "1942" "bombardier torpilleur embarqué" >}}
{{< exemplaires 9836 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "SB2C Helldiver" "1943" "bombardier en piqué" >}}
{{< exemplaires 7140 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-26 Invader" "1944" "attaque au sol" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "acX9bpPilkM" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-1 Skyraider" "1946" "attaque au sol et appui tactique, embarqué" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "dJ5erML2cNE" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-2B Beagle" "1950" "bombardier" >}}
{{< exemplaires 6635 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-4 Skyhawk" "1956" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "w81MRBg24QQ" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-105 Thunderchief" "1958" "chasseur bombardier" >}}
<p>mach 2</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "DAt2tfhHubQ" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Étendard IV" "1962" "embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-6 Intruder" "1963" "embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "General Dynamics" "F-111 Aardvark" "1967" "bombardier tout-temps" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "lA5stxVfp7o" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Ling-Temco-Vought" "A-7 Corsair II" "1967" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "3DtRkAmKNTk" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "OV-10 Bronco" "1967" "reconnaissance et attaque au sol" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "AC-130 Spectre" "1968" "gunship d'attaque au sol et appui aérien rapproché" >}}
<p>variante du C-130 Hercules</p>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Hawker Siddeley" "Harrier" "1969" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "xqUWERG1qqU" >}} <!-- Les guerriers du ciel -->
{{< ressource-web "https://www.quora.com/How-effective-is-viffing-in-a-Harrier" "How effective is VIFFing in a Harrier" >}}
</div>
<div class="images">
{{< ressource-video-youtube "8UE9i82Kc_Y" >}} <!-- harrier viffing -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-17 Fitter" "1970" >}}
<p>géométrie variable</p>
</div>

<div class="aeronef">
{{< aeronef ":fr:/:gb:" "SEPECAT" "Jaguar" "1973" >}}
<p>attaque au sol</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "VNcpFliHKUc" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "z-uqMUA7U-k" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-24 Fencer" "1974" "bombardier" >}}
<p>géométrie variable</p>
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Fairchild Republic" "A-10 Thunderbold II / Warthog" "1975" "attaque au sol et appui tactique" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "k0Iz78EaylY" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "_xaugfhbmp0" >}} <!-- Yataka -->
{{< ressource-video-youtube "BVmiaNhxLHE" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "wk6Qr6OO5Xo" >}}
{{< ressource-video-youtube "EXgTrpPU9Rk" >}}
{{< ressource-video-youtube "gHsxwaPDza8" >}}
{{< ressource-video-youtube "PSwNVJYUXtw" >}}
</div>
<div class="images">
{{< ressource-video-youtube "gEokB_9N0Aw" >}}
{{< ressource-video-youtube "N60WtGC4ejo" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Super Étendard" "1978" "embarqué" >}}
</div>
<div class="images">
{{< ressource-video-youtube "svORBbmnZMc" >}} <!-- Chasse embarquee -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-25 Frogfoot" "1981" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "raYB4TWh-W4" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fhNkAuhYI2k" >}}
</div>

<div class="aeronef">
{{< aeronef ":de:/:it:/:gb:" "Panavia" "Tornado" "1982" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "5Trez3StUWQ" >}} <!-- Imineo -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "AV-8B Harrier II" "1983" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
{{< caracteristique "FLIR" >}}
<p>évolution du Hawker Siddeley Harrier</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-117 Nighthawk" "1983" "attaque au sol" >}}
{{< caracteristique "furtif" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "_h5JiIY8Exo" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":it:/:brazil:" "AMX International" "AMX" "1988" >}}
</div>

<div class="titre_generation">
<h2>Bombardiers stratégiques</h2>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "ANT-40 / SB" "1935" "bombardier" >}}
{{< exemplaires 6656 >}}
</div>

<div class="aeronef">
{{< aeronef ":de:" "Heinkel" "He 111" "1937" "bombardier" >}}
{{< exemplaires 7300 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-17 Flying Fortress" "1938" "bombardier lourd" >}}
{{< exemplaires 12731 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "_ctKDdsJ774" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Vickers" "Wellington" "1938" "bombardier moyen, patrouilleur maritime" >}}
{{< exemplaires 11461 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "e4EL0tuOm4o" >}} <!-- Imineo -->
</div>

<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 88" "1939" "bombardier moyen" >}}
{{< exemplaires 15183 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Consolidated" "B-24 Liberator" "1941" "bombardier lourd, chasseur de sous marin" >}}
{{< exemplaires 18482 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "dq7Wpq00NJc" >}} <!-- Cap Aviation -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "B-25 Mitchell" "1941" "bombardier moyen" >}}
{{< exemplaires 9984 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "jat6DEeZKyM" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Short" "Stirling" "1940" "bombardier lourd" >}}
<p>Premier bombardier lourd quadrimoteur</p>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "Halifax" "1940" "bombardier lourd" >}}
{{< exemplaires 6176 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Martin" "B-26 Marauder" "1941" "bombardier moyen" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "lY1yau_KCGY" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Petliakov" "Pe-2 Buck" "1941" "bombardier" >}}
{{< exemplaires 11427 >}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Avro" "Lancaster" "1942" "bombardier lourd" >}}
{{< exemplaires 7377 >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-36 Peacemaker" "1949" "bombardier stratégique lourd à long rayon d'action" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "Oj5vMRS2eU8" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-47 Stratojet" "1952" "bombardier moyen à long rayon d'action" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "Kk3GfN6lKtY" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Miassichtchev" "M-4 Bison" "1953" "bombardier stratégique lourd" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "t_rnMnEf0vc" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-52 Stratofortress" "1955" "bombardier stratégique lourd à long rayon d'action" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "RP5PsGolQnE" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-3 Skywarrier" "1956" "bombardier stratégique embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-95 Bear" "1956" "bombardier lourd" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "dKsIo1wIA6M" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "WCQbalWPuUo" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-58 Hustler" "1960" "bombardier stratégique supersonique" >}}
<p>delta, mach 2</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "dvtV0GVtQt8" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "A-5 Vigilante" "1961" "embarqué, dissuasion nucléaire et reconnaissance" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22 Blinder" "1962" "bombardier supersonique, reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "IfRBbJCU-WQ" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "XB-70 Valkyrie" "1964" "prototype de bombardier stratégique" >}}
<p>mach 3</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "lKRnehhZfFY" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "d5SKO_TAlsw" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage IV" "1964" "dissuasion nucléaire et reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "Y4xjSObEvFs" >}} <!-- Les guerriers du ciel -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22M Backfire" "1972" "bombardier lourd supersonique à long rayon d'action" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "npb2gCQZPm4" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "Uq-aWGL7Dk4" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Rockwell" "B-1 Lancer" "1986" "bombardier stratégique supersonique à long rayon d'action" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "hFlcQN3KleU" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "CLMY1oJjuas" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "-puARA_M_I4" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-160 Blackjack" "1987" "bombardier stratégique supersonique lourd" >}}
<p>le plus gros et lourd avion de combat au monde, mach 2.1</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "E1OxXdQ-OUo" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "BLY6vWl2FXA" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Northrop" "B-2 Spirit" "1997" "bombardier stratégique" >}}
{{< caracteristique "furtif" >}}
<p>aile volante, l'avion le plus cher au monde</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "-IOL12P7dy0" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "fzzOGg-ocdE" >}} <!-- aeronewstv -->
</div>

</div>

# Sources

<div class="contenu">
{{< canal-youtube "id" "UCgbepK9hgwOnYiy74Ry2ftg" >}} <!-- Droles de machines -->
{{< ressource-playlist-youtube "PLTT3R9By38IvrFAPsdb62Lpy1pIlT7uNt" >}}
</div>

<div class="contenu">
{{< canal-youtube "id" "UChyLWNeRxc06j_MtDgyFT0Q" >}} <!-- Yataka -->
{{< ressource-playlist-youtube "PL-LHjYKc6dyU3nj-aisKbTf5OBezzatLA" >}}
</div>

<div class="contenu">
{{< canal-youtube "id" "UCJ9tHJbCa8ZoMbapfJLy0ZQ" >}} <!-- imineo Documentaires -->
{{< ressource-playlist-youtube "PLs4hJjnTBQLo9eQFXL94h4voK9SzD4xNR" >}} <!-- Autre chaine (Documentaire Aviation), mais toujours Imineo... -->
{{< ressource-playlist-youtube "PLC4siPTFsziQCo_C47HQhSenISgrXZC07" >}}
</div>

<div class="contenu">
{{< canal-youtube "id" "UCfpUiL59S-XE9Yzme2fiDHA" >}} <!-- Anarkia DOCS Science/Quantique -->
{{< ressource-playlist-youtube "PLoTC1KIBEvDk3Xngwc_NB8qhcuKosahAe" >}}
</div>

<div class="contenu">
{{< canal-youtube "id" "UC3MJVwoumJMTqCe9IaEhtiw" >}} <!-- La 2de Guerre Mondiale -->
{{< ressource-playlist-youtube "PLBqIsAkFb7pzJJ6hm7guONOoRfFL1txH4" >}}
</div>

<div class="contenu">
{{< canal-youtube "id" "UCwDFiUoWxCRZxVHzD22Kwrg" >}} <!-- Cap aviation -->
{{< ressource-playlist-youtube "PLZbKd2yQD8s7gYaPRlf4gSOVToODGvKlt" >}}
</div>

<div class="contenu">
{{< canal-youtube "byUserId" "higherweb" >}}
{{< ressource-playlist-youtube "PL053B21B2F6371507" >}}
{{< ressource-web "https://www.avionslegendaires.net/dossier/configuration-type-avion/aeronefs-militaires-produits-a-plus-de-10000-exemplaires/" "aeronefs militaires produits à plus de 10000 exemplaires" >}}
</div>

<div class="contenu">
{{< canal-youtube "byUserId" "fabgenius" >}}
{{< ressource-playlist-youtube "PLE4C78820C58A36BA" >}}
{{< ressource-playlist-youtube "PL1A7D6CE9E921D72F" >}}
</div>

<div class="contenu">
{{< canal-web "Wikipedia" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Supermaneuverability" "Supermaneuverability" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Attack_aircraft" "Attack aircraft" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Supercruise" "Supercruise" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Century_Series" "Century_Series" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Teen_Series" "Teen Series" >}}
{{< ressource-web "ttps://en.wikipedia.org/wiki/Jet_fighter_generations" "Jet fighter generations" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Fourth-generation_fighter" "Fourth generation fighter" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Fifth-generation_fighter" "Fifth generation fighter" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Look-down/shoot-down" "Look-down/shoot-down" >}}
</div>
