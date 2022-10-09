import { useState } from 'react';
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
import api from '../../services/api';
import { Container, FeedbackForm, Footer, FormSection, FormTitle, GoodieRedBottom, GoodieRedRight, GoodieUpsideDown, GoodieYellow, GoodieYellowRight, GoodieYellowTop, MapImage, SocialNewtorks, SuccessMessage } from "./styles";

export function FeedBack() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    loading: false,
    feedbackSent: false,
  });

  const onChange = (e: any) => {
    e.preventDefault();

    const { name, value }: any = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormState((prevState) => ({ ...prevState, loading: true }));

    api.post('/api/feedbacks', formState).then(() => {
      toast.success('Feedback submitted successfully!')

      setFormState((prevState) => ({ ...prevState, feedbackSent: true, loading: false }));
    }).catch((err) => {
      const messages: String[] = err.response.data.message
      if (messages) {
        messages.reverse().forEach(message => {
          toast.error(`${message}`)
        })
      }
      setFormState((prevState) => ({ ...prevState, loading: false }));
    })
  }

  const handleResetForm = () => {
    setFormState((prevState) => ({ ...prevState, feedbackSent: false, message: '' }));
  }

  return (
    <Container>
      <FormSection>
        {formState.feedbackSent ?
          <SuccessMessage>
            <FormTitle>{formState.name}, thanks for the feedback!</FormTitle>
            <Button onClick={handleResetForm}>Send another feedback</Button>
          </SuccessMessage>
          :
          <FeedbackForm onSubmit={handleSubmit}>
            <FormTitle>Reach out to us!</FormTitle>
            <Input onChange={onChange} value={formState.name} name="name" type="text" placeholer="Your name*" />
            <Input onChange={onChange} value={formState.email} name="email" type="email" placeholer="Your e-mail*" />
            <Textarea onChange={onChange} value={formState.message} name="message" placeholer="Your message*" />
            <Button>{formState.loading ? <AiOutlineLoading3Quarters /> : "Send message"}</Button>
          </FeedbackForm>
        }
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