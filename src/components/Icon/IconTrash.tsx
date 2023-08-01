import { FC } from 'react'

interface IProps {
  width?: number
  height?: number
  onClick?: () => void
  color?: string
  role?: React.AriaRole
}

const IconTrash: FC<IProps> = ({
  width,
  height,
  onClick,
  color = '#707070',
  ...props
}) => (
  <svg
    width={width || 16}
    height={height || 20}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2H6V4H10V2ZM12 4V2C12 0.895431 11.1046 0 10 0H6C4.89543 0 4 0.89543 4 2V4H3H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6V16C1 18.2091 2.79086 20 5 20H11C13.2091 20 15 18.2091 15 16V6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4H13H12ZM13 6H10H6H3V16C3 17.1046 3.89543 18 5 18H11C12.1046 18 13 17.1046 13 16V6ZM7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44771 5 9L5 15C5 15.5523 5.44771 16 6 16C6.55228 16 7 15.5523 7 15L7 9ZM10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15V9C9 8.44771 9.44772 8 10 8Z"
      fill={color}
    />
  </svg>
)

export default IconTrash
