import { ButtonContainer } from "./ButtonStyle";

function Button({
  children,
  fontSize,
  primary,
  secondary,
  animatePrimary,
  animateSecondary,
  animation,
  cardButton,
  buttonMargin,
}) {
  return (
    <ButtonContainer
      secondary={secondary}
      primary={primary}
      fontSize={fontSize}
      animatePrimary={animatePrimary}
      animateSecondary={animateSecondary}
      animation={animation}
      cardButton={cardButton}
      buttonMargin={buttonMargin}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
