import { useState, useEffect} from 'react';
import { api } from '../../services/api';
import { ResultCep } from '../ResultCep';

import { Container } from './style';

export function Content() {

  const [cep, setCep] = useState(''); 
  const [data, setData] = useState({});
  
  useEffect(() => {
    if(cep.length === 8) {
      api.get(`/${cep}/json/`)
      .then(response => setData(response.data))
    }
  }, [cep])

  // console.log(JSON.stringify(data))
  // {"cep":"13212-354","logradouro":"Avenida Juvenal Arantes","complemento":"","bairro":"Jardim Carolina","localidade":"Jundiaí","uf":"SP","ibge":"3525904","gia":"4078","ddd":"11","siafi":"6619"}

  return (
    <>
      <Container>
        <div className="design">
          <label>CEP:</label>
          <input 
            type="text"
            onChange={(event) => setCep(event.target.value)}
            value={cep}
            maxLength='8'
          />
        </div>
        {
          !data.error && cep.length === 8 ? (
            <ResultCep data={data}/>
          ) : '' 
        }
      </Container>
    </>
  )
}