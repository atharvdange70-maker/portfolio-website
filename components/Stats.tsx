export default function Stats() {
  const stats = [
    {
      number: "10+",
      title: "AWS & DevOps Services Used",
    },
    {
      number: "4+",
      title: "Production Projects",
    },
    {
      number: "100%",
      title: "Hands-On Learning",
    },
    {
      number: "24/7",
      title: "Learning Mode",
    },
  ];

  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-blue-900 rounded-3xl
              bg-[#1a1a1a]
              h-40
              flex flex-col justify-center items-center
              hover:border-blue-500
              transition-all duration-300"
            >
              <h2 className="text-5xl font-bold text-sky-500">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-400 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}