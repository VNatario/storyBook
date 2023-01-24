import styled from "styled-components";
import { AppColors } from "../../styles/global";

type ContainerProps = {
  bgColor: string;
  color: string;
  borderColor: string;
  hoverBgColor: string;
  hoverColor: string;
};

export const variantToColor = {
  primary: {
    bgColor: AppColors.primary,
    borderColor: AppColors.primary,
    color: AppColors.gray,
    hover: {
      bgColor: AppColors.darkPrimary,
      color: AppColors.gray,
    },
  },
  secondary: {
    bgColor: AppColors.secondary,
    borderColor: AppColors.secondary,
    color: AppColors.lightGray,
    hover: {
      bgColor: AppColors.darkSecondary,
      color: AppColors.lightGray,
    },
  },
  outline: {
    bgColor: "transparent",
    borderColor: AppColors.gray,
    color: AppColors.gray,
    hover: {
      bgColor: AppColors.gray,
      color: AppColors.lightGray,
    },
  },
};

export const Container = styled.button<ContainerProps>`
  width: 100%;
  max-width: 180px;
  height: 48px;

  background-color: ${(props) => props.bgColor};
  border: 0.25rem solid ${(props) => props.borderColor};
  border-radius: 0.25rem;

  color: ${(props) => props.color};

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    border: 0.5rem solid ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
  }
`;
