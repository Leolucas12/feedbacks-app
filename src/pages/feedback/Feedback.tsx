import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
import goodieRedBottom from '../../assets/goodie-red-bottom.svg';
import goodieRedRight from '../../assets/goodie-red-right.svg';
import goodieUpsideDown from '../../assets/goodie-upside-down.svg';
import goodieYellowRight from '../../assets/goodie-yellow-right.svg';
import goodieYellowTop from '../../assets/goodie-yellow-top.svg';
import goodieYellow from '../../assets/goodie-yellow.svg';
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Textarea } from "../../components/textarea/Textarea";
import { Container, FeedbackForm, Footer, FormSection, FormTitle, GoodieRedBottom, GoodieRedRight, GoodieUpsideDown, GoodieYellow, GoodieYellowRight, GoodieYellowTop, MapImage, SocialNewtorks } from "./styles";

export function FeedBack() {
  return (
    <Container>
      <FormSection>
        <FeedbackForm>
          <FormTitle>Reach out to us!</FormTitle>
          <Input name="name" type="text" placeholer="Your name*" />
          <Input name="email" type="email" placeholer="Your e-mail*" />
          <Textarea name="message" placeholer="Your message*" />
          <Button text="Send message" />
        </FeedbackForm>
        <MapImage />
      </FormSection>
      <Footer>
        <SocialNewtorks>
          <FaLinkedinIn />
          <FaTwitter />
          <FaFacebookF />
          <FaPinterestP />
        </SocialNewtorks>

        <GoodieRedBottom src={goodieRedBottom} alt="smile" />
        <GoodieYellowRight src={goodieYellowRight} alt="smile" />
        <GoodieUpsideDown src={goodieUpsideDown} alt="smile" />
      </Footer>

      <GoodieRedRight src={goodieRedRight} alt="smile" />
      <GoodieYellow src={goodieYellow} alt="smile" />
      <GoodieYellowTop src={goodieYellowTop} alt="smile" />
    </Container>
  )
}