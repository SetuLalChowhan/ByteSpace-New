interface CustomSvgProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ShopSvg = ({ className, width = 24, height = 24 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
        fill="#F5F5F6"
      />
    </svg>
  );
};

export const WhiteStar = ({ className, width = 24, height = 24 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.4297 9.61158L12.9597 4.77158C12.6697 3.82158 11.3297 3.82158 11.0497 4.77158L9.56971 9.61158H5.11971C4.14971 9.61158 3.74971 10.8616 4.53971 11.4216L8.17972 14.0216L6.74971 18.6316C6.45971 19.5616 7.53972 20.3116 8.30972 19.7216L11.9997 16.9216L15.6897 19.7316C16.4597 20.3216 17.5397 19.5716 17.2497 18.6416L15.8197 14.0316L19.4597 11.4316C20.2497 10.8616 19.8497 9.62158 18.8797 9.62158H14.4297V9.61158Z"
        fill="#CED0D3"
      />
    </svg>
  );
};

export const Graph = ({ className, width = 20, height = 20 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.75 3.33325H16.25V16.6666H13.75V3.33325ZM3.75 11.6666H6.25V16.6666H3.75V11.6666ZM8.75 7.49992H11.25V16.6666H8.75V7.49992Z"
        fill="#4B4C53"
      />
    </svg>
  );
};

export const DesignSvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M24.36 17.2633L26.715 14.9083L21.09 9.28334L18.735 11.6383L12.525 5.44334C11.355 4.27334 9.45 4.27334 8.28 5.44334L5.43 8.29334C4.26 9.46334 4.26 11.3683 5.43 12.5383L11.625 18.7333L4.5 25.8733V31.4983H10.125L17.265 24.3583L23.46 30.5533C24.885 31.9783 26.805 31.4533 27.705 30.5533L30.555 27.7033C31.725 26.5333 31.725 24.6283 30.555 23.4583L24.36 17.2633ZM13.77 16.6033L7.56 10.4083L10.395 7.55834L12.3 9.46334L10.53 11.2483L12.645 13.3633L14.43 11.5783L16.605 13.7533L13.77 16.6033ZM25.59 28.4383L19.395 22.2433L22.245 19.3933L24.42 21.5683L22.635 23.3533L24.75 25.4683L26.535 23.6833L28.44 25.5883L25.59 28.4383Z"
        fill="#242528"
      />
      <path
        d="M31.065 10.5583C31.65 9.97334 31.65 9.02834 31.065 8.44334L27.555 4.93334C26.85 4.22834 25.875 4.49834 25.44 4.93334L22.695 7.67834L28.32 13.3033L31.065 10.5583Z"
        fill="#242528"
      />
    </svg>
  );
};

export const DevelopmentSvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M10.5 7.5H25.5V10.5H28.5V4.5C28.5 2.85 27.15 1.515 25.5 1.515L10.5 1.5C8.85 1.5 7.5 2.85 7.5 4.5V10.5H10.5V7.5ZM23.115 24.885L30 18L23.115 11.115L21 13.245L25.755 18L21 22.755L23.115 24.885ZM15 22.755L10.245 18L15 13.245L12.885 11.115L6 18L12.885 24.885L15 22.755ZM25.5 28.5H10.5V25.5H7.5V31.5C7.5 33.15 8.85 34.5 10.5 34.5H25.5C27.15 34.5 28.5 33.15 28.5 31.5V25.5H25.5V28.5Z"
        fill="#242528"
      />
    </svg>
  );
};

export const LaptopSvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M30 27C31.65 27 32.985 25.65 32.985 24L33 9C33 7.35 31.65 6 30 6H6C4.35 6 3 7.35 3 9V24C3 25.65 4.35 27 6 27H0L0 30H36V27H30ZM6 9H30V24H6V9Z"
        fill="#242528"
      />
    </svg>
  );
};

export const BusinessSvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M18 10.5V7.5C18 5.85 16.65 4.5 15 4.5H6C4.35 4.5 3 5.85 3 7.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V13.5C33 11.85 31.65 10.5 30 10.5H18ZM9 28.5H6V25.5H9V28.5ZM9 22.5H6V19.5H9V22.5ZM9 16.5H6V13.5H9V16.5ZM9 10.5H6V7.5H9V10.5ZM15 28.5H12V25.5H15V28.5ZM15 22.5H12V19.5H15V22.5ZM15 16.5H12V13.5H15V16.5ZM15 10.5H12V7.5H15V10.5ZM28.5 28.5H18V25.5H21V22.5H18V19.5H21V16.5H18V13.5H28.5C29.325 13.5 30 14.175 30 15V27C30 27.825 29.325 28.5 28.5 28.5ZM27 16.5H24V19.5H27V16.5ZM27 22.5H24V25.5H27V22.5Z"
        fill="#242528"
      />
    </svg>
  );
};

