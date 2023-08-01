/* eslint-disable max-len */
import { FC } from 'react'

interface IconProps {
  size?: string
  color?: string
  onClick?: () => void
  dataTestId?: string
}

const IconX: FC<IconProps> = ({
  size = 24,
  color = '#707070',
  onClick = () => null,
  dataTestId,
}) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="closeIcon"
      data-testid={dataTestId}
      style={{ minWidth: size }}
    >
      <path
        d="M8.98987 10.0005L3.63634 4.64698C3.33331 4.34395 3.33331 3.8389 3.63634 3.53587C3.93937 3.23284 4.44442 3.23284 4.74745 3.53587L9.99997 8.8894L15.3535 3.53587C15.6565 3.23284 16.1616 3.23284 16.4646 3.53587C16.7677 3.8389 16.7677 4.34395 16.4646 4.64698L11.1111 10.0005L16.4646 15.354C16.7677 15.6571 16.7677 16.1621 16.4646 16.4652C16.3636 16.5662 16.1616 16.6672 15.9596 16.6672C15.7576 16.6672 15.5555 16.5662 15.4545 16.4652L10.101 11.1116L4.74745 16.4652C4.64644 16.5662 4.44442 16.6672 4.2424 16.6672C4.04038 16.6672 3.83836 16.5662 3.73735 16.4652C3.43432 16.1621 3.43432 15.6571 3.73735 15.354L8.98987 10.0005Z"
        fill={color}
      />
    </svg>
  )
}

export default IconX
