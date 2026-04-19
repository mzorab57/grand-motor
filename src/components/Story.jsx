import HeaderText from './ui/HeaderText'

const storyStats = [
  { value: '2020', label: 'Founded' },
  { value: '3', label: 'Core Divisions' },
  { value: 'Iraq', label: 'Primary Market' },
]

export const Story = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
     

      <div className="relative mx-auto max-w-7xl px-4 ">
        <div className="mb-14 ">
          <HeaderText text="About Grand Group" />
          <p className=" mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            From a focused car trading business to a comprehensive mobility group,
            our story is built on trust, expansion, and a strong commitment to
            premium service across Iraq.
          </p>
        </div>

        <div className="grid items-center gap-10 ">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
              Our Story
            </p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-tight text-gray-900 md:text-6xl">
              Built Around Growth, Service, and Long-Term Trust.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600 md:text-lg">
              <p>
                <strong className="text-gray-900">Grand Motors for General & Auto Trading</strong>{' '}
                began in 2020 as a specialized company focused on modern vehicles
                from trusted global brands. With every step forward, the business
                strengthened its reputation for quality, professionalism, and
                customer confidence.
              </p>
              <p>
                As operations expanded, the company evolved into{' '}
                <strong className="text-gray-900">Grand Group for General Trading</strong>,
                bringing multiple divisions together under one identity spanning
                vehicle sales, car rental, and transportation solutions.
              </p>
              <p>
                Today, Grand Group serves individuals and companies with integrated
                mobility services, combining premium presentation, competitive
                pricing, and reliable support across the Kurdistan Region and Iraq.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/20  p-3 shadow-[0_25px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            <img
              src="/assets/images/bg/hero3.png"
              alt="Grand Group Story"
              className="h-[560px] w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Grand Group
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Premium automotive trading, rental, and logistics in one growing brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
