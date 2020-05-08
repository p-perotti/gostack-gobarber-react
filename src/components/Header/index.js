import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'http://api.adorable.io/avatars/face/eyes7/nose7/mouth7/7159c1'
              }
              alt="Perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
