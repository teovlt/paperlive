import React, { useEffect, useRef, useState } from 'react';
import { Container, ErrorLabel, Form, OptionsContainer } from './authenticationElements';
import { Button, Caption, Heading1, Heading2, Link, Small } from '../../theme/appElements';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from '../../api/axios';
import DropdownMenu from '../../components/DropdownMenu';
import { HiGlobeAlt } from 'react-icons/hi2';
import i18n from '../../translations/i18n';
const LOGIN_URL = '/auth/login';

const Login = () => {
  const { t } = useTranslation();
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const nameRef = useRef();
  const errorRef = useRef();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [name, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify({ name, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      const accessToken = res?.data?.accessToken;
      setAuth({ accessToken });
      setName('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg(`${t('authentification.servorError')}`);
      } else if (error.response?.status === 400) {
        setErrMsg(`${t('login.invalidLogin')}`);
      } else {
        setErrMsg(`${t('login.loginError')}`);
      }
    }
  };

  const lngs = {
    en: { nativeName: `${t('language.english')}`, flag: '🇬🇧' },
    fr: { nativeName: `${t('language.french')}`, flag: '🇫🇷' },
  };

  const languagesDropdownTemplate = {
    toggle: <HiGlobeAlt />,
    groups: [
      {
        label: `${t('language.current')}`,
        value: lngs[i18n.resolvedLanguage].nativeName,
      },
      {
        actions: Object.keys(lngs).map((lng) => ({
          label: `${lngs[lng].flag} ${lngs[lng].nativeName}`,
          onClick: () => i18n.changeLanguage(lng),
        })),
      },
    ],
  };

  return (
    <>
      <OptionsContainer>
        <DropdownMenu template={languagesDropdownTemplate} gap={27} />
      </OptionsContainer>
      <Container>
        <Heading1>PaperLive</Heading1>
        <Form onSubmit={handleSubmit}>
          <Heading2>{t('login.welcome')}</Heading2>
          <Input
            type='text'
            ref={nameRef}
            id='name'
            label={t('authentification.teamName')}
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Input
            type='password'
            id='password'
            label={t('authentification.password')}
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {errMsg && <ErrorLabel>{errMsg}</ErrorLabel>}
          <Button type='submit'>{t('login.signIn')}</Button>
          <Caption>
            {t('login.textSignUp')} <Link to='/register'>{t('login.signUp')}</Link>
          </Caption>
        </Form>
        <Small style={{ textAlign: 'center' }}>{t('authentification.bottom')}</Small>
      </Container>
    </>
  );
};

export default Login;
