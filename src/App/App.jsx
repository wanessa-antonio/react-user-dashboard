import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import UserCard from '../components/UserCard/UserCard';

function App() {
  // search state
  const [search, setSearch] = useState('');

  // API states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API integration
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao carregar usuários');
        setLoading(false);
      });
  }, []);

  // Filter
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase())
  );

  // loading
  if (loading) {
    return <p className="status">Carregando usuários...</p>;
  }

  // erro
  if (error) {
    return <p className="status error">{error}</p>;
  }

  return (
    <main className="container">
      <h1 className="title">Dashboard de Usuários</h1>

      {/* Controlled input */}
      <SearchBar value={search} onChange={setSearch} />

      {/* list */}
      <section className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
              />
            );
          })
        ) : (
          <p className="empty">Nenhum usuário encontrado</p>
        )}
      </section>
    </main>
  );
}

export default App;