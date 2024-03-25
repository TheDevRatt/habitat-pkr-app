import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LockIcon = (props) => (
  <Svg
    width={props.size || 30}
    height={props.size || 30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M21.25 10.0002H20V7.6377C20 6.31161 19.4732 5.03984 18.5355 4.10216C17.5979 3.16448 16.3261 2.6377 15 2.6377C13.6739 2.6377 12.4021 3.16448 11.4645 4.10216C10.5268 5.03984 10 6.31161 10 7.6377V10.0002H8.75C7.75544 10.0002 6.80161 10.3953 6.09835 11.0985C5.39509 11.8018 5 12.7556 5 13.7502V23.7502C5 24.7448 5.39509 25.6986 6.09835 26.4018C6.80161 27.1051 7.75544 27.5002 8.75 27.5002H21.25C22.2446 27.5002 23.1984 27.1051 23.9017 26.4018C24.6049 25.6986 25 24.7448 25 23.7502V13.7502C25 12.7556 24.6049 11.8018 23.9017 11.0985C23.1984 10.3953 22.2446 10.0002 21.25 10.0002ZM12.5 7.6377C12.4832 6.95682 12.7368 6.29701 13.2054 5.80269C13.6739 5.30838 14.3192 5.01983 15 5.0002C15.6808 5.01983 16.3261 5.30838 16.7946 5.80269C17.2632 6.29701 17.5168 6.95682 17.5 7.6377V10.0002H12.5V7.6377ZM22.5 23.7502C22.5 24.0817 22.3683 24.3997 22.1339 24.6341C21.8995 24.8685 21.5815 25.0002 21.25 25.0002H8.75C8.41848 25.0002 8.10054 24.8685 7.86612 24.6341C7.6317 24.3997 7.5 24.0817 7.5 23.7502V13.7502C7.5 13.4187 7.6317 13.1007 7.86612 12.8663C8.10054 12.6319 8.41848 12.5002 8.75 12.5002H21.25C21.5815 12.5002 21.8995 12.6319 22.1339 12.8663C22.3683 13.1007 22.5 13.4187 22.5 13.7502V23.7502Z" fill={props.color || "#231F20"} />
    <Path d="M15 15C14.2583 15 13.5333 15.2199 12.9166 15.632C12.2999 16.044 11.8193 16.6297 11.5355 17.3149C11.2516 18.0002 11.1774 18.7542 11.3221 19.4816C11.4668 20.209 11.8239 20.8772 12.3484 21.4017C12.8728 21.9261 13.541 22.2833 14.2684 22.4279C14.9958 22.5726 15.7498 22.4984 16.4351 22.2145C17.1203 21.9307 17.706 21.4501 18.118 20.8334C18.5301 20.2167 18.75 19.4917 18.75 18.75C18.75 17.7554 18.3549 16.8016 17.6517 16.0983C16.9484 15.3951 15.9946 15 15 15ZM15 20C14.7528 20 14.5111 19.9267 14.3055 19.7893C14.1 19.652 13.9398 19.4568 13.8452 19.2284C13.7505 18.9999 13.7258 18.7486 13.774 18.5061C13.8223 18.2637 13.9413 18.0409 14.1161 17.8661C14.2909 17.6913 14.5137 17.5722 14.7561 17.524C14.9986 17.4758 15.2499 17.5005 15.4784 17.5952C15.7068 17.6898 15.902 17.85 16.0393 18.0555C16.1767 18.2611 16.25 18.5028 16.25 18.75C16.25 19.0815 16.1183 19.3995 15.8839 19.6339C15.6495 19.8683 15.3315 20 15 20Z" fill={props.color || "#231F20"} />
  </Svg>
);

export default LockIcon;