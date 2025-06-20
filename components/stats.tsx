export function Stats() {
  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<100ms", label: "Global Latency" },
    { value: "10M+", label: "Deployments" },
    { value: "150+", label: "Countries" },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 titanium-gradient">Trusted by Developers Worldwide</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold metallic-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
