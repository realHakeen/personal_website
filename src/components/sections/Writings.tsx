'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/FadeIn'
import { ArrowUpRight } from 'lucide-react'

const articles = [
  {
    date: '2025.06.02',
    title: '基于策略的合成稳定币，用利率搭建的金融乐高',
    category: 'Crypto',
    link: 'https://medium.com/@gate_ventures/gate-ventures-%E7%A0%94%E7%A9%B6%E6%B4%9E%E5%AF%9F-%E5%9F%BA%E4%BA%8E%E7%AD%96%E7%95%A5%E7%9A%84%E5%90%88%E6%88%90%E7%A8%B3%E5%AE%9A%E5%B8%81-%E7%94%A8%E5%88%A9%E7%8E%87%E6%90%AD%E5%BB%BA%E7%9A%84%E9%87%91%E8%9E%8D%E4%B9%90%E9%AB%98-47ae25d21554',
  },
  {
    date: '2024.11.19',
    title: 'Telegram and TON: Next-Generation Web3 Traffic Gateway',
    category: 'Crypto',
    link: 'https://medium.com/@gate_ventures/telegram-and-ton-next-generation-web3-traffic-gateway-6b42d0c052eb',
  },
  {
    date: '2022.11.10',
    title: '漫游以太：过去、现在、未来',
    category: 'Research',
    link: 'https://w3hitchhiker.substack.com/p/0d5',
  },
  {
    date: '2023.05.29',
    title: 'UniswapV2代码详解',
    category: 'Technology',
    link: 'https://medium.com/@hakeen/uniswapv2%E4%BB%A3%E7%A0%81%E8%AF%A6%E8%A7%A3-d3c847682c91',
  },
  {
    date: '2024.08.12',
    title: 'Building in Public: The Ultimate Growth Hack',
    category: 'Essay',
    link: '#',
  },
]

export function Writings() {
  return (
    <section id="writings" className="py-32">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Writings
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
          Thoughts on technology, investing, and building products.
        </p>
      </FadeIn>

      <div className="space-y-0">
        {articles.map((article, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            <motion.a
              href={article.link}
              whileHover={{ x: 12 }}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">
                  {article.date}
                </span>
                <h3 className="text-lg md:text-xl text-white group-hover:text-accent-orange transition-colors">
                  {article.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="hidden md:inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-medium">
                  {article.category}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <motion.a
          href="#"
          whileHover={{ x: 8 }}
          className="inline-flex items-center gap-2 mt-12 text-accent-orange hover:underline"
        >
          View all articles
          <ArrowUpRight size={16} />
        </motion.a>
      </FadeIn>
    </section>
  )
}

