import { ButtonContainer } from "./ButtonStyle";

function Button({
  children,
  fontsize,
  primary,
  secondary,
  animateprimary,
  animatesecondary,
  animation,
  cardbutton,
  buttonmargin,
}) {
  return (
    <ButtonContainer
      secondary={secondary}
      primary={primary}
      fontsize={fontsize}
      animateprimary={animateprimary}
      animatesecondary={animatesecondary}
      animation={animation}
      cardbutton={cardbutton}
      buttonmargin={buttonmargin}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
