import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { Helmet } from "react-helmet-async"
require("prismjs/themes/prism-solarizedlight.css")

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet title="Adam Jahnke ☕️🏍 (adamyonk)">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Code|Fira+Sans:400,400i&display=fallback"
        rel="stylesheet"
      />
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      <link
        rel="webmention"
        href="https://webmention.io/adamyonk.com/webmention"
      />
      <link rel="pingback" href="https://webmention.io/adamyonk.com/xmlrpc" />
      <link href="https://twitter.com/adamyonk" rel="me" />
      <link href="https://github.com/adamyonk" rel="me" />
    </Helmet>
    <div className="logo">
      <Link className="logo-link" to="/">
        ⤫
      </Link>
    </div>
    {children}
    <nav>
      <a
        className="github"
        href="https://github.com/adamyonk"
        title="adamyonk on GitHub"
      >
        <svg width="11" height="11" viewBox="0 0 11 11">
          <path
            id="github"
            fill="#000000"
            d="M10.199707,3.41064453 C10.7332383,4.08740573 11,4.85546445 11,5.71484375 C11,6.35221673 10.9185392,6.91617593 10.7556152,7.40673828 C10.5926912,7.89730063 10.3599462,8.30997554 10.057373,8.64477539 C9.75479992,8.97957524 9.37524642,9.25439346 8.91870117,9.46923828 C8.46215592,9.68408311 7.95459264,9.83984327 7.39599609,9.93652344 C6.83739955,10.0332036 6.20540717,10.081543 5.5,10.081543 C4.61555547,10.081543 3.84302088,10.0045581 3.18237305,9.85058594 C2.52172521,9.69661381 1.94970945,9.45044115 1.46630859,9.11206055 C0.982907739,8.77367995 0.617677017,8.32251259 0.370605469,7.75854492 C0.123533921,7.19457726 0,6.51872139 0,5.73095703 C0,4.853674 0.266761655,4.08561527 0.800292969,3.42675781 C0.610513374,2.4062449 0.649901001,1.570153 0.918457031,0.918457031 C1.78499782,0.986491226 2.58170209,1.30875363 3.30859375,1.88525391 C4.00683943,1.69905506 4.73730087,1.60595703 5.5,1.60595703 C6.26627987,1.60595703 6.99137028,1.69905506 7.67529297,1.88525391 C8.42724985,1.30875363 9.22932517,0.986491226 10.081543,0.918457031 C10.350099,1.570153 10.3894866,2.40087386 10.199707,3.41064453 Z M1.45019531,7.10595703 C1.45019531,8.63135528 2.80011671,9.39404297 5.5,9.39404297 C8.19988329,9.39404297 9.54980469,8.63135528 9.54980469,7.10595703 C9.54980469,6.80159353 9.5023605,6.52946083 9.4074707,6.28955078 C9.31258091,6.04964073 9.19352285,5.86075915 9.05029297,5.72290039 C8.90706309,5.58504163 8.74235119,5.47135461 8.55615234,5.38183594 C8.3699535,5.29231726 8.19628987,5.23234065 8.03515625,5.2019043 C7.87402263,5.17146795 7.71647212,5.15625 7.5625,5.15625 C7.39062414,5.15625 7.13281422,5.17504864 6.7890625,5.21264648 C6.44531078,5.25024433 6.01562758,5.26904297 5.5,5.26904297 C4.98437242,5.26904297 4.55468922,5.25024433 4.2109375,5.21264648 C3.86718578,5.17504864 3.60937586,5.15625 3.4375,5.15625 C3.28352788,5.15625 3.12597737,5.17146795 2.96484375,5.2019043 C2.80371013,5.23234065 2.6300465,5.29231726 2.44384766,5.38183594 C2.25764881,5.47135461 2.09293691,5.58504163 1.94970703,5.72290039 C1.80647715,5.86075915 1.68741909,6.04964073 1.5925293,6.28955078 C1.4976395,6.52946083 1.45019531,6.80159353 1.45019531,7.10595703 Z M3.20654297,7.21875 C3.20654297,6.53124656 3.39811006,6.1875 3.78125,6.1875 C4.16438994,6.1875 4.35595703,6.53124656 4.35595703,7.21875 C4.35595703,7.90625344 4.16438994,8.25 3.78125,8.25 C3.39811006,8.25 3.20654297,7.90625344 3.20654297,7.21875 Z M6.64404297,7.21875 C6.64404297,6.53124656 6.83561006,6.1875 7.21875,6.1875 C7.60188994,6.1875 7.79345703,6.53124656 7.79345703,7.21875 C7.79345703,7.90625344 7.60188994,8.25 7.21875,8.25 C6.83561006,8.25 6.64404297,7.90625344 6.64404297,7.21875 Z"
          />
        </svg>
      </a>
      <a
        className="keybase"
        href="https://keybase.io/adamyonk"
        title="adamyonk on Keybase"
      >
        <svg width="11" height="11" viewBox="0 0 11 11">
          <path
            id="key"
            fill="#000000"
            d="M1.83154297,11 L0.230957031,11 C0.166503584,11 0.11189801,10.9776207 0.0671386719,10.9328613 C0.0223793335,10.888102 0,10.8334964 0,10.769043 L0,9.03955078 C0,8.97151659 0.0214841602,8.91601584 0.064453125,8.87304688 L4.32910156,4.60839844 C4.19303317,4.24674298 4.125,3.85644741 4.125,3.4375 C4.125,2.97200288 4.21630768,2.52710173 4.39892578,2.1027832 C4.58154388,1.67846468 4.8259262,1.31323395 5.13208008,1.00708008 C5.43823395,0.700926204 5.80346468,0.456543882 6.2277832,0.273925781 C6.65210173,0.0913076807 7.09700288,0 7.5625,0 C8.02799712,0 8.47289827,0.0913076807 8.8972168,0.273925781 C9.32153532,0.456543882 9.68676605,0.700926204 9.99291992,1.00708008 C10.2990738,1.31323395 10.5434561,1.67846468 10.7260742,2.1027832 C10.9086923,2.52710173 11,2.97200288 11,3.4375 C11,3.90299712 10.9086923,4.34789827 10.7260742,4.7722168 C10.5434561,5.19653532 10.2990738,5.56176605 9.99291992,5.86791992 C9.68676605,6.1740738 9.32153532,6.41845612 8.8972168,6.60107422 C8.47289827,6.78369232 8.02799712,6.875 7.5625,6.875 C7.14355259,6.875 6.75325702,6.80696683 6.39160156,6.67089844 L4.87695312,8.18554688 C4.83398416,8.22851584 4.77848341,8.25 4.71044922,8.25 L3.4375,8.25 L3.4375,9.39404297 C3.4375,9.45849642 3.41512067,9.51310199 3.37036133,9.55786133 C3.32560199,9.60262067 3.27099642,9.625 3.20654297,9.625 L2.0625,9.625 L2.0625,10.769043 C2.0625,10.8334964 2.04012067,10.888102 1.99536133,10.9328613 C1.95060199,10.9776207 1.89599642,11 1.83154297,11 Z M8.98046875,2.01953125 C8.77994691,1.81900941 8.53645977,1.71875 8.25,1.71875 C7.96354023,1.71875 7.72005309,1.81900941 7.51953125,2.01953125 C7.31900941,2.22005309 7.21875,2.46354023 7.21875,2.75 C7.21875,3.03645977 7.31900941,3.27994691 7.51953125,3.48046875 C7.72005309,3.68099059 7.96354023,3.78125 8.25,3.78125 C8.53645977,3.78125 8.77994691,3.68099059 8.98046875,3.48046875 C9.18099059,3.27994691 9.28125,3.03645977 9.28125,2.75 C9.28125,2.46354023 9.18099059,2.22005309 8.98046875,2.01953125 Z"
          />
        </svg>
      </a>
      <a
        className="reddit"
        href="https://reddit.com/u/adamyonk"
        title="adamyonk on Reddit"
      >
        <svg width="13" height="11" viewBox="0 0 13 11">
          <path
            id="reddit"
            fill="#000000"
            d="M12.230957,5.15625 C12.230957,5.36751408 12.1817225,5.56445221 12.083252,5.74707031 C11.9847814,5.92968841 11.8514006,6.08007753 11.6831055,6.19824219 C11.7403974,6.41308701 11.769043,6.63867069 11.769043,6.875 C11.769043,7.27246292 11.6804208,7.65828263 11.5031738,8.0324707 C11.3259268,8.40665877 11.0752783,8.74413912 10.7512207,9.04492188 C10.4271631,9.34570463 10.0485048,9.60888559 9.61523438,9.83447266 C9.18196398,10.0600597 8.6976752,10.2346185 8.16235352,10.3581543 C7.62703183,10.4816901 7.07291953,10.543457 6.5,10.543457 C5.92708047,10.543457 5.37296817,10.4816901 4.83764648,10.3581543 C4.3023248,10.2346185 3.81803602,10.0600597 3.38476562,9.83447266 C2.95149523,9.60888559 2.57283691,9.34570463 2.2487793,9.04492188 C1.92472169,8.74413912 1.67407315,8.40665877 1.49682617,8.0324707 C1.31957919,7.65828263 1.23095703,7.27246292 1.23095703,6.875 C1.23095703,6.63867069 1.25960258,6.41308701 1.31689453,6.19824219 C1.14859942,6.08007753 1.01521859,5.92968841 0.916748047,5.74707031 C0.818277502,5.56445221 0.769042969,5.36751408 0.769042969,5.15625 C0.769042969,4.80533679 0.891681716,4.50724406 1.13696289,4.26196289 C1.38224406,4.01668172 1.68033679,3.89404297 2.03125,3.89404297 C2.35351724,3.89404297 2.63281132,4.00146377 2.86914062,4.21630859 C3.34537999,3.9047836 3.88964538,3.66040128 4.50195312,3.4831543 C5.11426087,3.30590732 5.75878568,3.21370446 6.43554688,3.20654297 L7.14990234,1.05810547 C7.17138683,0.990071274 7.2125648,0.938151221 7.2734375,0.90234375 C7.3343102,0.866536279 7.40055303,0.855794199 7.47216797,0.870117188 L9.36279297,1.25146484 C9.4487309,1.07958898 9.57405517,0.942627463 9.73876953,0.840576172 C9.9034839,0.73852488 10.0843089,0.6875 10.28125,0.6875 C10.5677098,0.6875 10.8111969,0.787759414 11.0117188,0.98828125 C11.2122406,1.18880309 11.3125,1.43229023 11.3125,1.71875 C11.3125,2.00520977 11.2122406,2.24869691 11.0117188,2.44921875 C10.8111969,2.64974059 10.5677098,2.75 10.28125,2.75 C10.0091132,2.75 9.77457781,2.65779715 9.57763672,2.47338867 C9.38069563,2.2889802 9.27327483,2.06429169 9.25537109,1.79931641 L7.60644531,1.46630859 L7.02099609,3.22802734 C8.22054636,3.31038453 9.25715709,3.63980832 10.1308594,4.21630859 C10.3671887,4.00146377 10.6464828,3.89404297 10.96875,3.89404297 C11.3196632,3.89404297 11.6177559,4.01668172 11.8630371,4.26196289 C12.1083183,4.50724406 12.230957,4.80533679 12.230957,5.15625 Z M7.64941406,6.63867188 C7.80696693,6.79622475 7.99674368,6.875 8.21875,6.875 C8.44075632,6.875 8.62963789,6.79622475 8.78540039,6.63867188 C8.94116289,6.481119 9.01904297,6.2931326 9.01904297,6.07470703 C9.01904297,5.85270071 8.94116289,5.66292396 8.78540039,5.50537109 C8.62963789,5.34781822 8.44075632,5.26904297 8.21875,5.26904297 C7.99674368,5.26904297 7.80786211,5.34781822 7.65209961,5.50537109 C7.49633711,5.66292396 7.41845703,5.85270071 7.41845703,6.07470703 C7.41845703,6.2931326 7.49544194,6.481119 7.64941406,6.63867188 Z M3.98095703,6.07470703 C3.98095703,6.2931326 4.05883711,6.481119 4.21459961,6.63867188 C4.37036211,6.79622475 4.55924368,6.875 4.78125,6.875 C5.00325632,6.875 5.19213789,6.79622475 5.34790039,6.63867188 C5.50366289,6.481119 5.58154297,6.2931326 5.58154297,6.07470703 C5.58154297,5.85270071 5.50366289,5.66292396 5.34790039,5.50537109 C5.19213789,5.34781822 5.00325632,5.26904297 4.78125,5.26904297 C4.55924368,5.26904297 4.37036211,5.34781822 4.21459961,5.50537109 C4.05883711,5.66292396 3.98095703,5.85270071 3.98095703,6.07470703 Z M8.40136719,8.56689453 C8.45507839,8.52034482 8.48640946,8.46305373 8.49536133,8.39501953 C8.5043132,8.32698534 8.4873049,8.2643232 8.44433594,8.20703125 C8.40136697,8.15332004 8.34497105,8.12198898 8.27514648,8.11303711 C8.20532192,8.10408524 8.14176461,8.12109354 8.08447266,8.1640625 C7.64046002,8.51139497 7.11230775,8.68505859 6.5,8.68505859 C5.88769225,8.68505859 5.35953998,8.51139497 4.91552734,8.1640625 C4.85823539,8.12109354 4.79467808,8.10408524 4.72485352,8.11303711 C4.65502895,8.12198898 4.59863303,8.15332004 4.55566406,8.20703125 C4.5126951,8.2643232 4.4956868,8.32698534 4.50463867,8.39501953 C4.51359054,8.46305373 4.54492161,8.52034482 4.59863281,8.56689453 C5.12858338,8.98226119 5.7623661,9.18994141 6.5,9.18994141 C7.2376339,9.18994141 7.87141662,8.98226119 8.40136719,8.56689453 Z"
          />
        </svg>
      </a>
      <a
        className="twitter"
        href="https://twitter.com/adamyonk"
        title="adamyonk on Twitter"
      >
        <svg width="11" height="10" viewBox="0 0 11 10">
          <path
            id="twitter"
            fill="#000000"
            d="M11,1.97119141 C10.6992172,2.42594628 10.3250348,2.81624186 9.87744141,3.14208984 L9.87744141,3.4375 C9.87744141,3.93880459 9.8138841,4.44278718 9.68676758,4.94946289 C9.55965106,5.4561386 9.3770357,5.94848394 9.13891602,6.42651367 C8.90079634,6.90454341 8.59554223,7.3512349 8.22314453,7.76660156 C7.85074684,8.18196822 7.43359606,8.54451343 6.97167969,8.85424805 C6.50976332,9.16398267 5.97713518,9.40836499 5.3737793,9.58740234 C4.77042342,9.7664397 4.13395517,9.85595703 3.46435547,9.85595703 C2.10725233,9.85595703 0.952478721,9.54980775 0,8.9375 C0.164714365,8.96256523 0.343749033,8.97509766 0.537109375,8.97509766 C1.03841396,8.97509766 1.52896896,8.87841894 2.00878906,8.68505859 C2.48860917,8.49169825 2.9308248,8.23209798 3.33544922,7.90625 C2.85204836,7.90266925 2.41609895,7.75317531 2.02758789,7.45776367 C1.63907683,7.16235204 1.3750007,6.78906476 1.23535156,6.33789062 C1.38574294,6.3665366 1.52538998,6.38085938 1.65429688,6.38085938 C1.86198021,6.38085938 2.06249903,6.35400417 2.25585938,6.30029297 C1.73665105,6.1964513 1.3051775,5.93774621 0.961425781,5.52416992 C0.617674062,5.11059364 0.445800781,4.6316759 0.445800781,4.08740234 L0.445800781,4.06054688 C0.768068018,4.23600348 1.10823389,4.32910151 1.46630859,4.33984375 C1.1547836,4.13216042 0.90861093,3.86360842 0.727783203,3.53417969 C0.546955476,3.20475096 0.456542969,2.85026231 0.456542969,2.47070312 C0.456542969,2.10188618 0.558592729,1.73665545 0.762695312,1.375 C1.32845335,2.06250344 2.01236578,2.607664 2.81445312,3.01049805 C3.61654047,3.41333209 4.48127792,3.63981095 5.40869141,3.68994141 C5.37646468,3.55029227 5.36035156,3.37662864 5.36035156,3.16894531 C5.36035156,2.54589532 5.57966903,2.01505753 6.01831055,1.57641602 C6.45695206,1.1377745 6.98778985,0.918457031 7.61083984,0.918457031 C8.25179357,0.918457031 8.80501069,1.15478279 9.27050781,1.62744141 C9.78255464,1.52359974 10.2569965,1.34098438 10.6938477,1.07958984 C10.5219718,1.6238634 10.1907577,2.04101417 9.70019531,2.33105469 C10.1477887,2.28092423 10.5810526,2.160971 11,1.97119141 Z"
          />
        </svg>
      </a>
      {/*
      <a
        className="pgp"
        href="/adam_jahnke.asc"
        title="PGP Public Key&#10;&#10;Fingerprint:&#10;253B DC3C 94E5 F33A 0A20 F0B3 415C 1FDC 7AEB 2ACE"
      >
        <svg width="9" height="11" viewBox="0 0 9 11">
          <path
            id="lock"
            fill="#000000"
            d="M7.9375,4.8125 C8.12727959,4.8125 8.28930597,4.879638 8.42358398,5.01391602 C8.557862,5.14819403 8.625,5.31022041 8.625,5.5 L8.625,10.3125 C8.625,10.5022796 8.557862,10.664306 8.42358398,10.798584 C8.28930597,10.932862 8.12727959,11 7.9375,11 L1.0625,11 C0.872720405,11 0.710694031,10.932862 0.576416016,10.798584 C0.442138,10.664306 0.375,10.5022796 0.375,10.3125 L0.375,5.5 C0.375,5.31022041 0.442138,5.14819403 0.576416016,5.01391602 C0.710694031,4.879638 0.872720405,4.8125 1.0625,4.8125 L1.75,4.8125 L1.75,2.75 C1.75,2.3776023 1.82250904,2.02221849 1.9675293,1.68383789 C2.11254955,1.34545729 2.30859251,1.05273561 2.55566406,0.805664062 C2.80273561,0.558592515 3.09545729,0.362549553 3.43383789,0.217529297 C3.77221849,0.0725090405 4.1276023,0 4.5,0 C4.8723977,0 5.22778151,0.0725090405 5.56616211,0.217529297 C5.90454271,0.362549553 6.19726439,0.558592515 6.44433594,0.805664062 C6.69140749,1.05273561 6.88745045,1.34545729 7.0324707,1.68383789 C7.17749096,2.02221849 7.25,2.3776023 7.25,2.75 L7.25,4.8125 L7.9375,4.8125 Z M3.125,2.75 L3.125,4.8125 L5.875,4.8125 L5.875,2.75 C5.875,2.37044081 5.740724,2.04638806 5.47216797,1.77783203 C5.20361194,1.509276 4.87955919,1.375 4.5,1.375 C4.12044081,1.375 3.79638806,1.509276 3.52783203,1.77783203 C3.259276,2.04638806 3.125,2.37044081 3.125,2.75 Z"
          />
        </svg>
      </a>
      */}
      <a className="rss" href="/feed.xml" title="RSS">
        <svg width="11" height="11" viewBox="0 0 11 11">
          <path
            id="rss"
            fill="#000000"
            d="M0.230957031,0 C1.20850098,0 2.16186059,0.128904961 3.09106445,0.38671875 C4.02026832,0.644532539 4.87873955,1.0052874 5.66650391,1.46899414 C6.45426826,1.93270089 7.17935867,2.49576492 7.84179688,3.15820312 C8.50423508,3.82064133 9.06729911,4.54573174 9.53100586,5.33349609 C9.9947126,6.12126045 10.3554675,6.97973168 10.6132812,7.90893555 C10.871095,8.83813941 11,9.79149902 11,10.769043 C11,10.8334964 10.9776207,10.888102 10.9328613,10.9328613 C10.888102,10.9776207 10.8334964,11 10.769043,11 L9.16845703,11 C9.10400358,11 9.04939801,10.9776207 9.00463867,10.9328613 C8.95987933,10.888102 8.9375,10.8334964 8.9375,10.769043 C8.9375,9.97769787 8.83365989,9.20605845 8.62597656,8.45410156 C8.41829323,7.70214468 8.1273619,7.00749017 7.75317383,6.37011719 C7.37898576,5.73274421 6.9242377,5.14640567 6.38891602,4.61108398 C5.85359433,4.0757623 5.26725579,3.62101424 4.62988281,3.24682617 C3.99250983,2.8726381 3.29785532,2.58170677 2.54589844,2.37402344 C1.79394155,2.16634011 1.02230213,2.0625 0.230957031,2.0625 C0.166503584,2.0625 0.11189801,2.04012067 0.0671386719,1.99536133 C0.0223793335,1.95060199 0,1.89599642 0,1.83154297 L0,0.230957031 C0,0.166503584 0.0223793335,0.11189801 0.0671386719,0.0671386719 C0.11189801,0.0223793335 0.166503584,0 0.230957031,0 Z M0.230957031,3.4375 C0.893395239,3.4375 1.54150074,3.52522699 2.17529297,3.70068359 C2.8090852,3.8761402 3.39452856,4.1214177 3.93164062,4.43652344 C4.46875269,4.75162918 4.96288837,5.13476337 5.4140625,5.5859375 C5.86523663,6.03711163 6.24837082,6.53124731 6.56347656,7.06835938 C6.8785823,7.60547144 7.1238598,8.1909148 7.29931641,8.82470703 C7.47477301,9.45849926 7.5625,10.1066048 7.5625,10.769043 C7.5625,10.8334964 7.54012067,10.888102 7.49536133,10.9328613 C7.45060199,10.9776207 7.39599642,11 7.33154297,11 L5.73095703,11 C5.66650358,11 5.61189801,10.9776207 5.56713867,10.9328613 C5.52237933,10.888102 5.5,10.8334964 5.5,10.769043 C5.5,10.0528936 5.36124813,9.3698763 5.08374023,8.7199707 C4.80623234,8.07006511 4.43204988,7.5096866 3.96118164,7.03881836 C3.4903134,6.56795012 2.92993489,6.19376766 2.2800293,5.91625977 C1.6301237,5.63875187 0.947106445,5.5 0.230957031,5.5 C0.166503584,5.5 0.11189801,5.47762067 0.0671386719,5.43286133 C0.0223793335,5.38810199 0,5.33349642 0,5.26904297 L0,3.66845703 C0,3.60400358 0.0223793335,3.54939801 0.0671386719,3.50463867 C0.11189801,3.45987933 0.166503584,3.4375 0.230957031,3.4375 Z M1.71875,7.5625 C2.18782787,7.5625 2.59155104,7.73168776 2.92993164,8.07006836 C3.26831224,8.40844896 3.4375,8.81217213 3.4375,9.28125 C3.4375,9.75748936 3.26920741,10.1630029 2.93261719,10.4978027 C2.59602696,10.8326026 2.19140861,11 1.71875,11 C1.23892989,11 0.832521196,10.8334978 0.499511719,10.5004883 C0.166502241,10.1674788 0,9.76107011 0,9.28125 C0,8.80859139 0.167397415,8.40397304 0.502197266,8.06738281 C0.836997117,7.73079259 1.24251064,7.5625 1.71875,7.5625 Z"
          />
        </svg>
      </a>
      <a className="json" href="/feed.json" title="JSON Feed">
        <svg width="50" height="49" viewBox="0 0 50 49">
          <path
            d="M17.3295 31.3768C19.591 30.1857 21.6799 29.8577 23.5961 30.3928C25.4951 30.9107 27.8774 32.6025 30.7432 35.4682L34.5756 39.3007C36.371 41.0961 37.7607 42.106 38.7447 42.3304C39.7287 42.5549 40.8422 42.2873 42.0852 41.5277C42.3614 41.355 42.7326 41.0875 43.1987 40.7249C44.925 39.4129 46.3924 39.3611 47.6008 40.5696C48.1878 41.1565 48.4467 41.8125 48.3777 42.5376C48.3086 43.2626 47.9116 43.9877 47.1865 44.7128C44.269 47.6303 41.4896 48.9596 38.8483 48.7006C36.207 48.4417 32.8838 46.3096 28.8787 42.3045L25.8749 39.3007C23.8551 37.2809 22.146 36.1415 20.7477 35.8826C19.3321 35.6064 17.3209 36.3918 14.7141 38.239C13.9373 38.8087 13.2468 39.0849 12.6425 39.0677C12.0211 39.0331 11.3737 38.6792 10.7004 38.006C10.148 37.4535 9.83725 36.9011 9.76819 36.3487C9.69914 35.7963 9.86314 35.1834 10.2602 34.5101C10.4674 34.1994 10.7522 33.7419 11.1147 33.1377C13.3762 29.6678 12.8324 26.2583 9.48335 22.9092L6.40184 19.8277C2.41401 15.8398 0.290615 12.508 0.0316651 9.83217C-0.227285 7.15635 1.10199 4.35969 4.0195 1.44219C4.7273 0.734389 5.44372 0.363227 6.16879 0.3287C6.89385 0.259647 7.54985 0.518597 8.13681 1.10555C9.32798 2.29672 9.25893 3.74684 7.92965 5.45591C7.68796 5.80118 7.48943 6.06876 7.33406 6.25866C6.45363 7.55341 6.12563 8.74458 6.35005 9.83217C6.57447 10.8852 7.61891 12.344 9.48335 14.2084L13.2899 18.015C16.1729 20.898 17.8733 23.289 18.3912 25.1879C18.9091 27.0869 18.5552 29.1499 17.3295 31.3768Z"
            id="json"
            fill="#000000"
          />
          <path
            d="M25.6291 24.0516C24.828 23.2506 24.4275 22.2839 24.4275 21.1514C24.4275 19.9913 24.8211 19.0177 25.6084 18.2304C26.4094 17.4294 27.383 17.0358 28.5293 17.0496C29.6756 17.0358 30.6493 17.4294 31.4503 18.2304C32.2651 19.0453 32.6656 20.0258 32.6518 21.1721C32.638 22.2908 32.2306 23.2506 31.4296 24.0516C30.6147 24.8665 29.648 25.2808 28.5293 25.2946C27.4106 25.2808 26.4439 24.8665 25.6291 24.0516ZM42.6991 6.98165C41.898 6.18063 41.4975 5.21388 41.4975 4.08141C41.4837 2.93512 41.8704 1.96837 42.6576 1.18116C43.4587 0.380145 44.4323 -0.0134596 45.5786 0.000351119C46.7249 -0.0134596 47.6985 0.380145 48.4996 1.18116C49.3144 1.99599 49.7218 2.96965 49.7218 4.10212C49.708 5.22079 49.2937 6.18754 48.4788 7.00237C47.6778 7.80338 46.718 8.2108 45.5993 8.22461C44.4806 8.2108 43.5139 7.79648 42.6991 6.98165ZM34.1641 15.5166C33.3769 14.7294 32.9833 13.7558 32.9833 12.5957C32.9833 11.4356 33.3769 10.4619 34.1641 9.67473C34.9651 8.87371 35.9387 8.48011 37.085 8.49392C38.2175 8.49392 39.1842 8.89443 39.9853 9.69545C40.8001 10.5103 41.2075 11.4839 41.2075 12.6164C41.2075 13.7213 40.8001 14.6811 39.9853 15.4959C39.1842 16.297 38.2175 16.7113 37.085 16.7389C35.9526 16.7389 34.9789 16.3315 34.1641 15.5166Z"
            id="json"
            fill="#000000"
          />
        </svg>
        {/*
        <svg width="11" height="11" viewBox="0 0 11 11">
          <path
            id="json"
            fill="#000000"
            d="M0.230957031,0 C1.20850098,0 2.16186059,0.128904961 3.09106445,0.38671875 C4.02026832,0.644532539 4.87873955,1.0052874 5.66650391,1.46899414 C6.45426826,1.93270089 7.17935867,2.49576492 7.84179688,3.15820312 C8.50423508,3.82064133 9.06729911,4.54573174 9.53100586,5.33349609 C9.9947126,6.12126045 10.3554675,6.97973168 10.6132812,7.90893555 C10.871095,8.83813941 11,9.79149902 11,10.769043 C11,10.8334964 10.9776207,10.888102 10.9328613,10.9328613 C10.888102,10.9776207 10.8334964,11 10.769043,11 L9.16845703,11 C9.10400358,11 9.04939801,10.9776207 9.00463867,10.9328613 C8.95987933,10.888102 8.9375,10.8334964 8.9375,10.769043 C8.9375,9.97769787 8.83365989,9.20605845 8.62597656,8.45410156 C8.41829323,7.70214468 8.1273619,7.00749017 7.75317383,6.37011719 C7.37898576,5.73274421 6.9242377,5.14640567 6.38891602,4.61108398 C5.85359433,4.0757623 5.26725579,3.62101424 4.62988281,3.24682617 C3.99250983,2.8726381 3.29785532,2.58170677 2.54589844,2.37402344 C1.79394155,2.16634011 1.02230213,2.0625 0.230957031,2.0625 C0.166503584,2.0625 0.11189801,2.04012067 0.0671386719,1.99536133 C0.0223793335,1.95060199 0,1.89599642 0,1.83154297 L0,0.230957031 C0,0.166503584 0.0223793335,0.11189801 0.0671386719,0.0671386719 C0.11189801,0.0223793335 0.166503584,0 0.230957031,0 Z M0.230957031,3.4375 C0.893395239,3.4375 1.54150074,3.52522699 2.17529297,3.70068359 C2.8090852,3.8761402 3.39452856,4.1214177 3.93164062,4.43652344 C4.46875269,4.75162918 4.96288837,5.13476337 5.4140625,5.5859375 C5.86523663,6.03711163 6.24837082,6.53124731 6.56347656,7.06835938 C6.8785823,7.60547144 7.1238598,8.1909148 7.29931641,8.82470703 C7.47477301,9.45849926 7.5625,10.1066048 7.5625,10.769043 C7.5625,10.8334964 7.54012067,10.888102 7.49536133,10.9328613 C7.45060199,10.9776207 7.39599642,11 7.33154297,11 L5.73095703,11 C5.66650358,11 5.61189801,10.9776207 5.56713867,10.9328613 C5.52237933,10.888102 5.5,10.8334964 5.5,10.769043 C5.5,10.0528936 5.36124813,9.3698763 5.08374023,8.7199707 C4.80623234,8.07006511 4.43204988,7.5096866 3.96118164,7.03881836 C3.4903134,6.56795012 2.92993489,6.19376766 2.2800293,5.91625977 C1.6301237,5.63875187 0.947106445,5.5 0.230957031,5.5 C0.166503584,5.5 0.11189801,5.47762067 0.0671386719,5.43286133 C0.0223793335,5.38810199 0,5.33349642 0,5.26904297 L0,3.66845703 C0,3.60400358 0.0223793335,3.54939801 0.0671386719,3.50463867 C0.11189801,3.45987933 0.166503584,3.4375 0.230957031,3.4375 Z M1.71875,7.5625 C2.18782787,7.5625 2.59155104,7.73168776 2.92993164,8.07006836 C3.26831224,8.40844896 3.4375,8.81217213 3.4375,9.28125 C3.4375,9.75748936 3.26920741,10.1630029 2.93261719,10.4978027 C2.59602696,10.8326026 2.19140861,11 1.71875,11 C1.23892989,11 0.832521196,10.8334978 0.499511719,10.5004883 C0.166502241,10.1674788 0,9.76107011 0,9.28125 C0,8.80859139 0.167397415,8.40397304 0.502197266,8.06738281 C0.836997117,7.73079259 1.24251064,7.5625 1.71875,7.5625 Z"
          />
        </svg>
        */}
      </a>
      <a className="sale" href="/for-sale" title="For Sale">
        <svg width="11" height="11" viewBox="0 0 12 12">
          <path d="M0.22265625,7.59960938 C-0.0703125,7.30664062 -0.0703125,6.8203125 0.22265625,6.52734375 L6.6796875,0.0703125 C6.72070312,0.029296875 6.79101562,0 6.84960938,0 L11.25,0 C11.6660156,0 12,0.333984375 12,0.75 L12,5.15039062 C12,5.20898438 11.9707031,5.27929688 11.9296875,5.3203125 L5.47265625,11.7773438 C5.1796875,12.0703125 4.69335938,12.0703125 4.40039062,11.7773438 L0.22265625,7.59960938 Z M8.25,2.625 C8.25,3.25195312 8.74804688,3.75 9.375,3.75 C10.0019531,3.75 10.5,3.25195312 10.5,2.625 C10.5,1.99804688 10.0019531,1.5 9.375,1.5 C8.74804688,1.5 8.25,1.99804688 8.25,2.625 Z" />
        </svg>
      </a>
    </nav>
    <style jsx global>{`
      :root {
        --base03: #002b36;
        --base02: #073642;
        --base01: #586e75;
        --base00: #657b83;
        --base0: #839496;
        --base1: #93a1a1;
        --base2: #eee8d5;
        --base3: #fdf6e3;
        --yellow: #b58900;
        --orange: #cb4b16;
        --red: #dc322f;
        --magenta: #d33682;
        --violet: #6c71c4;
        --blue: #268bd2;
        --cyan: #2aa198;
        --green: #859900;

        --background: var(--base02);
        --foreground: var(--base1);
        --link: var(--base2);
        --navlink: var(--base00);

        --body: "Fira Sans", sans-serif;
        --monospace: "Fira Code", monospace;
        --body: var(--monospace);
      }

      @media (prefers-color-scheme: light) {
        :root {
          --background: var(--base3);
          --foreground: var(--base02);

          --link: var(--yellow);
        }
      }

      body {
        background-color: var(--background);
        color: var(--foreground);
        font-family: var(--body);
        line-height: 150%;
        margin: 1.5rem auto;
        max-width: 40rem;
        text-decoration-skip: ink;
        width: 90%;
      }
      @media print {
        body {
          background-color: transparent;
          font-size: 13px;
        }
      }

      ::selection {
        background-color: var(--cyan);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--cyan);
        font-size: 100%;
        font-weight: 100;
        line-height: 1.1;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ol,
      p,
      ul,
      .highlight {
        margin-bottom: 20px;
      }

      h1 {
        font-size: 2em;
        margin-bottom: 0.5em;
      }

      h2 {
        font-size: 1.3em;
      }

      a {
        border-bottom: 1px dotted transparent;
        color: var(--link);
        text-decoration: none;
      }

      @media print {
        a[href]:not(.logo-link)::after {
          content: " [" attr(href) "]";
        }

        a[href^="tel:"] span,
        a[href^="mailto:"] span {
          display: none;
        }

        a[href^="tel:"]::after,
        a[href^="mailto:"]::after {
          content: attr(href);
        }
      }

      a:hover {
        border-color: var(--link);
      }

      blockquote {
        border-left: 0.2em solid var(--yellow);
        font-size: 1.3em;
        line-height: 150%;
        padding-left: 1em;
      }

      big {
        font-size: 1.3em;
      }

      small {
        font-size: 0.8em;
      }

      strong {
        font-weight: 700;
      }

      em {
        font-style: italic;
      }

      ol,
      ul {
        list-style-type: none;
      }

      ul li > p {
        margin: 0;
      }

      dl {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 1em;
      }

      dl > * {
        width: 50%;
      }

      table {
        width: 100%;
      }

      th {
        text-align: left;
      }

      sup,
      sub {
        line-height: 0;
      }

      // code,
      // pre {
      //   font-family: var(--monospace);
      // }

      // pre code {
      //   background: var(--base3);
      //   border-radius: 2px;
      //   box-sizing: border-box;
      //   display: block;
      //   overflow: scroll;
      //   padding: 0.25em 0.75em;
      //   width: 100%;
      // }

      .logo {
        align-items: center;
        display: grid;
        justify-content: center;
        margin: 1em auto 3em;
      }
      .logo a {
        border: none;
        color: #bd2b28;
        font-size: 250px;
        line-height: 1;
      }
      @media print {
        .logo a {
          font-size: 120px;
        }
      }

      nav {
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 2em auto;
      }
      @media print {
        nav {
          display: none;
        }
      }

      nav a {
        border: none;
        color: var(--navlink);
        display: inline-block;
        margin: 0 0.5em;
        vertical-align: middle;
      }
      nav a svg {
        --size: 20px;
        height: var(--size);
        width: var(--size);
      }
      nav a path {
        fill: currentColor;
      }

      nav a:hover {
        border: none;
      }

      nav a.twitter:hover {
        color: #26d2fd;
      }

      nav a.github:hover {
        color: #4082c4;
      }

      nav a.reddit:hover {
        color: #cee3f8;
      }

      nav a.keybase:hover {
        color: #fd5f2b;
      }

      nav a.pgp:hover {
        color: #2aa298;
      }

      nav a.rss:hover {
        color: #fd9126;
      }

      nav a.json:hover {
        color: #8ee42a;
      }

      nav a.sale:hover {
        color: var(--red);
      }

      article {
        margin-bottom: 3em;
      }

      article img {
        box-shadow: unset !important;
        max-width: 100%;
      }

      article ul,
      article ol {
        margin-left: 1em;
        padding-left: 1em;
      }

      article ul {
        list-style-type: disc;
      }

      article ol {
        list-style-type: decimal;
      }

      article li > p,
      article li > ul {
        margin-bottom: 0;
        margin-top: 0;
      }

      article table {
        margin-bottom: 1.5em;
      }

      header {
        margin-bottom: 1em;
      }

      header h1 {
        margin-bottom: 0em;
      }

      .print-only {
        display: none;
      }
      @media print {
        .print-only {
          display: block;
        }
      }

      /**
       * Prism things:
       */
      .gatsby-highlight-code-line {
        background-color: #feb;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #f99;
      }

      /**
       * Add back the container background-color, border-radius, padding, margin
       * and overflow that we removed from <pre>.
       */
      .gatsby-highlight {
        background-color: #fdf6e3;
        border-radius: 0.3em;
        margin: 0.5em 0;
        padding: 1em;
        overflow: auto;
      }

      /**
       * Remove the default PrismJS theme background-color, border-radius, margin,
       * padding and overflow.
       * 1. Make the element just wide enough to fit its content.
       * 2. Always fill the visible space in .gatsby-highlight.
       */
      .gatsby-highlight pre[class*="language-"] {
        background-color: transparent;
        margin: 0;
        padding: 0;
        overflow: initial;
        float: left; /* 1 */
        min-width: 100%; /* 2 */
      }

      :not(pre) > code[class*="language-"] {
        white-space: normal;
      }
      code[class*="language-"],
      pre[class*="language-"] {
        font-family: var(--body);
      }
    `}</style>
  </React.Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.node,
}

export default TemplateWrapper
