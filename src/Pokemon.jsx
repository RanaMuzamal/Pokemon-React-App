import React from 'react'

function Pokemon({pokemon}) {
  return (
    <div>
        {pokemon.map(p=>(
          <div id='p'>{p}</div>
        ))}
    </div>
  )
}

export default Pokemon