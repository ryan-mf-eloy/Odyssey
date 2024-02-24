'use client'

import { useState } from 'react'

import { CheckBadgeIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

import Button from './button'
import Logo from './logo'
import Switch from './switch'

type TOften = 'A' | 'M'

export default function Pricing() {
  const [often, setOften] = useState<TOften>('A')
  const plans: { [plan: string]: { [often in TOften]: { value: string } } } = {
    HOBBY: {
      'M': {
        value: 'Free',
      },
      'A': {
        value: 'Free',
      }
    },
    PRO: {
      'M': {
        value: '$29',
      },
      'A': {
        value: '$19',
      }
    },
    ENTERPRISE: {
      'M': {
        value: '$49',
      },
      'A': {
        value: '$39',
      }
    }
  }

  const handleOften = () => {
    setOften(often === 'A' ? 'M' : 'A')
  }

  return (
    <section className="p-10 my-24 items-center border-t justify-center flex flex-col">
      
      <h2 className="pb-5 text-4xl font-bold">Choose your plan</h2>
      <div className="flex flex-row items-center justify-items-center gap-2 pb-8">
        <span className={often === 'M' ? 'text-primary' : 'text-zinc-500'}>Monthly</span>
        <Switch onClick={handleOften} checked={often === 'A'} />
        <span className={`flex flex-col items-center${often === 'A' ? 'text-primary' : 'text-zinc-500'}`}>
          Annually
          <small className="text-zinc-500">40% Discount</small>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center gap-2">
        <div className="flex flex-col min-h-96 p-10 min-w-96 dark:bg-[#020202] border rounded-md">
          <div className="border-b pb-5">
            <h3 className="text-2xl font-light flex gap-2 items-center">
              <SparklesIcon width={25} />
              Hobby
            </h3>
            <h4 className="text-5xl font-medium text-green mt-2 flex pb-5 gap-2 items-center">
              <span>{plans['HOBBY'][often].value}</span>
              <span className="flex flex-col gap-1">
                <small className="text-sm text-zinc-500">No credit card </small>
                <small className="text-sm text-zinc-500">required</small>
             </span>
            </h4>

            <div className="flex flex-col gap-2">
              <Button className="bg-green hover:bg-green-shadow">Continue for free</Button>
              <Button variant={'ghost'}>Contact our support</Button>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <small className="text-zinc-500 py-3">Unlimited access</small>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-green" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-green" />
              Unlimited users
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-green" />
              Unlimited storage
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-green" />
              Unlimited bandwidth
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-green" />
              Unlimited API calls
            </li>
          </ul>
        </div>

        <div className="flex flex-col overflow-hidden min-h-96 relative p-10 min-w-96 bg-black border border-primary rounded-md">
          <div className="border-b pb-5 pt-4 items-center justify-center">
            <h6 className="bg-primary py-2 rounded-br-sm rounded-bl-sm absolute px-5 top-0 left-20 right-20 text-zinc-950 text-center font-semibold">
              Recommended
            </h6>
            <div className="text-2xl font-light flex gap-2 items-center">
              <Logo showText={false} />
              <h3>Pro</h3>
            </div>
            <h4 className="text-5xl font-medium text-primary mt-2 flex pb-5 gap-2 items-center">
              <span>{plans['PRO'][often].value}</span>
              <span className="flex flex-col gap-1">
                <small className="text-sm text-zinc-500">per user</small>
                <small className="text-sm text-zinc-500">per month</small>
             </span>
            </h4>

            <div className="flex flex-col gap-2">
              <Button>Get started</Button>
              <Button variant={'outline'}>Chat to sales</Button>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <small className="text-zinc-500 py-3">All Starter Resources Included +</small>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-primary" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-primary" />
              Unlimited users
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-primary" />
              Unlimited storage
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-primary" />
              Unlimited bandwidth
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-primary" />
              Unlimited API calls
            </li>
          </ul>
        </div>

        <div className="flex flex-col min-h-96 p-10 min-w-96 dark:bg-[#020202] border rounded-md">
          <div className="border-b pb-5">
            <h3 className="text-2xl font-light flex gap-2 items-center">
              <RocketLaunchIcon width={25} />
              Enterprise
            </h3>
            <h4 className="text-5xl pb-5 font-medium text-amber-500 mt-2 flex gap-2 items-center">
              <span>{plans['ENTERPRISE'][often].value}</span>
              <span className="flex flex-col gap-1">
                <small className="text-sm text-zinc-500">per user</small>
                <small className="text-sm text-zinc-500">per month</small>
             </span>
            </h4>

            <div className="flex flex-col gap-2">
              <Button className="bg-amber-500 text-white hover:bg-green-shadow">Get started</Button>
              <Button variant={'outline'}>Chat to sales</Button>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <small className="text-zinc-500 py-3">All Pro Resources Included +</small>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-amber-500" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-amber-500" />
              Unlimited users
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-amber-500" />
              Unlimited storage
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-amber-500" />
              Unlimited bandwidth
            </li>
            <li className="flex items-center gap-1"><CheckBadgeIcon width={25} className="text-amber-500" />
              Unlimited API calls
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}