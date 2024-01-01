import { useState } from 'react';
import a from '../src/animations/apple.gif';
import b from '../src/animations/bear.gif';
import c from '../src/animations/coin.gif';
import d from '../src/animations/duck.gif';
import e from '../src/animations/eye.gif';
import f from '../src/animations/food-truck.gif';
import g from '../src/animations/gift.gif';
import h from '../src/animations/horse.gif';

function App() {
  const [animation, setAnimation] = useState(a);

  const data = [
    { name: 'A', animationLink: a },
    { name: 'B', animationLink: b },
    { name: 'C', animationLink: c },
    { name: 'D', animationLink: d },
    { name: 'E', animationLink: e },
    { name: 'F', animationLink: f },
    { name: 'G', animationLink: g },
    { name: 'H', animationLink: h },
  ];

  const handleAnimationClick = (animationLink) => {
    setAnimation(animationLink);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='m-2 p-3 transition-all'>
        <img src={animation} alt='Animation' className='mx-auto w-[600px] h-[600px]' />
      </div>
      <div className='flex flex-wrap'>
        {data.map(function (alphabet) {
          return (
            <div
              key={alphabet.name}
              onClick={() => handleAnimationClick(alphabet.animationLink)}
              className='h-[103px] w-[95px] rounded-lg bg-amber-400 m-3 p-4 text-2xl cursor-pointer transition-transform hover:scale-110 flex justify-center items-center'
              style={{ transitionDuration: '0.5s' }}
            >
              {alphabet.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
