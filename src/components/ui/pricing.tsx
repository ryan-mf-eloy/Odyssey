export default function Pricing() {
  return (
    <section className="p-10 my-24">
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="flex flex-col gap-10 min-h-96 p-10 min-w-96 bg-zinc-950 border rounded-md">
          <div>
            <h3 className="text-2xl font-bold">Starter</h3>
            <h4 className="text-4xl font-bold mt-2">Free</h4>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <li>Unlimited projects</li>
            <li>Unlimited users</li>
            <li>Unlimited storage</li>
            <li>Unlimited bandwidth</li>
            <li>Unlimited API calls</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 min-h-96 p-10 min-w-96 bg-zinc-950 border border-primary rounded-md">
          <div>
            <h3 className="text-2xl font-bold">Pro</h3>
            <h4 className="text-4xl font-bold text-green mt-2">$30</h4>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <li>Unlimited projects</li>
            <li>Unlimited users</li>
            <li>Unlimited storage</li>
            <li>Unlimited bandwidth</li>
            <li>Unlimited API calls</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 min-h-96 p-10 min-w-96 bg-zinc-950 border rounded-md">
          <div>
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <h4 className="text-4xl font-bold text-blue mt-2">Contact us</h4>
          </div>

          <ul className="flex flex-col gap-2 text-zinc-300">
            <li>Unlimited projects</li>
            <li>Unlimited users</li>
            <li>Unlimited storage</li>
            <li>Unlimited bandwidth</li>
            <li>Unlimited API calls</li>
          </ul>
        </div>
      </div>
    </section>
  )
}