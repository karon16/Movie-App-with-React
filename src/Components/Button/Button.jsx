import { ButtonContainer } from "./ButtonStyle";

function Button({
  children,
  fontSize,
  primary,
  secondary,
  animatePrimary,
  animateSecondary,
}) {
  return (
    <div>
      <ButtonContainer
        secondary={secondary}
        primary={primary}
        fontSize={fontSize}
        animatePrimary={animatePrimary}
        animateSecondary={animateSecondary}
      >
        {children}
      </ButtonContainer>
    </div>
  );
}

export default Button;
