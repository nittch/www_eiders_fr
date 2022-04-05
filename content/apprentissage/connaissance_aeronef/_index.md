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
</div>
<div class="images">
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
{{< ressource-video-youtube "AHtAdp3Kei0" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F-15 Eagle" "1976" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.5 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "0DmjlubOn1g" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "General Dynamics" "F-16 Fighting Falcon" "1978" "multirôle, supériorité aérienne" >}}
{{< mach 2.05 >}}
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
{{< mach 2.83 >}}
{{< caracteristique "veille infrarouge" >}}
<p>
Basé sur le MiG-25, très rapide.<br />
Premier avion avec radar PESA<br />
Datalink.
</p>
</div>
<div class="reportages">
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
{{< aeronef ":us:" "McDonnell Douglas" "F/A-18 Hornet" "1983" "embarqué, multirôle" >}}
{{< mach 1.8 >}}
<p>Commandes de vol électriques</p>
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
{{< aeronef ":fr:" "Dassault" "Mirage 2000" "1984" "intercepteur, puis multirôle" >}}
{{< mach 2.2 >}}
{{< caracteristique "manœuvrabilité (delta)" >}}
{{< caracteristique "veille infrarouge limitée" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="reportages">
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
<p>longue portée</p>
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
{{< aeronef ":gb:/:de:" "Panavia" "Tornado ADV" "1985" "intercepteur" >}}
{{< mach 2.2 >}}
<p>Géométrie variable. Basé sur le Tornado.</p>
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-15E Strike Eagle" "1989" "chasseur bombardier" >}}
{{< mach 2.15 >}}
<p>Basé sur le F-15.</p>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-34 Fullback" "1990" "chasseur bombardier" >}}
{{< mach 1.8 >}}
<p>Basé sur le Su-27.</p>
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
<div class="images">
{{< ressource-video-youtube "0fM7SUSgFj8" >}}
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "JAS 39 Gripen" "1996" "intercepteur" >}}
{{< mach 2 >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.1" >}}
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
<p>Basé sur le Su-27, les canards réduisent la vitesse maximale.</p>
</div>

<div class="aeronef">
{{< aeronef ":eu:" "Eurofighter" "Typhoon" "2004" "multirôle et supériorité aérienne" >}}
{{< mach 2.0 >}}
{{< caracteristique "manœuvrabilité (canards, delta)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
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
{{< ressource-video-youtube "-4qLGbSEZ6s" >}} <!-- aeronewstv -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-35 Flanker-E" "2012" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>Basé sur le Su-27, retour à un design sans canards.</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "54UqQcBehlE" >}}
</div>

<div class="aeronef">
{{< aeronef ":india:" "HAL" "Tejas" "2015" "chasseur léger multirôle" >}}
{{< mach 1.6 >}}
{{< caracteristique "manœuvrabilité (double-delta)">}}
{{< caracteristique "veille infrarouge" >}}
<p>Des caractéristiques de furtivité : matériaux composites.</p>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-35 Fulcrum-F" "2017" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "veille infrarouge" >}}
<p>basé sur le MiG-29, radar AESA</p>
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
<div class="images">
{{< ressource-video-youtube "zW28Mb1YvwY" >}}
{{< ressource-video-youtube "Eiop4hrBJO4" >}}
{{< ressource-video-youtube "KVMiscT8VqE" >}}
</div>

<div class="aeronef">
{{< aeronef ":cn:" "Chengdu" "J-20" "2017" "supériorité aérienne" >}}
{{< mach 2.5 >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="reportages">
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
<p>Une sirène pour terroriser les populations lors du piqué.</p>
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
{{< mach 2.08 >}}
</div>
<div class="reportages">
{{< ressource-video-youtube "DAt2tfhHubQ" >}} <!-- Les ailes de legende -->
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-7 Fitter-A" "1959" "chasseur bombardier, attaque au sol" >}}
{{< mach 1.74 >}}
<p>Ailes en flèche</p>
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Étendard IV" "1962" "embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-6 Intruder" "1963" "embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":us:" "General Dynamics" "F-111 Aardvark" "1967" "bombardier tout-temps" >}}
{{< mach 2.5 >}}
<p>géométrie variable, radar de suivi de terrain automatique</p>
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
<div class="reportages">
{{< ressource-video-youtube "TfoBodLpXx8" >}} <!-- Defense Insider -->
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
{{< aeronef ":ru:" "Soukhoï" "Su-17 Fitter-C" "1970" "chasseur bombardier, attaque au sol" >}}
{{< mach 2.09 >}}
<p>
Basé sur le Su-7, géométrie variable.<br />
Des variantes Su-20, Su-22...
</p>
</div>

<div class="aeronef">
{{< aeronef ":fr:/:gb:" "SEPECAT" "Jaguar" "1973" "avion d'attaque" >}}
{{< mach 1.6 >}}
<p>attaque au sol</p>
</div>
<div class="reportages">
{{< ressource-video-youtube "VNcpFliHKUc" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "z-uqMUA7U-k" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-24 Fencer" "1974" "bombardier supersonique" >}}
{{< mach 1.6 >}}
<p>
Premier appareil soviétique équipé d'un système de navigation et d'attaque numérique.<br />
Géométrie variable.</p>
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
{{< mach 1.3 >}}
</div>
<div class="images">
{{< ressource-video-youtube "svORBbmnZMc" >}} <!-- Chasse embarquee -->
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-25 Frogfoot" "1981" >}}
<p>Une variante Su-39...</p>
</div>
<div class="reportages">
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
{{< aeronef ":gb:" "Short" "Stirling" "1940" "bombardier lourd" >}}
<p>Premier bombardier lourd quadrimoteur</p>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "Halifax" "1940" "bombardier lourd" >}}
{{< exemplaires 6176 >}}
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
{{< aeronef ":ru:" "Tupolev" "Tu-2 Bat" "1941" "bombardier moyen" >}}
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
{{< aeronef ":us:" "Douglas" "A-3 Skywarrior" "1956" "bombardier stratégique embarqué" >}}
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-95 Bear" "1956" "bombardier stratégique lourd" >}}
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
{{< ressource-video-youtube "MnhyzGlEYEo" >}}
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
