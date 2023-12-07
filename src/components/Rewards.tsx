import React from 'react'
import { useState } from 'react'

const reward1 = {
  img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
  title: "Customize your drink",
  text: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
}

const reward2 = {
  img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png',
  title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
  text: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
}

const reward3 = {
  img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
  title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
  text: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
}

const reward4 = {
  img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png',
  title: "Sandwich, protein box or at-home coffee",
  text: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®."
}

const reward5 = {
  img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
  title: "Select Starbucks® merchandise",
  text: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
}


function Rewards() {
  const [reward, setReward] = useState(reward1)

  const changeReward = (rewards: React.SetStateAction<{ img: string; title: string; text: string }>) => {
    setReward(rewards)
  }

  return (
    <div className='bg-green-100 py-32 h-auto md:py-10'>
      <div className=' h-auto md:flex md:flex-col md:justify-center items-center'>
        <h2 className="text-2xl text-center font-semibold md:text-3xl my-12">Get your favorites for free with points</h2>
        <div className='text-center'>
        <button className='text-2xl font-bold md:text-3xl  md:px-3 mx-3 hover:scale-125 transition-all' onClick={() => changeReward(reward1)}>25</button>
        <button className='text-2xl font-bold md:text-3xl  md:px-3 mx-3 hover:scale-125 transition-all' onClick={() => changeReward(reward2)}>100</button>
        <button className='text-2xl font-bold md:text-3xl  md:px-3 mx-3 hover:scale-125 transition-all' onClick={() => changeReward(reward3)}>200</button>
        <button className='text-2xl font-bold md:text-3xl  md:px-3 mx-3 hover:scale-125 transition-all' onClick={() => changeReward(reward4)}>300</button>
        <button className='text-2xl font-bold md:text-3xl  md:px-3 mx-3 hover:scale-125 transition-all' onClick={() => changeReward(reward5)}>400</button>
        </div>
        <div className='flex flex-col my-22 justify-center items-center md:my-10'>
          <img src={reward.img} className='object-cover h-48 w-96'/>
          <div className='w-1/2'>
            <h2 className='font-bold text-xl w-full  md:text-2xl'>{reward.title}</h2>
            <p className='text-md my-6  w-full'>{reward.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards