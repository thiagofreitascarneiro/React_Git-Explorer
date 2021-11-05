import { RepositoryItem } from "./Repositoryitem";
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/thiagofreitascarneiro/repos')
        .then(Response => Response.json())
        .then(data => setRepositories(data))

    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              {repositories.map(repository => {
                  return <RepositoryItem Key={repository.name} repository={repository} />
              })} 
            </ul>
        </section>
    )
}

// map : eu preciso informar para o react
// qual é a informação unica em cada repositório
// toda vez que usar o Map.
