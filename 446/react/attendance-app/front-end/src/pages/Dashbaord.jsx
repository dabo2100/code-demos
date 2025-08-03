import { useEffect } from 'react';
import { checkToken } from '../shaedLogic/middleware';
import { useNavigate } from 'react-router-dom';

export default function Dashbaord() {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken().then((res) => !res && navigate('/login'));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