export const MarketingSvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M16.5 21H13.5C13.5 13.545 19.545 7.5 27 7.5V10.5C21.195 10.5 16.5 15.195 16.5 21ZM27 16.5V13.5C22.86 13.5 19.5 16.86 19.5 21H22.5C22.5 18.51 24.51 16.5 27 16.5ZM10.5 6C10.5 4.335 9.165 3 7.5 3C5.835 3 4.5 4.335 4.5 6C4.5 7.665 5.835 9 7.5 9C9.165 9 10.5 7.665 10.5 6ZM17.175 6.75H14.175C13.815 8.88 11.985 10.5 9.75 10.5H5.25C4.005 10.5 3 11.505 3 12.75V16.5H12V13.11C14.79 12.225 16.875 9.765 17.175 6.75ZM28.5 25.5C30.165 25.5 31.5 24.165 31.5 22.5C31.5 20.835 30.165 19.5 28.5 19.5C26.835 19.5 25.5 20.835 25.5 22.5C25.5 24.165 26.835 25.5 28.5 25.5ZM30.75 27H26.25C24.015 27 22.185 25.38 21.825 23.25H18.825C19.125 26.265 21.21 28.725 24 29.61V33H33V29.25C33 28.005 31.995 27 30.75 27Z"
        fill="#242528"
      />
    </svg>
  );
};

export const PhotographySvg = ({ className, width = 36, height = 36 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M30 7.5H25.245L22.5 4.5H13.5L10.755 7.5H6C4.35 7.5 3 8.85 3 10.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V10.5C33 8.85 31.65 7.5 30 7.5ZM30 28.5H6V10.5H12.075L14.82 7.5H21.18L23.925 10.5H30V28.5Z"
        fill="#242528"
      />
      <path
        d="M18 19.5C19.6569 19.5 21 18.1569 21 16.5C21 14.8431 19.6569 13.5 18 13.5C16.3431 13.5 15 14.8431 15 16.5C15 18.1569 16.3431 19.5 18 19.5Z"
        fill="#242528"
      />
      <path
        d="M22.17 21.87C20.895 21.315 19.485 21 18 21C16.515 21 15.105 21.315 13.83 21.87C12.72 22.35 12 23.43 12 24.645V25.5H24V24.645C24 23.43 23.28 22.35 22.17 21.87Z"
        fill="#242528"
      />
    </svg>
  );
};

export const CheckCircleSvg = ({ className, width = 24, height = 24 }: CustomSvgProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="#003BE2"
      />
    </svg>
  );
};

export const FacebookSvg = ({ className, width = 40, height = 40 }: CustomSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 28.3187 9.42826 35.2138 17.396 36.4641V24.8176H13.1642V19.9999H17.396V16.328C17.396 12.151 19.8842 9.84366 23.6912 9.84366C25.5147 9.84366 27.422 10.1692 27.422 10.1692V14.2707H25.3204C23.25 14.2707 22.6043 15.5555 22.6043 16.8735V19.9999H27.2267L26.4878 24.8176H22.6043V36.4641C30.5721 35.2138 36.6668 28.3187 36.6668 19.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GoogleSvg = ({ className, width = 40, height = 40 }: CustomSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M35.9585 20.3749C35.9585 19.2777 35.8613 18.236 35.6946 17.2221H20.0002V23.486H28.9863C28.5835 25.5416 27.4029 27.2777 25.6529 28.4583V32.6249H31.0141C34.1529 29.7221 35.9585 25.4444 35.9585 20.3749Z"
        fill="currentColor"
      />
      <path
        d="M20.0002 9.93047C22.4585 9.93047 24.6529 10.7777 26.3891 12.4305L31.1391 7.68048C28.2641 4.98603 24.5002 3.33325 20.0002 3.33325C13.4863 3.33325 7.86127 7.08326 5.12516 12.5277L10.6529 16.8194C11.9724 12.861 15.6529 9.93047 20.0002 9.93047Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0002 36.6666C13.4863 36.6666 7.86127 32.9166 5.12516 27.4721L10.6529 23.1805C11.9724 27.1388 15.6529 30.0694 20.0002 30.0694C22.2502 30.0694 24.1529 29.4583 25.6529 28.4583L31.0141 32.6249C28.2641 35.1666 24.5002 36.6666 20.0002 36.6666ZM10.6529 16.8194V12.5277H5.12516L10.6529 16.8194Z"
        fill="currentColor"
      />
      <path
        d="M5.12516 23.1805H10.6529C10.3057 22.1805 10.1252 21.111 10.1252 19.9999C10.1252 18.8888 10.3196 17.8194 10.6529 16.8194L5.12516 12.5277C3.98627 14.7777 3.3335 17.3055 3.3335 19.9999C3.3335 22.6944 3.98627 25.2221 5.12516 27.4721V23.1805Z"
        fill="currentColor"
      />
      <path
        d="M10.6529 23.1805H5.12516V27.4721L10.6529 23.1805Z"
        fill="currentColor"
      />
    </svg>
  );
};


