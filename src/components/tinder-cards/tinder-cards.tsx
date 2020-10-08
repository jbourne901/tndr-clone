import React, {useState, useEffect} from 'react';
import './tinder-cards.css';
import IPeople from "../../types/people";
import TinderCard from "react-tinder-card";
import db from "../../firebase";

const TinderCards = () => {
  const fetchData = () => {
    try {
      const unsubscribe = 
        db.collection('/people')
          .onSnapshot(ss => {
            console.log(`ss=`)
            console.dir(ss);
            const ppl = ss.docs.map(doc => {
              const d = doc.data();
              const p:IPeople = {
                _id: doc.id,
                name: d.name,
                url: d.url
              };
              return p;                              
            });
            console.log(`ppl=`)
            console.dir(ppl);
            setPeople(ppl);
          });
      return () => unsubscribe();
    } catch(err) {
        console.error(err);
    }
  };

  const [people, setPeople] = useState<IPeople[]>();
  useEffect(() => fetchData(), []);

  let ctl;
  if(people) {
    ctl = people.map(p => (
      <TinderCard
        key={p._id}
        preventSwipe={['up', 'down']}          
      >
        <div 
          className="tinder-cards-card"
          style={{backgroundImage: `url(${p.url})`}}
        >
          <h3 className="tinder-cards-name">
              {p.name}
          </h3>
        </div>
      </TinderCard>
    ));  
  }
  console.log(`ctl=`)
  console.dir(ctl)
  
  return (    
    <div className="tinder-cards-container">
      <div className="tinder-cards">      
        {ctl}
      </div>
    </div>
    
  );
}

export default TinderCards;
