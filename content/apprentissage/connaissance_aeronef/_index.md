+++
title = "Connaissance d'aéronefs"
weight = 2
+++

<style>
  @media only all and (min-width: 90em) 
  {
    .grille {
      display: grid;
      grid-template-columns: 20% 80%;
  
      grid-row-gap: 1em;
    }
  
    .infos_generales {
      grid-column: 1 / 4;
    }
  
    .aeronef {
      grid-column: 1;
    }
  
    .ressources {
      grid-column: 2;
    }
  }

  #body div .infos_generales img {
    float: left;

    height: 15em;
    margin: 0;
    margin-right: 1em;
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

/*
  .avec_module_dcs {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, grey 0%, white 90%) 1;

    padding: 5px;
  }
*/

  .avec_module_dcs .drapeau:before
  {
    content: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DCS-World-logo.jpg/50px-DCS-World-logo.jpg);
    padding: 0.2em;
    vertical-align: top;
  }

  .reportages {
    display: inline-block;
    padding: 0.2em;
  }

  .images {
    display: inline-block;
    padding: 0.2em;
  }
  .images .ressource .titre:before { /* on injecte un emoji camera dans les ressources qui sont classées en images */
    content: ":camera: ";
  }

</style>

<img src=https://upload.wikimedia.org/wikipedia/commons/b/b8/Formation_of_a_Legacy%2C_Hertiage_flight_merges_aviation_past_and_present_86-16-51-22.jpg title="U.S. Air Force photo by J.M. Eddins Jr, Public domain, via Wikimedia Commons" class=decoration />

