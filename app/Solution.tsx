
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const problems = [
  {
    title: "Manual Ad Creation is Expensive",
    description:
      "Effective spend management can free up as much as 20% of a marketing budget.",
   
    icon: "💸",
  },
  {
    title: "A/B Testing is Too Slow",
    description:
      "BCG highlights inefficiencies in traditional A/B testing approaches.",
   
    icon: "⏳",
  },
  {
    title: "Marketing is Too Slow",
    description:
      "Attention spans have dropped from 12s (2000) to 8s today. People scroll past before they even see you.",
    
    icon: "🐢",
  },
];

const Solution: React.FC = () => {
  return (
    <section style={{marginTop:"2px"}} className="bg-[#f7f8fb] text-[#08090a] py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-[#08090a] leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Marketing is Failing. <br />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your Audience is Bored.
          </motion.span>
        </motion.h2>
        <p className="text-lg text-[#4a5abb] mt-4 font-medium">
          And we’re not just saying it—we have the data to prove it.
        </p>
      </div>

      {/* Problem Breakdown */}
      <div className="mt-16 grid gap-12 md:grid-cols-3 text-center">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg border border-[#546aec] flex flex-col
             items-center justify-center hover:scale-105 transition-transform duration-300"
             style={{borderRadius:"10px"}}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className="text-6xl bg-[#e0e7ff] p-4 rounded-full mb-4">{problem.icon}</div>
            <h3 className="text-2xl font-semibold text-[#08090a] mb-2">{problem.title}</h3>
            <p className="text-[#4a5abb] font-medium">{problem.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison Section
      <div className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start text-left border-l-[6px] border-red-500 w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl font-bold text-red-500 flex items-center">
            <XCircle className="mr-2 text-red-500" /> The Shotgun Approach (Old Marketing)
          </h3>
          <ul className="mt-4 text-red-600 space-y-2 text-lg font-medium">
            <li className="p-2 bg-red-100 rounded-lg">❌ Random Mass Targeting</li>
            <li className="p-2 bg-red-100 rounded-lg">❌ High Budget Waste</li>
            <li className="p-2 bg-red-100 rounded-lg">❌ Slow & Inefficient Insights</li>
            <li className="p-2 bg-red-100 rounded-lg">❌ Generic Messaging</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start text-left border-l-[6px] border-[#4a5abb] w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl font-bold text-[#4a5abb] flex items-center">
            <CheckCircle className="mr-2 text-[#4a5abb]" /> The Sniper Approach (HyperTargeting)
          </h3>
          <ul className="mt-4 text-[#4a5abb] space-y-2 text-lg font-medium">
            <li className="p-2 bg-[#c3cde7] rounded-lg">✅ Precision Audience Selection</li>
            <li className="p-2 bg-[#c3cde7] rounded-lg">✅ Optimized Budget Efficiency</li>
            <li className="p-2 bg-[#c3cde7] rounded-lg">✅ Real-Time AI Insights</li>
            <li className="p-2 bg-[#c3cde7] rounded-lg">✅ Personalized Ad Messaging</li>
          </ul>
        </motion.div>
      </div> */}

      {/* Call-To-Action */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-[#08090a]">
          We don’t spray and pray—we HyperTarget.
        </h3>
        <p className="text-lg text-[#4a5abb] mt-2 font-medium">We move at the speed of trends. We focus on impact,
            not impressions.</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <Button className="bg-[#4a5abb] hover:bg-[#546aec] px-8 py-4 text-white rounded-lg text-lg font-semibold">
            Get HyperTargeted Now
          </Button>
          <Button className="bg-[#546aec] hover:bg-[#4a5abb] px-8 py-4 text-white rounded-lg text-lg font-semibold">
            See How Kogenie Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;