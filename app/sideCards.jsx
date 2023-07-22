import { LinkCard } from "./linkCard";
import Image from "next/image";

export function SideCards() {
  return (
    <div className="flex lg:flex-col flex-initial lg:justify-normal justify-center lg:max-w-[50vw] max-w-[95vw] mt-8 mx-auto mb-4 text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 break-words">
        <LinkCard
          title="経歴"
          description="私の経歴について時系列順に紹介"
          href="/career"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            className="w-7 h-7 mb-3 dark:fill-slate-200 fill-slate-900"
          >
            <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
          </svg>
        </LinkCard>
        <LinkCard
          title="チーム逸般人"
          description="マイクラカップで結成したチーム逸般人をご覧あれ。"
          href="/outstndrs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 689.1433 596.1848"
            className="w-9 h-9 mb-1 dark:fill-slate-200 fill-slate-900"
          >
            <path d="M603.1751,411.1659c-13.5474,92.3191-176.159,161.6148-255.3,164.5979-51.3458,1.9354-106.6985,1.2477-128.4233-4.8293-65.6477-18.3636-76.8172-36.8977-130.4986-76.3952-2.33-1.7147-2.41-9.1517-.3746-12.0893,6.8681-9.9113,15.6375-18.7074,22.7445-28.4979a91.8065,91.8065,0,0,0,10.7989-20.3748c1.52-3.8691.5976-8.5412.7767-12.8511-5.392.1993-11.7091-1.18-15.9886.9177-9.72,4.7644-18.4168,11.2661-27.5816,16.992a46.147,46.147,0,0,1-5.0768,2.3913c-.18-1.8324-1.1722-4.0322-.4118-5.44C80.6228,423.0338,87.8931,410.7,94.66,398.14c5.6382-10.4649,10.7927-21.1479,17.3672-34.1118-9.6823,7.8921-17.486,13.9559-24.9048,20.391-6.2962,5.4614-12.029,11.4654-18.3091,16.9436-1.094.9543-4.3617,1.27-5.3937.5-1.5568-1.1619-3.2375-3.8428-2.783-5.3543,7.6752-25.526,25.9881-40.9115,54.2234-46.3112,11.3553-2.1716,19.3511,7.3612,14.3964,19.3605-5.6241,13.6207-13.7827,26.366-20.0229,37.9729,4.13-1.316,10.8128-4.2853,17.85-5.4169,5.4236-.8722,14.02-1.3578,16.347,1.4063,3.8791,4.6073,7.2984,13.5147,4.92,17.8827-11.9621,21.97-25.9618,43.0073-38.8994,64.5464-1.0065,1.6757-.1757,6.25,1.1914,6.8571,49.67,22.0379,117.3851,51.7225,156.0782,51.1922,30.1714-.4134,125.7336-14.808,145.3256-22.4035C574.395,458.6538,603.1751,411.1659,603.1751,411.1659Z" />
            <path d="M382.8368,270.685c15.0747.9877,35.25,2.1177,55.3519,3.6747,25.9179,2.0075,40.9715,16.0959,32.7166,32.8077-13.9074,28.1554-32.4829,55.2311-67.56,74.18-8.6674,4.6822-26.8948,2.82-40.3038,1.6869-22.2325-1.8781-34.9245,2.4112-41.6169,17.8259-6.6048,15.2132-19.2747,29.2022-26.4695,44.3359-6.3824,13.4251-10.1554,27.5816-12.6845,41.6114-1.6782,9.31,18.56,17.8446,33.0259,13.6494,36.7426-10.6552,72.7765-22.4176,109.219-33.5512,2.4658-.7532,5.9708.0386,8.9926.1119-2.2,3.1517-3.26,7.15-6.7934,9.3129-17.919,10.9711-36.7113,21.2917-54.7534,32.1748-19.7,11.883-43.1345,14.1933-68.051,12.6741-23.1332-1.41-43.4057-11.9955-46.596-29.9961-2.4828-14.0086,2.406-29.2585,8.29-43.134,7.9576-18.7647,17.6172-37.587,31.0322-54.7966,11.29-14.4833-3.2548-11.1827-13.1455-11.3132-3.4626-.0458-9.3469,2.739-10.1844,4.9188C260.44,420.3505,243,452.4743,212.3223,480.6211c-12.1316,11.1308-41.91,18.9517-54.3529,14.8644-3.4916-1.147-6.0251-3.6187-8.9981-5.4828,2.8511-1.6675,5.45-3.5995,8.5922-4.9619,33.5383-14.54,56.2436-35.1029,70.5262-59.7126,7.2634-12.5152,11.2934-25.8932,16.3457-38.9583.3606-.9323-3.3254-3.7533-4.4093-3.5853C222.6308,385.4814,205.5316,389.2,188,391.3c-18.9189,2.2659-23.8735-5.6735-21.3635-16.4763C176.6046,331.92,209.9976,300.1648,268,280.989c10.5182-3.4774,23.9674-2.7572,34.9557-5.7948,24.8817-6.8786,50.4667-13.3988,73.05-22.974,14.8463-6.2947,26.6656-16.89,36.7045-26.9771,9.9478-9.9953-.0469-18.1981-18.2247-19.7977-48.1011-4.2326-80.3828,11.9438-107.0758,35.9153-13.5367,12.1565-25.5174,25.1423-39.8568,36.831-6.42,5.2331-16.7929,8.3252-25.6981,12.0332-1.0977.457-5.5257-.9811-6.0961-2.0843a6.1144,6.1144,0,0,1,.4692-5.9529c19.3167-28.4614,46.7385-52.3486,86.89-68.8756,38.64-15.9049,78.7332-25.7586,124.4228-14.1488,22.6654,5.7593,33.4561,27.6842,17.25,37.038C423.5676,248.451,401.7208,260.21,382.8368,270.685Zm-11.1645,99.43c1.263.0024,2.7416.0339,3.808.0339,3.6714,0,8.4335-1.7861,9.4553-2.9,19.2232-20.959,37.2143-40.7138,55.519-62.0376,1.4776-1.7213-2.4059-8.0562-5.1475-8.5052-25.0136-4.0966-50.3188-7.389-75.577-10.7871a5.5838,5.5838,0,0,0-3.8808,1.4731q-28.3925,38.994-56.4,78.1145c-.2246.3137,1.4741,1.8175,2.2834,1.8207C326.6131,367.4274,346.7908,370.1153,371.6723,370.1153ZM249.3056,308.1282c-18.8564,20.424-30.611,38.7118-49.2078,59.2429-.4717.5208,2.01,3.2631,3.022,3.2387,19.3845-.4666,38.7571-1.1709,58.1225-1.9365a4.1507,4.1507,0,0,0,2.478-1.7076q26.7293-35.885,53.3583-71.804c1.9437-2.617,3.9506-5.2127,5.9281-7.8182-4.6748-.005-9.4105-.3418-14.0141.0417-21.3721,1.78-44.8655.511-56.8234,17.5138" />
            <path d="M112.1631,330.8415c11.4169-17.9141,19.6911-35.3882,33.1485-50.8079,14.8291-16.9914,33.672-32.51,52.3422-47.7962,6.4763-5.3024,17.6274-8.0324,26.7579-11.8116.9664-.4,3.2641-.6431,4.0892.1059.8362.7589-.1837,2.1892-1.042,2.7077-27.0971,16.3727-37.0523,38.8011-48.6338,60.8792a401.5727,401.5727,0,0,1-31.1737,50.0452c-2.7322,3.7454-13.8066,6.0624-21.2759,6.3585C115.9445,338.5816,112.1631,332.6653,112.1631,330.8415Z" />
            <path d="M480.4126,25.5273c.8865.475,2.1327,1.2173,2.7316,1.5623.4151.2391,1.3575.7354,1.5685.8425,28.5148,14.4724,54.0546,32.6573,74.5567,58.1769a2.8808,2.8808,0,0,0,2.825-.1816C592.2176,39.4792,648.8171,34.73,685.673,75.649c2.9208,3.2428,6.0961,6.0268-.0517,9.8886-38.6027,24.2484-77.1372,29.3946-118.9623,10.27a.5671.5671,0,0,0-.8146.6433c1.5784,11.0493,5.3842,22.6753,4.8755,34.8782-.613,14.7026-4.7292,29.242-7.16,43.8821.0285,1.3472.0911,2.5724,1.5738,3.5441,46.6041,17.2227,83.5973,69.5006,86.7146,120.8186,3.8782,63.8445-21.4255,115.1022-59.8938,162.5152-22.4929,27.7231-48.0882,50.0916-78.3453,67.4414C454.4529,563.452,390.41,581.4137,323.9731,590.61c-50.3506,6.9694-100.8133,9.5629-150.6539-5.24-55.97-16.6233-105.1692-44.0924-141.592-92.7362C9.334,462.7267,1.711,427.7029.302,391.1453c-2.136-55.42,6.7186-108.598,37.4939-155.4772,25.8869-39.4329,60.7931-67.003,107.6266-70.5711,29.0184-2.2108,58.6182,1.8865,87.82,4.6846,29.8714,2.8623,59.4883,9.3513,89.3811,10.9527,23.83,1.2767,48.006-1.4547,71.8512-4.1142,36.35-4.0542,72.4408-11.2827,108.8559-13.7077,16.1744-1.0771,32.9656,5.8816,49.2764,10.0374,2.7092.752,6.305,1.5653,7.264-4.636,2.866-18.5331,5.9208-40.8325,4.0449-56.1508-.2869-2.3433-1.9537-11.7376-4.8725-15.822-.5559-.781-2.0368-.6207-2.5136-.3775-38.17,19.4674-78.8048,26.03-120.511,29.934-53.9142,5.0464-107.8812,4.7115-160.4147-9.9473-18.9527-5.2885-36.2334-17.3348-53.7093-27.36-1.35-.7743.6287-10.6839,3.0593-15.1886C250.2123,26.5921,291.9627,7.6436,340.7172,1.77c42.5861-5.13,83.9807,1.02,124.07,16.8039,6.5032,2.5606,5.97,2.4994,11.74,5.0982C476.9518,23.8183,479.1034,24.8259,480.4126,25.5273ZM168.0307,170.3791a19.2658,19.2658,0,0,0-3.1846.1591c-9.5243.0713-14.3306-.9121-21.3878.201a118.45,118.45,0,0,0-16.4724,3.5346c-56.0084,17.2785-89.2682,58.37-109.0428,113.0778C2.8415,329.1311,3.6016,372.6182,8.0939,415.9307c1.7111,16.4979,5.9431,33.5714,12.8586,48.4716C41.4087,508.4776,76.8361,537.2,117.9244,559.07c53.6407,28.55,111.009,36.7483,170.4134,32.038A591.1719,591.1719,0,0,0,438.1553,559.85c68.5007-24.0336,128.07-60.254,168.8883-124.3939,22.68-35.6387,40.215-73.1623,39.8894-117.0319-.3116-41.9883-15.3961-78.1968-44.3666-107.106-11.0919-11.0683-25.3823-19.1077-39.0994-26.8425-23.4966-13.2492-49.2531-19.2153-75.7732-16.0935-32.8183,3.8631-65.3058,10.66-98.0778,15.0541-37.3029,5.0014-74.686,4.0323-111.9722-1.3509C240.15,176.6724,205.8782,171.2347,168.0307,170.3791Zm215.2472-46.6417c19.6766-1.235,39.4234-1.7638,59.0149-3.8554,38.067-4.0639,75.8092-10.0483,110.7325-27.7282.8314-.4209,1.4445-3.7867.8582-4.3671-11.1331-11.0228-21.3673-23.4933-33.94-32.4C464.9952,16.4574,403.9392.3513,337.6922,7.8769c-45.4652,5.1648-83.0073,25.17-107.1608,67.2421-1.8488,3.2205-3.1706,10.52-1.9894,11.2695,10.8166,6.861,21.778,13.961,33.5742,18.59C301.0967,120.2762,342.0372,122.817,383.2779,123.7374Zm232.5566-24.914c19.4316-.3,38.1955-5.7782,57.5053-12.6727,6.0336-2.1543,8.7748-6.8367,1.8859-13.6675C644.8728,42.3861,587.1692,50.617,566.3488,88.59a2.6986,2.6986,0,0,0,1.0246,2.315C582.5631,95.27,597.2744,99.11,615.8345,98.8234Z" />
          </svg>
        </LinkCard>
        <LinkCard
          title="SNS"
          description="Twitter,Github,チーム逸般人など"
          href="/sns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="w-7 h-7 mb-3 dark:fill-slate-200 fill-slate-900"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </LinkCard>
        <LinkCard
          title="経歴"
          description="aaaaaasdadsajkldsajsdakljdaslkjadslkjadskljadsljkadjskldjklasljdkasljdksadsdas"
          href="#"
        />
        <LinkCard
          title="経歴"
          description="aaaaaasdadsajkldsajsdakljdaslkjadslkjadskljadsljkadjskldjklasljdkasljdksadsdas"
          href="#"
        />
        <LinkCard
          title="経歴"
          description="aaaaaasdadsajkldsajsdakljdaslkjadslkjadskljadsljkadjskldjklasljdkasljdksadsdas"
          href="#"
        />
      </div>
    </div>
  );
}
