type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Logo: () => (
    <svg
      width="30"
      height="23"
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.27093 20.6608C6.72033 23.1839 2.40058 23.1738 1.19419 19.8111C0.957996 19.1527 0.76915 18.4758 0.630255 17.7851C0.0631474 14.9647 0.354208 12.0415 1.46663 9.38477C2.57905 6.72816 4.46287 4.45749 6.87986 2.85992C9.2969 1.26236 12.1385 0.409668 15.0454 0.409668C17.9523 0.409668 20.7939 1.26236 23.2109 2.85992C25.6279 4.45749 27.5117 6.72816 28.6241 9.38485C29.7366 12.0415 30.0276 14.9647 29.4605 17.7851C29.3216 18.4758 29.1328 19.1527 28.8965 19.8111C27.6901 23.1738 23.3704 23.1839 20.8198 20.6608L16.8826 16.766C16.5064 16.3939 16.5453 15.7802 16.6491 15.2642C16.7121 14.9504 16.6797 14.6252 16.556 14.3297C16.4322 14.0341 16.2227 13.7815 15.9538 13.6038C15.6849 13.4261 15.3688 13.3312 15.0454 13.3312C14.722 13.3312 14.4059 13.4261 14.137 13.6038C13.8681 13.7815 13.6585 14.0341 13.5348 14.3297C13.411 14.6252 13.3786 14.9504 13.4418 15.2642C13.5455 15.7802 13.5843 16.3939 13.2082 16.766L9.27093 20.6608Z"
        fill="url(#paint0_linear_492_67)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_492_67"
          x1="28.4051"
          y1="7.67916"
          x2="2.31694"
          y2="7.67916"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#161490" />
          <stop offset="0.510417" stopColor="#7476ED" />
          <stop offset="1" stopColor="#E56F8C" />
        </linearGradient>
      </defs>
    </svg>
  ),
  AlcalineworksLine: () => (
    <svg
      width={1182}
      height={3}
      viewBox="0 0 1182 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="-2.05333e-05"
        y1={2}
        x2={1182}
        y2="1.97573"
        stroke="url(#paint0_linear_1_710)"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_710"
          x1={1182}
          y1="2.97573"
          x2={1182}
          y2="4.97573"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset={1} stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  AlcalineworksUpAndDown: () => (
    <svg
      width="2"
      height="30"
      viewBox="0 0 2 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        x2="1"
        y2="30"
        stroke="url(#paint0_linear_1_714)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_714"
          x1="0"
          y1="30"
          x2="-1.99778"
          y2="29.9334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      className="w-3 h-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_418_328)">
        <path
          d="M7.9985 1.9925H9.094V0.0845C8.905 0.0585 8.255 0 7.498 0C5.91851 0 4.83651 0.9935 4.83651 2.8195V4.5H3.09351V6.633H4.83651V12H6.97351V6.6335H8.646L8.9115 4.5005H6.97301V3.031C6.97351 2.4145 7.1395 1.9925 7.9985 1.9925Z"
          fill="#1A202C"
        />
      </g>
      <defs>
        <clipPath id="clip0_418_328">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_418_333)">
        <path
          d="M9.481 0H3.51898C1.57858 0 0 1.57858 0 3.51898V9.4811C0 11.4214 1.57858 13 3.51898 13H9.4811C11.4214 13 13 11.4214 13 9.4811V3.51898C13 1.57858 11.4214 0 9.481 0V0ZM12.2379 9.4811C12.2379 11.0012 11.0012 12.2379 9.481 12.2379H3.51898C1.99881 12.2379 0.762114 11.0012 0.762114 9.4811V3.51898C0.762114 1.99881 1.99881 0.762114 3.51898 0.762114H9.4811C11.0012 0.762114 12.2379 1.99881 12.2379 3.51898V9.4811Z"
          fill="#1A202C"
        />
        <path
          d="M6.50002 2.94531C4.53998 2.94531 2.94543 4.53986 2.94543 6.49989C2.94543 8.45993 4.53998 10.0545 6.50002 10.0545C8.46005 10.0545 10.0546 8.45993 10.0546 6.49989C10.0546 4.53986 8.46005 2.94531 6.50002 2.94531ZM6.50002 9.29236C4.96032 9.29236 3.70755 8.03969 3.70755 6.49989C3.70755 4.96019 4.96032 3.70743 6.50002 3.70743C8.03982 3.70743 9.29248 4.96019 9.29248 6.49989C9.29248 8.03969 8.03982 9.29236 6.50002 9.29236Z"
          fill="#1A202C"
        />
        <path
          d="M10.1396 1.68311C9.56035 1.68311 9.08923 2.15432 9.08923 2.73344C9.08923 3.31266 9.56035 3.78388 10.1396 3.78388C10.7188 3.78388 11.19 3.31266 11.19 2.73344C11.19 2.15422 10.7188 1.68311 10.1396 1.68311ZM10.1396 3.02166C9.98068 3.02166 9.85135 2.89233 9.85135 2.73344C9.85135 2.57445 9.98068 2.44522 10.1396 2.44522C10.2986 2.44522 10.4279 2.57445 10.4279 2.73344C10.4279 2.89233 10.2986 3.02166 10.1396 3.02166Z"
          fill="#1A202C"
        />
      </g>
      <defs>
        <clipPath id="clip0_418_333">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  twitter: () => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1.46919C12.5166 1.68125 12.0014 1.82181 11.4644 1.89006C12.0169 1.56019 12.4386 1.04181 12.6368 0.417C12.1217 0.724125 11.5529 0.941063 10.9468 1.06213C10.4577 0.541313 9.76056 0.21875 9.00006 0.21875C7.52456 0.21875 6.33669 1.41638 6.33669 2.88456C6.33669 3.09581 6.35456 3.29894 6.39844 3.49231C4.18275 3.38425 2.22219 2.32231 0.905125 0.704625C0.675187 1.10356 0.540313 1.56019 0.540313 2.05175C0.540313 2.97475 1.01562 3.79294 1.72413 4.26662C1.29594 4.2585 0.875875 4.13419 0.52 3.93837C0.52 3.9465 0.52 3.95706 0.52 3.96762C0.52 5.26275 1.44381 6.3385 2.65525 6.58631C2.43831 6.64563 2.20187 6.67406 1.9565 6.67406C1.78587 6.67406 1.61362 6.66431 1.45194 6.62856C1.79725 7.684 2.77713 8.45994 3.94225 8.48512C3.0355 9.19444 1.88419 9.62181 0.637812 9.62181C0.41925 9.62181 0.209625 9.61206 0 9.58525C1.18056 10.3466 2.57969 10.7812 4.0885 10.7812C8.99275 10.7812 11.674 6.71875 11.674 3.19737C11.674 3.07956 11.6699 2.96581 11.6643 2.85287C12.1932 2.4775 12.6376 2.00869 13 1.46919Z"
        fill="#1A202C"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_418_347)">
        <path
          d="M10.9973 10.9998V10.9993H11V6.96507C11 4.99148 10.5751 3.47119 8.26789 3.47119C7.15873 3.47119 6.41439 4.07986 6.11052 4.6569H6.07843V3.65544H3.89081V10.9993H6.16873V7.3629C6.16873 6.40544 6.35023 5.47961 7.53593 5.47961C8.70423 5.47961 8.72164 6.57228 8.72164 7.42432V10.9998H10.9973Z"
          fill="#1A202C"
        />
        <path
          d="M0.181519 3.65625H2.46219V11.0001H0.181519V3.65625Z"
          fill="#1A202C"
        />
        <path
          d="M1.32092 0C0.591708 0 0 0.591708 0 1.32092C0 2.05013 0.591708 2.65421 1.32092 2.65421C2.05013 2.65421 2.64183 2.05013 2.64183 1.32092C2.64138 0.591708 2.04967 0 1.32092 0V0Z"
          fill="#1A202C"
        />
      </g>
      <defs>
        <clipPath id="clip0_418_347">
          <rect width="11" height="11" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  HamburgerOpen: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  HamburgerClose: () => (
    <svg
      height="24"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        className="heroicon-ui"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
      />
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 md:h-4 ml-2 transform transition-transform duration-300 "
    >
      <path
        d="M3.78132 4.99999L0.481323 1.69999L1.42399 0.757324L5.66666 4.99999L1.42399 9.24266L0.481323 8.29999L3.78132 4.99999Z"
        fill="url(#paint0_linear_222_305)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_305"
          x1="5.66666"
          y1="0.757324"
          x2="-1.88424"
          y2="5.37163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  caseStudies1: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill="url(#paint0_linear_1_570)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_570"
          x1="18"
          y1="0"
          x2="0"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  caseStudies2: () => (
    <svg
      className="md:w-32 lg:w-36 lg:h-56 md:h-52"
      viewBox="0 0 138 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M137.87 175.959C69.1616 176.791 -26.4482 102.661 8.86649 0.767502"
        stroke="url(#paint0_linear_1_554)"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_554"
          x1="8.86649"
          y1="0.767503"
          x2="27.7912"
          y2="196.704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  caseStudies3: () => (
    <svg
      viewBox="0 0 170 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-32 lg:w-36 lg:h-56 md:h-52"
    >
      <path
        d="M157.883 0.866352C192.463 86.7443 146.034 242.992 0.840961 248.376"
        stroke="url(#paint0_linear_1_551)"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_551"
          x1="0.840967"
          y1="248.376"
          x2="237.661"
          y2="128.978"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  caseStudies4: () => (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4976 3.61173L1.67318 7.34122L0.607822 4.82048L11.953 0.0256266L16.7478 11.3708L14.2271 12.4361L10.4976 3.61173Z"
        fill="url(#paint0_linear_222_287)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_287"
          x1="3.88297"
          y1="-3.24952"
          x2="6.83091"
          y2="14.6751"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  caseStudies5: () => (
    <svg
      width="12"
      height="25"
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.8278 12.2372L14.8183 21.4986L12.1727 24.0668L0.614037 12.1598L12.521 0.601156L15.0892 3.24673L5.8278 12.2372Z"
        fill="url(#paint0_linear_222_492)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_492"
          x1="0.439883"
          y1="23.8926"
          x2="21.5108"
          y2="11.442"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  BuildingSoftware1: () => (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32.9051"
        cy="32.9051"
        r="32.241"
        transform="rotate(35.0154 32.9051 32.9051)"
        fill="url(#paint0_linear_1_611)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_611"
          x1="65.1462"
          y1="0.664104"
          x2="0.664093"
          y2="65.1462"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  BuildingSoftware2: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15.0659"
        cy="15.0661"
        r="14.4069"
        transform="rotate(35.0154 15.0659 15.0661)"
        fill="url(#paint0_linear_1_613)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_613"
          x1="29.4728"
          y1="0.659142"
          x2="0.658995"
          y2="29.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  BuildingSoftware3: () => (
    <svg
      width="73"
      height="73"
      viewBox="0 0 73 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="36.5192"
        cy="36.5236"
        r="35.5806"
        transform="rotate(35.0154 36.5192 36.5236)"
        fill="url(#paint0_linear_1_614)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_614"
          x1="72.0998"
          y1="0.943012"
          x2="0.938648"
          y2="72.1041"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  BuildingSoftware4: () => (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22.4179"
        cy="22.4183"
        r="21.8395"
        transform="rotate(35.0154 22.4179 22.4183)"
        fill="url(#paint0_linear_1_615)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_615"
          x1="44.2574"
          y1="0.5788"
          x2="0.578402"
          y2="44.2578"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  BuildingSoftware5: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15.0659"
        cy="15.0661"
        r="14.4069"
        transform="rotate(35.0154 15.0659 15.0661)"
        fill="url(#paint0_linear_1_613)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_613"
          x1="29.4728"
          y1="0.659142"
          x2="0.658995"
          y2="29.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  VerticalLine: () => (
    <svg
      width="3"
      height="87"
      viewBox="0 0 3 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="87" fill="url(#paint0_linear_1_627)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_627"
          x1="3"
          y1="0"
          x2="-2.99287"
          y2="0.206651"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  NextArrow: (props: IconProps) => (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.937499 6.56245H12.0562L8.65312 2.47495C8.49399 2.2835 8.41744 2.03667 8.44029 1.78877C8.46315 1.54088 8.58355 1.31221 8.775 1.15308C8.96645 0.993948 9.21328 0.91739 9.46118 0.940246C9.70908 0.963102 9.93775 1.0835 10.0969 1.27495L14.7844 6.89995C14.8159 6.94469 14.8441 6.9917 14.8688 7.04058C14.8688 7.08745 14.8687 7.11558 14.9344 7.16245C14.9769 7.26995 14.9991 7.38437 15 7.49995C14.9991 7.61554 14.9769 7.72996 14.9344 7.83745C14.9344 7.88433 14.9344 7.91245 14.8688 7.95933C14.8441 8.00821 14.8159 8.05521 14.7844 8.09995L10.0969 13.725C10.0087 13.8308 9.89835 13.9159 9.77358 13.9742C9.64882 14.0326 9.51273 14.0627 9.375 14.0625C9.15595 14.0629 8.94367 13.9866 8.775 13.8468C8.68007 13.7681 8.6016 13.6715 8.54408 13.5624C8.48656 13.4533 8.45113 13.334 8.43981 13.2112C8.42849 13.0884 8.4415 12.9646 8.47811 12.8468C8.51471 12.7291 8.57418 12.6197 8.65312 12.525L12.0562 8.43745H0.937499C0.688859 8.43745 0.450401 8.33868 0.274586 8.16287C0.0987701 7.98705 -9.53674e-07 7.74859 -9.53674e-07 7.49995C-9.53674e-07 7.25131 0.0987701 7.01286 0.274586 6.83704C0.450401 6.66123 0.688859 6.56245 0.937499 6.56245Z"
        fill={props.color ? props.color : "#57007B"}
      />
    </svg>
  ),
  PrevArrow: (props: IconProps) => (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0625 6.56245H2.94375L6.34688 2.47495C6.50601 2.2835 6.58256 2.03667 6.55971 1.78877C6.53685 1.54088 6.41645 1.31221 6.225 1.15308C6.03355 0.993948 5.78672 0.91739 5.53882 0.940246C5.29092 0.963102 5.06225 1.0835 4.90312 1.27495L0.215625 6.89995C0.184088 6.94469 0.155887 6.9917 0.13125 7.04058C0.13125 7.08745 0.13125 7.11558 0.0656252 7.16245C0.0231316 7.26995 0.000882301 7.38437 0 7.49995C0.000882301 7.61554 0.0231316 7.72996 0.0656252 7.83745C0.0656252 7.88433 0.0656249 7.91245 0.13125 7.95933C0.155887 8.00821 0.184088 8.05521 0.215625 8.09995L4.90312 13.725C4.99127 13.8308 5.10165 13.9159 5.22642 13.9742C5.35118 14.0326 5.48727 14.0627 5.625 14.0625C5.84405 14.0629 6.05633 13.9866 6.225 13.8468C6.31993 13.7681 6.3984 13.6715 6.45592 13.5624C6.51344 13.4533 6.54887 13.334 6.56019 13.2112C6.57151 13.0884 6.5585 12.9646 6.52189 12.8468C6.48529 12.7291 6.42582 12.6197 6.34688 12.525L2.94375 8.43745H14.0625C14.3111 8.43745 14.5496 8.33868 14.7254 8.16287C14.9012 7.98705 15 7.74859 15 7.49995C15 7.25131 14.9012 7.01286 14.7254 6.83704C14.5496 6.66123 14.3111 6.56245 14.0625 6.56245Z"
        fill={props.color ? props.color : "#57007B"}
      />
    </svg>
  ),
  quotes1: () => (
    <svg
      width={14}
      height={24}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63333 12.0384C3.75862 13.0134 5.17792 13.5836 6.66499 13.6582C8.15206 13.7328 9.62129 13.3074 10.8385 12.4499C12.0557 11.5924 12.9508 10.352 13.3811 8.92664C13.8114 7.50124 13.7522 5.97281 13.2128 4.585C12.6735 3.19718 11.6851 2.02986 10.4051 1.26912C9.12521 0.508373 7.62746 0.197994 6.15062 0.387453C4.67379 0.576913 3.30288 1.25531 2.25644 2.3145C1.20999 3.37369 0.548237 4.7527 0.376664 6.23172C-0.216669 9.24839 -0.210003 12.8434 1.15 16.0651C2.58666 19.4651 5.485 22.3317 10.4333 23.6267C10.5927 23.6701 10.759 23.6814 10.9228 23.6601C11.0866 23.6387 11.2445 23.5852 11.3874 23.5025C11.5303 23.4198 11.6555 23.3095 11.7556 23.1782C11.8557 23.0468 11.9288 22.897 11.9706 22.7372C12.0124 22.5775 12.0222 22.411 11.9993 22.2474C11.9765 22.0839 11.9214 21.9265 11.8374 21.7843C11.7533 21.6422 11.6419 21.5181 11.5096 21.4192C11.3774 21.3204 11.2268 21.2487 11.0667 21.2084C6.84833 20.1034 4.58 17.7584 3.45333 15.0917C3.04698 14.1144 2.77127 13.0878 2.63333 12.0384Z"
        fill="url(#paint0_linear_1_535)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_535"
          x1="0.000833511"
          y1="0.333252"
          x2="20.3527"
          y2="12.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset={1} stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  quotes2: () => (
    <svg
      width={14}
      height={24}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3666 12.0384C10.2413 13.0134 8.82205 13.5836 7.33498 13.6582C5.84791 13.7328 4.37868 13.3074 3.16148 12.4499C1.94428 11.5924 1.04918 10.352 0.618868 8.92664C0.188555 7.50124 0.247797 5.97281 0.787149 4.585C1.3265 3.19718 2.31492 2.02986 3.59484 1.26912C4.87476 0.508373 6.37251 0.197994 7.84935 0.387453C9.32618 0.576913 10.6971 1.25531 11.7435 2.3145C12.79 3.37369 13.4517 4.7527 13.6233 6.23172C14.2166 9.24838 14.21 12.8434 12.85 16.0651C11.4133 19.4651 8.51497 22.3317 3.56664 23.6267C3.40729 23.6701 3.24092 23.6814 3.07717 23.6601C2.91341 23.6387 2.7555 23.5852 2.61256 23.5025C2.46962 23.4198 2.34449 23.3095 2.2444 23.1782C2.1443 23.0468 2.07122 22.897 2.02938 22.7372C1.98754 22.5775 1.97778 22.411 2.00064 22.2474C2.02351 22.0839 2.07856 21.9265 2.16261 21.7843C2.24666 21.6422 2.35804 21.5181 2.49032 21.4192C2.62261 21.3204 2.77317 21.2487 2.93331 21.2084C7.15164 20.1034 9.41997 17.7584 10.5466 15.0917C10.953 14.1144 11.2287 13.0878 11.3666 12.0384Z"
        fill="url(#paint0_linear_1_532)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_532"
          x1="13.9991"
          y1="0.333252"
          x2="-6.35274"
          y2="12.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset={1} stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  ),
  LinkIcon: () => (
    <svg
      fill="none"
      stroke="#57007B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  upperArrow: (props: IconProps) => (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="34.467"
        height="6.60908"
        rx="3.30454"
        transform="matrix(-0.601033 -0.799224 0.914216 -0.405227 20.7158 39.9995)"
        fill="url(#paint0_linear_1_701)"
      />
      <rect
        x="55.3235"
        y="31.8086"
        width="31.8084"
        height="6.97684"
        rx="3.48842"
        transform="rotate(-90 55.3235 31.8086)"
        fill="url(#paint1_linear_1_701)"
      />
      <rect
        width="34.8564"
        height="6.5509"
        rx="3.27545"
        transform="matrix(0.638227 -0.769848 0.898472 0.43903 91.3235 36.814)"
        fill="url(#paint2_linear_1_701)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_701"
          x1="34.467"
          y1="0"
          x2="32.0223"
          y2="12.7494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_701"
          x1="87.1318"
          y1="31.8086"
          x2="84.2117"
          y2="45.1218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_701"
          x1="34.8564"
          y1="0"
          x2="32.4781"
          y2="12.6548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  lowerArrow: (props: IconProps) => (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="34.4666"
        height="6.60906"
        rx="3.30453"
        transform="matrix(-0.601039 0.79922 0.914219 0.405221 20.7158 -0.000488281)"
        fill="url(#paint0_linear_1_705)"
      />
      <rect
        width="31.8078"
        height="6.97684"
        rx="3.48842"
        transform="matrix(0 1 1 0 55.3235 8.19092)"
        fill="url(#paint1_linear_1_705)"
      />
      <rect
        width="34.8561"
        height="6.55088"
        rx="3.27544"
        transform="matrix(0.638233 0.769843 0.898475 -0.439024 91.3235 3.18555)"
        fill="url(#paint2_linear_1_705)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_705"
          x1="34.4666"
          y1="0"
          x2="32.0219"
          y2="12.7493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_705"
          x1="31.8078"
          y1="0"
          x2="28.8877"
          y2="13.3132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_705"
          x1="34.8561"
          y1="0"
          x2="32.4777"
          y2="12.6548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEF5E" />
          <stop offset="1" stopColor="#F7936F" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
