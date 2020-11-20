import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (      
    <Link href="/">
      <a className="text-gray-800 hover:text-gray-300">
      <svg width="204" height="56" viewBox="0 0 204 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5 28.3C36.76 28.3 34.62 27.59 33.08 26.17C31.56 24.75 30.75 22.77 30.65 20.23C30.63 19.65 30.62 18.72 30.62 17.44C30.62 16.16 30.63 15.23 30.65 14.65C30.75 12.17 31.57 10.23 33.11 8.83C34.67 7.41 36.8 6.7 39.5 6.7C41.34 6.7 42.92 7.01 44.24 7.63C45.56 8.25 46.56 9.03 47.24 9.97C47.92 10.89 48.28 11.8 48.32 12.7V12.76C48.32 12.92 48.26 13.06 48.14 13.18C48.02 13.28 47.87 13.33 47.69 13.33H44.6C44.4 13.33 44.25 13.3 44.15 13.24C44.05 13.16 43.96 13.03 43.88 12.85C43.6 12.11 43.11 11.48 42.41 10.96C41.71 10.42 40.74 10.15 39.5 10.15C38.1 10.15 37 10.53 36.2 11.29C35.42 12.05 35 13.22 34.94 14.8C34.92 15.38 34.91 16.26 34.91 17.44C34.91 18.6 34.92 19.48 34.94 20.08C35.06 23.26 36.6 24.85 39.56 24.85C40.98 24.85 42.12 24.47 42.98 23.71C43.84 22.93 44.27 21.78 44.27 20.26V19.33H40.61C40.39 19.33 40.21 19.26 40.07 19.12C39.95 18.98 39.89 18.8 39.89 18.58V16.99C39.89 16.77 39.95 16.59 40.07 16.45C40.21 16.31 40.39 16.24 40.61 16.24H47.78C48 16.24 48.17 16.31 48.29 16.45C48.43 16.59 48.5 16.77 48.5 16.99V20.14C48.5 21.8 48.13 23.25 47.39 24.49C46.67 25.71 45.63 26.65 44.27 27.31C42.91 27.97 41.32 28.3 39.5 28.3Z" fill="#7BDEFB"/>
<path d="M29.745 29.269C29.7431 29.069 29.8114 28.8985 29.95 28.7575C30.0887 28.6164 30.258 28.5451 30.458 28.5437L49.9874 28.3978C50.2074 28.3961 50.388 28.4548 50.5292 28.5737C50.6705 28.7127 50.7423 28.8922 50.7444 29.1121L50.8296 37.8117C50.8525 40.1516 50.3496 41.8954 49.3207 43.0431C48.3121 44.2107 46.9178 44.8011 45.1379 44.8144C44.0979 44.8222 43.2054 44.5688 42.4603 44.0544C41.7355 43.5598 41.2097 42.9737 40.883 42.2961C40.5113 43.1389 39.8982 43.8435 39.0437 44.4099C38.1894 44.9963 37.2122 45.2936 36.1123 45.3018C34.2523 45.3157 32.7462 44.697 31.5939 43.4455C30.4418 42.2141 29.8547 40.4685 29.8325 38.2086L29.745 29.269ZM42.2146 37.3361C42.2247 38.376 42.4825 39.1641 42.9877 39.7003C43.493 40.2366 44.1656 40.5016 45.0056 40.4953C45.8656 40.4889 46.5229 40.214 46.9776 39.6705C47.4523 39.127 47.6846 38.3352 47.6744 37.2953L47.6283 32.5855L42.1685 32.6263L42.2146 37.3361ZM33.0078 37.7048C33.0179 38.7448 33.3059 39.5527 33.8715 40.1284C34.4572 40.7041 35.19 40.9886 36.07 40.982C36.9699 40.9753 37.6971 40.6799 38.2514 40.0957C38.8257 39.5114 39.1078 38.6993 39.0976 37.6594L39.0485 32.6496L32.9587 32.6951L33.0078 37.7048Z" fill="#388AF7"/>
<path d="M66 34.2C64.1733 34.2 62.7467 33.7267 61.72 32.78C60.7067 31.8333 60.1667 30.5133 60.1 28.82C60.0867 28.4333 60.08 27.8133 60.08 26.96C60.08 26.1067 60.0867 25.4867 60.1 25.1C60.1667 23.4467 60.7133 22.1533 61.74 21.22C62.78 20.2733 64.2 19.8 66 19.8C67.2267 19.8 68.28 20.0067 69.16 20.42C70.04 20.8333 70.7067 21.3533 71.16 21.98C71.6133 22.5933 71.8533 23.2 71.88 23.8V23.84C71.88 23.9467 71.84 24.04 71.76 24.12C71.68 24.1867 71.58 24.22 71.46 24.22H69.4C69.2667 24.22 69.1667 24.2 69.1 24.16C69.0333 24.1067 68.9733 24.02 68.92 23.9C68.7333 23.4067 68.4067 22.9867 67.94 22.64C67.4733 22.28 66.8267 22.1 66 22.1C65.0667 22.1 64.3333 22.3533 63.8 22.86C63.28 23.3667 63 24.1467 62.96 25.2C62.9467 25.5867 62.94 26.1733 62.94 26.96C62.94 27.7333 62.9467 28.32 62.96 28.72C63.04 30.84 64.0667 31.9 66.04 31.9C66.9867 31.9 67.7467 31.6467 68.32 31.14C68.8933 30.62 69.18 29.8533 69.18 28.84V28.22H66.74C66.5933 28.22 66.4733 28.1733 66.38 28.08C66.3 27.9867 66.26 27.8667 66.26 27.72V26.66C66.26 26.5133 66.3 26.3933 66.38 26.3C66.4733 26.2067 66.5933 26.16 66.74 26.16H71.52C71.6667 26.16 71.78 26.2067 71.86 26.3C71.9533 26.3933 72 26.5133 72 26.66V28.76C72 29.8667 71.7533 30.8333 71.26 31.66C70.78 32.4733 70.0867 33.1 69.18 33.54C68.2733 33.98 67.2133 34.2 66 34.2ZM80.0839 34.2C78.7106 34.2 77.6439 33.7267 76.8839 32.78V33.52C76.8839 33.6533 76.8372 33.7667 76.7439 33.86C76.6639 33.9533 76.5506 34 76.4039 34H74.8239C74.6906 34 74.5772 33.9533 74.4839 33.86C74.3906 33.7667 74.3439 33.6533 74.3439 33.52V20.28C74.3439 20.1333 74.3906 20.02 74.4839 19.94C74.5772 19.8467 74.6906 19.8 74.8239 19.8H76.5239C76.6706 19.8 76.7839 19.8467 76.8639 19.94C76.9572 20.02 77.0039 20.1333 77.0039 20.28V24.72C77.7639 23.84 78.7906 23.4 80.0839 23.4C81.4306 23.4 82.4639 23.84 83.1839 24.72C83.9039 25.6 84.2906 26.74 84.3439 28.14C84.3572 28.3 84.3639 28.5133 84.3639 28.78C84.3639 29.06 84.3572 29.28 84.3439 29.44C84.2906 30.88 83.9039 32.0333 83.1839 32.9C82.4639 33.7667 81.4306 34.2 80.0839 34.2ZM79.3439 32.06C80.7839 32.06 81.5506 31.1733 81.6439 29.4C81.6572 29.2667 81.6639 29.0667 81.6639 28.8C81.6639 28.5333 81.6572 28.3333 81.6439 28.2C81.5506 26.4267 80.7839 25.54 79.3439 25.54C78.5972 25.54 78.0239 25.78 77.6239 26.26C77.2372 26.7267 77.0306 27.2933 77.0039 27.96L76.9839 28.72L77.0039 29.5C77.0439 30.22 77.2506 30.8267 77.6239 31.32C77.9972 31.8133 78.5706 32.06 79.3439 32.06ZM87.0695 34C86.9362 34 86.8229 33.9533 86.7295 33.86C86.6362 33.7667 86.5895 33.6533 86.5895 33.52V24.1C86.5895 23.9667 86.6362 23.8533 86.7295 23.76C86.8229 23.6533 86.9362 23.6 87.0695 23.6H88.6895C88.8362 23.6 88.9562 23.6467 89.0495 23.74C89.1429 23.8333 89.1895 23.9533 89.1895 24.1V24.92C89.5095 24.4933 89.9095 24.1667 90.3895 23.94C90.8829 23.7133 91.4429 23.6 92.0695 23.6H92.8895C93.0362 23.6 93.1495 23.6467 93.2295 23.74C93.3229 23.82 93.3695 23.9333 93.3695 24.08V25.52C93.3695 25.6533 93.3229 25.7667 93.2295 25.86C93.1495 25.9533 93.0362 26 92.8895 26H91.3295C90.7029 26 90.2095 26.18 89.8495 26.54C89.4895 26.9 89.3095 27.3933 89.3095 28.02V33.52C89.3095 33.6533 89.2629 33.7667 89.1695 33.86C89.0762 33.9533 88.9562 34 88.8095 34H87.0695ZM98.7894 34.2C97.5627 34.2 96.596 33.8 95.8894 33C95.1827 32.1867 94.8294 31.0867 94.8294 29.7V24.08C94.8294 23.9467 94.876 23.8333 94.9694 23.74C95.0627 23.6467 95.176 23.6 95.3094 23.6H97.0694C97.216 23.6 97.3294 23.6467 97.4094 23.74C97.5027 23.82 97.5494 23.9333 97.5494 24.08V29.58C97.5494 31.2333 98.276 32.06 99.7294 32.06C100.423 32.06 100.969 31.84 101.369 31.4C101.783 30.96 101.989 30.3533 101.989 29.58V24.08C101.989 23.9467 102.036 23.8333 102.129 23.74C102.223 23.6467 102.336 23.6 102.469 23.6H104.229C104.376 23.6 104.489 23.6467 104.569 23.74C104.663 23.82 104.709 23.9333 104.709 24.08V33.52C104.709 33.6533 104.663 33.7667 104.569 33.86C104.489 33.9533 104.376 34 104.229 34H102.609C102.476 34 102.363 33.9533 102.269 33.86C102.176 33.7667 102.129 33.6533 102.129 33.52V32.7C101.383 33.7 100.269 34.2 98.7894 34.2ZM111.031 34C110.831 34 110.678 33.96 110.571 33.88C110.465 33.7867 110.378 33.66 110.311 33.5L106.571 24.22L106.531 24.04C106.531 23.92 106.571 23.82 106.651 23.74C106.745 23.6467 106.851 23.6 106.971 23.6H108.591C108.845 23.6 109.018 23.7267 109.111 23.98L111.771 31L114.431 23.98C114.471 23.8867 114.531 23.8 114.611 23.72C114.705 23.64 114.818 23.6 114.951 23.6H116.591C116.698 23.6 116.791 23.6467 116.871 23.74C116.965 23.82 117.011 23.92 117.011 24.04C117.011 24.12 117.005 24.18 116.991 24.22L113.231 33.5C113.165 33.66 113.078 33.7867 112.971 33.88C112.865 33.96 112.711 34 112.511 34H111.031Z" fill="#414859"/>
</svg>
‚
      </a>
    </Link>
  )
}

export default Logo
