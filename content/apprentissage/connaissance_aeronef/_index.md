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
  }

  .images {
    grid-column: 3;

    padding: 0.2em;

    border-left: 1px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;

    border-style: solid;
    border-color: grey;
  }
</style>

Il est commun de classer les jets par [génération](https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rations_des_avions_de_combat), ici nous suivons la classification Wikipédia (inspirée d'Aerospaceweb).

<div class="grille">

<div class="titre_generation">
<h2>Vieux coucous (Warbirds)</h2>
<p>1935-1952 : avions militaires à hélices.</p>
</div>

<div class="titre_generation">
<h3>Chasseurs</h3>
</div>

<!-- Fighter aircraft : oubli des italiens G50 Freccia, CR42 Falco, macchi mc 200 -->

<!-- Fighter aircraft : testé à la guerre civile espagnole, mais dépassé par le bf 109 -->
<!-- Fighter aircraft : obsolète -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Polikarpov" "I-16" "1935" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Polikarpov_I-16"
  "https://en.wikipedia.org/wiki/Polikarpov_I-16"
  "https://www.avionslegendaires.net/avion-militaire/polikarpov-i-16-ishak/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Polikarpov_I-16_with_spanish_republican_markings.jpg"
  "Elchuso, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : peu armé, mais manoeuvrant -->
<!-- fighter aircraft : grand succès au debut du pacifique -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-27" "1937" >}}
<p>L'avion de chasse principal de l'armée impériale.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-27"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-27"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-27-nate-clint/"
  "https://upload.wikimedia.org/wikipedia/commons/5/58/Ki-27_2.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : testé à la guerre civile espagnole -->
<!-- Fighter aircraft : supériorité aérienne -->
<!-- Fighter aircraft : intercepteur -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Messerschmitt" "Bf 109" "1937" >}}
{{< exemplaires 34852 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Bf_109"
  "https://en.wikipedia.org/wiki/Messerschmitt_Bf_109"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-bf-109/"
  "https://upload.wikimedia.org/wikipedia/commons/0/01/Me109_G-6_D-FMBB_2.jpg"
  "Kogo, GFDL <http://www.gnu.org/copyleft/fdl.html>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "LfklgwVE0TA" >}} <!-- Yataka -->
{{< ressource-video-youtube "22tVIa2BPu8" >}} <!-- La 2nd Guerre Mondiale -->
</div>

<!-- Fighter aircraft : supériorité aérienne -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Hurricane" "1937" "chasseur bombardier" >}}
{{< exemplaires 14583 >}}
<p>Premier chasseur monoplan de la Royal Air Force.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Hurricane"
  "https://en.wikipedia.org/wiki/Hawker_Hurricane"
  "https://www.avionslegendaires.net/avion-militaire/hawker-hurricane/"
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Hawker_Hurricane%2C_Battle_of_Britain_Memorial_Flight_Members%27_day_2018_%28cropped%29.jpg"
  "Cpl Phil Major ABIPP, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "DO2cqqm1y0c" >}} <!-- Cap Aviation -->
</div>

<!-- Fighter aircraft : supériorité aérienne -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "Supermarine" "Spitfire" "1938" >}}
{{< exemplaires 20351 >}}
<p>Version embarquée : Seafire.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Supermarine_Spitfire"
  "https://en.wikipedia.org/wiki/Supermarine_Spitfire"
  "https://www.avionslegendaires.net/avion-militaire/supermarine-spitfire/"
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg"
  "Airwolfhound, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "5OzJw4u5bRw" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "hgI4Y8yTpds" >}} <!-- Yataka -->
</div>

<!-- fighter aircraft : dépassé par le zero -->
<div class="aeronef">
{{< aeronef ":us:" "Brewster" "F2A Buffalo" "1939" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Brewster_F2A_Buffalo"
  "https://en.wikipedia.org/wiki/Brewster_F2A_Buffalo"
  "https://www.avionslegendaires.net/avion-militaire/brewster-f2a-buffalo/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Brewster_F2A-3_g16055.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : peu armé, mais manoeuvrant -->
<!-- fighter aircraft : grand succès au debut du pacifique -->
<!-- fighter aircraft : trop léger pour faire intercepteur ou attaque, à l'inverse des avions alliés -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef">
{{< aeronef ":jp:" "Mitsubishi" "A6M Zéro" "1940" "chasseur-bombardier léger, embarqué" >}}
{{< exemplaires 10939 >}}
<p>Très maniable, une grande puissance de feu mais aucun blindage.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mitsubishi_A6M"
  "https://en.wikipedia.org/wiki/Mitsubishi_A6M_Zero"
  "https://www.avionslegendaires.net/avion-militaire/mitsubishi-a6m-rei-sen-zero/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/A6M3_Zero_N712Z_1.jpg"
  "Kogo, GFDL <http://www.gnu.org/copyleft/fdl.html>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "Mal9vqxk7N4" >}} <!-- Yataka -->
</div>

<!-- fighter aircraft : meilleure puissance de feu que le zero -->
<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F4F Wildcat" "1940" "embarqué" >}}
{{< exemplaires 7885 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_F4F_Wildcat"
  "https://en.wikipedia.org/wiki/Grumman_F4F_Wildcat"
  "https://www.avionslegendaires.net/avion-militaire/grumman-f4f-wildcat/"
  "https://upload.wikimedia.org/wikipedia/commons/5/55/F4F-3_new_pitot_tube_of_later_model.jpg"
  "The original uploader was Felix c at English Wikipedia., Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : arrivé en retard, inférieur au Bf 109 -->
<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-1" "1940" >}}
{{< exemplaires 8734 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-1"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-1"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-1-yak-7/"
  "https://upload.wikimedia.org/wikipedia/commons/1/13/I-26.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : meilleure puissance de feu que le zero -->
<!-- fighter aircraft : lourdement armé : chasseur bombardier -->
<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "P-40 Warhawk" "1940" >}}
{{< exemplaires 13738 >}}
<p>Troisième avion de chasse le plus produit des USA pendant la seconde guerre mondiale.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Curtiss_P-40_Warhawk"
  "https://en.wikipedia.org/wiki/Curtiss_P-40_Warhawk"
  "https://www.avionslegendaires.net/avion-militaire/curtiss-p-40-warhawk/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f6/P-40.jpg"
  "AFHRA, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "F29Z9qh3U9I" >}} <!-- Les ailes de legende -->
</div>

<!-- Fighter aircraft : chasseur de nuit -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Bf 110" "1940" "chasseur lourd et bombardier" >}}
{{< exemplaires 6150 >}}
<p>Bimoteur.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Bf_110"
  "https://en.wikipedia.org/wiki/Messerschmitt_Bf_110"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-bf-110/"
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bundesarchiv_Bild_101I-360-2095-23%2C_Flugzeuge_Messerschmitt_Me_110.jpg"
  "Bundesarchiv, Bild 101I-360-2095-23 / Wanderer, W. / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : chasseur de nuit -->
<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Beaufighter" "1940" "chasseur lourd et torpillage, assaut, chasseur de nuit" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bristol_Beaufighter"
  "https://en.wikipedia.org/wiki/Bristol_Beaufighter"
  "https://www.avionslegendaires.net/avion-militaire/bristol-beaufighter/"
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Aircraft_of_the_Royal_Air_Force_1939-1945-_Bristol_Type_156_Beaufighter._CM5105.jpg"
  "Royal Air Force official photographer, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : efficace en combat basse altitude, sur le front soviétique -->
<!-- fighter aircraft : dépassé par le zero -->
<div class="aeronef">
{{< aeronef ":us:" "Bell" "P-39 Airacobra" "1941" >}}
{{< exemplaires 9584 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bell_P-39_Airacobra"
  "https://en.wikipedia.org/wiki/Bell_P-39_Airacobra"
  "https://www.avionslegendaires.net/avion-militaire/bell-p-39-airacobra/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/P-39Q_Airacobra.jpg"
  "Kogo, GFDL <http://www.gnu.org/copyleft/fdl.html>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "uuONOqGRL7M" >}} <!-- Les ailes de legende -->
</div>

<!-- fighter aircraft : contribué au succès du pacifique -->
<!-- fighter aircraft : lourdement armé: chasseur bombardier  -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-38 Lightning" "1941" "chasseur lourd" >}}
{{< exemplaires 10037 >}}
<p>Bimoteur bipoutre, long rayon d'action.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_P-38_Lightning"
  "https://en.wikipedia.org/wiki/Lockheed_P-38_Lightning"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-p-38-lightning/"
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lockheed_P-38_Lightning_USAF.JPG"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "V3ZEiCpdxf8" >}} <!-- Yataka -->
</div>

<!-- fighter aircraft : lourdement armé : chasseur bombardier  -->
<!-- Fighter aircraft : intercepteur -->
<!-- air supremacy : supériorité aérienne -->
<!-- fighter bomber : remarquable chasseur bombardier -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Focke-Wulf" "Fw 190" "1941" "chasseur lourd et bombardier" >}}
{{< exemplaires 20051 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Focke-Wulf_Fw_190"
  "https://en.wikipedia.org/wiki/Focke-Wulf_Fw_190"
  "https://www.avionslegendaires.net/avion-militaire/focke-wulf-fw-190/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Focke-Wulf_Fw_190_050602-F-1234P-005.jpg"
  "USAAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "bBwTnfL6aOE" >}} <!-- Imineo -->
</div>

<!-- fighter aircraft : lourdement armé : chasseur bombardier -->
<!-- fighter bomber : décevants en chasseurs, ils font une admirable conversion en chasseur bombardier -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Typhoon" "1941" "chasseur bombardier" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Typhoon"
  "https://en.wikipedia.org/wiki/Hawker_Typhoon"
  "https://www.avionslegendaires.net/avion-militaire/hawker-typhoon/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pheloung_1.jpg"
  "The Flight magazine archive from Flightglobal, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : arrivé en retard, inférieur au Bf 109 -->
<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine-Gorbunov-Gudkov" "LaGG-3" "1941" >}}
{{< exemplaires 6258 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_LaGG-3"
  "https://en.wikipedia.org/wiki/Lavochkin-Gorbunov-Gudkov_LaGG-3"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-lagg-3/"
  "https://upload.wikimedia.org/wikipedia/commons/7/70/LaGG-3_Moscow.jpg"
  "Mike1979 Russia, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : arrivé en retard, inférieur au Bf 109 -->
<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-3" "1941" >}}
<p>Basé sur le MiG-1.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-3"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-3"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-1-3/"
  "https://upload.wikimedia.org/wikipedia/commons/7/78/MiG-3_at_Mochishche.jpg"
  "Alex Polezhaev, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : peu armé, mais manoeuvrant -->
<!-- fighter aircraft : grand succès au debut du pacifique -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-43" "1941" >}}
<p>Basé sur le Ki-27.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-43"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-43"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-43-hayabusa-oscar/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Nakajima_Ki-43-IIa.jpg"
  "The original uploader was Vuvar1 at English Wikipedia., 25 October 2005 (original upload date), Public domain, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : chasseur de nuit -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "de Havilland" "DH.98 Mosquito" "1941" "bombardier léger, chasseur" >}}
{{< exemplaires 7781 >}}
{{< caracteristique "faible signature radar car en bois" >}}
<p>Bimoteur. Difficile à intercepter car très rapide.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/De_Havilland_DH.98_Mosquito"
  "https://en.wikipedia.org/wiki/De_Havilland_Mosquito"
  "https://www.avionslegendaires.net/avion-militaire/de-havilland-d-h-98-mosquito/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mosquito_600pix.jpg"
  "RAF, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : contribué au succès du pacifique -->
<!-- fighter aircraft : lourdement armé: chasseur bombardier  -->
<!-- fighter bomber : remarquable chasseur bombardier -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Republic" "P-47 Thunderbolt" "1942" "chasseur lourd et bombardier" >}}
{{< exemplaires 15660 >}}
<p>Aspect massif.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Republic_P-47_Thunderbolt"
  "https://en.wikipedia.org/wiki/Republic_P-47_Thunderbolt"
  "https://www.avionslegendaires.net/avion-militaire/republic-p-47-thunderbolt/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/P-47D-40_Thunderbolt_44-95471_side.jpg"
  "Kogo, GFDL <http://www.gnu.org/copyleft/fdl.html>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "tsyOuQcjVmg" >}} <!-- Yataka -->
{{< ressource-video-youtube "HJo7n54LhEA" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "9WktioQKTzU" >}} <!-- La 2nd Guerre Mondiale -->
</div>

<!-- fighter aircraft : escorte des B24 et B17 a l'ouest, grande autonomie -->
<!-- fighter aircraft : contribué au succès du pacifique -->
<!-- fighter aircraft : flux laminaires -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "P-51 Mustang" "1942" "chasseur, chasseur bombardier" >}}
{{< exemplaires 15586 >}}
<p>Souvent utilisé en escorteur grâce à son long rayon d'action.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_P-51_Mustang"
  "https://en.wikipedia.org/wiki/North_American_P-51_Mustang"
  "https://www.avionslegendaires.net/avion-militaire/north-american-p-51-mustang/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/375th_Fighter_Squadron_North_American_P-51D-5-NA_Mustang_44-13926_%28cropped%29.jpg"
  "U.S. Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "XT0qKOfhqac" >}} <!-- les ailes de legende -->
</div>

<!-- fighter aircraft : contribué au succès du pacifique -->
<!-- fighter aircraft : lourdement armé: chasseur bombardier  -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef">
{{< aeronef ":us:" "Chance Vought" "F4U Corsair" "1942" "chasseur bombardier embarqué" >}}
{{< exemplaires 12571 >}}
<p>Aile en mouette inversée (W).</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Chance_Vought_F4U_Corsair"
  "https://en.wikipedia.org/wiki/Vought_F4U_Corsair"
  "https://www.avionslegendaires.net/avion-militaire/vought-f4u-corsair/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/AU-1_Corsair_in_flight_1952.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "uiGvpu7WXhI" >}} <!-- Yataka -->
{{< ressource-video-youtube "6j9VJpGZQZ0" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "g3lwvONfKWA" >}} <!-- les ailes de legende -->
</div>

<!-- Fighter aircraft : remise à niveau , comparable à un bf 109 -->
<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-9" "1942" >}}
{{< exemplaires 16769 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-9"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-9"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-9-frank/"
  "https://upload.wikimedia.org/wikipedia/commons/1/15/Flight%21_Yakovlev_Yak-9UM_HB-RYA_%288355282184%29.jpg"
  "English:  Aleksandr MarkinРусский:  Александр Маркин, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : remise à niveau , comparable à un bf 109 -->
<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine" "La-5" "1942" >}}
{{< exemplaires 9920 >}}
<p>Basé sur le LaGG-3.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_La-5"
  "https://en.wikipedia.org/wiki/Lavochkin_La-5"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-la-5/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/La5-red66.jpg"
  "Soviet propaganda, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : contribué au succès du pacifique -->
<!-- air supremacy : supériorité aérienne -->
<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F6F Hellcat" "1943" "embarqué" >}}
{{< exemplaires 12275 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_F6F_Hellcat"
  "https://en.wikipedia.org/wiki/Grumman_F6F_Hellcat"
  "https://www.avionslegendaires.net/avion-militaire/grumman-f6f-hellcat/"
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Grumman_F6F-3_Hellcat_of_VF-1_in_flight_over_California_%28USA%29%2C_in_1943_%2880-G-K-605%29.jpg"
  "Naval History & Heritage Command, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "ka-w3--0TlA" >}} <!-- Cap Aviation -->
{{< ressource-video-youtube "jBYl0WwIYLI" >}} <!-- les ailes de legende -->
</div>

<!-- fighter aircraft, arrivé trop tard et trop peu nombreux -->
<div class="aeronef">
{{< aeronef ":jp:" "Kawanishi" "N1K1-J Rex" "1943" "chasse" >}}
<p>Basé sur l'hydravion de chasse N1K.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Kawanishi_N1K1-J"
  "https://en.wikipedia.org/wiki/Kawanishi_N1K"
  "https://www.avionslegendaires.net/avion-militaire/kawanishi-n1k1-j-shiden-george/"
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Kawanishi_N1K2-J_050317-F-1234P-015.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : lourdement armé : chasseur bombardier -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Tempest" "1944" "chasseur bombardier" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Tempest"
  "https://en.wikipedia.org/wiki/Hawker_Tempest"
  "https://www.avionslegendaires.net/avion-militaire/hawker-tempest/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hawker_Tempest_V_in_flight_Nov_1944.jpg"
  "RAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine" "La-7" "1944" "chasse" >}}
<p>Basé sur le La-5.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_La-7"
  "https://en.wikipedia.org/wiki/Lavochkin_La-7"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-7-fin/"
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Lavochkin_La-7_%E2%80%9927_white%E2%80%99_%2825168790698%29.jpg"
  "Alan Wilson from Stilton, Peterborough, Cambs, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-3" "1944" "chasseur léger" >}}
<p>Très léger et maniable, excellent en dogfight.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-3"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-3"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-3/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Jak-3U.jpg"
  "Rschider, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "UgOYCe0n0LY" >}} <!-- musee de l'air -->
</div>

<!-- fighter aircraft, arrivé trop tard et trop peu nombreux -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-84" "1944" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-84"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-84"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-84-hayate-franck/"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Nakajima_Ki84_Hayate_N3385G_ONT_18.10.70_edited-3.jpg"
  "RuthAS, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : chasseur de nuit, désigné pour -->
<div class="aeronef">
{{< aeronef ":us:" "Northrop" "P-61 Black Widow" "1944" "chasseur de nuit">}}
<p>Premier chasseur américain conçu pour être un chasseur de nuit.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Northrop_P-61_Black_Widow"
  "https://en.wikipedia.org/wiki/Northrop_P-61_Black_Widow"
  "https://www.avionslegendaires.net/avion-militaire/northrop-p-61-black-widow/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/P-61_from_above.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h3>Bombardiers en piqué</h3>
</div>

<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 87 Stuka" "1936" "bombardier en piqué" >}}
{{< exemplaires 6000 >}}
<p>Une sirène pour terroriser les populations lors du piqué.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Junkers_Ju_87"
  "https://en.wikipedia.org/wiki/Junkers_Ju_87"
  "https://www.avionslegendaires.net/avion-militaire/junkers-ju-87-stuka/"
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Junkers_Ju_87B_dropping_bombs.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "l8ox3PFd_qU" >}} <!-- Yataka -->
{{< ressource-video-youtube "6uvsgObrJx0" >}} <!-- Cap Aviation -->
{{< ressource-video-youtube "PpRfvKx2ouE" >}} <!-- Imineo -->
</div>
<div class="images">
{{< ressource-video-youtube "2JdcyGGby0Y" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Petliakov" "Pe-2 Buck" "1941" "bombardier en piqué" >}}
{{< exemplaires 11427 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Petliakov_Pe-2"
  "https://en.wikipedia.org/wiki/Petlyakov_Pe-2"
  "https://www.avionslegendaires.net/avion-militaire/petlyakov-pe-2/"
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Pe2-2.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "A-36 Invader/Apache" "1941" "attaque au sol, bombardier en piqué" >}}
<p>Version d'attaque du P-51 Mustang.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_A-36_Apache"
  "https://en.wikipedia.org/wiki/North_American_A-36"
  "https://www.avionslegendaires.net/avion-militaire/north-american-a-36-invader-apache/"
  "https://upload.wikimedia.org/wikipedia/commons/8/81/A-36_%22Apache%22_of_the_27th_Fighter_Bomber_Group.jpg"
  "USAAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "SB2C Helldiver" "1943" "bombardier en piqué, embarqué" >}}
{{< exemplaires 7140 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Curtiss_SB2C_Helldiver"
  "https://en.wikipedia.org/wiki/Curtiss_SB2C_Helldiver"
  "https://www.avionslegendaires.net/avion-militaire/curtiss-sb2c-helldiver/"
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/Curtiss_SB2C-5_Helldiver_warbird_in_flight.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h3>Bombardiers légers</h3>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "ANT-40 / SB" "1935" "bombardier rapide" >}}
{{< exemplaires 6656 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_SB"
  "https://en.wikipedia.org/wiki/Tupolev_SB"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-sb-2/"
  "https://upload.wikimedia.org/wikipedia/commons/1/13/Aeroflot_Tupolev_ANT-40_SSSR-L2440.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Blenheim" "1937" "bombardier rapide" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bristol_Blenheim"
  "https://en.wikipedia.org/wiki/Bristol_Blenheim"
  "https://www.avionslegendaires.net/avion-militaire/bristol-blenheim/"
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Blenheim_-_RIAT_2015_%2819998104414%29.jpg"
  "Airwolfhound from  Hertfordshire, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "KSLXszp2lYM" >}} <!-- Imineo -->
</div>

<div class="aeronef">
{{< aeronef ":de:" "Dornier" "Do 17" "1937" "bombardier léger, chasseur de nuit, reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dornier_Do_17"
  "https://en.wikipedia.org/wiki/Dornier_Do_17"
  "https://www.avionslegendaires.net/avion-militaire/dornier-do-17/"
  "https://upload.wikimedia.org/wikipedia/commons/2/22/Bundesarchiv_Bild_101I-342-0603-25%2C_Belgien-Frankreich%2C_Flugzeuge_Dornier_Do_17.jpg"
  "Bundesarchiv, Bild 101I-342-0603-25 / Ketelhohn [Kettelhohn] / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h3>Avions d'attaque au sol</h3>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-2 Chtourmovik" "1941" "avion d'attaque ou bombardier torpilleur" >}}
{{< exemplaires 36183 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-2"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-2"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-il-2-sturmovik/"
  "https://upload.wikimedia.org/wikipedia/commons/2/23/Il2_sturmovik.jpg"
  "no info, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- Fighter aircraft : chasseur de nuit -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-20 Havoc / DB-7" "1941" "attaque au sol, bombardier léger, chasseur nocturne" >}}
{{< exemplaires 7476 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-20_Havoc"
  "https://en.wikipedia.org/wiki/Douglas_A-20_Havoc"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-20-havoc/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Douglas_A-20G_Havoc.jpg"
  "USAAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":de:" "Henschel" "Hs 129" "1942" "avion d'attaque" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Henschel_Hs_129"
  "https://en.wikipedia.org/wiki/Henschel_Hs_129"
  "https://www.avionslegendaires.net/avion-militaire/henschel-hs-129/"
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Henschel_Hs_129B.jpg"
  "USAAF; original uploader to en.wikipedia was en:user:Maury Markowitz, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-26 Invader" "1944" "attaque au sol" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-26_Invader"
  "https://en.wikipedia.org/wiki/Douglas_A-26_Invader"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-26-invader/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Douglas_A26_Invader-2362.jpg"
  "Ragnhild & Neil Crawford, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "acX9bpPilkM" >}} <!-- Les ailes de legende -->
</div>

<div class="titre_generation">
<h3>Bombardiers moyens</h3>
</div>

<div class="aeronef">
{{< aeronef ":de:" "Heinkel" "He 111" "1937" "bombardier moyen" >}}
{{< exemplaires 7300 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Heinkel_He_111"
  "https://en.wikipedia.org/wiki/Heinkel_He_111"
  "https://www.avionslegendaires.net/avion-militaire/heinkel-he-111/"
  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg"
  "Bundesarchiv, Bild 101I-343-0694-21 / Schödl (e) / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Vickers" "Wellington" "1938" "bombardier moyen, patrouilleur maritime" >}}
{{< exemplaires 11461 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Vickers_Wellington"
  "https://en.wikipedia.org/wiki/Vickers_Wellington"
  "https://www.avionslegendaires.net/avion-militaire/vickers-wellington/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vickers_Wellington_Mk2.jpg"
  "British Government., Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "e4EL0tuOm4o" >}} <!-- Imineo -->
</div>

<!-- Fighter aircraft : chasseur de nuit -->
<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 88" "1939" "bombardier moyen" >}}
{{< exemplaires 15183 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Junkers_Ju_88"
  "https://en.wikipedia.org/wiki/Junkers_Ju_88"
  "https://www.avionslegendaires.net/avion-militaire/junkers-ju-88/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bundesarchiv_Bild_101I-417-1766-03A%2C_Flugzeug_Junkers_Ju_88.jpg"
  "Bundesarchiv, Bild 101I-417-1766-03A / Ellerbrock / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>


<div class="aeronef">
{{< aeronef ":us:" "North American" "B-25 Mitchell" "1941" "bombardier moyen" >}}
{{< exemplaires 9984 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_B-25_Mitchell"
  "https://en.wikipedia.org/wiki/North_American_B-25_Mitchell"
  "https://www.avionslegendaires.net/avion-militaire/north-american-b-25-mitchell/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/B25_Mitchell_-_Chino_Airshow_2014_%2814033501440%29.jpg"
  "Airwolfhound from  Hertfordshire, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "jat6DEeZKyM" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-2 Bat" "1941" "bombardier moyen" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-2"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-2"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-2-bat/"
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Tupolev_Tu-2_%28China_Aviation_Museum%29.jpg"
  "Flavio Mucia (AMB Brescia), CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Martin" "B-26 Marauder" "1941" "bombardier moyen" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Martin_B-26_Marauder"
  "https://en.wikipedia.org/wiki/Martin_B-26_Marauder"
  "https://www.avionslegendaires.net/avion-militaire/martin-b-26-marauder/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/B_26.jpg"
  "Photo by: Charles E. Brown. The original uploader was Bzuk at English Wikipedia., 2007-02-14 (original upload date), Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "lY1yau_KCGY" >}} <!-- les ailes de legende -->
</div>

<div class="titre_generation">
<h3>Bombardiers torpilleurs, patrouille maritime</h3>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Consolidated" "PBY Catalina" "1936" "hydravion de patrouille et de bombardement" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Consolidated_PBY_Catalina"
  "https://en.wikipedia.org/wiki/Consolidated_PBY_Catalina"
  "https://www.avionslegendaires.net/avion-militaire/consolidated-pby-catalina/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/PBY_Catalina%2C_Southport_Airshow_2009.jpg"
  "John from Manchester, uk, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "cS2KevJqV4s" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Beaufort" "1939" "torpilleur" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bristol_Beaufort"
  "https://en.wikipedia.org/wiki/Bristol_Beaufort"
  "https://www.avionslegendaires.net/avion-militaire/bristol-beaufort/"
  "https://upload.wikimedia.org/wikipedia/commons/2/22/Bristol_Beaufort_ExCC.jpg"
  "Royal Air Force, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Grumman" "TBF Avenger" "1942" "bombardier torpilleur embarqué" >}}
{{< exemplaires 9836 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_TBF_Avenger"
  "https://en.wikipedia.org/wiki/Grumman_TBF_Avenger"
  "https://www.avionslegendaires.net/avion-militaire/grumman-tbf-tbm-avenger/"
  "https://upload.wikimedia.org/wikipedia/commons/d/db/TBM3_Avenger_-_Chino_Airshow_2014_%2814344070442%29.jpg"
  "Airwolfhound from  Hertfordshire, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h3>Bombardiers lourds</h3>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-17 Flying Fortress" "1938" "bombardier lourd" >}}
{{< exemplaires 12731 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_B-17_Flying_Fortress"
  "https://en.wikipedia.org/wiki/Boeing_B-17_Flying_Fortress"
  "https://www.avionslegendaires.net/avion-militaire/boeing-b-17-flying-fortress/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/B17_-_Chino_Airshow_2014_%28framed%29.jpg"
  "Airwolfhound, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "_ctKDdsJ774" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Short" "S.29 Stirling" "1940" "bombardier lourd" >}}
<p>Premier bombardier lourd quadrimoteur britanique.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Short_Stirling"
  "https://en.wikipedia.org/wiki/Short_Stirling"
  "https://www.avionslegendaires.net/avion-militaire/short-s-29-stirling/"
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Aircraft_of_the_Royal_Air_Force_1939-1945-_Short_S.29_Stirling._CH3138.jpg"
  "Royal Air Force official photographer, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "HP.57 Halifax" "1940" "bombardier lourd quadrimoteur" >}}
{{< exemplaires 6176 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Handley_Page_Halifax"
  "https://en.wikipedia.org/wiki/Handley_Page_Halifax"
  "https://www.avionslegendaires.net/avion-militaire/handley-page-hp-57-halifax/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Halifax_Bomber_2_ExCC.jpg"
  "George Woodbine, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Consolidated" "B-24 Liberator" "1941" "bombardier lourd, chasseur de sous marin" >}}
{{< exemplaires 18482 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Consolidated_B-24_Liberator"
  "https://en.wikipedia.org/wiki/Consolidated_B-24_Liberator"
  "https://www.avionslegendaires.net/avion-militaire/consolidated-b-24-liberator/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Maxwell_B-24.jpg"
  "Unknown, U.S. Air Force archived photograph, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "dq7Wpq00NJc" >}} <!-- Cap Aviation -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Avro" "Lancaster" "1942" "bombardier lourd" >}}
{{< exemplaires 7377 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Avro_Lancaster"
  "https://en.wikipedia.org/wiki/Avro_Lancaster"
  "https://www.avionslegendaires.net/avion-militaire/avro-lancaster/"
  "https://upload.wikimedia.org/wikipedia/commons/8/83/Battle_of_Britain_Memorial_flight_Avro_Lancaster_%28cropped%29.jpg"
  "Cpl Phil Major ABIPP, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : impossible à arreter par le japon -->
<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-29 Superfortress" "1944" "bombardier lourd" >}}
{{< caracteristique "Bombe atomique" >}}
<p>Bombes atomiques sur Hiroshima et Nagasaki.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_B-29_Superfortress"
  "https://en.wikipedia.org/wiki/Boeing_B-29_Superfortress"
  "https://www.avionslegendaires.net/avion-militaire/boeing-b-29-superfortress/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/B-29_in_flight.jpg"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h2>Chasseurs jets première génération</h2>
<p>1942-1950 : semblable aux chasseurs à motopropulseurs à explosions, poussée limitée des premiers moteurs à réaction, subsoniques, radar rares, armement classique ou conventionnel (canons, bombes, roquettes). <ul>
<li />Utilisation d'ailes en flèche pour approcher le mur du son (mais sans grande manœvrabilité), dédiés à l'interception ou la supériorité aérienne (exemples: MiG-15 ou F-86).</p>
</ul>
</div>

<!-- fighter aircraft : ailes en fleches -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Me 163 Komet" "1944" "intercepteur">}}
<p>seul avion de chasse de type avion-fusée de l'histoire.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Me_163_Komet"
  "https://en.wikipedia.org/wiki/Messerschmitt_Me_163_Komet"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-me-163-komet/"
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Messerschmitt_Me_163B_USAF.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<!-- fighter aircraft : ailes en fleches -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Me 262" "1944" "chasseur-bombardier">}}
<p>Premier avion de chasse opérationnel à moteur à réaction de l'histoire. Utilisé à la fin de la seconde guerre mondiale.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Me_262"
  "https://en.wikipedia.org/wiki/Messerschmitt_Me_262"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-me-262-schwalbe/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF.jpg"
  "USAF museum, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Gloster" "Meteor" "1944" >}}
<p>Seul avion à réaction utilisé par les alliés pendant la seconde guerre mondiale.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Gloster_Meteor"
  "https://en.wikipedia.org/wiki/Gloster_Meteor"
  "https://www.avionslegendaires.net/avion-militaire/gloster-g-41-meteor/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gloster_Meteor_Centenary_of_Military_Aviation_2014_%28cropped%29.jpg"
  "Chris Phutully, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-80 Shooting Star" "1945" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_P-80_Shooting_Star"
  "https://en.wikipedia.org/wiki/Lockheed_P-80_Shooting_Star"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-p-80-shooting-star/"
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/P80-1_300_%28cropped%29.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-84 Thunderjet" "1947" >}}
{{< exemplaires 7524 >}}
<P>Version F-84F Thunderstreak : ailes en flèches. Version RF-84F Thunderflash : reconnaissance.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Republic_F-84_Thunderjet"
  "https://en.wikipedia.org/wiki/Republic_F-84_Thunderjet"
  "https://www.avionslegendaires.net/avion-militaire/republic-f-84-thunderjet/"
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/F-84E_of_9th_Fighter-Bomber_Squadron_in_Korea.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "0QXwnORK0XE" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-15 Fagot" "1948" >}}
{{< exemplaires 18169 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-15"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-15"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-15-fagot/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Duxford_Air_Festival_2017_-_mig1_%2834842016051%29.jpg"
  "wallycacsabre, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "K9UTQs9GHcg" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "_LaaGkpVZ-k" >}} <!-- Cap Aviation -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "F-86 Sabre" "1949" >}}
{{< exemplaires 9860 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_F-86_Sabre"
  "https://en.wikipedia.org/wiki/North_American_F-86_Sabre"
  "https://www.avionslegendaires.net/avion-militaire/north-american-f-86-sabre/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-86_Sabre_hertiage_flight.jpg"
  "U.S. Air Force photo by J.M. Eddins Jr., Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "zPuEcTYlGtU" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-17 Fresco" "1952" >}}
{{< exemplaires 10367 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-17"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-17"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-17-fresco/"
  "https://upload.wikimedia.org/wikipedia/commons/d/df/MiG-17_Takes_to_the_Sky_%28cropped%29.jpg"
  "Balon Greyjoy, CC0, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":canada:" "Avro Canada" "CF-100 Canuck" "1953" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Avro_Canada_CF-100_Canuck"
  "https://en.wikipedia.org/wiki/Avro_Canada_CF-100_Canuck"
  "https://www.avionslegendaires.net/avion-militaire/avro-canada-cf-100-canuck/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f6/CF-100s_423_Sqn.jpg"
  "Canadian Department of National Defence, Public domain, via Wikimedia Commons"
>}}
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
{{< mach 1.4 >}}
<p>Premier avion de l'USAF à franchir le mur du son en pallier.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_F-100_Super_Sabre"
  "https://en.wikipedia.org/wiki/North_American_F-100_Super_Sabre"
  "https://www.avionslegendaires.net/avion-militaire/north-american-f-100-super-sabre/"
  "https://upload.wikimedia.org/wikipedia/commons/e/ea/F_100d_56_3238_50tfw_wc_1958.jpg"
  "United States Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "76FlSirWXOI" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "NnDKHfZsy8Q" >}} <!-- drole de machines -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-19 Farmer" "1955" "chasseur" >}}
{{< mach 1.35 >}}
<p>
Premier avion supersonique massivement produit.<br />
Premier avion soviétique passant le mur du son en pallier.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-19"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-19"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-19-farmer/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/0409_MIG_19_%2817573197084%29.jpg"
  "Eric Salard, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-102 Delta Dagger" "1956" "intercepteur" >}}
{{< mach 1.25 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Premier avion de l'USAF à suivre la loi des aires dans son design.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Convair_F-102_Delta_Dagger"
  "https://en.wikipedia.org/wiki/Convair_F-102_Delta_Dagger"
  "https://www.avionslegendaires.net/avion-militaire/convair-f-102-delta-dagger/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Convair_YF-102_FC-782.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell" "F-101 Voodoo" "1957" "chasseur bombardier, ou intercepteur" >}}
{{< mach 1.72 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Premier avion de l'USAF à franchir les 1000 mph (1600 km/h).</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_F-101_Voodoo"
  "https://en.wikipedia.org/wiki/McDonnell_F-101_Voodoo"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-101-voodoo/"
  "https://upload.wikimedia.org/wikipedia/commons/4/49/F-101B_New_York_ANG_in_flight_1978.jpeg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Vought" "F-8 Crusader" "1957" "embarqué, supériorité aérienne" >}}
{{< mach 1.72 >}}
{{< caracteristique "veille infrarouge" >}}
<p>Voilure à angle de calage variable.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Vought_F-8_Crusader"
  "https://en.wikipedia.org/wiki/Vought_F-8_Crusader"
  "https://www.avionslegendaires.net/avion-militaire/vought-f-8-crusader/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Vought_RF-8A_Crusader_of_VFP-63_in_flight%2C_circa_in_1962_%286430102%29.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "ExwU1lSUs7Q" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "F-104 Starfighter" "1958" "intercepteur" >}}
{{< mach 2.2 >}}
<p>
Premier avion de combat capable d'aller à mach 2.<br />
Le seul avion de l'histoire à détenir simultanément le record de vitesse et d'altitude.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_F-104_Starfighter"
  "https://en.wikipedia.org/wiki/Lockheed_F-104_Starfighter"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-f-104-starfighter/"
  "https://upload.wikimedia.org/wikipedia/commons/d/da/F104G.jpg"
  "U.S. Air Force photo,, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "LgPcH0dk-pM" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "Jtxrn3yqPQw" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-106 Delta Dart" "1959" "intercepteur" >}}
{{< mach 2.39 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "veille infrarouge" >}}
{{< caracteristique "Datalink SAGE" >}}
<p>Utilisation d'une aile delta, mach 2.3.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Convair_F-106_Delta_Dart"
  "https://en.wikipedia.org/wiki/Convair_F-106_Delta_Dart"
  "https://www.avionslegendaires.net/avion-militaire/convair-f-106-delta-dart/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eclipse_program_QF-106_aircraft_in_flight.jpg"
  "NASA/Jim Ross, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "QDdD4KPAOR8" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-9 Fishpot" "1959" "intercepteur" >}}
{{< mach 1.8 >}}
<p>Delta.<br />Une variante Su-11...</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-9"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-9"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-9-fishpot/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Su-9.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "lQd684FwTRk" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "J35 Draken" "1960" >}}
{{< mach 2.0 >}}
{{< caracteristique "super-manœvrabilité (double-delta, cobra = Kort Parad)" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Saab_35_Draken"
  "https://en.wikipedia.org/wiki/Saab_35_Draken"
  "https://www.avionslegendaires.net/avion-militaire/saab-j35-draken/"
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Saab_SK_35C_Draken_%28DragonKite%29_SE-DXP810.jpg"
  "Robert Sullivan, PDM-owner, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "LhCSSlfNJk8" >}}
</div>
<div class="images">
{{< ressource-video-youtube "vay7gVojgy0" >}}
{{< ressource-video-youtube "jqiDEcfSnXs" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-21 Fishbed" "1960" "chasseur et intercepteur" >}}
{{< exemplaires 13996 >}}
{{< mach 2.05 >}}
{{< caracteristique "super-manœvrabilité (delta, cobra)" >}}
<p>Le chasseur supersonique le plus produit au monde.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-21"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-21"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-21-fishbed/"
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Croatian_MiG-21_%28cropped%29.jpg"
  "Gojanovic123456789, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "FSdcJzgNFHM" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "English Electric" "Lightning" "1960" "intercepteur" >}}
{{< mach 2.3 >}}
<p>Biréacteur, l'un au dessus de l'autre.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/English_Electric_Lightning"
  "https://en.wikipedia.org/wiki/English_Electric_Lightning"
  "https://www.avionslegendaires.net/avion-militaire/bac-lightning/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lightning.inflight.arp.750pix.jpg"
  "Arpingstone, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage III" "1961" "intercepteur, puis multirôle" >}}
{{< mach 2.2 >}}
<p>Delta</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_III"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_III"
  "https://www.avionslegendaires.net/avion-militaire/dassault-mirage-iii/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/RAAF_Mirage_III_%2878-438976%29.jpg"
  "TSGT. Curt Eddings (USAF), Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "DueHCwa8uc8" >}} <!-- Drole de machine -->
{{< ressource-video-youtube "Gg3Of12mJrU" >}}
{{< ressource-video-youtube "4uM81xdS3E8" >}} <!-- Yataka -->
</div>
<div class="images">
{{< ressource-video-youtube "h1jT8RZSM_I" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage 5" "1970" "attaque au sol, puis multirôle" >}}
{{< mach 2.2 >}}
<p>Delta. Basé sur le Mirage III.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_5"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_5"
  "https://www.avionslegendaires.net/avion-militaire/dassault-mirage-5-50/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mirage_5F.jpg"
  "www.mablehome.com, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
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
{{< aeronef ":us:" "McDonnell Douglas" "F-4 Phantom II" "1960" "embarqué, chasseur-bombardier et intercepteur, supériorité aérienne" >}}
{{< mach 2.23 >}}
{{< caracteristique "veille infrarouge" >}}
<p>F-4J au début des années 1970s : premier radar opérationnel look-down/shoot-down.<br />
Neuf points d'emports.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_F-4_Phantom_II"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_F-4_Phantom_II"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-4-phantom-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/QF-4_Holloman_AFB.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "s_qjwnFvoxs" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Northrop" "F-5 Freedom Fighter" "1964" "avion de chasse léger et attaque" >}}
{{< mach 1.63 >}}
<p>Faible coût, faible entretien.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Northrop_F-5_Freedom_Fighter"
  "https://en.wikipedia.org/wiki/Northrop_F-5"
  "https://www.avionslegendaires.net/avion-militaire/northrop-f-5-freedom-fighter/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/J-3005.jpg"
  "Peng Chen, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "P59n9_R62RY" >}} <!-- Les ailes de legende -->
{{< ressource-video-youtube "2nWrScjSZ6g" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-128/Tu-28 Fiddler" "1965" "intercepteur longue portée" >}}
{{< mach 1.5 >}}
<p>Le plus gros chasseur jamais mis en service.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-128"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-28"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-28-tu-128-fiddler/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tupolev_Tu-128_0_red_%2810229214405%29.jpg"
  "Alan Wilson, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-15 Flagon" "1967" "intercepteur" >}}
{{< mach 2.5 >}}
<p>Delta. Basé sur le Su-9. Bi-réacteur.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-15"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-15"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-15-flagon/"
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Su-15_Flagon_A.jpg"
  "US gov, Public domain, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "XH5QWCdRXTw" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-23 Flogger" "1970" "chasseur bombardier" >}}
{{< mach 2.35 >}}
{{< caracteristique "veille infrarouge" >}}
<p>
L'appareil à géométrie variable le plus produit.<br />
Premier radar soviétique look-down/shoot-down.<br />
Un des premiers appareils soviétiques équipés de missiles BVR.<br />
Une variante MiG-27 dédiée à l'attaque au sol.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-23"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-23"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-23-flogger/"
  "https://upload.wikimedia.org/wikipedia/commons/5/57/MiG-23-red12.jpg"
  "US military, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "zrLFrQsomAs" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-25 Foxbat" "1972" "interception et reconnaissance" >}}
{{< mach 3.2 >}}
{{< caracteristique "veille infrarouge" >}}
<p>Très rapide.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-25"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-25"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-25-foxbat/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/%D0%9C%D0%B8%D0%BA%D0%BE%D1%8F%D0%BD-%D0%93%D1%83%D1%80%D0%B5%D0%B2%D0%B8%D1%87_%D0%9C%D0%B8%D0%93-25%2C_%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6_-_%D0%91%D0%B0%D0%BB%D1%82%D0%B8%D0%BC%D0%BE%D1%80_RP91697.jpg"
  "English:  Alex BeltyukovРусский:  Александр Бельтюков, CC BY-SA 3.0 GFDL 1.2, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "CgAeLkgkZBE" >}} <!-- Drole de machine -->
</div>
<div class="images">
{{< ressource-video-youtube "fRjKKfzdRlo" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":sweden:" "Saab" "37 Viggen" "1972" "attaque, chasse, reconnaissance" >}}
{{< mach 2.1 >}}
{{< caracteristique "manœuvrabilité (delta, canards)" >}}
{{< caracteristique "atterrissage court (inversion de poussée)" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Saab_37_Viggen"
  "https://en.wikipedia.org/wiki/Saab_37_Viggen"
  "https://www.avionslegendaires.net/avion-militaire/saab-j37-viggen/"
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Saab_AJS-37_Viggen_%28angled%29.jpg"
  "Alan Wilson, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-playlist-youtube "PLZkiCzfgMp65Z1e73Qo4DjKM6ecy8ynP2" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fBE41A9VT3Q" >}}
{{< ressource-video-youtube "UyA-oTElVRw" >}}
{{< ressource-video-youtube "1PhvXPzzCEU" >}}
{{< ressource-video-youtube "KeQQEDRxNuE" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage F1" "1973" "reconnaissance et attaque" >}}
{{< mach 2.2 >}}
<p>Basé sur le Mirage III, utilisation d'une aile en flèche pour une vitesse d'approche plus faible.
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_F1"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_F1"
  "https://www.avionslegendaires.net/avion-militaire/dassault-mirage-f1/"
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/A2407-France-MirageF1-660-RIAT2013.JPG"
  "MilborneOne, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "u6GCimwkcx8" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "UnycNFTXXco" >}}
</div>
<div class="images">
{{< ressource-video-youtube "38AEBg2ZkXs" >}} <!-- Armee de l'air et de l'espace -->
</div>

<div class="aeronef">
{{< aeronef ":israel:" "IAI" "Kfir" "1975" >}}
{{< mach 2.3 >}}
<p>Delta. Basé sur le Mirage 5.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/IAI_Kfir"
  "https://en.wikipedia.org/wiki/IAI_Kfir"
  "https://www.avionslegendaires.net/avion-militaire/i-a-i-kfir/"
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Colombian_Air_Force_Kfir_%28cropped%29.jpg"
  "S.C. Air National Guard (Maj. Matthew Booth), Public domain, via Wikimedia Commons"
>}}
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
{{< aeronef ":us:" "Grumman" "F-14 Tomcat" "1974" "embarqué, intercepteur, supériorité aérienne, multirôle" >}}
{{< mach 2.4 >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_F-14_Tomcat"
  "https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat"
  "https://www.avionslegendaires.net/avion-militaire/grumman-f-14-tomcat/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg"
  "U.S. Navy photo, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "AHtAdp3Kei0" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F-15 Eagle" "1976" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.5 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_F-15_Eagle"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_F-15_Eagle"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-15-eagle/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15%2C_71st_Fighter_Squadron%2C_in_flight.JPG"
  "U.S. Air Force photo/Staff Sgt. Samuel Rogers, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "0DmjlubOn1g" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "General Dynamics" "F-16 Fighting Falcon" "1978" "multirôle, supériorité aérienne" >}}
{{< mach 2.05 >}}
<p>Commandes de vol électriques</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon"
  "https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon"
  "https://www.avionslegendaires.net/avion-militaire/general-dynamics-f-16-fighting-falcon/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/F-16_June_2008.jpg"
  "Master Sgt. Andy Dunaway, Public domain, via Wikimedia Commons"
>}}
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
{{< mach 2.83 >}}
{{< caracteristique "veille infrarouge" >}}
<p>
Basé sur le MiG-25, très rapide.<br />
Premier avion avec radar PESA<br />
Datalink.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-31"
  "https://en.wikipedia.org/wiki/Mikoyan_MiG-31"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-mig-31-foxhound/"
  "https://upload.wikimedia.org/wikipedia/commons/3/38/Russian_Air_Force_Mikoyan-Gurevich_MiG-31P.jpg"
  "Dmitriy Pichugin (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
{{< ressource-video-youtube "79DeCalsI-I" >}}
</div>
<div class="images">
{{< ressource-video-youtube "KP-EvqlCSJo" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-29 Fulcrum" "1983" "multirôle, supériorité aérienne" >}}
{{< mach 2.3 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Variante MiG-29M : modernisé.<br />
Variante MiG-29K : embarqué.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-29"
  "https://en.wikipedia.org/wiki/Mikoyan_MiG-29"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-mig-29-fulcrum/"
  "https://upload.wikimedia.org/wikipedia/commons/8/87/MiG-29K_at_MAKS-2007_airshow_%28altered%29.jpg"
  "Dmitriy Pichugin, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "8R0XFjDR-j0" >}} <!-- Les guerriers du ciel -->
</div>
<div class="images">
{{< ressource-video-youtube "iXRSyj_mNis" >}}
{{< ressource-video-youtube "VCWjByenDsM" >}}
{{< ressource-video-youtube "xzwL_6NuEls" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F/A-18 Hornet" "1983" "embarqué, multirôle" >}}
{{< mach 1.8 >}}
<p>Commandes de vol électriques</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_F/A-18_Hornet"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_F/A-18_Hornet"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-douglas-f-a-18-hornet/"
  "https://upload.wikimedia.org/wikipedia/commons/4/44/FA-18C_desert_refueling.jpg"
  "US Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "F61h1Fee9Zw" >}} <!-- les ailes de legende -->
</div>
<div class="images">
{{< ressource-playlist-youtube "PLCO6ndZDWgg3-duVAaaH8Lojv2ge6ilUf" >}}
{{< ressource-playlist-youtube "PLCO6ndZDWgg27ZPKn4eQttowQA_Py4GA2" >}}
{{< ressource-video-youtube "JYUm5Nl6318" >}}
{{< ressource-web "https://www.youtube.com/c/HornetVids/videos" "Youtube HornetVids" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":fr:" "Dassault" "Mirage 2000" "1984" "intercepteur, puis multirôle" >}}
{{< mach 2.2 >}}
{{< caracteristique "manœuvrabilité (delta)" >}}
{{< caracteristique "veille infrarouge limitée" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_2000"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_2000"
  "https://www.avionslegendaires.net/avion-militaire/dassault-aviation-mirage-2000/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mirage_2000C_in-flight_2_%28cropped%29.jpg"
  "SRA GREG L. DAVIS, USAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "VkRisFae93Y" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "bFHF9j_LvPk" >}}
{{< ressource-video-youtube "qsbqV0rz87o" >}}
{{< ressource-video-youtube "tXbzeEXdZpQ" >}} <!-- musee de l'air -->
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
{{< mach 2.35 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>
Longue portée.<br />
Variantes : <ul>
<li />Su-30 : modernisé, biplace
<li />Su-33 : embarquée, canards
<li />Su-34 : attaque / bombardement
<li />Su-35S : modernisé, poussée vectorielle
<li />Su-37 : prototype à poussée vectorielle
</ul>
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-27"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-27"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-27-flanker/"
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ukrainian_Air_Force_Sukhoi_Su-27P_Flanker_%2829583343448%29.jpg"
  "Dave_S. from Witney, England, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "FjEQy8S0Vp0" >}} <!-- Imineo -->
{{< ressource-video-youtube "yZvMljUNCeU" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fTzCnolXsnM" >}}
{{< ressource-video-youtube "daOPK07baBw" >}}
{{< ressource-video-youtube "MtlLVexLfrQ" >}}
</div>

<div class="aeronef">
{{< aeronef ":gb:/:de:" "Panavia" "Tornado ADV" "1985" "intercepteur" >}}
{{< mach 2.2 >}}
<p>
Géométrie variable. Basé sur le Tornado.<br />
<i>ADV = Air Defense Variant.</i>
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Panavia_Tornado_ADV"
  "https://en.wikipedia.org/wiki/Panavia_Tornado_ADV"
  "https://www.avionslegendaires.net/avion-militaire/panavia-tornado-adv/"
  "https://upload.wikimedia.org/wikipedia/commons/0/00/Exercise_Red_Flag._MOD_45143909.jpg"
  "Cpl Paul Saxby RAF, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-30 Flanker-C/G/H" "1996" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2 >}}
{{< caracteristique "super-manœuvrabilité (cobra, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Basé sur le Su-27. Biplace.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-30"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-30"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-30-flanker-c/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Sukhoi_Su-30_inflight.jpg"
  "Sergey Krivchikov (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>



<div class="titre_generation">
<h2>Chasseurs jets génération 4.5</h2>
<p>La génération 4.5 correspond souvent aux nouveaux avions, ou aux versions mises à jours au début des années 90. Ils comprennent certaines capacités de cinquième génération, sans toutes les avoir. Ces capacités peuvent comprendre : <ul>
<li />généralisation des commandes de vol électriques
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
{{< mach 1.8 >}}
<p>Basé sur le F/A-18.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_F/A-18E/F_Super_Hornet"
  "https://en.wikipedia.org/wiki/Boeing_F/A-18E/F_Super_Hornet"
  "https://www.avionslegendaires.net/avion-militaire/boeing-f-a-18e-f-super-hornet/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d8/A_Royal_Australian_Air_Force_F-A-18F_Super_Hornet_departs_after_receiving_fuel_from_a_U.S._Air_Force_KC-135_Stratotanker.jpg"
  "Tech. Sgt. Amy Lovgren, Public domain, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "0fM7SUSgFj8" >}}
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "JAS 39 Gripen" "1996" "intercepteur" >}}
{{< mach 2 >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.1" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Saab_JAS_39_Gripen"
  "https://en.wikipedia.org/wiki/Saab_JAS_39_Gripen"
  "https://www.avionslegendaires.net/avion-militaire/saab-jas-39-gripen/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg"
  "Tuomo Salonen / SIMFinnish Aviation Museum, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "LuwB6YYtwF4" >}}
</div>
<div class="images">
{{< ressource-video-youtube "BnOOxKD3uD4" >}}
{{< ressource-video-youtube "eXaPfUs6sQw" >}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Rafale" "2002" "embarqué" >}}
{{< mach 1.8 >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.4" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Rafale"
  "https://en.wikipedia.org/wiki/Dassault_Rafale"
  "https://www.avionslegendaires.net/avion-militaire/dassault-aviation-rafale/"
  "https://upload.wikimedia.org/wikipedia/commons/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg"
  "Tim Felce (Airwolfhound), CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
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
{{< mach 2.0 >}}
{{< caracteristique "super-manœuvrabilité (canards, poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>
Basé sur le Su-27/Su-30.<br />
Avionique occidentale (française et israélienne), ajout de canards et poussée vectorielle.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-30MKI"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-30MKI"
  ""
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sukhoi_Su-30MKI-3_%27SB_167%27_%2820443086186%29.jpg"
  "Alan Wilson from Stilton, Peterborough, Cambs, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":eu:" "Eurofighter" "Typhoon" "2004" "multirôle et supériorité aérienne" >}}
{{< mach 2.0 >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Eurofighter_Typhoon"
  "https://en.wikipedia.org/wiki/Eurofighter_Typhoon"
  "https://www.avionslegendaires.net/avion-militaire/eurofighter-ef-2000-typhoon/"
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg"
  "Chris Lofting (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "U45UyriEtZI" >}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":cn:/:pakistan:" "Chengdu" "JF-17 Thunder" "2010" >}}
{{< mach 1.8 >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Chengdu_JF-17_Thunder"
  "https://en.wikipedia.org/wiki/PAC/CAC_JF-17_Thunder"
  "https://www.avionslegendaires.net/avion-militaire/chengdu-pac-jf-17-thunder/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pakistan_JF-17_%28modified%29.jpg"
  "Shimin Gu, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "-4qLGbSEZ6s" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-35S Flanker-E" "2012" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Basé sur le Su-27.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-35"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-35"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-35-flanker-e/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Russian_Air_Force%2C_RF-95475%2C_Sukhoi_Su-35S_%2837230419561%29.jpg"
  "Anna Zvereva from Tallinn, Estonia, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "54UqQcBehlE" >}}
</div>

<div class="aeronef">
{{< aeronef ":india:" "HAL" "Tejas" "2015" "chasseur léger multirôle" >}}
{{< mach 1.6 >}}
{{< caracteristique "manœuvrabilité (double-delta)">}}
{{< caracteristique "veille infrarouge" >}}
<p>Des caractéristiques de furtivité : matériaux composites.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/HAL_Tejas"
  "https://en.wikipedia.org/wiki/HAL_Tejas"
  "https://www.avionslegendaires.net/avion-militaire/hal-tejas/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg"
  "Ministry of Defence, GODL-India <https://data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-35 Fulcrum-F" "2017" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>basé sur le MiG-29, radar AESA.<br />
 Le prototype MiG-29OVT disposait de poussée vectorielle, mais pas le MiG-35.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-35"
  "https://en.wikipedia.org/wiki/Mikoyan_MiG-35"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-mig-35-fulcrum-f/"
  "https://upload.wikimedia.org/wikipedia/commons/6/61/MiG-35D_%283861086285%29.jpg"
  "Carlos Menendez San Juan, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
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
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "furtif" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor"
  "https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-f-22-raptor/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg"
  "F-22_Raptor.JPG: Master Sgt. Andy Dunaway, Public domain, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-web "https://www.reddit.com/r/aviation/comments/tqgc2c/f22_pilot_demonstrates_a_minimum_radius_turn/" "F-22 pilot demonstrates a minimum radius turn followed by J-turn reposition a.k.a Herbst Maneuver..." >}}
{{< ressource-video-youtube "GUlHhKvIX3w" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-35 Lightning II" "2015" "embarqué" >}}
{{< mach 1.4 >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "décollage vertical" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II"
  "https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-martin-f-35-lightning-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg"
  "U.S. Air Force photo by Master Sgt. Donald R. Allen, Public domain, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "zW28Mb1YvwY" >}}
{{< ressource-video-youtube "Eiop4hrBJO4" >}}
{{< ressource-video-youtube "KVMiscT8VqE" >}}
</div>

<div class="aeronef">
{{< aeronef ":cn:" "Chengdu" "J-20 Firefang" "2017" "supériorité aérienne" >}}
{{< mach 2.5 >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Chengdu_J-20"
  "https://en.wikipedia.org/wiki/Chengdu_J-20"
  "https://www.avionslegendaires.net/avion-militaire/chengdu-j-20-firefang/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a2/J-20_at_Airshow_China_2016.jpg"
  "Alert5, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "bCm98fpR5Nc" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "xdFS8xehUU8" >}} <!-- Defense Insider -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-57 Felon" "2020" "supériorité aérienne" >}}
{{< mach 2.1 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle), cobra, herbst, kulbit" >}}
{{< caracteristique "supercroisière mach 1.6" >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-57"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-57"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-57/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sukhoi_Design_Bureau%2C_054%2C_Sukhoi_Su-57_%2849581303977%29.jpg"
  "Anna Zvereva from Tallinn, Estonia, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
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
{{< aeronef ":us:" "Douglas" "A-1 Skyraider / AD Skyraider" "1946" "attaque au sol et appui tactique, embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_AD_Skyraider"
  "https://en.wikipedia.org/wiki/Douglas_A-1_Skyraider"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-1-skyraider/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Douglas_A-1_Skyraider_%28AD-4NA%2C_126965%29_%287911148090%29.jpg"
  "Clemens Vasters from Viersen, Germany, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "dJ5erML2cNE" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-28 Beagle" "1950" "bombardier moyen" >}}
{{< exemplaires 6635 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-28"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-28"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-il-28-beagle/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Egyptian_Il-28_Beagle.JPEG"
  "Staff Sgt. Bill Thompson, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-4 Skyhawk" "1956" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-4_Skyhawk"
  "https://en.wikipedia.org/wiki/Douglas_A-4_Skyhawk"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-4-skyhawk/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Douglas_A-4E_Skyhawk_of_VA-164_in_flight_over_Vietnam_on_21_November_1967_%286430101%29.jpg"
  "Lt.JG Nelson, U.S. Navy, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "w81MRBg24QQ" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-105 Thunderchief" "1958" "chasseur bombardier" >}}
{{< mach 2.08 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Republic_F-105_Thunderchief"
  "https://en.wikipedia.org/wiki/Republic_F-105_Thunderchief"
  "https://www.avionslegendaires.net/avion-militaire/republic-f-105-thunderchief/"
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Republic_F-105D-30-RE_%28SN_62-4234%29_in_flight_with_full_bomb_load_060901-F-1234S-013.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "DAt2tfhHubQ" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-7 Fitter-A" "1959" "chasseur bombardier, attaque au sol" >}}
{{< mach 1.74 >}}
<p>Ailes en flèche</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-7"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-7"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-7-fitter/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Su-7.JPG"
  "Konflikty.pl (Attribution or Attribution), via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Étendard IV" "1962" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_%C3%89tendard_IV"
  "https://en.wikipedia.org/wiki/Dassault_%C3%89tendard_IV"
  "https://www.avionslegendaires.net/avion-militaire/dassault-etendard/"
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Dassault_Etendard_IVP%2C_France_-_Navy_AN2063232.jpg"
  "Steve Fitzgerald (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>


<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-6 Intruder" "1963" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_A-6_Intruder"
  "https://en.wikipedia.org/wiki/Grumman_A-6_Intruder"
  "https://www.avionslegendaires.net/avion-militaire/grumman-a-6-intruder/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Grumman_KA-6D_Intruder_of_VA-34_in_flight%2C_in_1988.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>


<div class="aeronef">
{{< aeronef ":us:" "General Dynamics" "F-111 Aardvark" "1967" "bombardier tout-temps" >}}
{{< mach 2.5 >}}
<p>géométrie variable, radar de suivi de terrain automatique</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/General_Dynamics_F-111_Aardvark"
  "https://en.wikipedia.org/wiki/General_Dynamics_F-111_Aardvark"
  "https://www.avionslegendaires.net/avion-militaire/general-dynamics-f-111-aardvark/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/AFR_F-111_air_to_air_refueling.jpg"
  "Master Sgt. Patrick Nugent, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "lA5stxVfp7o" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Ling-Temco-Vought" "A-7 Corsair II" "1967" "embarqué" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/LTV_A-7_Corsair_II"
  "https://en.wikipedia.org/wiki/LTV_A-7_Corsair_II"
  "https://www.avionslegendaires.net/avion-militaire/vought-a-7-corsair-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/A-7E_Corsair_II_of_VA-146_in_flight_on_16_November_1974_%28NNAM.1996.253.7100.039%29.jpg"
  "Robert L. Lawson, U.S. Navy, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "3DtRkAmKNTk" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "OV-10 Bronco" "1967" "reconnaissance et attaque au sol" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_OV-10_Bronco"
  "https://en.wikipedia.org/wiki/North_American_Rockwell_OV-10_Bronco"
  "https://www.avionslegendaires.net/avion-militaire/north-american-rockwell-ov-10-bronco/"
  "https://upload.wikimedia.org/wikipedia/commons/3/36/NASA_OV-10.jpg"
  "NASA, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "AC-130 Spectre" "1968" "gunship d'attaque au sol et appui aérien rapproché" >}}
<p>variante du C-130 Hercules</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_AC-130"
  "https://en.wikipedia.org/wiki/Lockheed_AC-130"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-ac-130-spectre/"
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/AC-130H_Spectre_banking_turn.jpg"
  "U.S. Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "TfoBodLpXx8" >}} <!-- Defense Insider -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Hawker Siddeley" "Harrier" "1969" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Siddeley_Harrier"
  "https://en.wikipedia.org/wiki/Hawker_Siddeley_Harrier"
  "https://www.avionslegendaires.net/avion-militaire/hawker-siddeley-harrier/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Spanish_AV-8S_Matador_%28cropped%29.jpg"
  "Lt. Cmdr.John Leenhouts, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "xqUWERG1qqU" >}} <!-- Les guerriers du ciel -->
{{< ressource-web "https://www.quora.com/How-effective-is-viffing-in-a-Harrier" "How effective is VIFFing in a Harrier" >}}
</div>
<div class="images">
{{< ressource-video-youtube "8UE9i82Kc_Y" >}} <!-- harrier viffing -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-17/20/22 Fitter-C" "1970" "chasseur bombardier, attaque au sol" >}}
{{< mach 2.09 >}}
<p>Basé sur le Su-7, géométrie variable. </p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-17"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-17"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-17-20-22-fitter/"
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Sukhoi_Su-22M4%2C_Czech_Republic_-_Air_Force_%28cropped%29.jpg"
  "Anthony Noble, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":fr:/:gb:" "SEPECAT" "Jaguar" "1973" "avion d'attaque" >}}
{{< mach 1.6 >}}
<p>attaque au sol</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/SEPECAT_Jaguar"
  "https://en.wikipedia.org/wiki/SEPECAT_Jaguar"
  "https://www.avionslegendaires.net/avion-militaire/sepecat-jaguar/"
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Jaguar_DF-SD-05-05511.JPEG"
  "DoD photo by: TSGT MIKE BUYTAS, USAF, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "VNcpFliHKUc" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "z-uqMUA7U-k" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-24 Fencer" "1974" "bombardier supersonique" >}}
{{< mach 1.6 >}}
<p>
Premier appareil soviétique équipé d'un système de navigation et d'attaque numérique.<br />
Géométrie variable.
</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-24"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-24"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-24-fencer/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sukhoi_Su-24_inflight_Mishin-2.jpg"
  "Alexander Mishin, CC BY-SA 3.0 GFDL, via Wikimedia Commons"
>}}
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Fairchild Republic" "A-10 Thunderbold II / Warthog" "1975" "attaque au sol et appui tactique" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Fairchild_A-10_Thunderbolt_II"
  "https://en.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II"
  "https://www.avionslegendaires.net/avion-militaire/fairchild-republic-a-10-thunderbolt-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/A-10_Thunderbolt_9875.JPG"
  "Konflikty.pl (Attribution or Attribution), via Wikimedia Commons"
>}}
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
{{< mach 1.3 >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Super-%C3%89tendard"
  "https://en.wikipedia.org/wiki/Dassault-Breguet_Super_%C3%89tendard"
  "https://www.avionslegendaires.net/avion-militaire/dassault-super-etendard/"
  "https://upload.wikimedia.org/wikipedia/commons/a/af/CdG-photo173.jpg"
  "Guillaume Rueda, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "svORBbmnZMc" >}} <!-- Chasse embarquee -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-25 Frogfoot" "1981" >}}
<p>Une variante Su-39...</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-25"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-25"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-25-scorpion-frogfoot/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg"
  "Fedor Leukhin, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "raYB4TWh-W4" >}}
</div>
<div class="images">
{{< ressource-video-youtube "fhNkAuhYI2k" >}}
</div>

<div class="aeronef">
{{< aeronef ":de:/:it:/:gb:" "Panavia" "Tornado" "1982" >}}
{{< mach 2.34 >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Panavia_Tornado"
  "https://en.wikipedia.org/wiki/Panavia_Tornado"
  "https://www.avionslegendaires.net/avion-militaire/panavia-tornado-ids/"
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/AGM-88_and_AIM-9_on_Tornado.jpg"
  "U.S. Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "5Trez3StUWQ" >}} <!-- Imineo -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "AV-8B Harrier II" "1983" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
{{< caracteristique "FLIR" >}}
<p>évolution du Hawker Siddeley Harrier</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_AV-8B_Harrier_II"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_AV-8B_Harrier_II"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-douglas-tav-8b-harrier-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/0/04/United_States_Marine_Corps_AV-8B_Harrier_II_hovering.jpg"
  "D. Miller from IL. USA, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-117 Nighthawk" "1983" "attaque au sol" >}}
{{< caracteristique "furtif" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_Martin_F-117_Nighthawk"
  "https://en.wikipedia.org/wiki/Lockheed_F-117_Nighthawk"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-martin-f-117-night-hawk/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg"
  "Staff Sgt. Aaron Allmon II, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "_h5JiIY8Exo" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":it:/:brazil:" "AMX International" "AMX" "1988" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/AMX_International_AMX"
  "https://en.wikipedia.org/wiki/AMX_International_AMX"
  "https://www.avionslegendaires.net/avion-militaire/amx-international-amx/"
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Alenia-Aermacchi-Embraer_AMX%2C_Italy_-_Air_Force_JP7721735.jpg"
  "Fabrizio Berni (GFDL <http://www.gnu.org/copyleft/fdl.html> or GFDL <http://www.gnu.org/copyleft/fdl.html>), via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-15E Strike Eagle" "1989" "chasseur bombardier" >}}
{{< mach 2.15 >}}
<p>Basé sur le F-15.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-15e-strike-eagle/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg"
  "Staff Sgt. Sean Carnes, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-34 Fullback" "1990" "chasseur bombardier" >}}
{{< mach 1.8 >}}
<p>Basé sur le Su-27.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-34"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-34"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-34-fullback/"
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/Refuelling_a_Sukhoi_Su-34_%28cropped%29.jpg"
  "Alex Beltyukov, CC BY-SA 3.0 GFDL 1.2, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":brazil:" "Embraer" "EMB 314 Super Tucano" "2003" "attaque et contre-insurrection" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Embraer_EMB_314"
  "https://en.wikipedia.org/wiki/Embraer_EMB_314_Super_Tucano"
  "https://www.avionslegendaires.net/avion-militaire/embraer-emb-314-super-tucano/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/A-29_Over_Afghanistan.jpg"
  "Staff Sgt. Larry Reid Jr., Public domain, via Wikimedia Commons"
>}}
</div>

<div class="titre_generation">
<h2>Bombardiers stratégiques</h2>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-4 Bull" "1949" "bombardier stratégique" >}}
<p>Copie du B-29.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-4"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-4"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-4-bull/"
  "https://upload.wikimedia.org/wikipedia/commons/8/86/Tu-4_.jpg"
  "Ronidong, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-36 Peacemaker" "1949" "bombardier stratégique lourd à long rayon d'action" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Convair_B-36_Peacemaker"
  "https://en.wikipedia.org/wiki/Convair_B-36_Peacemaker"
  "https://www.avionslegendaires.net/avion-militaire/convair-b-36-peacemaker/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Convair_B-36_Peacemaker.jpg"
  "U.S. Air Force photo, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "Oj5vMRS2eU8" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-47 Stratojet" "1952" "bombardier moyen à long rayon d'action" >}}
<p>Six réacteurs.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_B-47_Stratojet"
  "https://en.wikipedia.org/wiki/Boeing_B-47_Stratojet"
  "https://www.avionslegendaires.net/avion-militaire/boeing-b-47-stratojet/"
  "https://upload.wikimedia.org/wikipedia/commons/9/99/22d_Bombardment_Wing_Boeing_B-47E-55-BW_Stratojet_51-2394.jpg"
  "United States Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "Kk3GfN6lKtY" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Miassichtchev" "M-4 Bison" "1953" "bombardier stratégique lourd" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Miassichtchev_M-4"
  "https://en.wikipedia.org/wiki/Myasishchev_M-4"
  "https://www.avionslegendaires.net/avion-militaire/myasishchev-mya-4-m-4-molot-bison/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Bv_m4_02.jpg"
  "Boris Vasiljev, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "t_rnMnEf0vc" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-16 Badger" "1954" "bombardier stratégique" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://en.wikipedia.org/wiki/Tupolev_Tu-16"
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-16"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-16-badger/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tu-16_Badger_Soviet_Air_Force_%28cropped%29.jpg"
  "US Air Force, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-52 Stratofortress" "1955" "bombardier stratégique lourd à long rayon d'action" >}}
<p>Huit réacteurs.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_B-52_Stratofortress"
  "https://en.wikipedia.org/wiki/Boeing_B-52_Stratofortress"
  "https://www.avionslegendaires.net/avion-militaire/boeing-b-52-stratofortress/"
  "https://upload.wikimedia.org/wikipedia/commons/1/16/B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg"
  "Airman 1st Class Victor J. Caputo, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "RP5PsGolQnE" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Vickers" "Valiant" "1955" "bombardier stratégique, tanker" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Vickers_Valiant"
  "https://en.wikipedia.org/wiki/Vickers_Valiant"
  "https://www.avionslegendaires.net/avion-militaire/vickers-valiant/"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Vickers_Valiant_B%28K%29.1_1962.png"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Vickers_Valiant_B%28K%29.1_1962.png"
>}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-3 Skywarrior" "1956" "bombardier stratégique embarqué" >}}
<p>Bombe atomique, guerre électronique, ravitailleur.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-3_Skywarrior"
  "https://en.wikipedia.org/wiki/Douglas_A-3_Skywarrior"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-3-skywarrior/"
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/EA-3B_VQ-1_in_flight_South_China_Sea_1974.jpeg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-95 Bear" "1956" "bombardier stratégique lourd" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-95"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-95"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-95-bear/"
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Russian_Bear_%27H%27_Aircraft_MOD_45158140.jpg"
  "RAF, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "dKsIo1wIA6M" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "WCQbalWPuUo" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Avro" "Vulcan" "1956" "bombardier stratégique" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Avro_Vulcan"
  "https://en.wikipedia.org/wiki/Avro_Vulcan"
  "https://www.avionslegendaires.net/avion-militaire/avro-vulcan/"
  "https://upload.wikimedia.org/wikipedia/commons/0/05/XH558_%28G-VLCN%29_Avro_Vulcan_-_Last_Flight_over_Farnborough_%28cropped%29.jpg"
  "Alastair Barbour, CC BY 2.5 <https://creativecommons.org/licenses/by/2.5>, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "HP.80 Victor" "1958" "bombardier stratégique, tanker" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Handley_Page_Victor"
  "https://en.wikipedia.org/wiki/Handley_Page_Victor"
  "https://www.avionslegendaires.net/avion-militaire/handley-page-hp-80-victor/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d2/Handley_Page_HP-80_Victor_K2%2C_UK_-_Air_Force_AN1926561.jpg"
  "Mike Freer - Touchdown-aviation (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>
<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-58 Hustler" "1960" "bombardier stratégique supersonique" >}}
<p>delta, mach 2</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Convair_B-58_Hustler"
  "https://en.wikipedia.org/wiki/Convair_B-58_Hustler"
  "https://www.avionslegendaires.net/avion-militaire/convair-b-58-hustler/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/B-58_%28modified%29.jpg"
  "US Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "dvtV0GVtQt8" >}} <!-- les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "A-5 Vigilante" "1961" "embarqué, dissuasion nucléaire et reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_A-5_Vigilante"
  "https://en.wikipedia.org/wiki/North_American_A-5_Vigilante"
  "https://www.avionslegendaires.net/avion-militaire/north-american-a-5-vigilant/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d0/RA-5C_Vigilante_overhead_aerial_view.jpg"
  "Service Depicted:  Navy, Public domain, via Wikimedia Commons"
>}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22 Blinder" "1962" "bombardier supersonique, reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-22"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-22"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-22-blinder/"
  "https://upload.wikimedia.org/wikipedia/commons/9/90/Tu-22_landing.jpg"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "IfRBbJCU-WQ" >}} <!-- Yataka -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "XB-70 Valkyrie" "1964" "prototype de bombardier stratégique" >}}
<p>mach 3</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_XB-70_Valkyrie"
  "https://en.wikipedia.org/wiki/North_American_XB-70_Valkyrie"
  "https://www.avionslegendaires.net/avion-militaire/north-american-xb-70-valkyrie/"
  "https://upload.wikimedia.org/wikipedia/commons/4/46/North_American_XB-70A_Valkyrie_in_flight_%28cropped%29.jpg"
  "US Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "lKRnehhZfFY" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "d5SKO_TAlsw" >}} <!-- Drole de machine -->
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage IV" "1964" "dissuasion nucléaire et reconnaissance" >}}
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_IV"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_IV"
  "https://www.avionslegendaires.net/avion-militaire/dassault-mirage-iv/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d2/Dassault_Mirage_IVP%2C_France_-_Air_Force_AN0758316.jpg"
  "Mike Freer - Touchdown-aviation (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
{{< ressource-video-youtube "Y4xjSObEvFs" >}} <!-- Les guerriers du ciel -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22M Backfire (Tu-26)" "1972" "bombardier lourd supersonique à long rayon d'action" >}}
<p>géométrie variable.</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-22M"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-22M"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-26-backfire/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tupolev_Tu-22M3M_GEFEST_%2819230388334%29.jpg"
  "Dmitry Terekhov from Odintsovo, Russian Federation, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "npb2gCQZPm4" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "Uq-aWGL7Dk4" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":us:" "Rockwell" "B-1 Lancer" "1986" "bombardier stratégique supersonique à long rayon d'action" >}}
<p>géométrie variable</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Rockwell_B-1_Lancer"
  "https://en.wikipedia.org/wiki/Rockwell_B-1_Lancer"
  "https://www.avionslegendaires.net/avion-militaire/rockwell-b-1-lancer/"
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/B-1B_over_the_pacific_ocean.jpg"
  "United States Air Force photo by Staff Sgt. Bennie J. Davis III, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "hFlcQN3KleU" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "CLMY1oJjuas" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "-puARA_M_I4" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-160 Blackjack" "1987" "bombardier stratégique supersonique lourd" >}}
<p>le plus gros et lourd avion de combat au monde, mach 2.1</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-160"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-160"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-160-blackjack/"
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Tupolev_Tu-160_in_1997.jpg"
  "Igor Bubin (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
{{< ressource-video-youtube "E1OxXdQ-OUo" >}} <!-- Defense Insider -->
{{< ressource-video-youtube "BLY6vWl2FXA" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "MnhyzGlEYEo" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Northrop" "B-2 Spirit" "1997" "bombardier stratégique" >}}
{{< caracteristique "furtif" >}}
<p>aile volante, l'avion le plus cher au monde</p>
</div>
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Northrop_B-2_Spirit"
  "https://en.wikipedia.org/wiki/Northrop_Grumman_B-2_Spirit"
  "https://www.avionslegendaires.net/avion-militaire/northrop-b-2-spirit/"
  "https://upload.wikimedia.org/wikipedia/commons/4/47/B-2_Spirit_original.jpg"
  "Staff Sgt. Bennie J. Davis III, Public domain, via Wikimedia Commons"
>}}
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
{{< canal-web "Wikipédia" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Supermaneuverability" "Supermaneuverability" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Attack_aircraft" "Attack aircraft" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Bomber" "Bomber" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Fighter_aircraft" "Fighter aircraft" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Supercruise" "Supercruise" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Century_Series" "Century_Series" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Teen_Series" "Teen Series" >}}
{{< ressource-web "ttps://en.wikipedia.org/wiki/Jet_fighter_generations" "Jet fighter generations" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Fourth-generation_fighter" "Fourth generation fighter" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Fifth-generation_fighter" "Fifth generation fighter" >}}
{{< ressource-web "https://en.wikipedia.org/wiki/Look-down/shoot-down" "Look-down/shoot-down" >}}
</div>
