import { Container, variantToColor } from "./styles";

export type ButtonProps = {
  variant: "primary" | "secondary" | "outline";
  children: string;
};

export function Button({ children, variant }: ButtonProps) {
  const { bgColor, borderColor, color, hover } = variantToColor[variant];

  return (
    <Container
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      hoverBgColor={hover.bgColor}
      hoverColor={hover.color}
    >
      {children}
    </Container>
  );
}
