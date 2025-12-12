import { useEffect, useState } from 'react';
import api from '../services/api';
import Header from '../components/Header';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/users/me').then(res => setUser(res.data));
    }
  }, []);

  if (!user) return <div>Please login</div>;

  return (
    <div>
      <Header />
      <h1>Perfil</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}