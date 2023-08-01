import { FC } from 'react'

interface IconPencilProps {
  size?: string
  color?: string
  onClick?: () => void
}

const IconPencil: FC<IconPencilProps> = ({
  size = '18',
  color = '#707070',
  onClick = () => {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.9906 14.8678L15.3505 6.50794C15.8832 5.97521 15.8832 5.11148 15.3505 4.57875L13.4213 2.64955C12.8885 2.11682 12.0248 2.11682 11.4921 2.64955L3.13221 11.0094C2.81915 11.3225 2.61607 11.7286 2.55345 12.1669L2.26408 14.1926C2.13546 15.0929 2.90714 15.8645 3.80743 15.7359L5.83309 15.4465C6.27138 15.3839 6.67754 15.1809 6.9906 14.8678ZM12.4567 3.80627L14.1937 5.54334L12.5997 7.13734L10.8627 5.40027L12.4567 3.80627ZM9.802 6.46093L4.19287 12.0701C4.1093 12.1536 4.05509 12.262 4.03838 12.379L3.77462 14.2254L5.62096 13.9616C5.73795 13.9449 5.84637 13.8907 5.92994 13.8071L11.5391 8.198L9.802 6.46093Z"
        fill={color}
      />
    </svg>
  )
}

export default IconPencil