Il est commun de classer les jets par [génération](https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rations_des_avions_de_combat), ici nous suivons la classification Wikipédia (inspirée d'Aerospaceweb).

Pour le nomage des appareils, voici ce qui est suivi (chaque catégorie pouvant être légère, moyenne, lourde... furtive... embarquée... de nuit, tout temps...) :

<table>
<tr>
<th>Type</th>
<th>Mission</th>
<th>Nommage de l'avion</th>
</tr>

<tr>
<td rowspan=3>chasse = air-air</td>
<td>combat aérien (manœvrabilité, puissance de feu)</td>
<td>avion de supériorité aérienne</td>
</tr>

<tr>
<td>interception (vitesse pure, altitude maximale, vitesse ascensionnelle)</td>
<td>intercepteur</td>
</tr>

<tr>
<td>protéger les bombardiers amis (autonomie importante)</td>
<td>chasseur stratégique :<ul><li>escorteur (si proche des bombardiers amis)<li> chasseur de pénétration (si cherchant les intercepteurs ennemis)</ul></td>
</tr>

<tr>
<td rowspan=4>bombardement de cibles au sol militaires</td>
<td>bombardement de cibles menaçantes :<ul><li>Appui tactique = CAS<li>mitraillage au sol = strafing</ul></td>
<td><ul><li>avion d'attaque au sol<li>avion d'appui tactique<li>avion de lutte anti-guérilla = lutte anti-insurrectionnelle = COIN aircraft (si faible intensité)</ul></td>
</tr>

<tr>
<td>bombardement de cibles logistiques = interdiction, ou frappes aériennes ciblées = strike</td>
<td>bombardier tactique :<ul><li>avion d'interdiction (si vol en très basse altitude)<li>chasseur d'attaque = strike aircraft (si supériorité air-air)</li></td>
</tr>

<tr>
<td>attaque de défenses anti-aériennes = SEAD</td>
<td>avion de guerre électronique (FIXME)</td>
</tr>

<tr>
<td>attaque de navires ou cibles de surface</td>
<td><ul><li>torpilleur<li>avion de lute anti-sous-marine<li>patrouilleur maritime (quelque fois avec capacité d'engagement)</ul></td>
</tr>

<tr>
<td rowspan=2>bombardement de cibles au sol civiles</td>
<td>bombardement massif (tapis de bombes = carpet bombing) ou non conventionnel</td>
<td>bombardier stratégique : <ul><li>avion de pénétration (si l'avion est de grande taille et vole en très basse altitude)</ul>
</td>
</tr>

</table>

<div class="grille">

<div class="infos_generales">
<h2>Coucous 1935&mdash;1952 (Warbirds)</h2>
<p>1935-1952 : avions militaires à hélices.</p>
</div>

<div class="infos_generales">
<h3>Chasseurs</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/4/42/Formation_of_No.19_Squadron_RAF_Supermarine_Spitfire_Mk.Is_in_1938_over_Cambridgeshire.jpg title="RAF official photographer, Public domain, via Wikimedia Commons" />
En Europe, les deux chasseurs principaux allemands sont les excellents Bf 109 et Fw 190. Côté britannique il s'agit des très bon Spitfire et Hurricane, à peu près équivalents.

Sur le front soviétique, il y a eu de très grosses pertes avant l'arrivée des Yak-9 et La-5 qui ont remis l'armée jour à un niveau égal.

Dans le pacifique, au début du conflit la domination japonaise est très forte avec le très maniable A6M Zéro, malgré certaines stratégies du P-40 et du F4F Wildcat. A noter toutefois le très bon chasseur lourd P-38 qui remplira nombre de missions.
Le ciel passera sous domination américaine avec l'arrivée des chasseurs embarqués F4U Corsair et F6F hellcat.

Un certain nombre des missions de chasse seront des missions d'escortes de bombardiers avec la problématique la distance franchissable avec les chasseurs. Le chasseur lourd P-38 et surtout le chasseur léger P-51 Mustang pourront suivre les bombardiers et affronter des chasseurs maniables.

La chasse de nuit nécessitait en ce temps là d'énormes radars, voir un membre d'équipage dédié. Ce rôle est donc assura par les chasseurs lourds, voir un certain nombre de bombardiers légers ou moyens adaptés.

A l'inverse, des chasseurs seront adaptés en chasseur-bombardiers, ne nécessitant pas d'escortes car ils peuvent abandonner leurs emports pour se battre.
De même, les rôles d'attaque au sol seront également assurés par une partie des chasseurs.
</div>

<!-- Fighter aircraft: In the dogfights over Spain, the latest Messerschmitt Bf 109 fighters did well, as did the Soviet Polikarpov I-16. -->
<!-- Fighter aircraft: The Russians failed to keep up and despite newer models coming into service, I-16s remaining the most common Soviet front-line fighter into 1942 despite being outclassed by the improved Bf 109s in World War II. -->
<!-- Fighter aircraft: [...] and the general inferiority of Soviet designs at the time, such as the obsolescent Polikarpov I-15 biplane and the I-16. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Polikarpov" "I-16" "1935" "chasseur léger" >}}
{{< exemplaires 10292 >}}
<p>Testé avec succès pendant la guerre civile espagnole et jugé bon dogfighter. Déjà obsolète au début du front soviétique.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Polikarpov_I-16"
  "https://en.wikipedia.org/wiki/Polikarpov_I-16"
  "https://www.avionslegendaires.net/avion-militaire/polikarpov-i-16-ishak/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Polikarpov_I-16_with_spanish_republican_markings.jpg"
  "Elchuso, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: The Japanese and Italians favored lightly armed and armored but highly maneuverable designs such as the Japanese Nakajima Ki-27, Nakajima Ki-43 and Mitsubishi A6M Zero and the Italian Fiat G.50 Freccia and Macchi MC.200. -->
<!-- Fighter aircraft:  The Imperial Japanese Navy Air Service primarily operated the Mitsubishi A6M Zero, and the Imperial Japanese Army Air Service flew the Nakajima Ki-27 and the Nakajima Ki-43, initially enjoying great success, as these fighters generally had better range, maneuverability, speed and climb rates than their Allied counterparts. -->
<!-- Fighter aircraft: Other problems with Japan's fighter aircraft also became apparent as the war progressed, such as their lack of armor and light armament, which had been typical of all pre-war fighters worldwide, but the problem was particularly difficult to rectify on the Japanese designs. This made them inadequate as either bomber-interceptors or ground-attack aircraft, roles Allied fighters were still able to fill. -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-27" "1937" "chasseur léger" >}}
{{< exemplaires 3368 >}}
<p>L'avion de chasse principal de l'armée impériale.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-27"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-27"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-27-nate-clint/"
  "https://upload.wikimedia.org/wikipedia/commons/5/58/Ki-27_2.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: In the dogfights over Spain, the latest Messerschmitt Bf 109 fighters did well, as did the Soviet Polikarpov I-16. -->
<!-- Fighter aircraft: During the invasion of Poland and the Battle of France, Luftwaffe fighters—primarily the Messerschmitt Bf 109—held air superiority, and the Luftwaffe played a major role in German victories in these campaigns. -->
<!-- Fighter aircraft: Unescorted Consolidated B-24 Liberators and Boeing B-17 Flying Fortress bombers, however, proved unable to fend off German interceptors (primarily Bf 109s and Fw 190s). -->
<!-- Air supremacy: Germany's most important air superiority fighters were the Messerschmitt Bf 109 and Focke-Wulf Fw 190, while the Supermarine Spitfire and Hawker Hurricane were the primary ones on the British side. Performance and range made the P-51 Mustang the outstanding escort fighter which permitted American bombers to operate over Germany during daylight hours. -->
<!-- Light fighter: The German Messerschmitt Bf 109 entered service in 1937 as a high speed interceptor and became the most-produced fighter in history, with nearly 34,000 built.  -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Messerschmitt" "Bf 109" "1937" "chasseur léger" >}}
{{< exemplaires 34852 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Intercepteur" >}}
<p>Testé avec succès pendant la guerre civile espagnole et jugé bon dogfighter. Un des deux principaux avions de supériorité aérienne allemand.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Bf_109"
  "https://en.wikipedia.org/wiki/Messerschmitt_Bf_109"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-bf-109/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bf_109A_from_the_Condor_Legion_with_Nationalist_Spain_markings.jpg"
  "Unknown authorUnknown author, CC0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "LfklgwVE0TA" >}} <!-- Yataka -->
{{< ressource-video-youtube "22tVIa2BPu8" >}} <!-- La 2nd Guerre Mondiale -->
{{< ressource-video-youtube "cxoSq4wweFY" >}} <!-- Légendes du ciel -->
</div>
</div>

<!-- Fighter aircraft: During the Battle of Britain, however, British Hurricanes and Spitfires proved roughly equal to Luftwaffe fighters. -->
<!-- Air supremacy: Germany's most important air superiority fighters were the Messerschmitt Bf 109 and Focke-Wulf Fw 190, while the Supermarine Spitfire and Hawker Hurricane were the primary ones on the British side. Performance and range made the P-51 Mustang the outstanding escort fighter which permitted American bombers to operate over Germany during daylight hours. -->
<!-- Strafing: For the RAF, the best ground attack plane was the Hawker Hurricane II. It was armed with four 20 mm (0.79 in) wing-mounted cannon.[5] The Hawker Typhoon was used in the later stages of the war. It had four "60 lb" RP-3 rockets -->
<!-- Attack aircraft: to emphasise the attack role, usually in the form of single-engine Hawker Hurricane and Curtiss P-40 fighter-bombers or specialized "tank-busters", such as the Hurricane Mk IID, armed with two 40 mm Vickers S guns -->
<!-- Light fighter: The Royal Air Force entered World War II with two modern single-engined fighters forming the majority of the fighter force of the RAF – the Supermarine Spitfire and the Hawker Hurricane. Initially introduced as bomber interceptors, both started with eight machine gun armament but changed to cannons in the course of the war. -->
<!-- Light fighter: The Hawker Hurricane played an important role in the Battle of Britain, but its performance was inferior to the Spitfire and during the war was removed from frontline duty as a fighter and used for ground attack. -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Hurricane" "1937" "chasseur léger" >}}
{{< exemplaires 14583 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Intercepteur" >}}
{{< role "Attaque au sol" >}}
<p>Un des deux principaux avions de supériorité aérienne britannique.<br />
Moins performant que le Spitfire, en seconde partie du conflit il a été relégué à l'attaque au sol mais devint ainsi l'un des deux meilleurs avions de mitraillage au sol britannique.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Hurricane"
  "https://en.wikipedia.org/wiki/Hawker_Hurricane"
  "https://www.avionslegendaires.net/avion-militaire/hawker-hurricane/"
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Hawker_Hurricane%2C_Battle_of_Britain_Memorial_Flight_Members%27_day_2018_%28cropped%29.jpg"
  "Cpl Phil Major ABIPP, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "VHPPpAZ5PaY" >}} <!-- Légendes du ciel -->
{{< ressource-video-youtube "DO2cqqm1y0c" >}} <!-- Cap Aviation -->
</div>
</div>

<!-- Fighter aircraft: During the Battle of Britain, however, British Hurricanes and Spitfires proved roughly equal to Luftwaffe fighters. -->
<!-- Air supremacy: Germany's most important air superiority fighters were the Messerschmitt Bf 109 and Focke-Wulf Fw 190, while the Supermarine Spitfire and Hawker Hurricane were the primary ones on the British side. Performance and range made the P-51 Mustang the outstanding escort fighter which permitted American bombers to operate over Germany during daylight hours. -->
<!-- Light fighter: The Royal Air Force entered World War II with two modern single-engined fighters forming the majority of the fighter force of the RAF – the Supermarine Spitfire and the Hawker Hurricane. Initially introduced as bomber interceptors, both started with eight machine gun armament but changed to cannons in the course of the war. -->
<!-- Light fighter: The Spitfire, designed by R. J. Mitchell, entered service in 1938 and remained in production throughout the war.-->
<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "Supermarine" "Spitfire" "1938" "chasseur léger" >}}
{{< exemplaires 20351 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Intercepteur" >}}
<p>
Un des deux principaux avions de supériorité aérienne britannique. <br />
Il a été produit pendant toute la guerre.<br />
Version embarquée : Seafire.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Supermarine_Spitfire"
  "https://en.wikipedia.org/wiki/Supermarine_Spitfire"
  "https://www.avionslegendaires.net/avion-militaire/supermarine-spitfire/"
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg"
  "Airwolfhound, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "5OzJw4u5bRw" >}} <!-- Les guerriers du ciel -->
{{< ressource-video-youtube "OIQj33AgmZs" >}} <!-- Aviation - Documentaires entiers -->
{{< ressource-video-youtube "hgI4Y8yTpds" >}} <!-- Yataka -->
</div>
</div>

<!-- Fighter aircraft: By mid-1942, the Allies began to regroup and while some Allied aircraft such as the Brewster Buffalo and the P-39 Airacobra were hopelessly outclassed by fighters like Japan's Mitsubishi A6M Zero, -->
<div class="aeronef">
{{< aeronef ":us:" "Brewster" "F2A Buffalo" "1939" "chasseur léger, embarqué" >}}
{{< exemplaires 509 >}}
<p>Dépassé au début du conflit dans le pacifique.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Brewster_F2A_Buffalo"
  "https://en.wikipedia.org/wiki/Brewster_F2A_Buffalo"
  "https://www.avionslegendaires.net/avion-militaire/brewster-f2a-buffalo/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Brewster_F2A-3_g16055.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: The Japanese and Italians favored lightly armed and armored but highly maneuverable designs such as the Japanese Nakajima Ki-27, Nakajima Ki-43 and Mitsubishi A6M Zero and the Italian Fiat G.50 Freccia and Macchi MC.200. -->
<!-- Fighter aircraft:  The Imperial Japanese Navy Air Service primarily operated the Mitsubishi A6M Zero, and the Imperial Japanese Army Air Service flew the Nakajima Ki-27 and the Nakajima Ki-43, initially enjoying great success, as these fighters generally had better range, maneuverability, speed and climb rates than their Allied counterparts. -->
<!-- Fighter aircraft: Other problems with Japan's fighter aircraft also became apparent as the war progressed, such as their lack of armor and light armament, which had been typical of all pre-war fighters worldwide, but the problem was particularly difficult to rectify on the Japanese designs. This made them inadequate as either bomber-interceptors or ground-attack aircraft, roles Allied fighters were still able to fill. -->
<!-- Air supremacy: In the Pacific Theater, the A6M Zero gave Japan air superiority for much of the early part of the war, but suffered against newer naval fighters such as the F6F Hellcat and F4U Corsair which exceeded the Zero in performance and durability. -->
<!-- Light fighter: The lightest major fighter of World War II was the Japanese Mitsubishi A6M Zero naval fighter. -->
<div class="aeronef">
{{< aeronef ":jp:" "Mitsubishi" "A6M Zéro" "1940" "chasseur léger, embarqué" >}}
{{< exemplaires 10939 >}}
{{< role "Supériorité aérienne" >}}
<p>Le principal avion de supériorité aérienne japonais. Un modèle de maniabilité, il est le meilleur chasseur léger de la période. Excellent au début de la guerre, mais à la fin de celle-ci, son manque de puissance de feu et de blindage lui coutera cher.</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: others such as the Army's Curtiss P-40 Warhawk and the Navy's Grumman F4F Wildcat possessed attributes such as superior firepower, ruggedness and dive speed, and the Allies soon developed tactics (such as the Thach Weave) to take advantage of these strengths. These changes soon paid dividends, as the Allied ability to deny Japan air superiority was critical to their victories at Coral Sea, Midway, Guadalcanal and New Guinea. -->
<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F4F Wildcat" "1940" "chasseur embarqué" >}}
{{< exemplaires 7885 >}}
<p>D'avantage de puissance de feu et de blindage que l'A6M zéro.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_F4F_Wildcat"
  "https://en.wikipedia.org/wiki/Grumman_F4F_Wildcat"
  "https://www.avionslegendaires.net/avion-militaire/grumman-f4f-wildcat/"
  "https://upload.wikimedia.org/wikipedia/commons/5/55/F4F-3_new_pitot_tube_of_later_model.jpg"
  "The original uploader was Felix c at English Wikipedia., Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: More modern Soviet designs, including the Mikoyan-Gurevich MiG-3, LaGG-3 and Yakolev Yak-1, had not yet arrived in numbers and in any case were still inferior to the Messerschmitt Bf 109. -->
<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-1" "1940" "chasseur" >}}
{{< exemplaires 8734 >}}
<p>Inférieur au Bf 109.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-1"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-1"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-1-yak-7/"
  "https://upload.wikimedia.org/wikipedia/commons/1/13/I-26.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: others such as the Army's Curtiss P-40 Warhawk and the Navy's Grumman F4F Wildcat possessed attributes such as superior firepower, ruggedness and dive speed, and the Allies soon developed tactics (such as the Thach Weave) to take advantage of these strengths. These changes soon paid dividends, as the Allied ability to deny Japan air superiority was critical to their victories at Coral Sea, Midway, Guadalcanal and New Guinea. -->
<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Attack aircraft: to emphasise the attack role, usually in the form of single-engine Hawker Hurricane and Curtiss P-40 fighter-bombers or specialized "tank-busters", such as the Hurricane Mk IID, armed with two 40 mm Vickers S guns -->
<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "P-40 Warhawk" "1940" "chasseur" >}}
{{< exemplaires 13738 >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
<p>D'avantage de puissance de feu et de blindage que l'A6M zéro.</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Because of the bulkiness of these radar sets, they could not be carried on conventional single-engined fighters and instead were typically retrofitted to larger heavy fighters or light bombers such as Germany's Messerschmitt Bf 110 and Junkers Ju 88, Britain's de Havilland Mosquito and Bristol Beaufighter, and America's Douglas A-20, which then served as night fighters -->
<!-- Escort fighter: From that point onwards, the Bf 110 was mostly withdrawn from the escort role, in part that so many had been lost that sufficient numbers could no longer be fielded in the short term; when it did return, it was largely used as a light bomber,[19][20] and night fighter instead. -->
<!-- Light bomber: Types designed before the war as heavy fighters were also frequently adapted as light bombers, including the Messerschmitt Bf 110, Potez 633, Fokker G.I, Kawasaki Ki-45, Bristol Beaufighter, and Lockheed P-38 Lightning. -->
<!-- Heavy fighter: Eventually Bf 110s were converted to interceptors, and were particularly successful in the later marks of the Bf 110G series from 1942 to 1943 onwards as night fighters, serving as the primary aircraft of the Luftwaffe Nachtjagdgeschwader night fighter wings, using various versions of the Lichtenstein radar for nocturnal interception of RAF Bomber Command heavy bombers, as well as finding some use as ground-attack aircraft. -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Bf 110" "1940" "chasseur lourd" >}}
{{< exemplaires 6150 >}}
{{< role "Chasseur de nuit" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
<p>Destiné à l'escorte, il sera moins performant que les Hurricane et Spitfire. Son rôle sera donc principalement la chasse de nuit et le bombardement léger.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Bf_110"
  "https://en.wikipedia.org/wiki/Messerschmitt_Bf_110"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-bf-110/"
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bundesarchiv_Bild_101I-360-2095-23%2C_Flugzeuge_Messerschmitt_Me_110.jpg"
  "Bundesarchiv, Bild 101I-360-2095-23 / Wanderer, W. / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Because of the bulkiness of these radar sets, they could not be carried on conventional single-engined fighters and instead were typically retrofitted to larger heavy fighters or light bombers such as Germany's Messerschmitt Bf 110 and Junkers Ju 88, Britain's de Havilland Mosquito and Bristol Beaufighter, and America's Douglas A-20, which then served as night fighters -->
<!-- Light bomber: Types designed before the war as heavy fighters were also frequently adapted as light bombers, including the Messerschmitt Bf 110, Potez 633, Fokker G.I, Kawasaki Ki-45, Bristol Beaufighter, and Lockheed P-38 Lightning. -->
<!-- Attack aircraft: The Bristol Beaufighter, based on an obsolescent RAF bomber, became a versatile twin-engine attack aircraft and served in almost every theatre of the war, in the maritime strike and ground attack roles as well as that of night fighter. -->
<!-- Heavy fighter: Armed with six .303 inch (7.7 mm) machine guns, four 20 mm cannon and rockets, bombs or torpedoes, the Beaufighter was potent in the anti-ship and ground attack role in the Pacific and Europe. -->
<!-- Torpedo bomber: Other twin-engine or three-engined aircraft designed or used as torpedo bombers include the Mitsubishi Ki-67, the Savoia-Marchetti SM.79 "Sparviero", the CANT Z.1007, the Bristol Beaufort and Bristol Beaufighter ("Torbeau"), the Junkers Ju 88, the Heinkel He 111, the B-25 Mitchell and many others. -->
<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Beaufighter" "1940" "chasseur lourd" >}}
{{< exemplaires 5928 >}}
{{< role "Chasseur de nuit" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
{{< role "Torpilleur" >}}
<p>Basé sur le torpilleur Beaufort.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bristol_Beaufighter"
  "https://en.wikipedia.org/wiki/Bristol_Beaufighter"
  "https://www.avionslegendaires.net/avion-militaire/bristol-beaufighter/"
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Aircraft_of_the_Royal_Air_Force_1939-1945-_Bristol_Type_156_Beaufighter._CM5105.jpg"
  "Royal Air Force official photographer, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Also, significant numbers of British, and later U.S., fighter aircraft were supplied to aid the Soviet war effort as part of Lend-Lease, with the Bell P-39 Airacobra proving particularly effective in the lower-altitude combat typical of the Eastern Front. -->
<!-- Fighter aircraft: By mid-1942, the Allies began to regroup and while some Allied aircraft such as the Brewster Buffalo and the P-39 Airacobra were hopelessly outclassed by fighters like Japan's Mitsubishi A6M Zero, -->
<!-- Heavy fighter: [...] the Lockheed P-38 Lightning. It was designed as a twin-engine bomber interceptor to climb quickly and carry heavy armament at high speed, with the lighter Bell P-39 Airacobra meeting the single-engine version of the same requirement. -->
<div class="aeronef">
{{< aeronef ":us:" "Bell" "P-39 Airacobra" "1941" "chasseur léger" >}}
{{< exemplaires 9584 >}}
<p>
Efficace en basse altitude sur le front soviétique, dépassé par l'A6M Zéro dans le pacifique.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Several factors contributed to this shift. First, the Lockheed P-38 Lightning and second-generation Allied fighters such as the Grumman F6 Hellcat and later the Vought F4 Corsair, the Republic P-47 Thunderbolt and the North American P-51 Mustang, began arriving in numbers. These fighters outperformed Japanese fighters in all respects except maneuverability. -->
<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Air supremacy: The Hellcat shot down 5,168 enemy aircraft (the second highest number), while the land-based Lockheed P-38 was third, shooting down 3,785 in all theaters. -->
<!-- Escort Fighter: Unlike earlier twin-engine designs like the Bf 110, the Lightning proved to be competitive with the German fighters it faced, permitting it to be easily adapted to the escort role through the use of drop tanks. -->
<!-- Light bomber: Types designed before the war as heavy fighters were also frequently adapted as light bombers, including the Messerschmitt Bf 110, Potez 633, Fokker G.I, Kawasaki Ki-45, Bristol Beaufighter, and Lockheed P-38 Lightning. -->
<!-- Heavy fighter: The P-38 proved adaptable enough to undertake multiple roles including escort fighter, reconnaissance (as the F-4 and F-5 variants of which over 1,200 were built), night fighter (as the radar-equipped P-38M variant), and as a fighter-bomber. -->
<!-- P-38: the P-38 was the primary long-range fighter of United States Army Air Forces until the introduction of large numbers of P-51D Mustangs toward the end of the war. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-38 Lightning" "1941" "chasseur lourd" >}}
{{< exemplaires 10037 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Avion d'escorte longue distance" >}}
<p>
Maniable malgré sa taille, il est polyvalent.<br />
Un des trois avions de supériorité aérienne américains.<br />
Version P-38M : chasseur de nuit.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Unescorted Consolidated B-24 Liberators and Boeing B-17 Flying Fortress bombers, however, proved unable to fend off German interceptors (primarily Bf 109s and Fw 190s). -->
<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Air supremacy: Germany's most important air superiority fighters were the Messerschmitt Bf 109 and Focke-Wulf Fw 190, while the Supermarine Spitfire and Hawker Hurricane were the primary ones on the British side. Performance and range made the P-51 Mustang the outstanding escort fighter which permitted American bombers to operate over Germany during daylight hours. -->
<!-- Fighter-bomber: [...] Increased engine power meant that many existing fighter designs could carry useful bomb loads, and adapt to the fighter-bomber role. Notable examples include the Focke-Wulf Fw 190, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Light bomber: This gave rise to the fighter-bomber type, notably the Fw 190 F and G models, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Attack aircraft: Conversely, some mid-war attack types emerged as adaptations of fighters, including several versions of the German Focke-Wulf Fw 190, the British Hawker Typhoon and the US Republic P-47 Thunderbolt. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":de:" "Focke-Wulf" "Fw 190" "1941" "chasseur" >}}
{{< exemplaires 20051 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Intercepteur" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
<p>Un des deux principaux avions de supériorité aérienne allemand.<br />
Bon chasseur-bombardier.</p>
</div>
<div class="ressources">
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
</div>

<!-- Light bomber: Types designed before the war as heavy fighters were also frequently adapted as light bombers, including the Messerschmitt Bf 110, Potez 633, Fokker G.I, Kawasaki Ki-45, Bristol Beaufighter, and Lockheed P-38 Lightning. -->
<!-- Heavy fighter: Following the example set by the Bf 110, the Japanese built the broadly similar Kawasaki Ki-45 Toryu. -->
<div class="aeronef">
{{< aeronef ":jp:" "Kawasaki" "Ki-45" "1941" "chasseur lourd" >}}
{{< exemplaires 1701 >}}
{{< role "Chasseur-bombardier" >}}
<p>L'équivalent japonais du Bf 110.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Kawasaki_Ki-45"
  "https://en.wikipedia.org/wiki/Kawasaki_Ki-45"
  "https://www.avionslegendaires.net/avion-militaire/kawasaki-ki-45-toryu-nick/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kawasaki_Ki-45.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Fighter-bomber: [...] Increased engine power meant that many existing fighter designs could carry useful bomb loads, and adapt to the fighter-bomber role. Notable examples include the Focke-Wulf Fw 190, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Fighter-bomber: The Typhoon disappointed as a fighter, especially at altitude but found its true niche as a fighter bomber from September 1942. -->
<!-- Light bomber: This gave rise to the fighter-bomber type, notably the Fw 190 F and G models, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Strafing: For the RAF, the best ground attack plane was the Hawker Hurricane II. It was armed with four 20 mm (0.79 in) wing-mounted cannon.[5] The Hawker Typhoon was used in the later stages of the war. It had four "60 lb" RP-3 rockets -->
<!-- Attack aircraft: The Typhoon, which was disappointing as a fighter, due to poor high altitude performance, was very fast at low altitudes and thus became the RAF's premier ground attack fighter. -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Typhoon" "1941" "chasseur" >}}
{{< exemplaires 3317 >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
<p>
Décevant en chasseur, il se révélera excellent en chasseur-bombardier.
L'un des deux meilleurs avions de mitraillage au sol britannique.
</p>
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Typhoon"
  "https://en.wikipedia.org/wiki/Hawker_Typhoon"
  "https://www.avionslegendaires.net/avion-militaire/hawker-typhoon/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pheloung_1.jpg"
  "The Flight magazine archive from Flightglobal, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: More modern Soviet designs, including the Mikoyan-Gurevich MiG-3, LaGG-3 and Yakolev Yak-1, had not yet arrived in numbers and in any case were still inferior to the Messerschmitt Bf 109. -->
<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine-Gorbunov-Gudkov" "LaGG-3" "1941" "chasseur" >}}
{{< exemplaires 6258 >}}
<p>Inférieur au Bf 109.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_LaGG-3"
  "https://en.wikipedia.org/wiki/Lavochkin-Gorbunov-Gudkov_LaGG-3"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-lagg-3/"
  "https://upload.wikimedia.org/wikipedia/commons/7/70/LaGG-3_Moscow.jpg"
  "Mike1979 Russia, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: More modern Soviet designs, including the Mikoyan-Gurevich MiG-3, LaGG-3 and Yakolev Yak-1, had not yet arrived in numbers and in any case were still inferior to the Messerschmitt Bf 109. -->
<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-3" "1941" "chasseur" >}}
{{< exemplaires 3422 >}}
<p>
Basé sur le MiG-1.<br />
Inférieur au Bf 109.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-3"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-3"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-1-3/"
  "https://upload.wikimedia.org/wikipedia/commons/7/78/MiG-3_at_Mochishche.jpg"
  "Alex Polezhaev, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: The Japanese and Italians favored lightly armed and armored but highly maneuverable designs such as the Japanese Nakajima Ki-27, Nakajima Ki-43 and Mitsubishi A6M Zero and the Italian Fiat G.50 Freccia and Macchi MC.200. -->
<!-- Fighter aircraft:  The Imperial Japanese Navy Air Service primarily operated the Mitsubishi A6M Zero, and the Imperial Japanese Army Air Service flew the Nakajima Ki-27 and the Nakajima Ki-43, initially enjoying great success, as these fighters generally had better range, maneuverability, speed and climb rates than their Allied counterparts. -->
<!-- Fighter aircraft: Other problems with Japan's fighter aircraft also became apparent as the war progressed, such as their lack of armor and light armament, which had been typical of all pre-war fighters worldwide, but the problem was particularly difficult to rectify on the Japanese designs. This made them inadequate as either bomber-interceptors or ground-attack aircraft, roles Allied fighters were still able to fill. -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-43" "1941" "chasseur léger" >}}
{{< exemplaires 5919 >}}
<p>Basé sur le Ki-27.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-43"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-43"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-43-hayabusa-oscar/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Nakajima_Ki-43-IIa.jpg"
  "The original uploader was Vuvar1 at English Wikipedia., 25 October 2005 (original upload date), Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":jp:" "Kawasaki" "Ki-61" "1942" "chasseur" >}}
{{< exemplaires 3078 >}}
<p>Refroidissement liquide.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Kawasaki_Ki-61_Hien"
  "https://en.wikipedia.org/wiki/Kawasaki_Ki-61"
  "https://www.avionslegendaires.net/avion-militaire/kawasaki-ki-61-hien-tony/"
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Kawasaki_Ki-61_Hien.jpg"
  "SDASM, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Several factors contributed to this shift. First, the Lockheed P-38 Lightning and second-generation Allied fighters such as the Grumman F6 Hellcat and later the Vought F4 Corsair, the Republic P-47 Thunderbolt and the North American P-51 Mustang, began arriving in numbers. These fighters outperformed Japanese fighters in all respects except maneuverability. -->
<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Fighter-bomber: [...] Increased engine power meant that many existing fighter designs could carry useful bomb loads, and adapt to the fighter-bomber role. Notable examples include the Focke-Wulf Fw 190, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Escort fighter: The successes of the P-47N and P-51 gave the impression that the escort fighter was a concept worth continuing after the end of the war. -->
<!-- Light bomber: This gave rise to the fighter-bomber type, notably the Fw 190 F and G models, Hawker Typhoon and Republic P-47 Thunderbolt. -->
<!-- Strafing: For the US, the Republic P-47 Thunderbolt was one of the key ground attack planes. It was armed with eight .50 calibre (12.7 mm) machine guns. Another aircraft that was important in that role was the North American B-25 Mitchell. It was used for low-altitude strafing runs in the Pacific War. -->
<!-- Attack aircraft: Likewise the P-47 was designed and intended for use as a high altitude bomber escort, but gradually found that role filled by the North American P-51 Mustang (because of its much longer range and greater manoeuvrability). The P-47 was also heavier and more robust than the P-51 and regarded therefore, as an "energy fighter": ideal for high-speed dive-and-climb tactics, including strafing attacks. Its armament of eight 0.50 caliber machine guns was effective against Axis infantry and light vehicles in both Europe and the Pacific. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Republic" "P-47 Thunderbolt" "1942" "chasseur" >}}
{{< exemplaires 15660 >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Avion d'escorte" >}}
{{< role "Attaque au sol" >}}
<p>
D'aspect massif, l'avion est robuste.<br />
Un avion clé d'attaque au sol. Bon chasseur-bombardier.<br />
Utilisé en escorte avant d'être remplacé par le P-51.<br />
</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: With the later arrival of long range fighters, particularly the North American P-51 Mustang, American fighters were able to escort far into Germany on daylight raids and by ranging ahead attrited the Luftwaffe to establish control of the skies over Western Europe. -->
<!-- Fighter aircraft: Several factors contributed to this shift. First, the Lockheed P-38 Lightning and second-generation Allied fighters such as the Grumman F6 Hellcat and later the Vought F4 Corsair, the Republic P-47 Thunderbolt and the North American P-51 Mustang, began arriving in numbers. These fighters outperformed Japanese fighters in all respects except maneuverability. -->
<!-- Fighter aircraft: Laminar flow wings, which improved high speed performance, also came into use on fighters such as the P-51 Mustang, -->
<!-- Air supremacy: Germany's most important air superiority fighters were the Messerschmitt Bf 109 and Focke-Wulf Fw 190, while the Supermarine Spitfire and Hawker Hurricane were the primary ones on the British side. Performance and range made the P-51 Mustang the outstanding escort fighter which permitted American bombers to operate over Germany during daylight hours. -->
<!-- Escort fighter: Finally, the extremely high efficiency of the laminar-flow wing on the Merlin-powered North American P-51 Mustang gave it unparalleled range even on internal fuel, and with external tanks, it could cover most of Europe. Although not designed for the escort role, the P-51 remains the canonical example of the class. -->
<!-- Escort fighter: The successes of the P-47N and P-51 gave the impression that the escort fighter was a concept worth continuing after the end of the war. -->
<!-- Light fighter: Instead, the US developed a number of standard pursuit fighters, the most efficient being the relatively lightweight North American P-51 Mustang. The P-51 was more economical, costing less per air-to-air kill than any other American aircraft. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "P-51 Mustang" "1942" "chasseur léger" >}}
{{< exemplaires 15586 >}}
{{< role "Avion d'escorte longue distance" >}}
{{< caracteristique "Ailes à écoulement laminaire, réduisant la consommation" >}}
<p>Le meilleur avion d'escorte de la période.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_P-51_Mustang"
  "https://en.wikipedia.org/wiki/North_American_P-51_Mustang"
  "https://www.avionslegendaires.net/avion-militaire/north-american-p-51-mustang/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/375th_Fighter_Squadron_North_American_P-51D-5-NA_Mustang_44-13926_%28cropped%29.jpg"
  "U.S. Air Force, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "XT0qKOfhqac" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "hjsrqMe0B3s" >}} <!-- Animagraffs -->
</div>
</div>

<!-- Fighter aircraft: Several factors contributed to this shift. First, the Lockheed P-38 Lightning and second-generation Allied fighters such as the Grumman F6 Hellcat and later the Vought F4 Corsair, the Republic P-47 Thunderbolt and the North American P-51 Mustang, began arriving in numbers. These fighters outperformed Japanese fighters in all respects except maneuverability. -->
<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<!-- Air supremacy: In the Pacific Theater, the A6M Zero gave Japan air superiority for much of the early part of the war, but suffered against newer naval fighters such as the F6F Hellcat and F4U Corsair which exceeded the Zero in performance and durability. -->
<!-- Close air support: The American Navy and Marine Corps used CAS in conjunction with or as a substitute for the lack of available artillery or naval gunfire in the Pacific theater. Navy and Marine F6F Hellcats and F4U Corsairs used a variety of ordnance such as conventional bombs, rockets and napalm to dislodge or attack Japanese troops using cave complexes in the latter part of the Second World War. -->
<!-- Close air support: The Royal Navy Hawker Sea Fury fighters and the U.S. Vought F4U Corsair and Douglas A-1 Skyraider were operated in a ground attack capacity during the Korean War. -->
<div class="aeronef">
{{< aeronef ":us:" "Chance Vought" "F4U Corsair" "1942" "chasseur embarqué" >}}
{{< exemplaires 12571 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "Attaque au sol" >}}
<p>
Aile en mouette inversée (W). <br />
Supérieur à l'A6M Zéro sur tous les aspects à part la maneuverabilité.<br />
Un des trois avions de supériorité aérienne américain.
</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-7" "1942" "chasseur" >}}
{{< exemplaires 6399 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-7"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-7"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-1-yak-7/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Yakovlev_Yak-7B.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: By 1942 Soviet designs such as the Yakovlev Yak-9 and Lavochkin La-5 had performance comparable to the German Bf 109 and Focke-Wulf Fw 190. -->
<!-- Light fighter: The Soviet Yakovlev Yak-9 was also a lightweight fighter, initially using the M-105 engine. With an empty weight 2,350 kg (5,170 lb), it was among the lighter major fighters of World War II. A development of the Yakovlev Yak-7, it entered combat in late 1942 and was the Soviet Union's most-produced fighter with 16,769 built. At low altitudes, the Yak-9 was faster and more maneuverable than the Bf 109. However, its armament of one cannon and one machine gun was relatively light. -->
<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-9" "1942" "chasseur léger" >}}
{{< exemplaires 16769 >}}
<p>
Un appareil rattrapant le retard soviétique, équivalent aux Bf 109 ou Fw 190. <br />
Très manœvrant à basse altitude, il aura toutefois une puissance de feu limitée.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yakovlev_Yak-9"
  "https://en.wikipedia.org/wiki/Yakovlev_Yak-9"
  "https://www.avionslegendaires.net/avion-militaire/yakovlev-yak-9-frank/"
  "https://upload.wikimedia.org/wikipedia/commons/1/15/Flight%21_Yakovlev_Yak-9UM_HB-RYA_%288355282184%29.jpg"
  "English:  Aleksandr MarkinРусский:  Александр Маркин, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: By 1942 Soviet designs such as the Yakovlev Yak-9 and Lavochkin La-5 had performance comparable to the German Bf 109 and Focke-Wulf Fw 190. -->
<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine" "La-5" "1942" "chasseur" >}}
{{< exemplaires 9920 >}}
<p>
Basé sur le LaGG-3.<br />
Un appareil rattrapant le retard soviétique, équivalent aux Bf 109 ou Fw 190.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_La-5"
  "https://en.wikipedia.org/wiki/Lavochkin_La-5"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-la-5/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/La5-red66.jpg"
  "Soviet propaganda, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Several factors contributed to this shift. First, the Lockheed P-38 Lightning and second-generation Allied fighters such as the Grumman F6 Hellcat and later the Vought F4 Corsair, the Republic P-47 Thunderbolt and the North American P-51 Mustang, began arriving in numbers. These fighters outperformed Japanese fighters in all respects except maneuverability. -->
<!-- Air supremacy: In the Pacific Theater, the A6M Zero gave Japan air superiority for much of the early part of the war, but suffered against newer naval fighters such as the F6F Hellcat and F4U Corsair which exceeded the Zero in performance and durability. -->
<!-- Air supremacy: The Hellcat shot down 5,168 enemy aircraft (the second highest number), while the land-based Lockheed P-38 was third, shooting down 3,785 in all theaters. -->
<!-- Close air support: The American Navy and Marine Corps used CAS in conjunction with or as a substitute for the lack of available artillery or naval gunfire in the Pacific theater. Navy and Marine F6F Hellcats and F4U Corsairs used a variety of ordnance such as conventional bombs, rockets and napalm to dislodge or attack Japanese troops using cave complexes in the latter part of the Second World War. -->
<div class="aeronef">
{{< aeronef ":us:" "Grumman" "F6F Hellcat" "1943" "chasseur embarqué" >}}
{{< exemplaires 12275 >}}
{{< role "Supériorité aérienne" >}}
{{< role "Attaque au sol" >}}
<p>
Supérieur à l'A6M Zéro sur tous les aspects à part la maneuverabilité.<br />
Un des trois avions de supériorité aérienne américain.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Late in the war, Japan began to produce new fighters such as the Nakajima Ki-84 and the Kawanishi N1K to replace the Zero, but only in small numbers, and by then Japan lacked the trained pilots or sufficient fuel to mount an effective challenge to Allied attacks. -->
<div class="aeronef">
{{< aeronef ":jp:" "Kawanishi" "N1K1-J Rex" "1943" "chasseur" >}}
{{< exemplaires 1532 >}}
<p>Basé sur l'hydravion de chasse N1K.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Kawanishi_N1K1-J"
  "https://en.wikipedia.org/wiki/Kawanishi_N1K"
  "https://www.avionslegendaires.net/avion-militaire/kawanishi-n1k1-j-shiden-george/"
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Kawanishi_N1K2-J_050317-F-1234P-015.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Heavily armed fighters such as Germany's Focke-Wulf Fw 190, Britain's Hawker Typhoon and Hawker Tempest, and America's Curtiss P-40, F4 Corsair, P-47 Thunderbolt and P-38 Lightning all excelled as fighter-bombers, and since the Second World War ground attack has become an important secondary capability of many fighters. -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker" "Tempest" "1944" "chasseur" >}}
{{< exemplaires 1702 >}}
{{< role "Chasseur-bombardier" >}}
<p>Basé sur le Typhoon.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Hawker_Tempest"
  "https://en.wikipedia.org/wiki/Hawker_Tempest"
  "https://www.avionslegendaires.net/avion-militaire/hawker-tempest/"
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hawker_Tempest_V_in_flight_Nov_1944.jpg"
  "RAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Lavotchkine" "La-7" "1944" "chasseur" >}}
{{< exemplaires 5753 >}}
<p>Basé sur le La-5, un grain en vitesse.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lavotchkine_La-7"
  "https://en.wikipedia.org/wiki/Lavochkin_La-7"
  "https://www.avionslegendaires.net/avion-militaire/lavotchkin-7-fin/"
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Lavochkin_La-7_%E2%80%9927_white%E2%80%99_%2825168790698%29.jpg"
  "Alan Wilson from Stilton, Peterborough, Cambs, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Light fighter: The Soviet Yakovlev Yak-3, which entered service in 1944, was an attempt to develop the smallest and lightest fighter around the 1,600 hp (1,200 kW) V-12 Klimov M-107 engine. -->
<!-- Light fighter:  The Yak-3 could out-turn the German Bf 109 and Fw 190. German pilots were ordered to avoid dogfights with the Yak-3 at low level. -->
<!-- Soviet air force: [...]many Luftwaffe pilots deliberately avoided combat with the last and best variant, the out-of-sequence numbered Yak-3. -->
<div class="aeronef">
{{< aeronef ":ru:" "Yakovlev" "Yak-3" "1944" "chasseur léger" >}}
{{< exemplaires 4848 >}}
<p>
Un des chasseurs les plus légers de la période, il sera très maniable et excellent en dogfight. La Luftwaffe l'évitera à basse altitude.<br />
Le groupe de chasse Normandie-Niémen l'utilisera au côté des soviétiques.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Late in the war, Japan began to produce new fighters such as the Nakajima Ki-84 and the Kawanishi N1K to replace the Zero, but only in small numbers, and by then Japan lacked the trained pilots or sufficient fuel to mount an effective challenge to Allied attacks. -->
<!-- Ki-84: The Ki-84 is generally considered the best Japanese fighter to operate in large numbers during the conflict. -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "Ki-84" "1944" "chasseur" >}}
{{< exemplaires 3514 >}}
<p>Excellent chasseur mais arrivé trop tard dans le conflit.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_Ki-84"
  "https://en.wikipedia.org/wiki/Nakajima_Ki-84"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-ki-84-hayate-franck/"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Nakajima_Ki84_Hayate_N3385G_ONT_18.10.70_edited-3.jpg"
  "RuthAS, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: The Northrop P-61 Black Widow, a purpose-built night fighter, was the only fighter of the war that incorporated radar into its original design. -->
<div class="aeronef">
{{< aeronef ":us:" "Northrop" "P-61 Black Widow" "1944" "chasseur lourd">}}
{{< exemplaires 706 >}}
{{< role "Chasseur de nuit" >}}
<p>Premier chasseur américain conçu pour être un chasseur de nuit.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Northrop_P-61_Black_Widow"
  "https://en.wikipedia.org/wiki/Northrop_P-61_Black_Widow"
  "https://www.avionslegendaires.net/avion-militaire/northrop-p-61-black-widow/"
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/P-61_from_above.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h4>Après guerre</h4>
</div>

<div class="infos_generales">
<h3>Bombardiers en piqué</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/b/b7/Curtiss_SB2C-1_Helldiver_dropping_bomb%2C_circa_in_1943.png title="Ad Meskens, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" />
Au début de la guerre, le bombardement en piqué était le moyen le plus précis pour effectuer des frappes de précision, et donc les attaques de tanks ou l'appui tactique de troupes. Le Ju 87 Stuka se démarqua particulièrement, ainsi que dans le pacifique le D3A Val ou le SDB Dauntless.

Les armées allemandes, américaines et japonaises ont en particulier beaucoup inverti dans ce domaine.

Les évolutions techniques, en particulier l'arrivée des roquettes et des viseurs gyroscopiques pour le bombardement en pallier ont toutefois réduit le besoin de ce type de bombardiers à la fin de la guerre.
</div>

<!-- Strafing: The Luftwaffe's best strafing plane was the Junkers Ju 87 Stuka. The Ju 87 G variant had two Rheinmetall-Borsig 37 mm (1.5 in) Flak 18 guns each mounted under the wing. -->
<!-- Attack aircraft: The Junkers Ju 87s of the German Luftwaffe became virtually synonymous with close air support during the early months of World War II. -->
<!-- Attack aircraft: [...]The Germans and Soviets also used light bombers in this role: cannon-armed versions of the Junkers Ju 87 Stuka greatly outnumbered the Hs 129, while the Petlyakov Pe-2 was used for this role in spite of not being specifically designed for it.  -->
<!-- Dive bomber: The most famous examples are the Junkers Ju 87 Stuka, which was widely used during the opening stages of World War II, the Aichi D3A "Val" dive bomber, which sank more Allied warships during the war than any other Axis aircraft,[1][2][3] and the Douglas SBD Dauntless, which sank more Japanese shipping than any other allied aircraft type.[4] The SBD Dauntless helped win the Battle of Midway, was instrumental in the victory at the Battle of the Coral Sea, and fought in every US battle involving carrier aircraft. -->
<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 87 Stuka" "1936" "bombardier en piqué" >}}
{{< exemplaires 6000 >}}
{{< caracteristique "Bombardier en piqué" >}}
{{< role "Attaque au sol" >}}
<p>
Utilisé massivement à l'ouverture de la guerre.<br />
Le meilleur avion allemand de mitraillage au sol.<br />
Une sirène pour terroriser les populations lors du piqué.<br />Des versions Gunship.</p>
</div>
<div class="ressources">
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
{{< ressource-video-youtube "4-p0RRIc5vM" >}} <!-- Poudre & Acier -->
</div>
<div class="images">
{{< ressource-video-youtube "2JdcyGGby0Y" >}}
</div>
</div>

<!-- Dive bomber: The most famous examples are the Junkers Ju 87 Stuka, which was widely used during the opening stages of World War II, the Aichi D3A "Val" dive bomber, which sank more Allied warships during the war than any other Axis aircraft,[1][2][3] and the Douglas SBD Dauntless, which sank more Japanese shipping than any other allied aircraft type.[4] The SBD Dauntless helped win the Battle of Midway, was instrumental in the victory at the Battle of the Coral Sea, and fought in every US battle involving carrier aircraft. -->
<!-- Dive bomber: Japan started the war with a very good design, the carrier-borne Aichi D3A ("Val"). As the war progressed, the design became outdated due to its limited speed, due in part to the limited horsepower of its power plant and to the greater drag of its fixed main landing gear (a shortcoming shared by the Stuka).  -->
<div class="aeronef">
{{< aeronef ":jp:" "Aichi" "D3A Val" "1940" "bombardier en piqué embarqué" >}}
{{< exemplaires 1495 >}}
{{< caracteristique "Bombardier en piqué" >}}
<p>
A coulé plus de navire que n'importe quel autre avion de l'axe.<br />
Limité en vitesse.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Aichi_D3A"
  "https://en.wikipedia.org/wiki/Aichi_D3A"
  "https://www.avionslegendaires.net/avion-militaire/aichi-d3a-val/"
  "https://upload.wikimedia.org/wikipedia/commons/5/54/D3A1_Akagi.jpg"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Close air support: In 1944, USAAF commander Lt. Gen. Henry ("Hap") Arnold acquired 2 groups of A-24 dive bombers, the army version of the Navy's SBD-2, in response to the success of the Stuka and German CAS. Later, the USAAF developed a modification of the North American P-51 Mustang with dive brakes – the North American A-36 Apache. -->
<!-- Dive bomber: The most famous examples are the Junkers Ju 87 Stuka, which was widely used during the opening stages of World War II, the Aichi D3A "Val" dive bomber, which sank more Allied warships during the war than any other Axis aircraft,[1][2][3] and the Douglas SBD Dauntless, which sank more Japanese shipping than any other allied aircraft type.[4] The SBD Dauntless helped win the Battle of Midway, was instrumental in the victory at the Battle of the Coral Sea, and fought in every US battle involving carrier aircraft. -->
<!-- Dive bomber: The main American dive bomber, the Douglas SBD Dauntless, had similar performance to the D3A Val.  -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "SDB Dauntless / A-24 Banshee" "1940" "bombardier en piqué embarqué" >}}
{{< exemplaires 5936 >}}
{{< caracteristique "Bombardier en piqué" >}}
{{< role "Attaque au sol" >}}
<p>
A coulé plus de navire que n'importe quel autre avion allié.<br />
Limité en vitesse.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_SBD_Dauntless"
  "https://en.wikipedia.org/wiki/Douglas_SBD_Dauntless"
  "https://www.avionslegendaires.net/avion-militaire/douglas-sbd-dauntless/"
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Douglas_SBD_Dauntless_dropping_a_bomb%2C_circa_in_1942.jpg"
  "U.S. Navy photo, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Light bomber: Conversely, the Petlyakov Pe-3, which had been designed as a night fighter, was often used a light bomber. -->
<!-- Attack aircraft: [...]The Germans and Soviets also used light bombers in this role: cannon-armed versions of the Junkers Ju 87 Stuka greatly outnumbered the Hs 129, while the Petlyakov Pe-2 was used for this role in spite of not being specifically designed for it.  -->
<!-- Dive bomber: The crews of multi-engined dive-bombers, such as variants of the Junkers Ju 88 and Petlyakov Pe-2, frequently used this technique. -->
<div class="aeronef">
{{< aeronef ":ru:" "Petliakov" "Pe-2 Buck" "1941" "bombardier en piqué" >}}
{{< exemplaires 11427 >}}
{{< caracteristique "Bombardier en piqué" >}}
{{< role "Attaque au sol" >}}
<p>
Variante Pe-3 chasseur de nuit.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Petliakov_Pe-2"
  "https://en.wikipedia.org/wiki/Petlyakov_Pe-2"
  "https://www.avionslegendaires.net/avion-militaire/petlyakov-pe-2/"
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Pe2-2.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Close air support: In 1944, USAAF commander Lt. Gen. Henry ("Hap") Arnold acquired 2 groups of A-24 dive bombers, the army version of the Navy's SBD-2, in response to the success of the Stuka and German CAS. Later, the USAAF developed a modification of the North American P-51 Mustang with dive brakes – the North American A-36 Apache. -->
<div class="aeronef">
{{< aeronef ":us:" "North American" "A-36 Invader/Apache" "1941" "attaque au sol, bombardier en piqué" >}}
{{< exemplaires 500 >}}
{{< role "Attaque au sol" >}}
<p>Version d'attaque du P-51 Mustang.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_A-36_Apache"
  "https://en.wikipedia.org/wiki/North_American_A-36"
  "https://www.avionslegendaires.net/avion-militaire/north-american-a-36-invader-apache/"
  "https://upload.wikimedia.org/wikipedia/commons/8/81/A-36_%22Apache%22_of_the_27th_Fighter_Bomber_Group.jpg"
  "USAAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Vultee" "A-31 Vengeance" "1942" "bombardier en piqué" >}}
{{< exemplaires 1931 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Vultee_A-31_Vengeance"
  "https://en.wikipedia.org/wiki/Vultee_A-31_Vengeance"
  "https://www.avionslegendaires.net/avion-militaire/vultee-a-31-a-35-vengeance/"
  "https://upload.wikimedia.org/wikipedia/commons/7/74/Vultee_Vengeance_in_flight_Dec_1942.jpg"
  "United States. Office of War Information. Overseas Picture Division. Washington Division; 1944, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Dive bomber: The Japanese Yokosuka D4Y Suisei, code-name Judy, began to replace the Vals after a very troublesome development on surviving larger Japanese carriers from March 1943. With a sleek fuselage, retracting landing gear and a powerful licensed Daimler-Benz 601 engine, it could outpace pursuing Grumman F4F Wildcats. -->
<div class="aeronef">
{{< aeronef ":jp:" "Yokosuka" "D4Y Judy" "1942" "bombardier en piqué, embarqué" >}}
{{< exemplaires 2038 >}}
<p>Le bombardier en piqué le plus rapide de la guerre.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Yokosuka_D4Y_Suisei"
  "https://en.wikipedia.org/wiki/Yokosuka_D4Y"
  "https://www.avionslegendaires.net/avion-militaire/yokosuka-d4y-suisei-judy/"
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/D4Y3_pulling_up.jpg"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Light bomber: and the Curtiss SB2C Helldiver (a U.S. Navy dive bomber adopted later in World War II when that design role was beginning to disappear) also was assigned to ground attack sorties using its cannon, bombs and rockets. -->
<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":us:" "Curtiss" "SB2C Helldiver" "1943" "bombardier en piqué, embarqué" >}}
{{< exemplaires 7140 >}}
{{< role "Attaque au sol" >}}
{{< role "Torpilleur" >}}
<p>Rapide. Arrivé tard dans la guerre, à un moment où les bombardiers en piqués étaient moins importants.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Curtiss_SB2C_Helldiver"
  "https://en.wikipedia.org/wiki/Curtiss_SB2C_Helldiver"
  "https://www.avionslegendaires.net/avion-militaire/curtiss-sb2c-helldiver/"
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/Curtiss_SB2C-5_Helldiver_warbird_in_flight.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h3>Bombardiers légers / rapides</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/2/24/Bristol_Blenheim_Mk_IVFs_of_No._254_Squadron_RAF_flying_from_Aldergrove_in_Northern_Ireland%2C_May_1941._CH2992.jpg title="Daventry B J (Mr), Royal Air Force official photographer, Public domain, via Wikimedia Commons" />
Au début de la guerre il s'agissait d'avions légers et rapides, emportant de petites charges (classe une tonne).

Cependant les progrès techniques ont amenés des chaseurs-bombardiers pouvant emporter des charges comparables, et des bombardiers moyens de plus en plus performants.

Leur rôle de bombardier tactique a aussi évolué et se dirigea de plus en plus vers des avions d'attaque au sol.
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "ANT-40 / SB" "1935" "bombardier rapide" >}}
{{< exemplaires 6656 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_SB"
  "https://en.wikipedia.org/wiki/Tupolev_SB"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-sb-2/"
  "https://upload.wikimedia.org/wikipedia/commons/1/13/Aeroflot_Tupolev_ANT-40_SSSR-L2440.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Light bomber: Twin-engine light bombers were successful when converted into airborne radar-equipped night fighters during World War II; examples include the Bristol Blenheim, Douglas A-20 Havoc (as the P-70), and Dornier Do 17. -->
<!-- Dive bomber: The RAF had chosen the single-engined Fairey Battle and the twin-engined Bristol Blenheim as its tactical bombers. Both were level bombers with similar bomb-loads and entered service in 1937. -->
<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Blenheim" "1937" "bombardier rapide" >}}
{{< exemplaires 4422 >}}
{{< role "Chasseur de nuit" >}}
</div>
<div class="ressources">
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
</div>

<!-- Dive bomber: The RAF had chosen the single-engined Fairey Battle and the twin-engined Bristol Blenheim as its tactical bombers. Both were level bombers with similar bomb-loads and entered service in 1937. -->
<div class="aeronef">
{{< aeronef ":gb:" "Fairey" "Battle" "1937" "bombardier léger" >}}
{{< exemplaires 2201 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Fairey_Battle"
  "https://en.wikipedia.org/wiki/Fairey_Battle"
  "https://www.avionslegendaires.net/avion-militaire/fairey-battle/"
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/Fairey_Battles_in_formation.jpg"
  "Devon S A (F/O), Royal Air Force official photographer, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Heavy-fighter: Due to their relatively large size, these were mostly used as night fighter-bomber destroyers, as there was ample room to install airborne intercept radar systems as well as heavy armament. Bombers utilized in such a role included the Junkers Ju 88 and Ju 388; the Heinkel He 219; and the Dornier Do 215 and Do 217. -->
<!-- Light bomber: Twin-engine light bombers were successful when converted into airborne radar-equipped night fighters during World War II; examples include the Bristol Blenheim, Douglas A-20 Havoc (as the P-70), and Dornier Do 17. -->
<!-- High level bombing: Nazi Germany used high level bombers such as the Heinkel He 111, the Dornier Do 17 and multi-role aircraft such as the Junkers Ju 88 against the Allies in the Battle of Britain,[4] both for carpet bombing and for precision attacks on British radar stations as part of Operation Eagle.[5] -->
<div class="aeronef">
{{< aeronef ":de:" "Dornier" "Do 17" "1937" "bombardier léger, chasseur de nuit, reconnaissance" >}}
{{< exemplaires 1994 >}}
{{< role "Chasseur de nuit" >}}
{{< role "Bombardier haute altitude" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dornier_Do_17"
  "https://en.wikipedia.org/wiki/Dornier_Do_17"
  "https://www.avionslegendaires.net/avion-militaire/dornier-do-17/"
  "https://upload.wikimedia.org/wikipedia/commons/2/22/Bundesarchiv_Bild_101I-342-0603-25%2C_Belgien-Frankreich%2C_Flugzeuge_Dornier_Do_17.jpg"
  "Bundesarchiv, Bild 101I-342-0603-25 / Ketelhohn [Kettelhohn] / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Because of the bulkiness of these radar sets, they could not be carried on conventional single-engined fighters and instead were typically retrofitted to larger heavy fighters or light bombers such as Germany's Messerschmitt Bf 110 and Junkers Ju 88, Britain's de Havilland Mosquito and Bristol Beaufighter, and America's Douglas A-20, which then served as night fighters -->
<!-- Attack aircraft: In the United States and Britain attack aircraft were generally light bombers or medium bombers, sometimes carrying heavier forward-firing weapons like the North American B-25G Mitchell and de Havilland Mosquito Tsetse. -->
<!-- Multirole Combat aircraft: In particular, the Junkers Ju 88 was renowned in Germany for being a "jack-of-all-trades", capable of performing as a bomber, dive bomber, night fighter, and so on, much as the British de Havilland Mosquito did as a fast bomber/strike aircraft, reconnaissance, and night fighter. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":gb:" "de Havilland" "DH.98 Mosquito" "1941" "bombardier léger / multirôle" >}}
{{< exemplaires 7781 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "Faible emprunte radar" >}}
{{< role "Chasseur de nuit" >}}
{{< role "Attaque au sol" >}}
<p>
Difficile à intercepter car très rapide.<br />
Des versions Gunship.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/De_Havilland_DH.98_Mosquito"
  "https://en.wikipedia.org/wiki/De_Havilland_Mosquito"
  "https://www.avionslegendaires.net/avion-militaire/de-havilland-d-h-98-mosquito/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mosquito_600pix.jpg"
  "RAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h3>Avions d'attaque au sol</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/a/a1/Royal_Air_Force_1939-1945-_Coastal_Command_C4944.jpg title="HQ Coastal Command, Royal Air Force official photographer, Public domain, via Wikimedia Commons" />
L'attaque au sol nécessite une grande puissance de feu et de la précision. Il s'agit généralement d'attaques à basse altitude, au canon, à la bombe ou à la roquette.

On parle de mitraillage au sol ou d'appui tactique.

Ce rôle sera assuré par des avions spécialisés, en particulier avec du blindage, mais aussi des bombardiers légers, des bombardiers en piqués (ne plongeants cette fois), ou même des chasseurs.
</div>

<!-- Light bomber: Light attack aircraft such as the Breda Ba.65, Ilyushin Il-2 Šturmovík, Northrop A-17, and Vultee V-11 initially differed little in armament and operational role from light bombers. -->
<!-- Strafing: For the US, the Republic P-47 Thunderbolt was one of the key ground attack planes. It was armed with eight .50 calibre (12.7 mm) machine guns. Another aircraft that was important in that role was the North American B-25 Mitchell. It was used for low-altitude strafing runs in the Pacific War. -->
<!-- Attack aircraft:  had forced the Soviet air forces to quickly expand their army support capacity, such as the Ilyushin Il-2 Sturmovik -->
<!-- Attack aircraft: In Germany and the USSR, where they were known as Schlachtflugzeug ("battle aircraft") or sturmovik ("storm trooper") respectively, this role was carried out by purpose-designed and heavily armored aircraft such as the Henschel Hs 129 and Ilyushin Il-2 -->
<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-2 Chtourmovik" "1941" "attaque au sol" >}}
{{< exemplaires 36183 >}}
{{< role "Attaque au sol" >}}
<p>Blindé. Un des avions clés soviétique pour l'attaque au sol.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-2"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-2"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-il-2-sturmovik/"
  "https://upload.wikimedia.org/wikipedia/commons/2/23/Il2_sturmovik.jpg"
  "no info, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: Because of the bulkiness of these radar sets, they could not be carried on conventional single-engined fighters and instead were typically retrofitted to larger heavy fighters or light bombers such as Germany's Messerschmitt Bf 110 and Junkers Ju 88, Britain's de Havilland Mosquito and Bristol Beaufighter, and America's Douglas A-20, which then served as night fighters -->
<!-- Light bomber: Twin-engine light bombers were successful when converted into airborne radar-equipped night fighters during World War II; examples include the Bristol Blenheim, Douglas A-20 Havoc (as the P-70), and Dornier Do 17. -->
<!-- Light bomber: the A-20 and B-25 Mitchell (type-classed as a medium bomber) each had variants with 8 or more forward-firing machine guns for ground strafing missions. -->
<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-20 Havoc / DB-7" "1941" "attaque au sol, bombardier léger, chasseur nocturne" >}}
{{< exemplaires 7476 >}}
{{< role "Chasseur de nuit" >}}
{{< role "Attaque au sol" >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-20_Havoc"
  "https://en.wikipedia.org/wiki/Douglas_A-20_Havoc"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-20-havoc/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Douglas_A-20G_Havoc.jpg"
  "USAAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Attack aircraft: The ultimate development of the cannon-armed light attack aircraft was the small production run in 1944 of the Henschel Hs 129B-3, armed with a modified PAK 40 75 mm anti-tank gun. This weapon, the Bordkanone BK 7,5, was the most powerful forward-firing weapon fitted to a production military aircraft during World War II. -->
<!-- Attack aircraft: In Germany and the USSR, where they were known as Schlachtflugzeug ("battle aircraft") or sturmovik ("storm trooper") respectively, this role was carried out by purpose-designed and heavily armored aircraft such as the Henschel Hs 129 and Ilyushin Il-2 -->
<!-- Attack aircraft: [...]The Germans and Soviets also used light bombers in this role: cannon-armed versions of the Junkers Ju 87 Stuka greatly outnumbered the Hs 129, while the Petlyakov Pe-2 was used for this role in spite of not being specifically designed for it.  -->
<div class="aeronef">
{{< aeronef ":de:" "Henschel" "Hs 129" "1942" "attaque au sol" >}}
{{< exemplaires 865 >}}
{{< role "Attaque au sol" >}}
<p>Blindé, un canon très puissant.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Henschel_Hs_129"
  "https://en.wikipedia.org/wiki/Henschel_Hs_129"
  "https://www.avionslegendaires.net/avion-militaire/henschel-hs-129/"
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Henschel_Hs_129B.jpg"
  "USAAF; original uploader to en.wikipedia was en:user:Maury Markowitz, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Light bomber: One of the last light bombers to be introduced in World War II, the U.S. Douglas A-26 Invader, replaced the earlier A-20 Havoc type and also was designated by the USAAF as a replacement for its Martin B-26 Marauder (which had the same engines and a similar bomb load as the Invader) medium bomber. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-26 Invader" "1944" "attaque au sol" >}}
{{< exemplaires 2450 >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-10 Beast" "1944" "attaque au sol" >}}
{{< exemplaires 6166 >}}
<p>Principalement utilisé pendant la guerre de Corée.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-10"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-10"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-il-10-beast/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ilyushin_Il-10_%28China_Aviation_Museum%29.jpg"
  "Flavio Mucia (AMB Brescia), CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h3>Bombardiers moyens</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/c/c7/9_Squadron_in_Formation_1939-45.jpg title="RAF photographer https://www.iwm.org.uk/collections/item/object/205210912, Public domain, via Wikimedia Commons" />

<!-- Medium bomber: A medium bomber is a military bomber aircraft designed to operate with medium-sized bombloads over medium range distances; the name serves to distinguish this type from larger heavy bombers and smaller light bombers. Mediums generally carried about two tons of bombs, compared to light bombers that carried one ton, and heavies that carried four or more. -->
La classe deux tonnes de charge.
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-4" "1936" "bombardier longue distance" >}}
{{< exemplaires 5256 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-4"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-4"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-db-3-il-4-bob/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Iljushin_DB-3F_%28SA-kuva_148731%29.jpg"
  "Sot.virk. Niilo Helander, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- High level bombing: Nazi Germany used high level bombers such as the Heinkel He 111, the Dornier Do 17 and multi-role aircraft such as the Junkers Ju 88 against the Allies in the Battle of Britain,[4] both for carpet bombing and for precision attacks on British radar stations as part of Operation Eagle.[5] -->
<!-- Torpedo bomber: Other twin-engine or three-engined aircraft designed or used as torpedo bombers include the Mitsubishi Ki-67, the Savoia-Marchetti SM.79 "Sparviero", the CANT Z.1007, the Bristol Beaufort and Bristol Beaufighter ("Torbeau"), the Junkers Ju 88, the Heinkel He 111, the B-25 Mitchell and many others. -->
<div class="aeronef">
{{< aeronef ":de:" "Heinkel" "He 111" "1937" "bombardier moyen" >}}
{{< exemplaires 7300 >}}
{{< role "Bombardier haute altitude" >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Heinkel_He_111"
  "https://en.wikipedia.org/wiki/Heinkel_He_111"
  "https://www.avionslegendaires.net/avion-militaire/heinkel-he-111/"
  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg"
  "Bundesarchiv, Bild 101I-343-0694-21 / Schödl (e) / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Maritime patrol aircraft: The British in particular used obsolete bombers to supplement purpose-built aircraft for maritime patrol, such as the Vickers Wellington and Armstrong-Whitworth Whitley,[ -->
<!-- Anti submarine warfare: Many different aircraft from airships to four-engined sea- and land-planes were used. Some of the more successful were the Lockheed Ventura, PBY (Catalina or Canso, in British service), Consolidated B-24 Liberator (VLR Liberator, in British service), Short Sunderland, and Vickers Wellington. -->
<div class="aeronef">
{{< aeronef ":gb:" "Vickers" "Wellington" "1938" "bombardier moyen, patrouilleur maritime" >}}
{{< exemplaires 11461 >}}
{{< role "Patrouille maritime" >}}
<p>Une fois devenu obsolète, il sera utilisé en patrouilleur maritime.</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter aircraft: Because of the bulkiness of these radar sets, they could not be carried on conventional single-engined fighters and instead were typically retrofitted to larger heavy fighters or light bombers such as Germany's Messerschmitt Bf 110 and Junkers Ju 88, Britain's de Havilland Mosquito and Bristol Beaufighter, and America's Douglas A-20, which then served as night fighters -->
<!-- Heavy-fighter: Due to their relatively large size, these were mostly used as night fighter-bomber destroyers, as there was ample room to install airborne intercept radar systems as well as heavy armament. Bombers utilized in such a role included the Junkers Ju 88 and Ju 388; the Heinkel He 219; and the Dornier Do 215 and Do 217. -->
<!-- High level bombing: Nazi Germany used high level bombers such as the Heinkel He 111, the Dornier Do 17 and multi-role aircraft such as the Junkers Ju 88 against the Allies in the Battle of Britain,[4] both for carpet bombing and for precision attacks on British radar stations as part of Operation Eagle.[5] -->
<!-- Multirole Combat aircraft: In particular, the Junkers Ju 88 was renowned in Germany for being a "jack-of-all-trades", capable of performing as a bomber, dive bomber, night fighter, and so on, much as the British de Havilland Mosquito did as a fast bomber/strike aircraft, reconnaissance, and night fighter. -->
<!-- Dive bomber: The crews of multi-engined dive-bombers, such as variants of the Junkers Ju 88 and Petlyakov Pe-2, frequently used this technique. -->
<!-- Torpedo bomber: Other twin-engine or three-engined aircraft designed or used as torpedo bombers include the Mitsubishi Ki-67, the Savoia-Marchetti SM.79 "Sparviero", the CANT Z.1007, the Bristol Beaufort and Bristol Beaufighter ("Torbeau"), the Junkers Ju 88, the Heinkel He 111, the B-25 Mitchell and many others. -->
<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":de:" "Junkers" "Ju 88" "1939" "bombardier moyen / multirôle" >}}
{{< exemplaires 15183 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "Bombardier en piqué" >}}
{{< role "Chasseur de nuit" >}}
{{< role "Bombardier haute altitude" >}}
{{< role "Torpilleur" >}}
<p>Des versions Gunship.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Junkers_Ju_88"
  "https://en.wikipedia.org/wiki/Junkers_Ju_88"
  "https://www.avionslegendaires.net/avion-militaire/junkers-ju-88/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bundesarchiv_Bild_101I-417-1766-03A%2C_Flugzeug_Junkers_Ju_88.jpg"
  "Bundesarchiv, Bild 101I-417-1766-03A / Ellerbrock / CC-BY-SA 3.0, CC BY-SA 3.0 DE <https://creativecommons.org/licenses/by-sa/3.0/de/deed.en>, via Wikimedia Commons"
>}}
</div>
</div>


<!-- Light bomber: the A-20 and B-25 Mitchell (type-classed as a medium bomber) each had variants with 8 or more forward-firing machine guns for ground strafing missions. -->
<!-- Strafing: For the US, the Republic P-47 Thunderbolt was one of the key ground attack planes. It was armed with eight .50 calibre (12.7 mm) machine guns. Another aircraft that was important in that role was the North American B-25 Mitchell. It was used for low-altitude strafing runs in the Pacific War. -->
<!-- Attack aircraft: In the United States and Britain attack aircraft were generally light bombers or medium bombers, sometimes carrying heavier forward-firing weapons like the North American B-25G Mitchell and de Havilland Mosquito Tsetse. -->
<!-- Torpedo bomber: Other twin-engine or three-engined aircraft designed or used as torpedo bombers include the Mitsubishi Ki-67, the Savoia-Marchetti SM.79 "Sparviero", the CANT Z.1007, the Bristol Beaufort and Bristol Beaufighter ("Torbeau"), the Junkers Ju 88, the Heinkel He 111, the B-25 Mitchell and many others. -->
<div class="aeronef">
{{< aeronef ":us:" "North American" "B-25 Mitchell" "1941" "bombardier moyen" >}}
{{< exemplaires 9984 >}}
{{< role "Attaque au sol" >}}
{{< role "Torpilleur" >}}
<p>Un avion clé d'attaque au sol.<br />Des versions Gunship.</p>
</div>
<div class="ressources">
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
</div>

<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-2 Bat" "1941" "bombardier moyen" >}}
{{< exemplaires 2257 >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-2"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-2"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-2-bat/"
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Tupolev_Tu-2_%28China_Aviation_Museum%29.jpg"
  "Flavio Mucia (AMB Brescia), CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Martin" "B-26 Marauder" "1941" "bombardier moyen" >}}
{{< exemplaires 5288 >}}
</div>
<div class="ressources">
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
</div>

<!-- Torpedo bomber: While many torpedo bombers were single-engine aircraft, some multi-engined aircraft have also been used as torpedo bombers, with the Mitsubishi G3M Nell and Mitsubishi G4M Betty being used in the sinking of HMS Prince of Wales and Repulse. -->
<div class="aeronef">
{{< aeronef ":jp:" "Mitsubishi" "G4M Betty" "1941" "bombardier moyen, torpilleur" >}}
{{< exemplaires 2435 >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mitsubishi_G4M"
  "https://en.wikipedia.org/wiki/Mitsubishi_G4M"
  "https://www.avionslegendaires.net/avion-militaire/mitsubishi-g4m-betty/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mitsubishi_G4M_captured_on_ground_1945.jpeg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Heavy fighter: Due to their relatively large size, these were mostly used as night fighter-bomber destroyers, as there was ample room to install airborne intercept radar systems as well as heavy armament. Bombers utilized in such a role included the Junkers Ju 88 and Ju 388; the Heinkel He 219; and the Dornier Do 215 and Do 217. -->
<div class="aeronef">
{{< aeronef ":de:" "Dornier" "Do 217" "1941" "bombardier moyen, lourd, chasseur de nuit" >}}
{{< exemplaires 1925 >}}
{{< role "Chasseur de nuit" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dornier_Do_217"
  "https://en.wikipedia.org/wiki/Dornier_Do_217"
  "https://www.avionslegendaires.net/avion-militaire/dornier-do-217/"
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Do_217E-2_NAN15Jul43.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h3>Bombardiers torpilleurs, patrouille maritime</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/0/09/Bristol_Beaufort_-_North_Coates_-_Royal_Air_Force_Coastal_Command%2C_1939-1945._CH1851.jpg title="Royal Air Force official photographer, Daventry B J (Mr), Public domain, via Wikimedia Commons" />
Le rôle de torpillage a été effectué à la fin de la guerre par des avions généralistes (chasseurs lourds, bombardiers moyens...), nécessitant moins des avions spécialisés.

Les avions de patrouille maritime étaient souvent des hydravions-bombardiers ou des avions de lignes convertis.
</div>


<!-- Maritime Patrol Aircraft: A number of special-purpose aircraft were also used in the conflict, including the American-made twin-engine Consolidated PBY Catalina flying boats,[21][22] and the large, four-engine British Short Sunderland flying boats of the Allies.[23][24] In the Pacific theatre, the Catalina was gradually superseded by the longer-ranged Martin PBM Mariner flying boat. -->
<!-- Anti submarine warfare: Many different aircraft from airships to four-engined sea- and land-planes were used. Some of the more successful were the Lockheed Ventura, PBY (Catalina or Canso, in British service), Consolidated B-24 Liberator (VLR Liberator, in British service), Short Sunderland, and Vickers Wellington. -->
<div class="aeronef">
{{< aeronef ":us:" "Consolidated" "PBY Catalina" "1936" "hydravion de patrouille et de bombardement" >}}
{{< exemplaires 3308 >}}
{{< role "Patrouille maritime" >}}
</div>
<div class="ressources">
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
</div>

<!-- Maritime Patrol Aircraft: A number of special-purpose aircraft were also used in the conflict, including the American-made twin-engine Consolidated PBY Catalina flying boats,[21][22] and the large, four-engine British Short Sunderland flying boats of the Allies.[23][24] In the Pacific theatre, the Catalina was gradually superseded by the longer-ranged Martin PBM Mariner flying boat. -->
<!-- Anti submarine warfare: Many different aircraft from airships to four-engined sea- and land-planes were used. Some of the more successful were the Lockheed Ventura, PBY (Catalina or Canso, in British service), Consolidated B-24 Liberator (VLR Liberator, in British service), Short Sunderland, and Vickers Wellington. -->
<div class="aeronef">
{{< aeronef ":gb:" "Short" "S.25 Sunderland" "1938" "hydravion de patrouille et de bombardement" >}}
{{< exemplaires 749 >}}
{{< role "Patrouille maritime" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Short_S.25_Sunderland"
  "https://en.wikipedia.org/wiki/Short_Sunderland"
  "https://www.avionslegendaires.net/avion-militaire/short-s-26-sunderland/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Short_Sunderland_3_of_Aquila_Airways.jpg"
  "RuthAS, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "kWdUeI7vr18" >}} <!-- Aviation - Documentaires entiers -->
</div>
</div>

<!-- Torpedo bomber: During the war, Japanese torpedo bombers (mainly the Nakajima B5N) played a key role in the fatal crippling of the carriers USS Lexington (scuttled as a result of an internal explosion), USS Yorktown (sunk by a Japanese submarine while being towed), and USS Hornet (abandoned and finished off by US and Japanese surface ships). -->
<div class="aeronef">
{{< aeronef ":jp:" "Nakajima" "B5N Kate" "1939" "bombardier-torpilleur embarqué" >}}
{{< exemplaires 1149 >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Nakajima_B5N"
  "https://en.wikipedia.org/wiki/Nakajima_B5N"
  "https://www.avionslegendaires.net/avion-militaire/nakajima-b5n-kate/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Nakajima_B5N2_Kate_in_flight.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Torpedo bomber: Other twin-engine or three-engined aircraft designed or used as torpedo bombers include the Mitsubishi Ki-67, the Savoia-Marchetti SM.79 "Sparviero", the CANT Z.1007, the Bristol Beaufort and Bristol Beaufighter ("Torbeau"), the Junkers Ju 88, the Heinkel He 111, the B-25 Mitchell and many others. -->
<div class="aeronef">
{{< aeronef ":gb:" "Bristol" "Beaufort" "1939" "torpilleur" >}}
{{< exemplaires 1121 >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Bristol_Beaufort"
  "https://en.wikipedia.org/wiki/Bristol_Beaufort"
  "https://www.avionslegendaires.net/avion-militaire/bristol-beaufort/"
  "https://upload.wikimedia.org/wikipedia/commons/2/22/Bristol_Beaufort_ExCC.jpg"
  "Royal Air Force, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Maritime Patrol Aircraft: A number of special-purpose aircraft were also used in the conflict, including the American-made twin-engine Consolidated PBY Catalina flying boats,[21][22] and the large, four-engine British Short Sunderland flying boats of the Allies.[23][24] In the Pacific theatre, the Catalina was gradually superseded by the longer-ranged Martin PBM Mariner flying boat. -->
<div class="aeronef">
{{< aeronef ":us:" "Martin" "PBM Mariner" "1940" "hydravion de patrouille et de bombardement" >}}
{{< exemplaires 1366 >}}
{{< role "Patrouille maritime" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Martin_PBM_Mariner"
  "https://en.wikipedia.org/wiki/Martin_PBM_Mariner"
  "https://www.avionslegendaires.net/avion-militaire/martin-pbm-mariner/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Martin_PBM-5_Mariner_in_flight_c1945.jpeg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Torpedo bomber: Avengers became more successful as tactics improved and crews became more skilled. On 24 August 1942, 24 Avengers sank the light carrier Ryūjō at the Battle of the Eastern Solomons. At Guadalcanal, Avengers from the Navy and Marine Corps helped to finished off the battleship Hiei, which had lost steering after being damaged the prior night.[19] -->
<div class="aeronef">
{{< aeronef ":us:" "Grumman" "TBF Avenger" "1942" "bombardier torpilleur embarqué" >}}
{{< exemplaires 9836 >}}
{{< role "Torpilleur" >}}
<p>Il a participé au torpillage des cuirassés Yamato et Musashi.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_TBF_Avenger"
  "https://en.wikipedia.org/wiki/Grumman_TBF_Avenger"
  "https://www.avionslegendaires.net/avion-militaire/grumman-tbf-tbm-avenger/"
  "https://upload.wikimedia.org/wikipedia/commons/d/db/TBM3_Avenger_-_Chino_Airshow_2014_%2814344070442%29.jpg"
  "Airwolfhound from  Hertfordshire, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Dive bomber: were replaced by Fairey Barracuda torpedo-dive bombers, which made repeated diving attacks on the German battleship Tirpitz which lay protected by torpedo nets in a Norwegian fjord during 1944. -->
<!-- Torpedo bomber: Multi-role designs were often adapted from either: single-engined, carrier-based dive-bombers like the Aichi B7A Ryusei, Curtiss SB2C Helldiver and Fairey Barracuda, or; land-based twin-engined light bombers/attack aircraft, such as the Bristol Beaufighter, Douglas A-20C (Boston IIIA), Junkers Ju 88, and Tupolev Tu-2. -->
<div class="aeronef">
{{< aeronef ":gb:" "Fairey" "Barracuda" "1943" "bombardier torpilleur, bombardier en piqué, embarqué" >}}
{{< exemplaires 2602 >}}
{{< caracteristique "Bombardier en piqué" >}}
{{< role "Torpilleur" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Fairey_Barracuda"
  "https://en.wikipedia.org/wiki/Fairey_Barracuda"
  "https://www.avionslegendaires.net/avion-militaire/fairey-barracuda/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fairey_Barracuda.jpg"
  "Lt. S.J. Beadell, Royal Navy official photographer, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h3>Bombardiers lourds</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/a/a5/Bombing_of_Concordia_Vega_oil_refinery_in_Ploe%C8%99ti_by_USAAF_B-24s%2C_31_May_1944_%E2%80%94_restored.jpg title="Richard R. Ganczak (1924—2014). Ganczak served radio operator and later a bombardier in the Fifteenth Air Force, flying 70 combat missions. This photograph was taken during his second tour.[2][3], Public domain, via Wikimedia Commons" />
Une stratégie massive de tapissage de bombe a été employée pendant la guerre.

Les bombardiers lourds disposaient de tourelles d'autodéfense et étaient souvent quadrimoteurs.
On parle de bombardier lourd pour la classe quatre tonnes et plus de charge.
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-17 Flying Fortress" "1938" "bombardier lourd" >}}
{{< exemplaires 12731 >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Short" "S.29 Stirling" "1940" "bombardier lourd" >}}
{{< exemplaires 2371 >}}
<p>Premier bombardier lourd quadrimoteur britanique.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Short_Stirling"
  "https://en.wikipedia.org/wiki/Short_Stirling"
  "https://www.avionslegendaires.net/avion-militaire/short-s-29-stirling/"
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Aircraft_of_the_Royal_Air_Force_1939-1945-_Short_S.29_Stirling._CH3138.jpg"
  "Royal Air Force official photographer, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "HP.57 Halifax" "1940" "bombardier lourd quadrimoteur" >}}
{{< exemplaires 6176 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Handley_Page_Halifax"
  "https://en.wikipedia.org/wiki/Handley_Page_Halifax"
  "https://www.avionslegendaires.net/avion-militaire/handley-page-hp-57-halifax/"
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Halifax_Bomber_2_ExCC.jpg"
  "George Woodbine, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "oEHmI2gE41Q" >}} <!-- Aviation - Documentaires complets -->
</div>
</div>

<!-- Maritime Patrol aircraft: To finally close the Mid-Atlantic gap, or "Black Gap", a space in which Axis submarines could prey of Allied shipping historically out of reach of MPAs, the British Royal Air Force, the Royal Canadian Air Force, and the US Army Air Forces introduced the American Consolidated B-24 Liberator bomber, which had a very long range for the era. -->
<!-- Anti submarine warfare: Many different aircraft from airships to four-engined sea- and land-planes were used. Some of the more successful were the Lockheed Ventura, PBY (Catalina or Canso, in British service), Consolidated B-24 Liberator (VLR Liberator, in British service), Short Sunderland, and Vickers Wellington. -->
<div class="aeronef">
{{< aeronef ":us:" "Consolidated" "B-24 Liberator" "1941" "bombardier lourd, chasseur de sous marin" >}}
{{< exemplaires 18482 >}}
{{< role "Patrouille maritime" >}}
<p>Sa grande autonomie pour l'époque en fera un bon patrouilleur maritime.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Avro" "Lancaster" "1942" "bombardier lourd" >}}
{{< exemplaires 7377 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Avro_Lancaster"
  "https://en.wikipedia.org/wiki/Avro_Lancaster"
  "https://www.avionslegendaires.net/avion-militaire/avro-lancaster/"
  "https://upload.wikimedia.org/wikipedia/commons/8/83/Battle_of_Britain_Memorial_flight_Avro_Lancaster_%28cropped%29.jpg"
  "Cpl Phil Major ABIPP, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "7mXpBlr9uls" >}} <!-- Légendes du ciel -->
</div>
</div>

<!-- Dive bomber: The heaviest aircraft to have dive-bombing included in its design and development, the four-engined Heinkel He 177, also utilised a glide-bombing approach; the requirement that the He 177 be able to dive/glide-bomb delayed its development and impaired its overall performance. -->
<div class="aeronef">
{{< aeronef ":de:" "Heinkel" "He 177 Greif" "1942" "bombardier lourd longue distance" >}}
{{< exemplaires 1169 >}}
{{< caracteristique "Bombardier en piqué" >}}
<p>Le seul bombardier stratégique allemand.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Heinkel_He_177"
  "https://en.wikipedia.org/wiki/Heinkel_He_177_Greif"
  "https://www.avionslegendaires.net/avion-militaire/heinkel-he-177-greif/"
  "https://upload.wikimedia.org/wikipedia/commons/c/cf/Heinkel_He_177A-02_in_flight_1942.jpg"
  "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: During the closing stages of the war, Japan's fighter arm could not seriously challenge raids over Japan by American Boeing B-29 Superfortresses, and was largely reduced to Kamikaze attacks. -->
<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-29 Superfortress" "1944" "bombardier lourd" >}}
{{< exemplaires 3970 >}}
{{< caracteristique "Bombe atomique" >}}
<p>Bombes atomiques sur Hiroshima et Nagasaki.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Boeing_B-29_Superfortress"
  "https://en.wikipedia.org/wiki/Boeing_B-29_Superfortress"
  "https://www.avionslegendaires.net/avion-militaire/boeing-b-29-superfortress/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/B-29_in_flight.jpg"
  "See page for author, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "4KYmgH5zWNo" >}} <!-- Poudre & acier -->
</div>
</div>

<div class="infos_generales">
<h2>Chasseurs jets première génération</h2>
<p>1942-1950 : semblable aux chasseurs à motopropulseurs à explosions, poussée limitée des premiers moteurs à réaction, subsoniques, radar rares, armement classique ou conventionnel (canons, bombes, roquettes). <ul>
<li />Utilisation d'ailes en flèche pour approcher le mur du son (mais sans grande manœvrabilité), dédiés à l'interception ou la supériorité aérienne (exemples: MiG-15 ou F-86).</p>
</ul>
</div>

<!-- Fighter aircraft: while the Messerschmitt Me 262 and the Messerschmitt Me 163 featured swept wings that dramatically reduced drag at high subsonic speeds. -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Me 163 Komet" "1944" "intercepteur">}}
<p>seul avion de chasse de type avion-fusée de l'histoire.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Me_163_Komet"
  "https://en.wikipedia.org/wiki/Messerschmitt_Me_163_Komet"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-me-163-komet/"
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Messerschmitt_Me_163B_USAF.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Fighter aircraft: while the Messerschmitt Me 262 and the Messerschmitt Me 163 featured swept wings that dramatically reduced drag at high subsonic speeds. -->
<div class="aeronef">
{{< aeronef ":de:" "Messerschmitt" "Me 262" "1944" "chasseur-bombardier">}}
<p>Premier avion de chasse opérationnel à moteur à réaction de l'histoire. Utilisé à la fin de la seconde guerre mondiale.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Messerschmitt_Me_262"
  "https://en.wikipedia.org/wiki/Messerschmitt_Me_262"
  "https://www.avionslegendaires.net/avion-militaire/messerschmitt-me-262-schwalbe/"
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF.jpg"
  "USAF museum, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "X1Cq5qTVyaU" >}} <!-- Les ailes de légende -->
</div>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Gloster" "Meteor" "1944" >}}
<p>Seul avion à réaction utilisé par les alliés pendant la seconde guerre mondiale.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Gloster_Meteor"
  "https://en.wikipedia.org/wiki/Gloster_Meteor"
  "https://www.avionslegendaires.net/avion-militaire/gloster-g-41-meteor/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gloster_Meteor_Centenary_of_Military_Aviation_2014_%28cropped%29.jpg"
  "Chris Phutully, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h4>Après guerre</h4>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "P-80 Shooting Star" "1945" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_P-80_Shooting_Star"
  "https://en.wikipedia.org/wiki/Lockheed_P-80_Shooting_Star"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-p-80-shooting-star/"
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/P80-1_300_%28cropped%29.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-84 Thunderjet" "1947" >}}
{{< exemplaires 7524 >}}
<P>Version F-84F Thunderstreak : ailes en flèches. Version RF-84F Thunderflash : reconnaissance.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-15 Fagot" "1948" >}}
{{< exemplaires 18169 >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "North American" "F-86 Sabre" "1949" >}}
{{< exemplaires 9860 >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-17 Fresco" "1952" >}}
{{< exemplaires 10367 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-17"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-17"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-17-fresco/"
  "https://upload.wikimedia.org/wikipedia/commons/d/df/MiG-17_Takes_to_the_Sky_%28cropped%29.jpg"
  "Balon Greyjoy, CC0, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":canada:" "Avro Canada" "CF-100 Canuck" "1953" >}}
</div>
<div class="ressources">
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
</div>

<div class="infos_generales">
<h2>Chasseurs jets seconde génération</h2>
<p>1950-1960 : après la guerre de Corée, il a fallu adapter de nombreuses stratégies. <ul>
<li />supersoniques en palier
<li />le canon s'est avéré inadaptés à de telles vitesses. De grands progrès concernant les radars et les missiles infrarouges.
<li />redécouverte de l'intérêt d'avoir des avions multi-rôles alors que des intercepteurs allant à Mach 2 (grâce à l'utilisation de post-combustion) apparaissent.
<li />un grand nombre d'avions devenant obsolètes très rapidement (exemple: Century series = F-100s qui ont battu nombre de records à la chaine)
</p>
</div>

<!-- Fighter bomber: Fighter-bombers became increasingly important in the 1950s and 1960s, as new jet engines dramatically improved the power of even the smallest fighter designs. Many aircraft initially designed as fighters or interceptors found themselves in the fighter-bomber role at some point in their career. Notable among these is the Lockheed F-104 Starfighter, first designed as a high-performance day fighter and then adapted to the nuclear strike role for European use. Other U.S. examples include the North American F-100 Super Sabre and (perhaps most famously) the McDonnell Douglas F-4 Phantom II, each of which was widely used during the Vietnam War. -->
<div class="aeronef">
{{< aeronef ":us:" "North American" "F-100 Super Sabre" "1954" "chasseur bombardier" >}}
{{< mach 1.4 >}}
{{< role "Chasseur-bombardier" >}}
<p>Premier avion de l'USAF à franchir le mur du son en pallier.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-19 Farmer" "1955" "chasseur" >}}
{{< mach 1.35 >}}
<p>
Premier avion supersonique massivement produit.<br />
Premier avion soviétique passant le mur du son en pallier.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-19"
  "https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-19"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-gurevich-mig-19-farmer/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/0409_MIG_19_%2817573197084%29.jpg"
  "Eric Salard, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-102 Delta Dagger" "1956" "intercepteur" >}}
{{< mach 1.25 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
<p>Premier avion de l'USAF à suivre la loi des aires dans son design.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Convair_F-102_Delta_Dagger"
  "https://en.wikipedia.org/wiki/Convair_F-102_Delta_Dagger"
  "https://www.avionslegendaires.net/avion-militaire/convair-f-102-delta-dagger/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Convair_YF-102_FC-782.jpg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "McDonnell" "F-101 Voodoo" "1957" "chasseur bombardier, ou intercepteur" >}}
{{< mach 1.72 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
<p>Premier avion de l'USAF à franchir les 1000 mph (1600 km/h).</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_F-101_Voodoo"
  "https://en.wikipedia.org/wiki/McDonnell_F-101_Voodoo"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-101-voodoo/"
  "https://upload.wikimedia.org/wikipedia/commons/4/49/F-101B_New_York_ANG_in_flight_1978.jpeg"
  "USAF, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Vought" "F-8 Crusader" "1957" "embarqué, supériorité aérienne" >}}
{{< mach 1.72 >}}
<p>Voilure à angle de calage variable.</p>
</div>
<div class="ressources">
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
</div>

<!-- Fighter bomber: Fighter-bombers became increasingly important in the 1950s and 1960s, as new jet engines dramatically improved the power of even the smallest fighter designs. Many aircraft initially designed as fighters or interceptors found themselves in the fighter-bomber role at some point in their career. Notable among these is the Lockheed F-104 Starfighter, first designed as a high-performance day fighter and then adapted to the nuclear strike role for European use. Other U.S. examples include the North American F-100 Super Sabre and (perhaps most famously) the McDonnell Douglas F-4 Phantom II, each of which was widely used during the Vietnam War. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "F-104 Starfighter" "1958" "intercepteur" >}}
{{< mach 2.2 >}}
{{< role "Chasseur-bombardier" >}}
<p>
Premier avion de combat capable d'aller à mach 2.<br />
Le seul avion de l'histoire à détenir simultanément le record de vitesse et d'altitude.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Interceptor aircraft: Examples of classic interceptors of this era include the Convair F-106 Delta Dart, Sukhoi Su-15, and English Electric Lightning. -->
<div class="aeronef">
{{< aeronef ":us:" "Convair" "F-106 Delta Dart" "1959" "intercepteur" >}}
{{< mach 2.39 >}}
{{< caracteristique "missiles air-air nucléaires" >}}
{{< caracteristique "Datalink SAGE" >}}
{{< role "Intercepteur" >}}
<p>Utilisation d'une aile delta, mach 2.3.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-9 Fishpot" "1959" "intercepteur" >}}
{{< mach 1.8 >}}
<p>Delta.<br />Une variante Su-11...</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "J35 Draken" "1960" >}}
{{< mach 2.0 >}}
{{< caracteristique "super-manœvrabilité (cobra = Kort Parad)" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-21 Fishbed" "1960" "chasseur et intercepteur" >}}
{{< exemplaires 13996 >}}
{{< mach 2.05 >}}
{{< caracteristique "super-manœvrabilité (cobra)" >}}
<p>Le chasseur supersonique le plus produit au monde.</p>
</div>
<div class="ressources">
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
</div>

<!-- Interceptor aircraft: Examples of classic interceptors of this era include the Convair F-106 Delta Dart, Sukhoi Su-15, and English Electric Lightning. -->
<div class="aeronef">
{{< aeronef ":gb:" "English Electric" "Lightning" "1960" "intercepteur" >}}
{{< mach 2.3 >}}
{{< role "Intercepteur" >}}
<p>Biréacteur, l'un au dessus de l'autre.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/English_Electric_Lightning"
  "https://en.wikipedia.org/wiki/English_Electric_Lightning"
  "https://www.avionslegendaires.net/avion-militaire/bac-lightning/"
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lightning.inflight.arp.750pix.jpg"
  "Arpingstone, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage III" "1961" "intercepteur, puis multirôle" >}}
{{< mach 2.2 >}}
<p>Delta</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage 5" "1970" "attaque au sol, puis multirôle" >}}
{{< mach 2.2 >}}
<p>Delta. Basé sur le Mirage III.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Mirage_5"
  "https://en.wikipedia.org/wiki/Dassault_Mirage_5"
  "https://www.avionslegendaires.net/avion-militaire/dassault-mirage-5-50/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mirage_5F.jpg"
  "www.mablehome.com, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
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

<!-- Multirole Combat aircraft: The US joint forces F-4 Phantom II built by McDonnell-Douglas also fits the definition of a multi-role aircraft in its various configurations of the basic airframe design. The various F-4 Phantom II configurations were used in air-to-air, fighter bomber, reconnaissance, and suppression of enemy air defenses (SEAD) mission roles to name a few. -->
<!-- Fighter bomber: Fighter-bombers became increasingly important in the 1950s and 1960s, as new jet engines dramatically improved the power of even the smallest fighter designs. Many aircraft initially designed as fighters or interceptors found themselves in the fighter-bomber role at some point in their career. Notable among these is the Lockheed F-104 Starfighter, first designed as a high-performance day fighter and then adapted to the nuclear strike role for European use. Other U.S. examples include the North American F-100 Super Sabre and (perhaps most famously) the McDonnell Douglas F-4 Phantom II, each of which was widely used during the Vietnam War. -->
<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-4 Phantom II" "1960" "embarqué, chasseur-bombardier et intercepteur, supériorité aérienne" >}}
{{< mach 2.23 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Supériorité aérienne" >}}
{{< role "Chasseur-bombardier" >}}
{{< role "SEAD" >}}
<p>F-4J au début des années 1970s : premier radar opérationnel look-down/shoot-down.<br />
Neuf points d'emports.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Northrop" "F-5 Freedom Fighter" "1964" "avion de chasse léger et attaque" >}}
{{< mach 1.63 >}}
<p>Faible coût, faible entretien.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-128/Tu-28 Fiddler" "1965" "intercepteur longue portée" >}}
{{< mach 1.5 >}}
<p>Le plus gros chasseur jamais mis en service.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-128"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-28"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-28-tu-128-fiddler/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tupolev_Tu-128_0_red_%2810229214405%29.jpg"
  "Alan Wilson, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Interceptor aircraft: Examples of classic interceptors of this era include the Convair F-106 Delta Dart, Sukhoi Su-15, and English Electric Lightning. -->
<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-15 Flagon" "1967" "intercepteur" >}}
{{< mach 2.5 >}}
{{< role "Intercepteur" >}}
<p>Delta. Basé sur le Su-9. Bi-réacteur.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-23 Flogger" "1970" "chasseur bombardier" >}}
{{< mach 2.35 >}}
<p>
L'appareil à géométrie variable le plus produit.<br />
Premier radar soviétique look-down/shoot-down.<br />
Un des premiers appareils soviétiques équipés de missiles BVR.<br />
Une variante MiG-27 dédiée à l'attaque au sol.
</p>
</div>
<div class="ressources">
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
</div>

<!-- Interceptor aircraft: Dedicated interceptor designs became rare, with the only widely used examples designed after the 1960s being the Panavia Tornado ADV, Mikoyan MiG-25, Mikoyan MiG-31, and the Shenyang J-8. -->
<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-25 Foxbat" "1972" "interception et reconnaissance" >}}
{{< mach 3.2 >}}
{{< role "Intercepteur" >}}
<p>Très rapide.</p>
</div>
<div class="ressources">
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
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":sweden:" "Saab" "37 Viggen" "1972" "attaque, chasse, reconnaissance" >}}
{{< mach 2.1 >}}
{{< caracteristique "atterrissage court (inversion de poussée)" >}}
{{< role "Avion d'interdiction" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage F1" "1973" "reconnaissance et attaque" >}}
{{< mach 2.2 >}}
<p>Basé sur le Mirage III, utilisation d'une aile en flèche pour une vitesse d'approche plus faible.
</div>
<div class="ressources">
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
{{< ressource-video-youtube "q3YOgqUPnII" >}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":israel:" "IAI" "Kfir" "1975" >}}
{{< mach 2.3 >}}
<p>Delta. Basé sur le Mirage 5.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/IAI_Kfir"
  "https://en.wikipedia.org/wiki/IAI_Kfir"
  "https://www.avionslegendaires.net/avion-militaire/i-a-i-kfir/"
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Colombian_Air_Force_Kfir_%28cropped%29.jpg"
  "S.C. Air National Guard (Maj. Matthew Booth), Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
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
<div class="ressources">
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
</div>

<!-- Escort fighter: The advent of the air superiority fighter, such as the F-15 Eagle, meant that high value assets like tankers, AEW&C, command platforms, bombers and attack aircraft would be protected by air superiority fighters, sometimes flying far afield and ahead of them, engaging distant enemy air units, rather than by direct escorts staying in sight nearby. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F-15 Eagle" "1976" "chasseur lourd, supériorité aérienne" >}}
{{< role "Supériorité aérienne" >}}
{{< mach 2.5 >}}
</div>
<div class="ressources">
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
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "General Dynamics" "F-16 Fighting Falcon" "1978" "multirôle, supériorité aérienne" >}}
{{< mach 2.05 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Attaque au sol" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="ressources">
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
{{< ressource-video-youtube "2yl7NlrBkDk" >}} <!-- défense insider -->
</div>
<div class="images">
{{< ressource-video-youtube "m06uWM_tABM" >}}
{{< ressource-video-youtube "tdczvix3EiE" >}}
{{< ressource-video-youtube "C-WgHooZ7-Y" >}}
{{< ressource-video-youtube "vRcepB16b5I" >}}
</div>
</div>

<!-- Interceptor aircraft: Dedicated interceptor designs became rare, with the only widely used examples designed after the 1960s being the Panavia Tornado ADV, Mikoyan MiG-25, Mikoyan MiG-31, and the Shenyang J-8. -->
<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-31 Foxhound" "1981" "intercepteur et attaque" >}}
{{< mach 2.83 >}}
{{< role "Intercepteur" >}}
<p>
Basé sur le MiG-25, très rapide.<br />
Premier avion avec radar PESA<br />
Datalink.
</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-29 Fulcrum" "1983" "multirôle, supériorité aérienne" >}}
{{< mach 2.3 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
<p>Variante MiG-29M : modernisé.<br />
Variante MiG-29K : embarqué.</p>
</div>
<div class="ressources">
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
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- Escort fighter: The development of the multirole fighter, such as F/A-18 Hornet, also decreased the need for escorts, as the aircraft on air strike mission became capable of effectively defending themselves. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "F/A-18 Hornet" "1983" "embarqué, multirôle" >}}
{{< mach 1.8 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Attaque au sol" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="ressources">
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
{{< ressource-video-youtube "JYUm5Nl6318" >}}
{{< ressource-web "https://www.youtube.com/c/HornetVids/videos" "Youtube HornetVids" >}}
</div>
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":fr:" "Dassault" "Mirage 2000" "1984" "intercepteur, puis multirôle" >}}
{{< mach 2.2 >}}
{{< role "Attaque au sol" >}}
{{< role "Avion d'interdiction" >}}
<p>Commandes de vol électriques</p>
</div>
<div class="ressources">
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
{{< ressource-video-youtube "nnQ3VIPRWwU" >}} <!-- Armee de l'air et de l'espace -->
</div>
</div>

<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-27 Flanker" "1985" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.35 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
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
<div class="ressources">
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
</div>

<!-- Interceptor aircraft: Dedicated interceptor designs became rare, with the only widely used examples designed after the 1960s being the Panavia Tornado ADV, Mikoyan MiG-25, Mikoyan MiG-31, and the Shenyang J-8. -->
<div class="aeronef">
{{< aeronef ":gb:/:de:" "Panavia" "Tornado ADV" "1985" "intercepteur" >}}
{{< mach 2.2 >}}
{{< role "Intercepteur" >}}
<p>
Géométrie variable. Basé sur le Tornado.<br />
<i>ADV = Air Defense Variant.</i>
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Panavia_Tornado_ADV"
  "https://en.wikipedia.org/wiki/Panavia_Tornado_ADV"
  "https://www.avionslegendaires.net/avion-militaire/panavia-tornado-adv/"
  "https://upload.wikimedia.org/wikipedia/commons/0/00/Exercise_Red_Flag._MOD_45143909.jpg"
  "Cpl Paul Saxby RAF, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
</div>
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<!-- cité sur https://en.wikipedia.org/wiki/Strike_fighter -->
<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-30 Flanker-C/G/H" "1996" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "super-manœuvrabilité (cobra, kulbit)" >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
<p>Basé sur le Su-27. Biplace.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-30"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-30"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-30-flanker-c/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Sukhoi_Su-30_inflight.jpg"
  "Sergey Krivchikov (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
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

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<!-- Strike fighter: Examples of contemporary American strike fighters are the McDonnell Douglas F-15E Strike Eagle, Boeing F/A-18E/F Super Hornet, and Lockheed Martin F-35 Lightning II. -->
<div class="aeronef">
{{< aeronef ":us:" "Boeing" "F/A-18E/F Super Hornet" "1995" "embarqué" >}}
{{< mach 1.8 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Attaque au sol" >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
<p>Basé sur le F/A-18.</p>
</div>
<div class="ressources">
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
{{< ressource-playlist-youtube "PLCO6ndZDWgg3-duVAaaH8Lojv2ge6ilUf" >}}
{{< ressource-playlist-youtube "PLCO6ndZDWgg27ZPKn4eQttowQA_Py4GA2" >}}
{{< ressource-video-youtube "0fM7SUSgFj8" >}}
</div>
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef">
{{< aeronef ":sweden:" "Saab" "JAS 39 Gripen" "1996" "intercepteur" >}}
{{< mach 2 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "supercroisière mach 1.1" >}}
</div>
<div class="ressources">
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
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Rafale" "2002" "embarqué" >}}
{{< mach 1.8 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "supercroisière mach 1.4" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="ressources">
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
{{< ressource-video-youtube "iJw9jHGjH1w" >}} <!-- JG Marty Martinez -->
</div>
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<!-- cité sur https://en.wikipedia.org/wiki/Strike_fighter -->
<div class="aeronef">
{{< aeronef ":ru:/:india:" "Soukhoï" "Su-30-MKI Flanker-H" "2002" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.0 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
<p>
Basé sur le Su-27/Su-30.<br />
Avionique occidentale (française et israélienne), ajout de canards et poussée vectorielle.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-30MKI"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-30MKI"
  ""
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sukhoi_Su-30MKI-3_%27SB_167%27_%2820443086186%29.jpg"
  "Alan Wilson from Stilton, Peterborough, Cambs, UK, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef">
{{< aeronef ":eu:" "Eurofighter" "Typhoon" "2004" "multirôle et supériorité aérienne" >}}
{{< mach 2.0 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="ressources">
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
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":cn:/:pakistan:" "Chengdu" "JF-17 Thunder" "2010" >}}
{{< mach 1.8 >}}
{{< caracteristique "Multirôle" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Chengdu_JF-17_Thunder"
  "https://en.wikipedia.org/wiki/PAC/CAC_JF-17_Thunder"
  "https://www.avionslegendaires.net/avion-militaire/chengdu-pac-jf-17-thunder/"
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pakistan_JF-17_%28modified%29.jpg"
  "Shimin Gu, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>
<div class="images">
{{< ressource-video-youtube "-4qLGbSEZ6s" >}} <!-- aeronewstv -->
</div>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-35S Flanker-E" "2012" "chasseur lourd, supériorité aérienne" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
<p>Basé sur le Su-27.</p>
</div>
<div class="ressources">
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
</div>

<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<div class="aeronef">
{{< aeronef ":india:" "HAL" "Tejas" "2015" "chasseur léger multirôle" >}}
{{< caracteristique "Multirôle" >}}
{{< mach 1.6 >}}
<p>Des caractéristiques de furtivité : matériaux composites.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/HAL_Tejas"
  "https://en.wikipedia.org/wiki/HAL_Tejas"
  "https://www.avionslegendaires.net/avion-militaire/hal-tejas/"
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg"
  "Ministry of Defence, GODL-India <https://data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Mikoyan-Gourevitch" "MiG-35 Fulcrum-F" "2017" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (cobra)" >}}
<p>basé sur le MiG-29, radar AESA.<br />
 Le prototype MiG-29OVT disposait de poussée vectorielle, mais pas le MiG-35.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-35"
  "https://en.wikipedia.org/wiki/Mikoyan_MiG-35"
  "https://www.avionslegendaires.net/avion-militaire/mikoyan-mig-35-fulcrum-f/"
  "https://upload.wikimedia.org/wikipedia/commons/6/61/MiG-35D_%283861086285%29.jpg"
  "Carlos Menendez San Juan, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
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

<!-- Multirole Combat aircraft: The F-35's design goal can be compared to its larger and more air superiority-focused cousin, the F-22 Raptor. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-22 Raptor" "2005" "supériorité aérienne" >}}
{{< mach 2.25 >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "supercroisière mach 1.5" >}}
{{< caracteristique "furtif" >}}
{{< role "Supériorité aérienne" >}}
</div>
<div class="ressources">
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
</div>

<!-- Multirole Combat aircraft: The newest fighter jet that fits the definition of 'multi-role' is the Lockheed Martin F-35 Lightning II/Joint Strike Fighter, designed to perform stealth-based ground/naval strike, fighter, reconnaissance and electronic warfare roles. Like a modern-day F-4, 3 variants of this aircraft fulfill the various strike and air defense roles among its joint service requirements: the standard variant is intended to eventually replace the F-16 and A-10 in the USAF and other Western air forces, a STOVL version intended to replace the Harrier in US Marine Corps, British Royal Air Force and Royal Navy service, and a carrier variant intended to eventually replace the older F/A-18C/D for the US Navy and other F/A-18 operators. -->
<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<!-- Strike fighter: Examples of contemporary American strike fighters are the McDonnell Douglas F-15E Strike Eagle, Boeing F/A-18E/F Super Hornet, and Lockheed Martin F-35 Lightning II. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-35 Lightning II" "2015" "embarqué" >}}
{{< mach 1.4 >}}
{{< caracteristique "Multirôle" >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "décollage vertical" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
{{< role "Avion de guerre électronique" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":cn:" "Chengdu" "J-20 Firefang" "2017" "supériorité aérienne" >}}
{{< mach 2.5 >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "veille infrarouge + FLIR" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-57 Felon" "2020" "supériorité aérienne" >}}
{{< mach 2.1 >}}
{{< caracteristique "furtif" >}}
{{< caracteristique "super-manœuvrabilité (poussée vectorielle, cobra, herbst, kulbit)" >}}
{{< caracteristique "supercroisière" >}}
</div>
<div class="ressources">
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
</div>

<div class="infos_generales">
<h2>Avions d'attaque au sol et d'interdiction (bombardiers tactiques)</h2>
</div>

<!-- Close air support: The Royal Navy Hawker Sea Fury fighters and the U.S. Vought F4U Corsair and Douglas A-1 Skyraider were operated in a ground attack capacity during the Korean War. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-1 Skyraider / AD Skyraider" "1946" "attaque au sol et appui tactique, embarqué" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Iliouchine" "Il-28 Beagle" "1950" "bombardier moyen" >}}
{{< exemplaires 6635 >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Iliouchine_Il-28"
  "https://en.wikipedia.org/wiki/Ilyushin_Il-28"
  "https://www.avionslegendaires.net/avion-militaire/ilyushin-il-28-beagle/"
  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Egyptian_Il-28_Beagle.JPEG"
  "Staff Sgt. Bill Thompson, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef">
{{< aeronef ":gb:" "English Electric" "Canberra" "1951" "bombardier moyen / reconnaissance" >}}
{{< exemplaires 949 >}}
{{< role "Avion d'interdiction" >}}
<p>Martin B-57 Canberra sous licence.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/English_Electric_Canberra"
  "https://en.wikipedia.org/wiki/English_Electric_Canberra"
  "https://www.avionslegendaires.net/avion-militaire/english-electric-canberra/"
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Canberra_T_4_MOD_45144929_%28cropped%29.jpg"
  "SAC A K Benson, OGL v1.0OGL v1.0, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "ypfjgWSc38s" >}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-4 Skyhawk" "1956" "embarqué" >}}
</div>
<div class="ressources">
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
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":us:" "Republic" "F-105 Thunderchief" "1958" "chasseur bombardier" >}}
{{< mach 2.08 >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-7 Fitter-A" "1959" "chasseur bombardier, attaque au sol" >}}
{{< mach 1.74 >}}
<p>Ailes en flèche</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-7"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-7"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-7-fitter/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Su-7.JPG"
  "Konflikty.pl (Attribution or Attribution), via Wikimedia Commons"
>}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Étendard IV" "1962" "embarqué" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_%C3%89tendard_IV"
  "https://en.wikipedia.org/wiki/Dassault_%C3%89tendard_IV"
  "https://www.avionslegendaires.net/avion-militaire/dassault-etendard/"
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Dassault_Etendard_IVP%2C_France_-_Navy_AN2063232.jpg"
  "Steve Fitzgerald (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-6 Intruder" "1963" "embarqué" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Grumman_A-6_Intruder"
  "https://en.wikipedia.org/wiki/Grumman_A-6_Intruder"
  "https://www.avionslegendaires.net/avion-militaire/grumman-a-6-intruder/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Grumman_KA-6D_Intruder_of_VA-34_in_flight%2C_in_1988.jpg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Close air support: [...]Some commentators have remarked on the high effectiveness of the AC-47 in the CAS role.[48][49] The USAF developed several other platforms following on from the AC-47, including the Fairchild AC-119 and the Lockheed AC-130. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "AC-47 Spooky" "1965" "gunship d'attaque au sol" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_AC-47_Spooky"
  "https://en.wikipedia.org/wiki/Douglas_AC-47_Spooky"
  "https://www.avionslegendaires.net/avion-militaire/douglas-ac-47-spooky/"
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Douglas_AC-47D_4SOS_Sep1968.jpg"
  "U.S. Air Force, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef">
{{< aeronef ":us:" "General Dynamics" "F-111 Aardvark" "1967" "bombardier tout-temps" >}}
{{< mach 2.5 >}}
{{< role "Avion d'interdiction" >}}
{{< role "Attaque au sol" >}}
<p>géométrie variable, radar de suivi de terrain automatique</p>
</div>
<div class="ressources">
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
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":us:" "Ling-Temco-Vought" "A-7 Corsair II" "1967" "embarqué" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "OV-10 Bronco" "1967" "reconnaissance et attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_OV-10_Bronco"
  "https://en.wikipedia.org/wiki/North_American_Rockwell_OV-10_Bronco"
  "https://www.avionslegendaires.net/avion-militaire/north-american-rockwell-ov-10-bronco/"
  "https://upload.wikimedia.org/wikipedia/commons/3/36/NASA_OV-10.jpg"
  "NASA, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "jWi7xYE2JWg" >}} <!-- Erik Johnston -->
</div>
</div>

<!-- Close air support: [...]Some commentators have remarked on the high effectiveness of the AC-47 in the CAS role.[48][49] The USAF developed several other platforms following on from the AC-47, including the Fairchild AC-119 and the Lockheed AC-130. -->
<div class="aeronef">
{{< aeronef ":us:" "Fairchild" "AC-119G Shadow/AC-119K Stinger" "1968" "gunship d'attaque au sol" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Fairchild_AC-119"
  "https://en.wikipedia.org/wiki/Fairchild_AC-119"
  "https://www.avionslegendaires.net/avion-militaire/fairchild-ac-119-shadow-stinger/"
  "https://upload.wikimedia.org/wikipedia/commons/7/76/AC-119G_of_17th_SOS_over_Tan_Son_Nhut_Air_Base_1969.jpg"
  "U.S. Air Force photo 342-C-KE-37296, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Close air support: [...]Some commentators have remarked on the high effectiveness of the AC-47 in the CAS role.[48][49] The USAF developed several other platforms following on from the AC-47, including the Fairchild AC-119 and the Lockheed AC-130. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed" "AC-130 Spectre" "1968" "gunship d'attaque au sol et appui aérien rapproché" >}}
{{< role "Attaque au sol" >}}
<p>variante du C-130 Hercules</p>
</div>
<div class="ressources">
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
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<div class="aeronef">
{{< aeronef ":gb:" "Hawker Siddeley" "Harrier" "1969" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-17/20/22 Fitter-C" "1970" "chasseur bombardier, attaque au sol" >}}
{{< mach 2.09 >}}
<p>Basé sur le Su-7, géométrie variable. </p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-17"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-17"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-17-20-22-fitter/"
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Sukhoi_Su-22M4%2C_Czech_Republic_-_Air_Force_%28cropped%29.jpg"
  "Anthony Noble, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef">
{{< aeronef ":fr:/:gb:" "SEPECAT" "Jaguar" "1973" "avion d'attaque" >}}
{{< mach 1.6 >}}
{{< role "Avion d'interdiction" >}}
<p>attaque au sol</p>
</div>
<div class="ressources">
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
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-24 Fencer" "1974" "bombardier supersonique" >}}
{{< mach 1.6 >}}
{{< role "Avion d'interdiction" >}}
<p>
Premier appareil soviétique équipé d'un système de navigation et d'attaque numérique.<br />
Géométrie variable.
</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-24"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-24"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-24-fencer/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sukhoi_Su-24_inflight_Mishin-2.jpg"
  "Alexander Mishin, CC BY-SA 3.0 GFDL, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Strafing: The A-10 Thunderbolt II is an American twin-engine, straight-wing jet aircraft developed by Fairchild-Republic in the early 1970s which is the only United States Air Force aircraft designed solely for close air support of ground forces. The A-10 was built to attack tanks, armored vehicles, and other ground targets with limited air defenses, often through strafing. -->
<!-- Close air support: Usually close support is thought to be only carried out by fighter-bombers or dedicated ground-attack aircraft, such as the A-10 Thunderbolt II (Warthog) or Su-25 (Frogfoot), but even large high-altitude bombers have successfully filled close support roles using precision-guided munitions. During Operation Enduring Freedom, the lack of fighter aircraft forced military planners to rely heavily on US bombers, particularly the B-1B Lancer, to fill the CAS role. -->
<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "Fairchild Republic" "A-10 Thunderbold II / Warthog" "1975" "attaque au sol et appui tactique" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Fairchild_A-10_Thunderbolt_II"
  "https://en.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II"
  "https://www.avionslegendaires.net/avion-militaire/fairchild-republic-a-10-thunderbolt-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/1/14/A-10_Thunderbolt_9875.JPG"
  "Konflikty.pl (Attribution or Attribution), via Wikimedia Commons"
>}}
{{< ressource-video-youtube "gHsxwaPDza8" >}} <!-- les ailes de legende -->
{{< ressource-video-youtube "_xaugfhbmp0" >}} <!-- Yataka -->
{{< ressource-video-youtube "BVmiaNhxLHE" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "wk6Qr6OO5Xo" >}}
{{< ressource-video-youtube "EXgTrpPU9Rk" >}}
{{< ressource-video-youtube "PSwNVJYUXtw" >}}
{{< ressource-video-youtube "UH07uffv26M" >}} <!-- 3D Mil-Tech -->
</div>
<div class="images">
{{< ressource-video-youtube "gEokB_9N0Aw" >}}
{{< ressource-video-youtube "N60WtGC4ejo" >}}
{{< ressource-video-youtube "LcmvLvXHIW0" >}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Super Étendard" "1978" "embarqué" >}}
{{< mach 1.3 >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Dassault_Super-%C3%89tendard"
  "https://en.wikipedia.org/wiki/Dassault-Breguet_Super_%C3%89tendard"
  "https://www.avionslegendaires.net/avion-militaire/dassault-super-etendard/"
  "https://upload.wikimedia.org/wikipedia/commons/a/af/CdG-photo173.jpg"
  "Guillaume Rueda, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "VT_mQ0ZCi6c" >}} <!-- Les ailes de légende -->
</div>
<div class="images">
{{< ressource-video-youtube "svORBbmnZMc" >}} <!-- Chasse embarquee -->
</div>
</div>

<!-- Close air support: Usually close support is thought to be only carried out by fighter-bombers or dedicated ground-attack aircraft, such as the A-10 Thunderbolt II (Warthog) or Su-25 (Frogfoot), but even large high-altitude bombers have successfully filled close support roles using precision-guided munitions. During Operation Enduring Freedom, the lack of fighter aircraft forced military planners to rely heavily on US bombers, particularly the B-1B Lancer, to fill the CAS role. -->
<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":ru:" "Soukhoï" "Su-25 Frogfoot" "1981" >}}
{{< role "Attaque au sol" >}}
<p>Une variante Su-39...</p>
</div>
<div class="ressources">
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
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<!-- Multirole Combat aircraft: The first use of the term was by the multinational European project named Multi-Role Combat Aircraft, which was formed in 1968 to produce an aircraft capable of tactical strike, aerial reconnaissance, air defense, and maritime roles.[citation needed] The design was aimed to replace a multitude of different types in the cooperating air forces. The project produced the Panavia Tornado, which used the same basic design to undertake a variety of roles, the Tornado IDS (Interdictor/Strike) variant and later the Panavia Tornado ADV (Air Defence Variant). -->
<div class="aeronef">
{{< aeronef ":de:/:it:/:gb:" "Panavia" "Tornado" "1982" >}}
{{< mach 2.34 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Attaque au sol" >}}
{{< role "Avion d'interdiction" >}}
<p>
Géométrie variable.<br />
Variantes : <i>
IDS = "Interdictor/Strike",
ECR = "Electronic Combat / Reconnaissance",
ADV = "Air Defense Variant" (plus haut)
</i>
</p>
</div>
<div class="ressources">
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
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<div class="aeronef avec_module_dcs">
{{< aeronef ":us:" "McDonnell Douglas" "AV-8B Harrier II" "1983" "embarqué" >}}
{{< caracteristique "manœvrabilité (VIFFing = Vector in Forward Flight)" >}}
{{< caracteristique "decollage vertical" >}}
{{< caracteristique "FLIR" >}}
{{< role "Attaque au sol" >}}
<p>évolution du Hawker Siddeley Harrier</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_AV-8B_Harrier_II"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_AV-8B_Harrier_II"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-douglas-tav-8b-harrier-ii/"
  "https://upload.wikimedia.org/wikipedia/commons/0/04/United_States_Marine_Corps_AV-8B_Harrier_II_hovering.jpg"
  "D. Miller from IL. USA, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":us:" "Lockheed Martin" "F-117 Nighthawk" "1983" "attaque au sol" >}}
{{< caracteristique "furtif" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Lockheed_Martin_F-117_Nighthawk"
  "https://en.wikipedia.org/wiki/Lockheed_F-117_Nighthawk"
  "https://www.avionslegendaires.net/avion-militaire/lockheed-martin-f-117-night-hawk/"
  "https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg"
  "Staff Sgt. Aaron Allmon II, Public domain, via Wikimedia Commons"
>}}
{{< ressource-video-youtube "_h5JiIY8Exo" >}} <!-- aeronewstv -->
{{< ressource-video-youtube "BuCWzK93yiI" >}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":it:/:brazil:" "AMX International" "AMX" "1988" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/AMX_International_AMX"
  "https://en.wikipedia.org/wiki/AMX_International_AMX"
  "https://www.avionslegendaires.net/avion-militaire/amx-international-amx/"
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Alenia-Aermacchi-Embraer_AMX%2C_Italy_-_Air_Force_JP7721735.jpg"
  "Fabrizio Berni (GFDL <http://www.gnu.org/copyleft/fdl.html> or GFDL <http://www.gnu.org/copyleft/fdl.html>), via Wikimedia Commons"
>}}
</div>
</div>

<!-- Close air support: This resulted in a great number of CAS operations being undertaken by aircraft from Belgium (F-16 Fighting Falcon), Denmark (F-16), France (Mirage 2000D), the Netherlands (F-16), Norway (F-16), the United Kingdom (Harrier GR7s, GR9s and Tornado GR4s) and the United States (A-10, F-16, AV-8B Harrier II, F-15E Strike Eagle, F/A-18 Hornet, F/A-18E/F Super Hornet, UH-1Y Venom). -->
<!-- cité sur https://en.wikipedia.org/wiki/Multirole_combat_aircraft -->
<!-- Multirole Combat aircraft: By contrast, the F-15 Eagle which was another fighter aircraft of that era was designed for air superiority and interception, with the mantra "not a pound, air to ground", although the F-15C did have a rarely used secondary ground attack capability. That program eventually evolved into the F-15E Strike Eagle interdictor/strike derivative which retained the air-to-air combat lethality of earlier F-15s. -->
<!-- Strike fighter: Examples of contemporary American strike fighters are the McDonnell Douglas F-15E Strike Eagle, Boeing F/A-18E/F Super Hornet, and Lockheed Martin F-35 Lightning II. -->
<div class="aeronef">
{{< aeronef ":us:" "McDonnell Douglas" "F-15E Strike Eagle" "1989" "chasseur bombardier" >}}
{{< mach 2.15 >}}
{{< caracteristique "Multirôle" >}}
{{< role "Supériorité aérienne" >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
{{< role "Attaque au sol" >}}
<p>Basé sur le F-15.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle"
  "https://en.wikipedia.org/wiki/McDonnell_Douglas_F-15E_Strike_Eagle"
  "https://www.avionslegendaires.net/avion-militaire/mcdonnell-f-15e-strike-eagle/"
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg"
  "Staff Sgt. Sean Carnes, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<!-- cité sur https://en.wikipedia.org/wiki/Strike_fighter -->
<div class="aeronef">
{{< aeronef ":ru:" "Soukhoï" "Su-34 Fullback" "1990" "chasseur bombardier" >}}
{{< mach 1.8 >}}
{{< role "Chasseur d'attaque (et avion d'interdiction)" >}}
<p>Basé sur le Su-27.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Soukho%C3%AF_Su-34"
  "https://en.wikipedia.org/wiki/Sukhoi_Su-34"
  "https://www.avionslegendaires.net/avion-militaire/sukhoi-su-34-fullback/"
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/Refuelling_a_Sukhoi_Su-34_%28cropped%29.jpg"
  "Alex Beltyukov, CC BY-SA 3.0 GFDL 1.2, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":brazil:" "Embraer" "EMB 314 Super Tucano" "2003" "attaque et contre-insurrection" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Embraer_EMB_314"
  "https://en.wikipedia.org/wiki/Embraer_EMB_314_Super_Tucano"
  "https://www.avionslegendaires.net/avion-militaire/embraer-emb-314-super-tucano/"
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/A-29_Over_Afghanistan.jpg"
  "Staff Sgt. Larry Reid Jr., Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="infos_generales">
<h2>Bombardiers stratégiques</h2>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-4 Bull" "1949" "bombardier stratégique" >}}
<p>Copie du B-29.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-4"
  "https://en.wikipedia.org/wiki/Tupolev_Tu-4"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-4-bull/"
  "https://upload.wikimedia.org/wikipedia/commons/8/86/Tu-4_.jpg"
  "Ronidong, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-36 Peacemaker" "1949" "bombardier stratégique lourd à long rayon d'action" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-47 Stratojet" "1952" "bombardier moyen à long rayon d'action" >}}
<p>Six réacteurs.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Miassichtchev" "M-4 Bison" "1953" "bombardier stratégique lourd" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-16 Badger" "1954" "bombardier stratégique" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://en.wikipedia.org/wiki/Tupolev_Tu-16"
  "https://fr.wikipedia.org/wiki/Tupolev_Tu-16"
  "https://www.avionslegendaires.net/avion-militaire/tupolev-tu-16-badger/"
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tu-16_Badger_Soviet_Air_Force_%28cropped%29.jpg"
  "US Air Force, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_de_p%C3%A9n%C3%A9tration -->
<div class="aeronef">
{{< aeronef ":us:" "Boeing" "B-52 Stratofortress" "1955" "bombardier stratégique lourd à long rayon d'action" >}}
{{< role "Avion de pénétration" >}}
<p>Huit réacteurs.</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Vickers" "Valiant" "1955" "bombardier stratégique, tanker" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Vickers_Valiant"
  "https://en.wikipedia.org/wiki/Vickers_Valiant"
  "https://www.avionslegendaires.net/avion-militaire/vickers-valiant/"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Vickers_Valiant_B%28K%29.1_1962.png"
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Vickers_Valiant_B%28K%29.1_1962.png"
>}}
{{< ressource-video-youtube "NvY5Dly5RkM" >}}
</div>
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<div class="aeronef">
{{< aeronef ":us:" "Douglas" "A-3 Skywarrior" "1956" "bombardier stratégique embarqué" >}}
{{< role "Attaque au sol" >}}
<p>Bombe atomique, guerre électronique, ravitailleur.</p>
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Douglas_A-3_Skywarrior"
  "https://en.wikipedia.org/wiki/Douglas_A-3_Skywarrior"
  "https://www.avionslegendaires.net/avion-militaire/douglas-a-3-skywarrior/"
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/EA-3B_VQ-1_in_flight_South_China_Sea_1974.jpeg"
  "U.S. Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-95 Bear" "1956" "bombardier stratégique lourd" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Avro" "Vulcan" "1956" "bombardier stratégique" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Avro_Vulcan"
  "https://en.wikipedia.org/wiki/Avro_Vulcan"
  "https://www.avionslegendaires.net/avion-militaire/avro-vulcan/"
  "https://upload.wikimedia.org/wikipedia/commons/0/05/XH558_%28G-VLCN%29_Avro_Vulcan_-_Last_Flight_over_Farnborough_%28cropped%29.jpg"
  "Alastair Barbour, CC BY 2.5 <https://creativecommons.org/licenses/by/2.5>, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":gb:" "Handley Page" "HP.80 Victor" "1958" "bombardier stratégique, tanker" >}}
{{< caracteristique "V Force" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/Handley_Page_Victor"
  "https://en.wikipedia.org/wiki/Handley_Page_Victor"
  "https://www.avionslegendaires.net/avion-militaire/handley-page-hp-80-victor/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d2/Handley_Page_HP-80_Victor_K2%2C_UK_-_Air_Force_AN1926561.jpg"
  "Mike Freer - Touchdown-aviation (GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html> or GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>), via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":us:" "Convair" "B-58 Hustler" "1960" "bombardier stratégique supersonique" >}}
<p>delta, mach 2</p>
</div>
<div class="ressources">
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
</div>

<!-- Attack aircraft: Jet attack aircraft were designed and employed during the Cold War era, such as the carrier-based nuclear strike Douglas A-3 Skywarrior and North American A-5 Vigilante, while the Grumman A-6 Intruder, F-105 Thunderchief, F-111, F-117 Nighthawk, LTV A-7 Corsair II, Sukhoi Su-25, A-10 Thunderbolt, Panavia Tornado, AMX, Dassault Étendard, Super Étendard and others were designed specifically for ground-attack, strike, close support and anti-armor work, with little or no air-to-air capability. -->
<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_d%27interdiction -->
<div class="aeronef">
{{< aeronef ":us:" "North American" "A-5 Vigilante" "1961" "embarqué, dissuasion nucléaire et reconnaissance" >}}
{{< role "Avion d'interdiction" >}}
{{< role "Attaque au sol" >}}
</div>
<div class="ressources">
<div class="reportages">
{{< ressource-encyclopedique
  "https://fr.wikipedia.org/wiki/North_American_A-5_Vigilante"
  "https://en.wikipedia.org/wiki/North_American_A-5_Vigilante"
  "https://www.avionslegendaires.net/avion-militaire/north-american-a-5-vigilant/"
  "https://upload.wikimedia.org/wikipedia/commons/d/d0/RA-5C_Vigilante_overhead_aerial_view.jpg"
  "Service Depicted:  Navy, Public domain, via Wikimedia Commons"
>}}
</div>
</div>

<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22 Blinder" "1962" "bombardier supersonique, reconnaissance" >}}
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":us:" "North American" "XB-70 Valkyrie" "1964" "prototype de bombardier stratégique" >}}
<p>mach 3</p>
</div>
<div class="ressources">
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
</div>

<div class="aeronef">
{{< aeronef ":fr:" "Dassault" "Mirage IV" "1964" "dissuasion nucléaire et reconnaissance" >}}
</div>
<div class="ressources">
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
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_de_p%C3%A9n%C3%A9tration -->
<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-22M Backfire (Tu-26)" "1972" "bombardier lourd supersonique à long rayon d'action" >}}
{{< role "Avion de pénétration" >}}
<p>géométrie variable.</p>
</div>
<div class="ressources">
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
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_de_p%C3%A9n%C3%A9tration -->
<!-- Close air support: Usually close support is thought to be only carried out by fighter-bombers or dedicated ground-attack aircraft, such as the A-10 Thunderbolt II (Warthog) or Su-25 (Frogfoot), but even large high-altitude bombers have successfully filled close support roles using precision-guided munitions. During Operation Enduring Freedom, the lack of fighter aircraft forced military planners to rely heavily on US bombers, particularly the B-1B Lancer, to fill the CAS role. -->
<div class="aeronef">
{{< aeronef ":us:" "Rockwell" "B-1 Lancer" "1986" "bombardier stratégique supersonique à long rayon d'action" >}}
{{< role "Avion de pénétration" >}}
{{< role "Attaque au sol" >}}
<p>géométrie variable</p>
</div>
<div class="ressources">
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
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_de_p%C3%A9n%C3%A9tration -->
<div class="aeronef">
{{< aeronef ":ru:" "Tupolev" "Tu-160 Blackjack" "1987" "bombardier stratégique supersonique lourd" >}}
{{< role "Avion de pénétration" >}}
<p>le plus gros et lourd avion de combat au monde, mach 2.1</p>
</div>
<div class="ressources">
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
<div class="images">
{{< ressource-video-youtube "P5zdHFtsjnA" >}}
</div>
</div>

<!-- Cité sur https://fr.wikipedia.org/wiki/Avion_de_p%C3%A9n%C3%A9tration -->
<!-- Avion de pénétration: Des conceptions plus modernes, comme le bombardier furtif Northrop B-2 Spirit peuvent techniquement être qualifiés de pénétrateurs, mais ce terme ne leur est que rarement attribué. Toutefois, la mission de son successeur programmé, le Next-Generation Bomber (en) a été décrite comme étant « pénétrer et persister » (en anglais : « penetrate and persist »)4. -->
<div class="aeronef">
{{< aeronef ":us:" "Northrop" "B-2 Spirit" "1997" "bombardier stratégique" >}}
{{< caracteristique "furtif" >}}
{{< role "Avion de pénétration" >}}
<p>aile volante, l'avion le plus cher au monde</p>
</div>
<div class="ressources">
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
{{< ressource-video-youtube "VavSuj-sx6c" >}}
</div>
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
{{< ressource-playlist-youtube "PLs4hJjnTBQLqsv30mH8ziDb7_iMwq1tck" >}} <!-- Documentaire Aviation : Légendes du ciel -->
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
{{< canal-youtube "id" "UCYja6AQ-XxBzraQ5y9vLuBg" >}} <!-- Poudre & Acier -->
{{< ressource-playlist-youtube "PLYlY-Hc3On9COS9Bcu34PolXFr2cr4wKc" >}}
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
