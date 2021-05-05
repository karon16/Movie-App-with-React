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
  centered,
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
      centered={centered}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
